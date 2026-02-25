"use client";

import { useEffect, useRef } from "react";

type NodePoint = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  drift: number;
  phase: number;
  speed: number;
  r: number;
};

type EdgeLink = { from: number; to: number };

type Packet = {
  edgeIndex: number;
  t: number;
  speed: number;
};

export function SiteMotionLayer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || startedRef.current) return;
    startedRef.current = true;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const cols = isMobile ? 4 : 7;
    const rows = isMobile ? 5 : 7;
    const packetCount = isMobile ? 16 : 28;
    const maxLinkSpan = isMobile ? 220 : 280;

    let width = 0;
    let height = 0;
    let rafId = 0;
    let paused = false;
    let time = 0;
    let nodes: NodePoint[] = [];
    let edges: EdgeLink[] = [];
    let packets: Packet[] = [];

    const pointer = { x: 0, y: 0, tx: 0, ty: 0, active: false };

    const nodeIndex = (c: number, r: number) => c * rows + r;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const xPad = isMobile ? 26 : 70;
      const yPadTop = isMobile ? 92 : 110;
      const yPadBottom = isMobile ? 88 : 104;
      const usableW = Math.max(1, width - xPad * 2);
      const usableH = Math.max(1, height - yPadTop - yPadBottom);
      const xGap = cols > 1 ? usableW / (cols - 1) : usableW;
      const yGap = rows > 1 ? usableH / (rows - 1) : usableH;

      nodes = [];
      for (let c = 0; c < cols; c += 1) {
        for (let r = 0; r < rows; r += 1) {
          const baseX = xPad + xGap * c + (Math.random() - 0.5) * (isMobile ? 8 : 12);
          const baseY = yPadTop + yGap * r + (Math.random() - 0.5) * (isMobile ? 9 : 14);
          nodes.push({
            x: baseX,
            y: baseY,
            baseX,
            baseY,
            drift: Math.random() * 2.8 + 0.8,
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.32 + 0.24,
            r: Math.random() * 1.2 + 0.6
          });
        }
      }

      edges = [];
      for (let c = 0; c < cols; c += 1) {
        for (let r = 0; r < rows; r += 1) {
          const from = nodeIndex(c, r);
          if (r + 1 < rows) {
            edges.push({ from, to: nodeIndex(c, r + 1) });
          }
          if (c + 1 < cols) {
            edges.push({ from, to: nodeIndex(c + 1, r) });
          }
          if (c + 1 < cols && r + 1 < rows && Math.random() > 0.35) {
            edges.push({ from, to: nodeIndex(c + 1, r + 1) });
          }
          if (c + 1 < cols && r - 1 >= 0 && Math.random() > 0.55) {
            edges.push({ from, to: nodeIndex(c + 1, r - 1) });
          }
        }
      }

      packets = Array.from({ length: packetCount }, () => ({
        edgeIndex: Math.floor(Math.random() * edges.length),
        t: Math.random(),
        speed: Math.random() * (isMobile ? 0.004 : 0.0035) + (isMobile ? 0.002 : 0.0018)
      }));
    };

    const drawRackColumns = () => {
      const rackWidth = isMobile ? 30 : 46;
      const rackHeight = Math.max(120, height * 0.5);
      const y = height * 0.24;
      for (let c = 0; c < cols; c += 1) {
        const n = nodes[nodeIndex(c, 0)];
        const x = n.baseX - rackWidth / 2;
        ctx.fillStyle = "rgba(58, 102, 210, 0.05)";
        ctx.strokeStyle = "rgba(110, 156, 255, 0.08)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(x, y, rackWidth, rackHeight, 12);
        ctx.fill();
        ctx.stroke();
      }
    };

    const drawLinks = () => {
      for (const edge of edges) {
        const a = nodes[edge.from];
        const b = nodes[edge.to];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist > maxLinkSpan) continue;

        const alpha = Math.max(0.04, 0.18 - dist / (maxLinkSpan * 7));
        ctx.strokeStyle = `rgba(117, 168, 255, ${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    };

    const drawPackets = () => {
      for (const packet of packets) {
        const edge = edges[packet.edgeIndex];
        const a = nodes[edge.from];
        const b = nodes[edge.to];

        packet.t += packet.speed;
        if (packet.t >= 1) {
          packet.t = 0;
          packet.edgeIndex = Math.floor(Math.random() * edges.length);
          continue;
        }

        const x = a.x + (b.x - a.x) * packet.t;
        const y = a.y + (b.y - a.y) * packet.t;
        ctx.fillStyle = "rgba(160, 214, 255, 0.78)";
        ctx.shadowColor = "rgba(84, 161, 255, 0.62)";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(x, y, isMobile ? 1.05 : 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    };

    const drawNodes = () => {
      for (const node of nodes) {
        ctx.fillStyle = "rgba(135, 194, 255, 0.68)";
        ctx.shadowColor = "rgba(76, 148, 255, 0.38)";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.01;
      for (const node of nodes) {
        node.x = node.baseX + Math.sin(time * node.speed + node.phase) * node.drift;
        node.y = node.baseY + Math.cos(time * (node.speed * 0.82) + node.phase) * node.drift;
      }

      drawRackColumns();
      drawLinks();
      drawPackets();
      drawNodes();

      pointer.x += (pointer.tx - pointer.x) * 0.075;
      pointer.y += (pointer.ty - pointer.y) * 0.075;
      if (pointer.active) {
        const gradient = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, isMobile ? 115 : 170);
        gradient.addColorStop(0, "rgba(88, 155, 255, 0.16)");
        gradient.addColorStop(1, "rgba(88, 155, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }
    };

    const tick = () => {
      if (paused) return;
      draw();
      rafId = window.requestAnimationFrame(tick);
    };

    const onMove = (event: MouseEvent | TouchEvent) => {
      if ("touches" in event) {
        const touch = event.touches[0];
        if (!touch) return;
        pointer.tx = touch.clientX;
        pointer.ty = touch.clientY;
      } else {
        pointer.tx = event.clientX;
        pointer.ty = event.clientY;
      }
      pointer.active = true;
    };

    const onLeave = () => {
      pointer.active = false;
    };

    const onVisibility = () => {
      paused = document.hidden;
      if (!paused && !rafId && !prefersReducedMotion) {
        rafId = window.requestAnimationFrame(tick);
      }
      if (paused && rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    if (prefersReducedMotion) {
      draw();
      return () => {
        window.removeEventListener("resize", resize);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("touchmove", onMove);
        window.removeEventListener("mouseleave", onLeave);
        document.removeEventListener("visibilitychange", onVisibility);
        startedRef.current = false;
      };
    }

    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      startedRef.current = false;
    };
  }, []);

  return (
    <div className="site-motion-layer" aria-hidden="true">
      <canvas ref={canvasRef} className="site-motion-canvas" />
      <div className="site-motion-vignette" />
    </div>
  );
}

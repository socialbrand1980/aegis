"use client";

import { useEffect, useRef } from "react";

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
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
    const nodeCount = isMobile ? 34 : 58;
    const maxDist = isMobile ? 126 : 172;

    let width = 0;
    let height = 0;
    let rafId = 0;
    let paused = false;
    let nodes: NodePoint[] = [];

    const pointer = { x: 0, y: 0, tx: 0, ty: 0, active: false };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.12 : 0.2),
        vy: (Math.random() - 0.5) * (isMobile ? 0.11 : 0.18),
        r: Math.random() * 1.25 + 0.45
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;

        if (a.x < -8 || a.x > width + 8) a.vx *= -1;
        if (a.y < -8 || a.y > height + 8) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > maxDist) continue;

          const alpha = (1 - dist / maxDist) * 0.14;
          ctx.strokeStyle = `rgba(122, 170, 255, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const node of nodes) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(165, 206, 255, 0.55)";
        ctx.shadowColor = "rgba(70, 144, 255, 0.32)";
        ctx.shadowBlur = 8;
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      pointer.x += (pointer.tx - pointer.x) * 0.075;
      pointer.y += (pointer.ty - pointer.y) * 0.075;
      if (pointer.active) {
        const gradient = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, isMobile ? 120 : 180);
        gradient.addColorStop(0, "rgba(88, 155, 255, 0.14)");
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

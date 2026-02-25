"use client";

import { useEffect, useRef } from "react";

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export function NeuralBackground() {
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
    const nodeCount = isMobile ? 26 : 46;
    const maxDist = isMobile ? 118 : 168;

    let width = 0;
    let height = 0;
    let rafId = 0;
    let isVisible = true;
    let nodes: NodePoint[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.18 : 0.26),
        vy: (Math.random() - 0.5) * (isMobile ? 0.16 : 0.23),
        r: Math.random() * 1.4 + 0.5
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "rgba(8, 15, 42, 0.24)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;

        if (a.x < -12 || a.x > width + 12) a.vx *= -1;
        if (a.y < -12 || a.y > height + 12) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > maxDist) continue;

          const alpha = (1 - dist / maxDist) * 0.25;
          ctx.strokeStyle = `rgba(110, 162, 255, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const node of nodes) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(173, 212, 255, 0.7)";
        ctx.shadowColor = "rgba(90, 160, 255, 0.7)";
        ctx.shadowBlur = 10;
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
    };

    const tick = () => {
      if (!isVisible) return;
      draw();
      rafId = window.requestAnimationFrame(tick);
    };

    resize();

    if (prefersReducedMotion) {
      draw();
      return;
    }

    rafId = window.requestAnimationFrame(tick);

    const resizeObserver = new ResizeObserver(resize);
    const parent = canvas.parentElement;
    if (parent) resizeObserver.observe(parent);

    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = Boolean(entry?.isIntersecting);
        if (isVisible && !rafId) {
          rafId = window.requestAnimationFrame(tick);
        } else if (!isVisible && rafId) {
          window.cancelAnimationFrame(rafId);
          rafId = 0;
        }
      },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    return () => {
      window.cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      io.disconnect();
      startedRef.current = false;
    };
  }, []);

  return (
    <div className="hero-neural-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-neural-canvas" />
    </div>
  );
}

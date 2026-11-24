import React, {useEffect, useRef} from "react";

// A small perspective renderer keeps the scroll scene dependency-free.
// Every node is synthetic; this does not represent an Illumio environment.
import {points, links, position, reachableNodes} from "./segmentationModel";
const mix = (a, b, t) => a + (b - a) * t;
export default function NetworkBackground({
  motion,
  enforced,
  breach,
  selected,
  onSelect
}) {
  const canvasRef = useRef(null);
  const settings = useRef({
    motion,
    enforced,
    breach,
    selected,
    reached: new Set(),
    version: 0
  });
  useEffect(() => {
    settings.current = {
      motion,
      enforced,
      breach,
      selected,
      reached: breach ? reachableNodes(enforced) : new Set(),
      version: settings.current.version + 1
    };
  }, [motion, enforced, breach, selected]);
  useEffect(() => {
    const canvas = canvasRef.current,
      ctx = canvas.getContext("2d");
    if (!ctx) return undefined;
    let width = 0,
      height = 0,
      raf = 0,
      last = 0,
      time = 0,
      currentScroll = 0,
      targetScroll = 0,
      dirty = true;
    let version = -1;
    let pointer = {x: 0, y: 0, active: false},
      projected = [];
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dirty = true;
    };
    const scroll = () => {
      const total = document.documentElement.scrollHeight - height;
      targetScroll = total > 0 ? (window.scrollY / total) * 4 : 0;
      const hero = document.getElementById("greeting");
      const heroEnd = hero ? hero.offsetTop + hero.offsetHeight : height;
      const fadeDistance = Math.max(180, height * 0.4);
      const progress = Math.min(
        1,
        Math.max(0, (window.scrollY - heroEnd + fadeDistance) / fadeDistance)
      );
      const softness = progress * progress * (3 - 2 * progress);
      canvas.style.setProperty("--scene-blur", `${softness * 1.6}px`);
      dirty = true;
    };
    const move = event => {
      pointer = {x: event.clientX, y: event.clientY, active: true};
      dirty = true;
    };
    const select = event => {
      if (!event.target.closest(".network-stage")) return;
      const nearest = projected
        .map((p, i) => ({
          i,
          d: Math.hypot(p.x - event.clientX, p.y - event.clientY)
        }))
        .sort((a, b) => a.d - b.d)[0];
      if (nearest && nearest.d < 65) onSelect(nearest.i);
    };
    const project = ([x, y, z], spin) => {
      const cy = Math.cos(spin),
        sy = Math.sin(spin),
        tilt = -0.2;
      const rx = x * cy + z * sy,
        rz = -x * sy + z * cy;
      const ry = y * Math.cos(tilt) - rz * Math.sin(tilt);
      const depth = y * Math.sin(tilt) + rz * Math.cos(tilt);
      const scale = 800 / (800 + depth);
      const size = width < 780 ? 0.85 : Math.min(width / 1350, 1.25);
      return {
        x: width * (width < 780 ? 0.56 : 0.73) + rx * scale * size,
        y: height * 0.5 + ry * scale * size,
        z: depth,
        scale
      };
    };
    const draw = stamp => {
      raf = requestAnimationFrame(draw);
      if (document.hidden || stamp - last < 32) return;
      const options = settings.current;
      if (options.version !== version) {
        dirty = true;
        version = options.version;
      }
      if (!options.motion && !dirty) return;
      const dt = Math.min(stamp - last, 50);
      last = stamp;
      if (options.motion) time += dt * 0.001;
      currentScroll = options.motion
        ? mix(currentScroll, targetScroll, 0.075)
        : targetScroll;
      if (Math.abs(currentScroll - targetScroll) > 0.001) dirty = true;
      else dirty = false;
      const phase = Math.min(3, Math.floor(currentScroll)),
        t = Math.min(1, currentScroll - phase),
        ease = t * t * (3 - 2 * t);
      const spin =
        0.1 +
        currentScroll * 0.5 +
        (options.motion ? Math.sin(time * 0.1) * 0.12 : 0) +
        (pointer.active ? (pointer.x / width - 0.5) * 0.1 : 0);
      ctx.clearRect(0, 0, width, height);
      const glow = ctx.createRadialGradient(
        width * 0.76,
        height * 0.49,
        20,
        width * 0.76,
        height * 0.49,
        width * 0.42
      );
      glow.addColorStop(
        0,
        options.breach ? "rgba(105,38,18,.15)" : "rgba(132,61,26,.10)"
      );
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
      // A receding grid provides spatial continuity between sections.
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(91,107,121,.10)";
      for (let n = -7; n <= 7; n++) {
        const a = project([n * 85, 340, -500], spin),
          b = project([n * 85, 340, 500], spin);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        const c = project([-600, 340, n * 85], spin),
          d = project([600, 340, n * 85], spin);
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(d.x, d.y);
        ctx.stroke();
      }
      projected = points.map((p, i) => {
        const a = position(i, phase),
          b = position(i, phase + 1);
        return project(
          a.map((v, j) => mix(v, b[j], ease)),
          spin
        );
      });
      // Orbital boundaries visually separate synthetic trust zones.
      if (phase === 0 || phase === 3) {
        ctx.strokeStyle = `rgba(244,103,40,${0.13 * (1 - ease)})`;
        ctx.setLineDash([3, 7]);
        for (let group = 0; group < 3; group++) {
          ctx.beginPath();
          for (let n = 0; n <= 90; n++) {
            const angle = (n / 90) * Math.PI * 2;
            const centers = [
              [-160, -145, 0],
              [145, 10, 70],
              [-60, 185, -60]
            ];
            const c = centers[group];
            const p = project(
              [
                c[0] + Math.cos(angle) * 190,
                c[1] + Math.sin(angle) * 175,
                c[2]
              ],
              spin
            );
            if (n === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
          }
          ctx.stroke();
        }
        ctx.setLineDash([]);
      }
      links.forEach(([a, b, cross], index) => {
        const p = projected[a],
          q = projected[b];
        const blocked = cross && options.enforced;
        const risk =
          options.breach && options.reached.has(a) && options.reached.has(b);
        const isSelected = a === options.selected || b === options.selected;
        ctx.strokeStyle = risk
          ? "rgba(255,85,61,.6)"
          : isSelected
          ? "rgba(255,130,71,.85)"
          : cross
          ? "rgba(249,115,49,.4)"
          : "rgba(100,146,165,.20)";
        ctx.lineWidth = isSelected ? 1.25 : 0.65;
        if (blocked) ctx.setLineDash([3, 7]);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.stroke();
        ctx.setLineDash([]);
        if (!blocked && index % 3 === 0) {
          const k = (time * 0.12 + index * 0.173) % 1;
          ctx.fillStyle = risk ? "#ff6345" : cross ? "#ff8745" : "#a1c5d7";
          ctx.beginPath();
          ctx.arc(mix(p.x, q.x, k), mix(p.y, q.y, k), 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
        if (blocked) {
          const x = (p.x + q.x) / 2,
            y = (p.y + q.y) / 2;
          ctx.strokeStyle = "rgba(254,115,49,.7)";
          ctx.strokeRect(x - 3, y - 3, 6, 6);
        }
      });
      projected.forEach((p, i) => {
        const hover =
          pointer.active && Math.hypot(p.x - pointer.x, p.y - pointer.y) < 48;
        const active = i === options.selected;
        const risk = options.breach && options.reached.has(i);
        const main = i % 11 === 0;
        const radius = (main ? 4.5 : 2.1) * p.scale + (hover ? 2 : 0);
        ctx.fillStyle = risk
          ? "#ff7454"
          : active || main
          ? "#ff8c52"
          : "#7192a1";
        ctx.shadowColor = risk
          ? "#ff5833"
          : active || main
          ? "#ff702e"
          : "#75bddd";
        ctx.shadowBlur = active || hover ? 20 : main ? 10 : 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        if (main || active) {
          ctx.strokeStyle = active
            ? "rgba(255,130,71,.8)"
            : "rgba(255,130,71,.22)";
          ctx.beginPath();
          ctx.arc(
            p.x,
            p.y,
            radius + 7 + (options.motion ? Math.sin(time + i) * 2 : 0),
            0,
            Math.PI * 2
          );
          ctx.stroke();
        }
        if ((main || active) && width > 780) {
          ctx.font = "9px monospace";
          ctx.fillStyle = active ? "#ffd0aa" : "#7c8d99";
          ctx.fillText(
            `${["svc", "data", "ops"][points[i].group]}-${String(
              i + 1
            ).padStart(2, "0")}`,
            p.x + 13,
            p.y + 3
          );
        }
      });
    };
    resize();
    scroll();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", scroll, {passive: true});
    window.addEventListener("pointermove", move, {passive: true});
    window.addEventListener("click", select);
    const observer = new ResizeObserver(scroll);
    observer.observe(document.body);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("click", select);
    };
  }, [onSelect]);
  return (
    <div className="network-background" aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="scene-shade" />
    </div>
  );
}

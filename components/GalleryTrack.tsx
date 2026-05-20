"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

export type Slot = { file: string; w: number };

interface Props {
  slots: Slot[];
  setWidth: number;
  copies: number;
  speed: number; // px/s
}

export default function GalleryTrack({ slots, setWidth, copies, speed }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, offset: 0 });

  const track = Array.from({ length: copies }, () => slots).flat();

  // Keep offset in (-setWidth, 0] so the loop is seamless
  const wrap = useCallback(
    (v: number) => {
      let n = v % setWidth;
      if (n > 0) n -= setWidth;
      return n;
    },
    [setWidth]
  );

  // rAF-driven auto-scroll
  useEffect(() => {
    let id: number;
    let last = 0;

    const tick = (t: number) => {
      const dt = last ? t - last : 0;
      last = t;

      if (!dragging.current) {
        offsetRef.current = wrap(offsetRef.current - (speed * dt) / 1000);
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }

      id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [speed, wrap]);

  const startDrag = useCallback((x: number) => {
    dragging.current = true;
    dragStart.current = { x, offset: offsetRef.current };
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  }, []);

  const moveDrag = useCallback(
    (x: number) => {
      if (!dragging.current) return;
      offsetRef.current = wrap(dragStart.current.offset + (x - dragStart.current.x));
    },
    [wrap]
  );

  const endDrag = useCallback(() => {
    dragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }, []);

  // Attach touchmove as non-passive so we can call preventDefault —
  // this stops the page from scrolling vertically while the user drags the gallery
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      moveDrag(e.touches[0].clientX);
    };
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => el.removeEventListener("touchmove", onTouchMove);
  }, [moveDrag]);

  return (
    <div
      ref={trackRef}
      className="flex h-full select-none"
      style={{ cursor: "grab", willChange: "transform" }}
      onMouseDown={(e) => {
        e.preventDefault();
        startDrag(e.clientX);
      }}
      onMouseMove={(e) => moveDrag(e.clientX)}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      onTouchEnd={endDrag}
    >
      {track.map((slot, i) => (
        <div
          key={i}
          className="relative h-full shrink-0 overflow-hidden mr-2"
          style={{ width: slot.w }}
        >
          <Image
            src={`/images/${slot.file}`}
            alt="Volleyball photo"
            fill
            draggable={false}
            className="object-cover object-center pointer-events-none"
            sizes={`${slot.w}px`}
          />
        </div>
      ))}
    </div>
  );
}

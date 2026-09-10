"use client";

import { useEffect, useRef, useState } from "react";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80";

type ImageWheelProps = {
  images: string[];
  size?: number;
  className?: string;
};

export function ImageWheel({ images, size = 420, className = "" }: ImageWheelProps) {
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartRotation = useRef(0);
  const velocityRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const nextVelocity = Math.min(2.6, Math.max(-2.6, window.scrollY / 2200));
      velocityRef.current = nextVelocity;
    };

    const tick = () => {
      setRotation((prev) => prev + velocityRef.current * 0.55);
      rafRef.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    dragStartX.current = event.clientX;
    dragStartRotation.current = rotation;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const delta = event.clientX - dragStartX.current;
    const nextRotation = dragStartRotation.current + delta * 0.8;
    setRotation(nextRotation);
    velocityRef.current = delta * 0.015;
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  if (!images.length) {
    return null;
  }

  const radius = size * 0.34;

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <div
        className="relative h-full w-full cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <div className="absolute inset-0 rounded-full border border-[#d7b26a]/40 bg-[radial-gradient(circle,_rgba(17,81,163,0.12),_rgba(17,81,163,0.02)_52%,_transparent_70%)]" />

        {images.map((image, index) => {
          const angle = (360 / images.length) * index + rotation;
          const style = {
            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(${-angle}deg)`,
          } as const;

          return (
            <div
              key={`${image}-${index}`}
              className="absolute left-1/2 top-1/2 h-24 w-24 overflow-hidden rounded-[22px] border border-white/80 bg-slate-200 shadow-[0_20px_40px_rgba(12,31,57,0.18)] md:h-28 md:w-28"
              style={style}
            >
              <img
                src={image || FALLBACK_IMAGE}
                alt={`Rotary project ${index + 1}`}
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.src = FALLBACK_IMAGE;
                }}
              />
            </div>
          );
        })}

        <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border-[6px] border-[#d7b26a] bg-[#0e4b9c] shadow-[0_20px_50px_rgba(14,75,156,0.35)] md:h-32 md:w-32">
          <img
            src={images[0] || FALLBACK_IMAGE}
            alt="Featured Rotary project"
            className="h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.src = FALLBACK_IMAGE;
            }}
          />
        </div>
      </div>
    </div>
  );
}

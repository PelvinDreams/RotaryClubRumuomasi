"use client";

import { useEffect, useState } from "react";

export function AppLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f3f7fb]">
      <div className="flex flex-col items-center gap-4">
        <div className="loader-ring flex h-16 w-16 items-center justify-center rounded-full border-[5px] border-[#d7b26a]/30 border-t-[#0e4b9c] border-r-[#d7b26a]">
          <div className="h-7 w-7 rounded-full bg-[#0e4b9c]" />
        </div>
        <div className="text-center text-xs font-extrabold uppercase tracking-[0.25em] text-[#0e4b9c]">
          Loading
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`preloader${hidden ? " hidden" : ""}`}>
      <img src="/logo.png" alt="" className="preloader-logo" />
    </div>
  );
}

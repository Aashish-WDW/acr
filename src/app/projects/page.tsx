"use client";

import { useEffect } from "react";

export default function ProjectsPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".prog-fill").forEach((bar) => {
        bar.style.width = (parseFloat(bar.dataset.target || "0")) + "%";
      });
    }, 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <img className="page-header-bg"
             src="https://images.unsplash.com/photo-1545209463-e2825498edbf?auto=format&fit=crop&w=1400&q=80"
             alt="" loading="lazy" />
        <div className="page-header-inner">
          <div className="section-tag">PROJECTS</div>
          <h1 className="page-h1">Our <span>Projects</span></h1>
        </div>
      </div>

      <section className="featured-section">
        <div className="section-tag reveal">COMMISSIONED</div>
        <div className="section-heading reveal reveal-d1">Chennekothapalli Solar Plant</div>

        <div className="featured-card">
          <div className="beam-scanner" />
          <div className="feat-badge">OPERATIONAL</div>
          <div className="feat-inner">
            <div className="feat-illus" style={{ padding: 0, position: "relative", overflow: "hidden", minHeight: "360px", display: "flex", alignItems: "stretch" }}>
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
                alt="Chennekothapalli solar plant"
                loading="eager"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", minHeight: "360px" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,145,66,0.18) 0%, rgba(5,145,66,0.04) 60%, transparent 100%)" }} />
              <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem", fontFamily: "'Share Tech Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.18em", color: "#fff", background: "rgba(5,145,66,0.72)", padding: "5px 12px", textTransform: "uppercase" }}>
                Chennekothapalli · 2.5 MW
              </div>
            </div>

            <div className="feat-specs">
              <div className="proj-name">Chennekothapalli</div>
              <div className="proj-loc">
                <div className="diamond" />
                Ground-Mounted Solar · India
              </div>
              <div className="specs-grid">
                {[
                  { label: "Capacity", value: "2.5 MW" },
                  { label: "Type", value: "Ground-Mounted PV", small: true },
                  { label: "Annual Yield", value: "3.8M kWh" },
                  { label: "CO₂ Offset", value: "4,200 T/yr" },
                ].map(({ label, value, small }) => (
                  <div key={label} className="spec-box">
                    <div className="spec-lbl">{label}</div>
                    <div className="spec-val" style={small ? { fontSize: "0.9rem", lineHeight: "1.2" } : {}}>{value}</div>
                  </div>
                ))}
              </div>
              <div>
                {[
                  { label: "Completion", pct: "100%", target: "100" },
                  { label: "Grid Uptime", pct: "98.7%", target: "98.7" },
                ].map(({ label, pct, target }) => (
                  <div key={label} className="prog-item">
                    <div className="prog-header">
                      <span className="prog-lbl">{label}</span>
                      <span className="prog-pct">{pct}</span>
                    </div>
                    <div className="prog-track">
                      <div className="prog-fill" data-target={target} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

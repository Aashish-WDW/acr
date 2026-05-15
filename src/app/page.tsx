"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const hero = document.querySelector(".hero") as HTMLElement | null;
    if (!hero) return;
    const handler = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--hx", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
      hero.style.setProperty("--hy", ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%");
    };
    hero.addEventListener("mousemove", handler);
    return () => hero.removeEventListener("mousemove", handler);
  }, []);

  useEffect(() => {
    const strip = document.querySelector(".stats-strip");
    if (!strip) return;
    let counted = false;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting && !counted) {
          counted = true;
          en.target.classList.add("visible");
          en.target.querySelectorAll<HTMLElement>(".stat-num[data-count]").forEach((el, i) => {
            setTimeout(() => animateCount(el), i * 100);
          });
        }
      });
    }, { threshold: 0.3 });
    obs.observe(strip);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const buttons = document.querySelectorAll(".btn-primary, .btn-outline");
    const cleanups: Array<() => void> = [];
    buttons.forEach((btn) => {
      function handler(e: Event) {
        const me = e as MouseEvent;
        const r = (btn as HTMLElement).getBoundingClientRect();
        const rpl = document.createElement("span");
        rpl.className = "btn-ripple";
        rpl.style.left = me.clientX - r.left - 3 + "px";
        rpl.style.top = me.clientY - r.top - 3 + "px";
        btn.appendChild(rpl);
        rpl.addEventListener("animationend", () => rpl.remove());
      }
      btn.addEventListener("click", handler);
      cleanups.push(() => btn.removeEventListener("click", handler));
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-eyebrow">SOLAR ENERGY DEVELOPER — INDIA</div>
            <h1 className="hero-h1">
              <em>AVR GREEN</em><br />
              ENERGY
            </h1>
            <p className="hero-sub">
              We develop, build, and operate solar power projects. Our 2.5 MW ground-mounted plant
              in Chennekothapalli is fully commissioned and connected to the grid.
            </p>
            <div className="hero-ctas">
              <button type="button" className="btn-primary" onClick={() => router.push("/projects")}>VIEW PROJECTS</button>
              <button type="button" className="btn-outline" onClick={() => router.push("/about")}>OUR STORY</button>
            </div>
          </div>
          <div className="hero-visual">
            <HeroSVG />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {[
            "2.5 MW INSTALLED CAPACITY",
            "3,500+ HOUSEHOLDS SERVED",
            "4,200 T CO₂ AVOIDED / YEAR",
            "98.7% GRID UPTIME",
            "25 YEAR PLANT LIFE",
            "GROUND-MOUNTED PV",
            "APSPDCL GRID CONNECTED",
            "3.8M kWh ANNUAL YIELD",
          ].concat([
            "2.5 MW INSTALLED CAPACITY",
            "3,500+ HOUSEHOLDS SERVED",
            "4,200 T CO₂ AVOIDED / YEAR",
            "98.7% GRID UPTIME",
            "25 YEAR PLANT LIFE",
            "GROUND-MOUNTED PV",
            "APSPDCL GRID CONNECTED",
            "3.8M kWh ANNUAL YIELD",
          ]).map((item, i) => (
            <span key={i} className="mq-item">{item}<span className="mq-dot" /></span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="stats-strip">
        <div className="stats-inner">
          {[
            { count: "2.5", suffix: " MW", label: "INSTALLED CAPACITY" },
            { count: "3500", suffix: "+", label: "HOUSEHOLDS SERVED" },
            { count: "4200", suffix: " T", label: "CO₂ AVOIDED / YEAR" },
            { count: "25", suffix: "", label: "YEAR PLANT LIFE" },
          ].map(({ count, suffix, label }) => (
            <div key={label} className="stat-cell">
              <div className="stat-num" data-count={count} data-suffix={suffix}>
                {count}{suffix}
              </div>
              <div className="stat-lbl">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="services-section">
        <div className="section-tag reveal">WHAT WE DO</div>
        <div className="section-heading reveal reveal-d1">Services</div>
        <div className="services-grid">
          <div className="svc-card reveal reveal-d1">
            <svg className="svc-icon" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="23" cy="23" r="9" stroke="currentColor" strokeWidth="1.6"/>
              <line x1="23" y1="5"  x2="23" y2="11" stroke="currentColor" strokeWidth="1.6"/>
              <line x1="23" y1="35" x2="23" y2="41" stroke="currentColor" strokeWidth="1.6"/>
              <line x1="5"  y1="23" x2="11" y2="23" stroke="currentColor" strokeWidth="1.6"/>
              <line x1="35" y1="23" x2="41" y2="23" stroke="currentColor" strokeWidth="1.6"/>
              <line x1="9"  y1="9"  x2="13.2" y2="13.2" stroke="currentColor" strokeWidth="1.6"/>
              <line x1="32.8" y1="32.8" x2="37" y2="37" stroke="currentColor" strokeWidth="1.6"/>
              <line x1="37" y1="9"  x2="32.8" y2="13.2" stroke="currentColor" strokeWidth="1.6"/>
              <line x1="13.2" y1="32.8" x2="9" y2="37" stroke="currentColor" strokeWidth="1.6"/>
            </svg>
            <div className="svc-title">Solar Development</div>
            <p className="svc-desc">Site identification, land acquisition, permits, and project development through to commissioning. We handle the full process.</p>
          </div>
          <div className="svc-card reveal reveal-d2">
            <svg className="svc-icon" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4"  y="30" width="12" height="12" stroke="currentColor" strokeWidth="1.6"/>
              <rect x="17" y="22" width="12" height="20" stroke="currentColor" strokeWidth="1.6"/>
              <rect x="30" y="14" width="12" height="28" stroke="currentColor" strokeWidth="1.6"/>
              <polyline points="10,30 10,8 23,8 36,8 36,14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="8" r="2.5" fill="currentColor" opacity="0.6"/>
              <circle cx="23" cy="8" r="2.5" fill="currentColor" opacity="0.6"/>
            </svg>
            <div className="svc-title">EPC</div>
            <p className="svc-desc">Engineering, procurement, and construction for utility-scale and commercial solar installations. Delivered to specification and on schedule.</p>
          </div>
          <div className="svc-card reveal reveal-d2">
            <svg className="svc-icon" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="23" cy="23" r="13" stroke="currentColor" strokeWidth="1.6"/>
              <circle cx="23" cy="23" r="5"  stroke="currentColor" strokeWidth="1.6"/>
              <line x1="23" y1="4"  x2="23" y2="10" stroke="currentColor" strokeWidth="1.6"/>
              <line x1="42" y1="23" x2="36" y2="23" stroke="currentColor" strokeWidth="1.6"/>
              <polyline points="8,37 12,33 16,37 20,33 24,37 28,33 32,37 36,33"
                        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <div className="svc-title">Operations &amp; Maintenance</div>
            <p className="svc-desc">Ongoing monitoring, scheduled maintenance, and performance reporting across the plant&apos;s operating life.</p>
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <div className="photo-strip">
        <div className="photo-strip-item">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80" alt="Solar farm aerial view" loading="lazy" />
        </div>
        <div className="photo-strip-item">
          <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80" alt="Solar panels" loading="lazy" />
        </div>
        <div className="photo-strip-item">
          <img src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=600&q=80" alt="Solar installation at sunset" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

function animateCount(el: HTMLElement) {
  const target = parseFloat(el.dataset.count || "0");
  const suffix = el.dataset.suffix || "";
  const decimal = (el.dataset.count || "").includes(".");
  const dur = 1600;
  const start = performance.now();
  function tick(now: number) {
    const p = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    const val = ease * target;
    el.textContent = (decimal ? val.toFixed(1) : Math.round(val).toLocaleString()) + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = (decimal ? target.toFixed(1) : target.toLocaleString()) + suffix;
  }
  requestAnimationFrame(tick);
}

function HeroSVG() {
  return (
    <svg viewBox="0 0 460 460" xmlns="http://www.w3.org/2000/svg" width="100%"
         style={{ maxWidth: "460px", filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.08))" }}>
      <defs>
        <radialGradient id="hg-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#059142" stopOpacity="0.25"/>
          <stop offset="100%" stopColor="#059142" stopOpacity="0"/>
        </radialGradient>
        <filter id="hg-glow">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <pattern id="hg-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0L0 0L0 40" fill="none" stroke="#059142" strokeWidth="0.3" opacity="0.12"/>
        </pattern>
      </defs>
      <rect width="460" height="460" fill="url(#hg-grid)"/>
      <circle cx="230" cy="230" r="162" stroke="#059142" strokeWidth="0.6" fill="none"
              strokeDasharray="5 9" opacity="0.25"/>
      <circle cx="230" cy="230" r="110" stroke="#047A34" strokeWidth="0.5" fill="none"
              strokeDasharray="2 7" opacity="0.18"/>
      <circle cx="230" cy="230" r="68" fill="url(#hg-sun)"/>
      <circle cx="230" cy="230" r="35" fill="#EEF7EE" stroke="#059142" strokeWidth="2"
              filter="url(#hg-glow)">
        <animate attributeName="r" values="33;37;33" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="230" cy="230" r="26" fill="rgba(5,145,66,0.12)" stroke="#059142" strokeWidth="1"/>
      <g stroke="#059142" strokeWidth="1.5" opacity="0.7" filter="url(#hg-glow)">
        <line x1="230" y1="210" x2="230" y2="200"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin="0s" repeatCount="indefinite"/></line>
        <line x1="230" y1="250" x2="230" y2="260"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin="0.38s" repeatCount="indefinite"/></line>
        <line x1="210" y1="230" x2="200" y2="230"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin="0.76s" repeatCount="indefinite"/></line>
        <line x1="250" y1="230" x2="260" y2="230"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin="1.14s" repeatCount="indefinite"/></line>
        <line x1="216" y1="216" x2="209" y2="209"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin="0.19s" repeatCount="indefinite"/></line>
        <line x1="244" y1="244" x2="251" y2="251"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin="0.57s" repeatCount="indefinite"/></line>
        <line x1="216" y1="244" x2="209" y2="251"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin="0.95s" repeatCount="indefinite"/></line>
        <line x1="244" y1="216" x2="251" y2="209"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin="1.33s" repeatCount="indefinite"/></line>
      </g>
      <g transform="translate(202,60)">
        <rect x="0" y="0" width="56" height="32" fill="#E0F2E4" stroke="#059142" strokeWidth="1.4"/>
        <line x1="0" y1="11" x2="56" y2="11" stroke="#047A34" strokeWidth="0.5"/>
        <line x1="0" y1="21" x2="56" y2="21" stroke="#047A34" strokeWidth="0.5"/>
        <line x1="14" y1="0" x2="14" y2="32" stroke="#047A34" strokeWidth="0.5"/>
        <line x1="28" y1="0" x2="28" y2="32" stroke="#047A34" strokeWidth="0.5"/>
        <line x1="42" y1="0" x2="42" y2="32" stroke="#047A34" strokeWidth="0.5"/>
        <animate attributeName="opacity" values="0.65;1;0.65" dur="3.5s" begin="0s" repeatCount="indefinite"/>
      </g>
      <line x1="230" y1="92" x2="230" y2="195" stroke="#059142" strokeWidth="1"
            strokeDasharray="5 4" opacity="0.4">
        <animate attributeName="strokeDashoffset" values="18;0" dur="1.8s" repeatCount="indefinite"/>
      </line>
      <circle r="4" fill="#059142" filter="url(#hg-glow)" opacity="0.9">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M230,195 L230,92"/>
      </circle>
      <g transform="translate(378,214)">
        <rect x="0" y="0" width="32" height="56" fill="#E0F2E4" stroke="#059142" strokeWidth="1.4"/>
        <line x1="0" y1="14" x2="32" y2="14" stroke="#047A34" strokeWidth="0.5"/>
        <line x1="0" y1="28" x2="32" y2="28" stroke="#047A34" strokeWidth="0.5"/>
        <line x1="0" y1="42" x2="32" y2="42" stroke="#047A34" strokeWidth="0.5"/>
        <line x1="11" y1="0" x2="11" y2="56" stroke="#047A34" strokeWidth="0.5"/>
        <line x1="21" y1="0" x2="21" y2="56" stroke="#047A34" strokeWidth="0.5"/>
        <animate attributeName="opacity" values="0.65;1;0.65" dur="3.5s" begin="0.88s" repeatCount="indefinite"/>
      </g>
      <line x1="378" y1="242" x2="265" y2="242" stroke="#059142" strokeWidth="1"
            strokeDasharray="5 4" opacity="0.4">
        <animate attributeName="strokeDashoffset" values="18;0" dur="1.8s" begin="0.7s" repeatCount="indefinite"/>
      </line>
      <circle r="4" fill="#059142" filter="url(#hg-glow)" opacity="0.9">
        <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.25s" path="M265,242 L378,242"/>
      </circle>
      <g transform="translate(202,368)">
        <rect x="0" y="0" width="56" height="32" fill="#E0F2E4" stroke="#059142" strokeWidth="1.4"/>
        <line x1="0" y1="11" x2="56" y2="11" stroke="#047A34" strokeWidth="0.5"/>
        <line x1="0" y1="21" x2="56" y2="21" stroke="#047A34" strokeWidth="0.5"/>
        <line x1="14" y1="0" x2="14" y2="32" stroke="#047A34" strokeWidth="0.5"/>
        <line x1="28" y1="0" x2="28" y2="32" stroke="#047A34" strokeWidth="0.5"/>
        <line x1="42" y1="0" x2="42" y2="32" stroke="#047A34" strokeWidth="0.5"/>
        <animate attributeName="opacity" values="0.65;1;0.65" dur="3.5s" begin="1.75s" repeatCount="indefinite"/>
      </g>
      <line x1="230" y1="368" x2="230" y2="265" stroke="#059142" strokeWidth="1"
            strokeDasharray="5 4" opacity="0.4">
        <animate attributeName="strokeDashoffset" values="18;0" dur="1.8s" begin="1.4s" repeatCount="indefinite"/>
      </line>
      <g transform="translate(50,214)">
        <rect x="0" y="0" width="32" height="56" fill="#E0F2E4" stroke="#059142" strokeWidth="1.4"/>
        <line x1="0" y1="14" x2="32" y2="14" stroke="#047A34" strokeWidth="0.5"/>
        <line x1="0" y1="28" x2="32" y2="28" stroke="#047A34" strokeWidth="0.5"/>
        <line x1="0" y1="42" x2="32" y2="42" stroke="#047A34" strokeWidth="0.5"/>
        <line x1="11" y1="0" x2="11" y2="56" stroke="#047A34" strokeWidth="0.5"/>
        <line x1="21" y1="0" x2="21" y2="56" stroke="#047A34" strokeWidth="0.5"/>
        <animate attributeName="opacity" values="0.65;1;0.65" dur="3.5s" begin="2.63s" repeatCount="indefinite"/>
      </g>
      <line x1="82" y1="242" x2="195" y2="242" stroke="#059142" strokeWidth="1"
            strokeDasharray="5 4" opacity="0.4">
        <animate attributeName="strokeDashoffset" values="18;0" dur="1.8s" begin="2.1s" repeatCount="indefinite"/>
      </line>
      <circle r="4" fill="#059142" filter="url(#hg-glow)" opacity="0.9">
        <animateMotion dur="2.5s" repeatCount="indefinite" begin="2.5s" path="M195,242 L82,242"/>
      </circle>
      <g stroke="#059142" strokeWidth="1.8" fill="none" opacity="0.55">
        <polyline points="18,38 18,18 38,18"/>
        <polyline points="422,38 422,18 442,18"/>
        <polyline points="18,422 18,442 38,442"/>
        <polyline points="422,422 422,442 442,442"/>
      </g>
      <text x="50" y="52" fontFamily="Share Tech Mono,monospace" fontSize="9" fill="#5A8A6A" letterSpacing="0.5">2.5 MW OUTPUT</text>
      <text x="330" y="52" fontFamily="Share Tech Mono,monospace" fontSize="9" fill="#5A8A6A" letterSpacing="0.5">SOLAR PV</text>
      <text x="50" y="428" fontFamily="Share Tech Mono,monospace" fontSize="9" fill="#5A8A6A" letterSpacing="0.5">INDIA</text>
      <text x="310" y="428" fontFamily="Share Tech Mono,monospace" fontSize="9" fill="#5A8A6A" letterSpacing="0.5">98.7% UPTIME</text>
    </svg>
  );
}

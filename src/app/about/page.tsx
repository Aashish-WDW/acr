"use client";

import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <img className="page-header-bg"
             src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1400&q=80"
             alt="" loading="lazy" />
        <div className="page-header-inner">
          <div className="section-tag">ABOUT US</div>
          <h1 className="page-h1">About <span>AVR Green</span></h1>
        </div>
      </div>

      <section className="narrative-section">
        <div className="narrative-grid">
          <div className="narrative-body">
            <p><strong>AVR Green Energy Pvt. Ltd.</strong> is a solar energy developer focused on utility-scale and commercial projects. We cover the full project lifecycle — from site identification and development through to construction, commissioning, and long-term operations.</p>
            <p>Our first project, a <strong>2.5 MW ground-mounted solar plant in Chennekothapalli</strong>, is fully operational. The plant supplies power to the local grid, serves over 3,500 households, and reduces CO₂ emissions by approximately 4,200 tonnes per year.</p>
            <p>We work directly with landowners, grid operators, and local communities throughout each project. Plants are designed and built for a 25-year operational life.</p>
          </div>
          <div>
            <div className="pull-quote-wrap">
              <div className="pull-quote">
                <blockquote>&ldquo;Our focus is on projects that are well-engineered, honestly managed, and built to last.&rdquo;</blockquote>
                <cite>— A. Venkata Rao, Founder &amp; Managing Director</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="values-inner">
          <div className="section-tag reveal">HOW WE WORK</div>
          <div className="section-heading reveal reveal-d1">Our Principles</div>
          <div className="values-grid">
            {[
              { num: "01", name: "Integrity", desc: "Transparent operations and honest reporting with all stakeholders — landowners, grid operators, and investors." },
              { num: "02", name: "Technical Standards", desc: "Quality equipment, certified engineering, and consistent build standards across every project." },
              { num: "03", name: "Community Respect", desc: "We work with local communities, create employment where possible, and minimise disruption during construction and operation." },
              { num: "04", name: "Environmental Care", desc: "Responsible site selection, minimal ecological impact, and clean energy generation as the core purpose of every project." },
              { num: "05", name: "Long-term Thinking", desc: "Plants are designed for a 25-year life. We plan and build accordingly, not just for commissioning day." },
            ].map(({ num, name, desc }) => (
              <div key={num} className="val-card reveal">
                <div className="val-num">{num}</div>
                <div className="val-name">{name}</div>
                <p className="val-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="photo-strip">
        <div className="photo-strip-item">
          <img src="https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&w=900&q=80" alt="Solar panels close up" loading="lazy" />
        </div>
        <div className="photo-strip-item">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80" alt="Solar farm aerial" loading="lazy" />
        </div>
        <div className="photo-strip-item">
          <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80" alt="Solar panels" loading="lazy" />
        </div>
      </div>

      <section className="leadership-section">
        <div className="section-tag reveal">LEADERSHIP</div>
        <div className="section-heading reveal reveal-d1">The Board</div>
        <div className="leadership-grid">
          {[
            { name: "V. Sukanya", role: "Managing Director & CEO", file: "V.%20Sukanya%20M.A%20Enterprenuer.png" },
            { name: "M. Kamakshi", role: "Director", file: "M.%20Kamakshi%20B.A.png" },
            { name: "Kala Jyothi", role: "Director", file: "Kala%20Jyothi%20%20B.A.jpeg" },
            { name: "Akshar Aditya", role: "Director", file: "Akshar%20Aditya%20%20B.E.png" },
          ].map(({ name, role, file }) => (
            <div key={name} className="leader-card reveal">
              <img className="leader-photo" src={`/team/${file}`} alt={name} />
              <div className="leader-info">
                <div className="leader-name">{name}</div>
                <div className="leader-role">{role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

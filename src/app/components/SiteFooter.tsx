import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand">AVR GREEN ENERGY</div>
          <p className="footer-tagline">
            Solar energy developer. We handle project development, EPC, and long-term operations.
          </p>
          <div className="footer-status">
            <div className="status-dot" />
            <span>Chennekothapalli plant operational</span>
          </div>
        </div>
        <div>
          <div className="footer-col-ttl">NAVIGATION</div>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-ttl">CONTACT</div>
          <p className="footer-loc">
            AVR Green Energy Pvt. Ltd.<br />
            India
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2025 AVR GREEN ENERGY PVT. LTD. — ALL RIGHTS RESERVED</div>
        <div className="footer-copy" style={{ opacity: 0.55 }}>AVR GREEN ENERGY PVT. LTD.</div>
      </div>
    </footer>
  );
}

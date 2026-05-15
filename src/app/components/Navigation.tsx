"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  return (
    <>
      <nav>
        <Link href="/" className="nav-logo">
          <img src="/logo.png" alt="AVR Green Energy" className="nav-logo-img" />
        </Link>
        <ul className="nav-links">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={pathname === href ? "active" : ""}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <button
            className={`hamburger${mobileNavOpen ? " open" : ""}`}
            onClick={() => setMobileNavOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={mobileNavOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav${mobileNavOpen ? " open" : ""}`}>
        {LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className={pathname === href ? "active" : ""}>
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}

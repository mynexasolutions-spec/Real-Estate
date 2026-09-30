"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  ["Home", "/"],
  ["Properties", "/properties"],
  ["Buy", "/buy"],
  ["Sell", "/sell"],
  ["Rent", "/rent"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <Link className="navbar-logo-link" href="/" aria-label="Markanday Enterprises home" onClick={closeMenu}>
        <Image src="/images/logo.png" alt="Markanday Enterprises" width={600} height={260} className="navbar-logo" priority />
      </Link>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        <div className="mobile-menu-intro"><Image src="/images/logo.png" alt="Markanday Enterprises" width={220} height={96} className="mobile-menu-logo" /><span>Real Estate &amp; Interior Designer</span></div>
        <div className="mobile-menu-search">Explore properties <b>⌕</b></div>
        {navigation.map(([label, href]) => (
          <Link key={href} href={href} onClick={closeMenu} className={pathname === href ? "is-active" : undefined}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="nav-controls">
        <a className="call-now nav-call" href="tel:+918422943408"><Image src="/images/telephone.png" alt="" width={18} height={18} className="phone-icon" /> Call Now</a>
        <a className="nav-whatsapp" href="https://wa.me/918422943408" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><Image src="/images/whatsapp.png" alt="" width={20} height={20} className="whatsapp-icon" /><span>WhatsApp</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>{menuOpen ? "×" : "☰"}</button>
      </div>
    </header>
  );
}

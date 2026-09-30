import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><Image src="/images/logo.png" alt="Markanday Enterprises" width={600} height={260} className="footer-logo" /><p>Helping you find the right space for every chapter—buying, selling, rental and resale.</p><a href="https://youtube.com/@funnyvishwa3031?si=RJwQRXVmeGv3fQb9" target="_blank" rel="noreferrer">▶ &nbsp; Visit our YouTube channel</a></div>
        <div><h3>Quick Links</h3><Link href="/">Home</Link><Link href="/properties">Properties</Link><Link href="/buy">Buy a Property</Link><Link href="/contact">Contact Us</Link></div>
        <div><h3>Our Services</h3><Link href="/buy">Buy Property</Link><Link href="/sell">Sell Property</Link><Link href="/rent">Rental Properties</Link><Link href="/properties">Resell Properties</Link></div>
        <div><h3>Get in Touch</h3><a href="tel:+918422943408">+91 84229 43408</a><a href="tel:+918108525502">+91 81085 25502</a><a href="tel:+918080843408">+91 80808 43408</a><a href="https://wa.me/918422943408" target="_blank" rel="noreferrer">WhatsApp us ↗</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Markanday Enterprises. All rights reserved.</span><span>Real Estate &amp; Interior Designer</span></div>
    </footer>
  );
}

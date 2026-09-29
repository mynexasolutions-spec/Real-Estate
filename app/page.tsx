"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const highlights = [
  ["Dholpuri Tiles", "Rooms & hall flooring", "⌂", "tile-interior"],
  ["Hall with Half Tiles", "Refined wall finish", "▦", "tile-interior"],
  ["POP Ceiling", "Fan & light included", "✣", "tile-interior ceiling"],
  ["Powder Coating", "Windows with grill", "▤", "tile-utility window"],
  ["Full Tiled Bathroom", "Clean modern finish", "♨", "tile-utility bathroom"],
  ["Green Marble Kadapa", "Kitchen platform", "▰", "tile-utility marble"],
  ["1000 Litre Tank", "With pot mala", "▣", "tile-home tank"],
  ["Concealed Wiring", "Electrical & piping", "⌁", "tile-utility piping"],
  ["Separate Light Meter", "With tax pavti", "▤", "tile-home meter"],
  ["24 Hours Water", "Reliable water supply", "●", "tile-home water"],
] as const;

const nearbyLocations = [
  ["Railway Station", "nearby-image station"],
  ["School", "nearby-image school"],
  ["College", "nearby-image college"],
  ["Hospital", "nearby-image hospital"],
  ["Bank", "nearby-image bank"],
  ["Market", "nearby-image market"],
] as const;

const propertyServices = [
  ["⌂", "Buy Property", "Find your dream property at the best price."],
  ["₹", "Sell Property", "Get the best value for your property."],
  ["⚿", "Rental", "Find or list properties for rent easily."],
  ["⟳", "Resell", "Resell your property with trusted support."],
] as const;

const listings = [
  ["For Sale", "Flats", "2 BHK Flat", "Near Railway Station", "₹ 58 Lakhs", "listing-flat"],
  ["For Rent", "Room", "Spacious Room", "Near Market", "₹ 6,500 / month", "listing-room"],
  ["For Sale", "Shop", "Commercial Shop", "Main Market Area", "₹ 1.20 Cr", "listing-shop"],
  ["For Resell", "Plot", "Residential Plot", "Prime Location", "₹ 35 Lakhs", "listing-plot"],
] as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const promoVideoRef = useRef<HTMLVideoElement>(null);
  const promoSectionRef = useRef<HTMLElement>(null);
  function toggleVideoSound() {
    const video = promoVideoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setVideoMuted(video.muted);
  }
  useEffect(() => {
    const section = promoSectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVideoVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.18 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return <main className="site-main">
    <header className="navbar">
      <a className="navbar-logo-link" href="#home" aria-label="Markanday Enterprises home"><Image src="/images/logo.png" alt="Markanday Enterprises" width={600} height={260} className="navbar-logo" priority /></a>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
        <div className="mobile-menu-intro"><p>Markanday</p><span>Real Estate &amp; Interior Designer</span></div><div className="mobile-menu-search">Search properties <b>⌕</b></div>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a><a href="#highlights" onClick={() => setMenuOpen(false)}>Properties</a><a href="#services" onClick={() => setMenuOpen(false)}>Buy</a><a href="#services" onClick={() => setMenuOpen(false)}>Sell</a><a href="#contact" onClick={() => setMenuOpen(false)}>Rent</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a><a className="mobile-menu-youtube" href="https://youtube.com/@funnyvishwa3031?si=RJwQRXVmeGv3fQb9" target="_blank" rel="noreferrer">YouTube</a>
      </nav>
      <div className="nav-controls"><a className="call-now nav-call" href="tel:+918422943408"><Image src="/images/telephone.png" alt="" width={18} height={18} className="phone-icon" /> Call Now</a><a className="nav-whatsapp" href="https://wa.me/918422943408" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><Image src="/images/whatsapp.png" alt="" width={20} height={20} className="whatsapp-icon" /><span>WhatsApp</span></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation">{menuOpen ? "×" : "☰"}</button></div>
    </header>
    <section id="home" className="hero-wrap">
      <Image src="/images/hero-premium-v4.png" alt="Premium modern home" fill priority className="hero-image" sizes="100vw" />
      <div className="hero-wash" />
      <div className="hero-content">
        <p className="eyebrow">FIND YOUR PERFECT PROPERTY</p>
        <h1>Homes for a<br /><em>Better Tomorrow</em></h1>
        <p className="hero-description">Discover premium homes, modern interiors and the best investment opportunities — designed for a brighter future.</p>
        <div className="trust-row"><span><b>⌖</b><strong>Best<br />Locations</strong><small>Prime &amp; Connected</small></span><span><b>♢</b><strong>Trusted<br />Deals</strong><small>Safe &amp; Transparent</small></span><span><b>▤</b><strong>Easy<br />Process</strong><small>Hassle-Free Experience</small></span></div>
        <div className="hero-actions"><a className="call-now hero-call" href="tel:+918422943408"><Image src="/images/telephone.png" alt="" width={21} height={21} className="phone-icon" /> Call Now</a><a className="whatsapp-action" href="https://wa.me/918422943408" target="_blank" rel="noreferrer"><Image src="/images/whatsapp.png" alt="" width={24} height={24} className="whatsapp-icon" /> Chat on WhatsApp</a></div>
        <p className="property-types"><a href="#services">Chawl</a><i /> <a href="#services">Room</a><i /> <a href="#services">Flats</a><i /> <a href="#services">Shops</a><i /> <a href="#services">Plots</a></p>
      </div>
    </section>

    <section ref={promoSectionRef} className={`promo-video-section${videoVisible ? " is-visible" : ""}`} aria-labelledby="promo-video-title">
      <div className="promo-video-inner"><div className="promo-video-heading"><p className="eyebrow">A CLOSER LOOK</p><h2 id="promo-video-title">Experience the <em>Markanday Difference</em></h2><p>Discover thoughtfully designed spaces, premium finishes, and a lifestyle built around comfort.</p></div><div className="promo-video-frame"><video ref={promoVideoRef} className="promo-video" autoPlay muted loop playsInline preload="metadata" onVolumeChange={(event) => setVideoMuted(event.currentTarget.muted)}><source src="/images/video.mp4" type="video/mp4" />Your browser does not support this video.</video><div className="promo-video-shade" /><div className="promo-video-caption"><span>MARKANDAY ENTERPRISES</span><small>Spaces made for your next chapter</small></div><div className="promo-video-controls"><button type="button" onClick={toggleVideoSound} aria-label={videoMuted ? "Turn sound on" : "Mute promotional video"}><Image src={videoMuted ? "/images/unmute.png" : "/images/mute.png"} alt="" width={21} height={21} className="video-sound-icon" /></button></div></div></div>
    </section>

    <section id="highlights" className="highlights">
      <div className="highlight-heading"><p className="eyebrow">PROPERTY HIGHLIGHTS</p><h2>Quality Construction with <em>Modern Facilities</em></h2><p>Well-designed spaces with all essential amenities for a comfortable lifestyle.</p></div>
      <div className="highlight-grid">{highlights.map(([title, copy, icon, imageClass]) => <article key={title} className="highlight-card"><div className={`highlight-image ${imageClass}`}><span>{icon}</span></div><div className="highlight-copy"><b>{title}</b><span>{copy}</span></div></article>)}</div>
    </section>

    <section className="location-advantage"><div className="location-top"><div><h2>Prime Location Advantage</h2><p>Everything you need is just a short walk away.</p></div><div className="walking-note"><b>♟</b><span>Railway Station, School, College,<br />Hospital, Bank and Market<br /><em>Walking Distance</em></span></div></div><div className="nearby-grid">{nearbyLocations.map(([title, imageClass]) => <article key={title}><div className={imageClass} /><p>{title}</p></article>)}</div></section>

    <section className="property-services"><div className="property-services-heading"><p className="eyebrow">OUR SERVICES</p><h2>All Types of Properties</h2><p>We help you buy, sell, rent or resell properties as per your needs.</p></div><div className="property-service-grid">{propertyServices.map(([icon, title, copy]) => <article key={title}><b>{icon}</b><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="service-property-pills"><span>Chawl</span><span>Room</span><span>Flats</span><span>Shop&apos;s</span><span>Plot</span></div></section>

    <section id="services" className="featured-listings"><div className="listing-heading"><div><p className="eyebrow">FEATURED PROPERTIES</p><h2>Explore Our Latest Listings</h2><p>Premium locations, great connectivity and modern amenities.</p></div><a href="#contact">View All Properties <b>→</b></a></div><div className="listing-grid">{listings.map(([tag, type, title, location, price, imageClass]) => <article key={title} className="listing-card"><div className={`listing-image ${imageClass}`}><span className={tag === "For Rent" || tag === "For Resell" ? "tag red" : "tag"}>{tag}</span></div><div className="listing-content"><span className="listing-type">{type}</span><h3>{title}</h3><p>● &nbsp;{location}</p><b className="price">{price}</b><a href="#contact">Enquire Now <span>→</span></a></div></article>)}</div></section>

    <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><Image src="/images/logo.png" alt="Markanday Enterprises" width={600} height={260} className="footer-logo" /><p>Helping you find the right space for every chapter—buying, selling, rental and resale.</p><a href="https://youtube.com/@funnyvishwa3031?si=RJwQRXVmeGv3fQb9" target="_blank" rel="noreferrer">▶ &nbsp; Visit our YouTube channel</a></div><div><h3>Quick Links</h3><a href="#home">Home</a><a href="#highlights">Property Highlights</a><a href="#services">Featured Properties</a><a href="#contact">Contact Us</a></div><div><h3>Our Services</h3><a href="#services">Buy Property</a><a href="#services">Sell Property</a><a href="#services">Rental Properties</a><a href="#services">Resell Properties</a></div><div><h3>Get in Touch</h3><a href="tel:+918422943408">+91 84229 43408</a><a href="tel:+918108525502">+91 81085 25502</a><a href="tel:+918080843408">+91 80808 43408</a><a href="https://wa.me/918422943408" target="_blank" rel="noreferrer">WhatsApp us ↗</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Markanday Enterprises. All rights reserved.</span><span>Real Estate & Interior Designer</span></div></footer>
    <a className="floating-whatsapp" href="https://wa.me/918422943408" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><Image src="/images/whatsapp.png" alt="WhatsApp" width={29} height={29} className="whatsapp-icon" /></a>
  </main>;
}

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

const highlights = [
  ["Outside Dholpuri Tiles", "Durable exterior tile finish", "⌂", "tile-interior"],
  ["Hall Half Tiles", "Half-tile finish in the hall", "▦", "tile-interior"],
  ["POP Ceiling", "With fan and light provision", "✣", "tile-interior ceiling"],
  ["Powder-Coated Windows", "Windows fitted with grills", "▤", "tile-utility window"],
  ["Full-Tiled Bathrooms", "Tiles in toilets and bathrooms", "♨", "tile-utility bathroom"],
  ["Green Marble Kadapa", "Green marble kitchen platform", "▰", "tile-utility marble"],
  ["1000-Litre Water Tank", "Provided with pot mala", "▣", "tile-home tank"],
  ["Concealed Wiring & Piping", "Neat electrical and plumbing work", "⌁", "tile-utility piping"],
  ["Separate Light Meter", "Provided with tax pavti", "▤", "tile-home meter"],
  ["24-Hour Water Supply", "Reliable water availability", "●", "tile-home water"],
] as const;

const primeLocationBenefits = ["Near Anmol Garden", "Hospital nearby", "School nearby", "Metro Mall nearby"] as const;

const apartmentConfigurations = [
  { type: "1 BHK", options: [["421 sq. ft.", "₹42 lakh"], ["441 sq. ft.", "₹44 lakh"], ["461 sq. ft.", "₹46 lakh"]] },
  { type: "2 BHK", options: [["589 sq. ft.", "₹60 lakh"], ["628 sq. ft.", "₹65 lakh"]] },
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
  ["For Rent", "Room", "Spacious Room", "Near Market", "₹ 6,500", "listing-room"],
  ["For Sale", "Shop", "Commercial Shop", "Main Market Area", "₹ 1.20 Cr", "listing-shop"],
  ["For Resell", "Plot", "Residential Plot", "Prime Location", "₹ 35 Lakhs", "listing-plot"],
] as const;

export default function Home() {
  const [videoVisible, setVideoVisible] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const promoVideoRef = useRef<HTMLVideoElement>(null);
  const promoSectionRef = useRef<HTMLElement>(null);
  function toggleVideoSound() {
    const video = promoVideoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setVideoMuted(video.muted);
  }
  function toggleVideoPlayback() {
    const video = promoVideoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().then(() => setVideoPlaying(true));
      return;
    }
    video.pause();
    setVideoPlaying(false);
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
    <SiteHeader />
    <section id="home" className="hero-wrap">
      <Image src="/images/hero-premium-v4.png" alt="Premium modern home" fill priority className="hero-image" sizes="100vw" />
      <div className="hero-wash" />
      <div className="hero-content">
        <p className="eyebrow">FIND YOUR PERFECT PROPERTY</p>
        <h1>Homes for a<br /><em>Better Tomorrow</em></h1>
        <p className="hero-description">Discover premium homes, modern interiors and the best investment opportunities — designed for a brighter future.</p>
        <div className="trust-row"><span><b>⌖</b><strong>Best<br />Locations</strong></span><span><b>♢</b><strong>Trusted<br />Deals</strong></span><span><b>▤</b><strong>Easy<br />Process</strong></span></div>
        <div className="hero-actions"><a className="call-now hero-call" href="tel:+918422943408"><Image src="/images/telephone.png" alt="" width={21} height={21} className="phone-icon" /> Call Now</a><a className="whatsapp-action" href="https://wa.me/918422943408" target="_blank" rel="noreferrer"><Image src="/images/whatsapp.png" alt="" width={24} height={24} className="whatsapp-icon" /> Chat on WhatsApp</a></div>
        <p className="property-types"><a href="#services">Chawl</a><i /> <a href="#services">Room</a><i /> <a href="#services">Flats</a><i /> <a href="#services">Shops</a><i /> <a href="#services">Plots</a></p>
      </div>
    </section>

    <section ref={promoSectionRef} className={`promo-video-section${videoVisible ? " is-visible" : ""}`} aria-labelledby="promo-video-title">
      <div className="promo-video-inner"><div className="promo-video-heading"><p className="eyebrow">VIDEO TOUR</p><h2 id="promo-video-title">Explore Spaces<br />Built for a <em>Better Tomorrow</em></h2><p>Take a closer look at our thoughtfully designed homes, modern amenities and superior construction through this video tour.</p><button className="promo-watch-button" type="button" onClick={toggleVideoPlayback}><span>{videoPlaying ? "Ⅱ" : "▶"}</span>{videoPlaying ? "Pause Video Tour" : "Watch Full Video Tour"}</button><div className="promo-benefits"><span><b>⌂</b>Modern<br />Living Spaces</span><span><b>◆</b>Quality<br />Construction</span><span><b>✦</b>Prime<br />Locations</span></div></div><div className="promo-video-frame"><video ref={promoVideoRef} className="promo-video" autoPlay muted loop playsInline controls preload="metadata" onPlay={() => setVideoPlaying(true)} onPause={() => setVideoPlaying(false)} onVolumeChange={(event) => setVideoMuted(event.currentTarget.muted)}><source src="/images/video.mp4" type="video/mp4" />Your browser does not support this video.</video><div className="promo-video-shade" /><button className="promo-play-toggle" type="button" onClick={toggleVideoPlayback} aria-label={videoPlaying ? "Pause video" : "Play video"}>{videoPlaying ? "Ⅱ" : "▶"}</button><div className="promo-video-caption"><span>MARKANDAY ENTERPRISES</span><small>Spaces made for your next chapter</small></div><div className="promo-video-controls"><button type="button" onClick={toggleVideoSound} aria-label={videoMuted ? "Turn sound on" : "Mute promotional video"}><Image src={videoMuted ? "/images/unmute.png" : "/images/mute.png"} alt="" width={21} height={21} className="video-sound-icon" /></button></div></div></div>
    </section>

    <section id="highlights" className="highlights">
      <div className="highlight-heading"><p className="eyebrow">PROPERTY SPECIFICATIONS</p><h2>Quality Finishes with <em>Essential Facilities</em></h2><p>Thoughtfully included construction details and everyday amenities for comfortable living.</p></div>
      <div className="highlight-grid">{highlights.map(([title, copy, icon, imageClass]) => <article key={title} className="highlight-card"><div className={`highlight-image ${imageClass}`}><span>{icon}</span></div><div className="highlight-copy"><b>{title}</b><span>{copy}</span></div></article>)}</div>
    </section>

    <section id="prime-location" className="prime-location-offer" aria-labelledby="prime-location-title">
      <div className="prime-location-intro"><p className="eyebrow">FEATURED APARTMENTS · KALYAN EAST</p><h2 id="prime-location-title">Find your next home in <em>Kalyan East.</em></h2><p>Well-connected apartments on Malangad Road, thoughtfully positioned for everyday convenience and a comfortable commute.</p><ul className="prime-location-benefits">{primeLocationBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul><div className="prime-location-contact"><span>Speak with Trupti Ma&apos;am for availability</span><b>809793433</b><a href="tel:+918108525502">Call +91 81085 25502</a></div></div>
      <div className="prime-location-pricing"><div className="prime-location-pricing-heading"><span>Available configurations</span><small>All prices are inclusive</small></div><div className="prime-location-price-grid">{apartmentConfigurations.map(({ type, options }) => <article className="prime-location-price-card" key={type}><header><b>{type}</b><span>Carpet-area options</span></header><ul>{options.map(([area, price]) => <li key={area}><b>{area}</b><strong>{price}</strong><small>All inclusive</small></li>)}</ul></article>)}</div></div>
    </section>

    <section className="location-advantage"><div className="location-top"><div><h2>Prime Location Advantage</h2><p>Everything you need is just a short walk away.</p></div><div className="walking-note"><b>♟</b><span>Railway Station, School, College,<br />Hospital, Bank and Market<br /><em>Walking Distance</em></span></div></div><div className="nearby-grid">{nearbyLocations.map(([title, imageClass]) => <article key={title}><div className={imageClass} /><p>{title}</p></article>)}</div></section>

    <section className="property-services"><div className="property-services-heading"><p className="eyebrow">OUR SERVICES</p><h2>All Types of Properties</h2><p>We help you buy, sell, rent or resell properties as per your needs.</p></div><div className="property-service-grid">{propertyServices.map(([icon, title, copy]) => <article key={title}><b>{icon}</b><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="service-property-pills"><span>Chawl</span><span>Room</span><span>Flats</span><span>Shop&apos;s</span><span>Plot</span></div></section>

    <section id="services" className="featured-listings"><div className="listing-heading"><div><p className="eyebrow">FEATURED PROPERTIES</p><h2>Explore Our Latest Listings</h2><p>Premium locations, great connectivity and modern amenities.</p></div><a href="/contact">View All Properties</a></div><div className="listing-grid">{listings.map(([tag, type, title, location, price, imageClass]) => <article key={title} className="listing-card"><div className={`listing-image ${imageClass}`}><span className={tag === "For Rent" || tag === "For Resell" ? "tag red" : "tag"}>{tag}</span></div><div className="listing-content"><span className="listing-type">{type}</span><h3>{title}</h3><p>● &nbsp;{location}</p><b className="price">{price}</b><a href="/contact">Enquire Now</a></div></article>)}</div></section>

    <SiteFooter />
    <a className="floating-whatsapp" href="https://wa.me/918422943408" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><Image src="/images/whatsapp.png" alt="WhatsApp" width={29} height={29} className="whatsapp-icon" /></a>
  </main>;
}

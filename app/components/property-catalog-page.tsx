import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type Listing = {
  image: string;
  title: string;
  location: string;
  price: string;
  type: string;
  status: string;
};

type CatalogPageProps = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  heroImage: string;
  primaryAction: string;
  primaryHref: string;
  listings: readonly Listing[];
  steps: readonly string[];
};

export function PropertyCatalogPage({ eyebrow, title, accent, description, heroImage, primaryAction, primaryHref, listings, steps }: CatalogPageProps) {
  return (
    <main className="subpage">
      <SiteHeader />
      <section className="page-hero">
        <Image src={heroImage} alt="Markanday property" fill priority sizes="100vw" className="page-hero-image" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content"><p className="eyebrow">{eyebrow}</p><h1>{title} <em>{accent}</em></h1><p>{description}</p><Link className="page-primary-cta" href={primaryHref}>{primaryAction} <span>→</span></Link></div>
        <div className="page-hero-note"><b>MARKANDAY ENTERPRISES</b><span>Trusted property guidance, from first visit to final keys.</span></div>
      </section>

      <section className="catalog-section">
        <div className="section-heading"><div><p className="eyebrow">HANDPICKED FOR YOU</p><h2>Spaces with a <em>strong sense of home.</em></h2></div><p>Browse a thoughtful collection of properties selected for lifestyle, location and long-term value.</p></div>
        <div className="catalog-grid">
          {listings.map((listing) => <article className="property-card" key={listing.title}><div className="property-card-image"><Image src={listing.image} alt={listing.title} fill sizes="(max-width: 700px) 100vw, 50vw" /><span>{listing.status}</span></div><div className="property-card-content"><div><p>{listing.type}</p><h3>{listing.title}</h3><small>● &nbsp; {listing.location}</small></div><b>{listing.price}</b><Link href="/contact">Enquire now <i>→</i></Link></div></article>)}
        </div>
      </section>

      <section className="journey-section"><div className="journey-copy"><p className="eyebrow">A CLEARER WAY FORWARD</p><h2>A personal approach to every <em>property decision.</em></h2></div><div className="journey-steps">{steps.map((step, index) => <article key={step}><span>0{index + 1}</span><p>{step}</p></article>)}</div></section>
      <section className="catalog-cta"><p className="eyebrow">LET&apos;S TALK PROPERTY</p><h2>Have a space in mind?</h2><p>Speak with the Markanday team for clear advice and a confident next move.</p><Link href="/contact">Connect with us <span>→</span></Link></section>
      <SiteFooter />
      <a className="floating-whatsapp" href="https://wa.me/918422943408" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><Image src="/images/whatsapp.png" alt="WhatsApp" width={29} height={29} className="whatsapp-icon" /></a>
    </main>
  );
}

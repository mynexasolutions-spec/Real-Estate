import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type Listing = { image: string; title: string; location: string; price: string; type: string; status: string };
type PageVariant = "properties" | "buy" | "sell" | "rent";
type CatalogPageProps = { eyebrow: string; title: string; accent: string; description: string; heroImage: string; primaryAction: string; primaryHref: string; listings: readonly Listing[]; steps: readonly string[]; variant: PageVariant };

function PropertyCards({ listings, variant }: Pick<CatalogPageProps, "listings" | "variant">) {
  if (variant === "buy") return <div className="catalog-listings catalog-listings--buy">{listings.map((listing, index) => <article className="buy-card" key={listing.title}><div className="buy-card-image"><Image src={listing.image} alt={listing.title} fill sizes="(max-width: 700px) 100vw, 25vw" /><span>{listing.status}</span></div><div className="buy-card-copy"><small>0{index + 1} / 04</small><p>{listing.type}</p><h3>{listing.title}</h3><span>● &nbsp; {listing.location}</span><b>{listing.price}</b><Link href="/contact">Explore property</Link></div></article>)}</div>;

  if (variant === "sell") return <div className="catalog-listings catalog-listings--sell">{listings.map((listing, index) => <article className="sell-card" key={listing.title}><Image src={listing.image} alt={listing.title} fill sizes="(max-width: 700px) 100vw, 50vw" /><div className="sell-card-shade" /><div className="sell-card-copy"><span>0{index + 1} · {listing.type}</span><h3>{listing.title}</h3><p>{listing.location}</p><b>{listing.price}</b><Link href="/contact">Start a conversation</Link></div></article>)}</div>;

  if (variant === "rent") return <div className="catalog-listings catalog-listings--rent">{listings.map((listing, index) => <article className="rent-card" key={listing.title}><span className="rent-card-number">0{index + 1}</span><div className="rent-card-image"><Image src={listing.image} alt={listing.title} fill sizes="(max-width: 700px) 42vw, 20vw" /></div><div className="rent-card-copy"><p>{listing.type} <b>{listing.status}</b></p><h3>{listing.title}</h3><span>● &nbsp; {listing.location}</span><strong>{listing.price}</strong></div><Link href="/contact">Enquire</Link></article>)}</div>;

  return <div className="catalog-listings catalog-listings--properties">{listings.map((listing, index) => <article className={index === 0 ? "collection-card collection-card--feature" : "collection-card"} key={listing.title}><div className="collection-card-image"><Image src={listing.image} alt={listing.title} fill sizes="(max-width: 700px) 100vw, 50vw" /><span>{listing.status}</span></div><div className="collection-card-copy"><p>{listing.type}</p><h3>{listing.title}</h3><small>● &nbsp; {listing.location}</small><b>{listing.price}</b><Link href="/contact">View details</Link></div></article>)}</div>;
}

export function PropertyCatalogPage({ eyebrow, title, accent, description, heroImage, primaryAction, primaryHref, listings, steps, variant }: CatalogPageProps) {
  return <main className={`site-main subpage subpage--${variant}`}>
    <SiteHeader />
    <section className="page-hero"><Image src={heroImage} alt="Markanday property" fill priority sizes="100vw" className="page-hero-image" /><div className="page-hero-overlay" /><div className="page-hero-content"><p className="eyebrow">{eyebrow}</p><h1>{title} <em>{accent}</em></h1><p>{description}</p><Link className="page-primary-cta" href={primaryHref}>{primaryAction}</Link></div><div className="page-hero-note"><b>MARKANDAY ENTERPRISES</b><span>Trusted property guidance, from first visit to final keys.</span></div></section>
    <section className="catalog-section"><div className="section-heading"><div><p className="eyebrow">HANDPICKED FOR YOU</p><h2>Spaces with a <em>strong sense of home.</em></h2></div><p>Browse a thoughtful collection of properties selected for lifestyle, location and long-term value.</p></div><PropertyCards listings={listings} variant={variant} /></section>
    <section className="journey-section"><div className="journey-copy"><p className="eyebrow">A CLEARER WAY FORWARD</p><h2>A personal approach to every <em>property decision.</em></h2></div><div className="journey-steps">{steps.map((step, index) => <article key={step}><span>0{index + 1}</span><p>{step}</p></article>)}</div></section>
    <section className="catalog-cta"><p className="eyebrow">LET&apos;S TALK PROPERTY</p><h2>Have a space in mind?</h2><p>Speak with the Markanday team for clear advice and a confident next move.</p><Link href="/contact">Connect with us</Link></section>
    <SiteFooter />
    <a className="floating-whatsapp" href="https://wa.me/918422943408" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><Image src="/images/whatsapp.png" alt="WhatsApp" width={29} height={29} className="whatsapp-icon" /></a>
  </main>;
}

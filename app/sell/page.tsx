import { PropertyCatalogPage } from "../components/property-catalog-page";

const listings = [
  { image: "/images/properties/1.jpeg", title: "Position your property beautifully", location: "Professional presentation", price: "Request a valuation", type: "Seller Spotlight", status: "Sell" },
  { image: "/images/properties/4.jpeg", title: "Reach serious buyers", location: "Targeted local exposure", price: "Request a valuation", type: "Seller Spotlight", status: "Sell" },
  { image: "/images/properties/2.jpeg", title: "Make every first impression count", location: "Thoughtful property marketing", price: "Request a valuation", type: "Seller Spotlight", status: "Sell" },
  { image: "/images/properties/3.jpeg", title: "Move on your timeline", location: "Clear support at every stage", price: "Request a valuation", type: "Seller Spotlight", status: "Sell" },
] as const;

export default function SellPage() {
  return <PropertyCatalogPage eyebrow="SELL SMARTER" title="Your property deserves the" accent="right attention." description="We pair clear advice with considered presentation so you can move toward your next chapter with confidence." heroImage="/images/properties/4.jpeg" primaryAction="Request a consultation" primaryHref="/contact" listings={listings} steps={["Start with an honest conversation about your property.", "Create a clear plan for presentation and buyer reach.", "Receive steady support through every decision."]} />;
}

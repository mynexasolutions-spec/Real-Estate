import { PropertyCatalogPage } from "../components/property-catalog-page";

const listings = [
  { image: "/images/properties/2.jpeg", title: "Ready-to-explore apartments", location: "Comfortable, connected living", price: "Talk to us for details", type: "New Launch", status: "Buy" },
  { image: "/images/properties/1.jpeg", title: "Retail and residential space", location: "Everyday convenience nearby", price: "Talk to us for details", type: "Mixed Use", status: "Buy" },
  { image: "/images/properties/4.jpeg", title: "Light-filled family homes", location: "A practical neighbourhood setting", price: "Talk to us for details", type: "Apartment", status: "Buy" },
  { image: "/images/properties/3.jpeg", title: "Value-led residential opportunity", location: "Space to make your own", price: "Talk to us for details", type: "Residential", status: "Buy" },
] as const;

export default function BuyPage() {
  return <PropertyCatalogPage eyebrow="BUY WITH CONFIDENCE" title="A better start to your" accent="home search." description="From your first shortlist to the final decision, we help you focus on the properties that genuinely fit." heroImage="/images/properties/2.jpeg" primaryAction="Talk to a property expert" primaryHref="/contact" listings={listings} steps={["Tell us your budget, area and must-haves.", "Receive a focused shortlist, not a flood of options.", "Visit, compare and decide with trusted guidance."]} variant="buy" />;
}

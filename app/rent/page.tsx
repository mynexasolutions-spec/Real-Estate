import { PropertyCatalogPage } from "../components/property-catalog-page";

const listings = [
  { image: "/images/properties/3.jpeg", title: "Practical spaces for everyday life", location: "Well-suited for families", price: "Ask about availability", type: "Residential Rental", status: "Rent" },
  { image: "/images/properties/2.jpeg", title: "Contemporary apartment options", location: "Close to key local amenities", price: "Ask about availability", type: "Apartment Rental", status: "Rent" },
  { image: "/images/properties/1.jpeg", title: "Flexible city-facing spaces", location: "Connected to your routine", price: "Ask about availability", type: "Rental Listing", status: "Rent" },
  { image: "/images/properties/4.jpeg", title: "A bright place to settle in", location: "Comfortable neighbourhood living", price: "Ask about availability", type: "Apartment Rental", status: "Rent" },
] as const;

export default function RentPage() {
  return <PropertyCatalogPage eyebrow="RENT WITH EASE" title="The right rental, without the" accent="runaround." description="Tell us what will make daily life work better, and we&apos;ll help you find a space that feels right from day one." heroImage="/images/properties/3.jpeg" primaryAction="Find a rental" primaryHref="/contact" listings={listings} steps={["Share your preferred area, budget and move-in timing.", "Explore rentals matched to your practical needs.", "Settle in with clarity on the next steps."]} variant="rent" />;
}

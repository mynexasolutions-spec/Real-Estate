import { PropertyCatalogPage } from "../components/property-catalog-page";

const listings = [
  { image: "/images/properties/1.jpeg", title: "Modern mixed-use residence", location: "Prime connected location", price: "Enquire for price", type: "Featured Property", status: "For Sale" },
  { image: "/images/properties/2.jpeg", title: "Contemporary apartment building", location: "Close to everyday essentials", price: "Enquire for price", type: "Apartment", status: "For Sale" },
  { image: "/images/properties/3.jpeg", title: "Spacious family residence", location: "Growing residential neighbourhood", price: "Enquire for price", type: "Residential", status: "Available" },
  { image: "/images/properties/4.jpeg", title: "Bright corner apartments", location: "Well-connected local area", price: "Enquire for price", type: "Apartment", status: "For Sale" },
] as const;

export default function PropertiesPage() {
  return <PropertyCatalogPage eyebrow="PROPERTY COLLECTION" title="Find a place that feels" accent="like yours." description="A carefully considered selection of homes and investment opportunities, brought together by a local team you can trust." heroImage="/images/properties/1.jpeg" primaryAction="Explore with us" primaryHref="/contact" listings={listings} steps={["Share the kind of property and location you have in mind.", "Explore options chosen around your priorities.", "Move forward with clear, responsive support."]} />;
}

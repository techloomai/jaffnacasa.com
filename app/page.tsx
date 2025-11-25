import { Header } from "@/components/header";
import { HeroComingSoon } from "@/components/hero-coming-soon";
import { CountdownNotify } from "@/components/countdown-notify";
import { RoomsHighlights } from "@/components/rooms-highlights";
import { Attractions } from "@/components/attractions";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { SideStaggerNavigation } from "@/components/side-stagger-nav";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jaffnacasa.com";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Jaffna Casa",
  description:
    "A/C & Non A/C Rooms • 3 Bedroom + Hall + Kitchen • Perfect for Groups & Family. Guest house located in Sandilipay, Jaffna, Sri Lanka.",
  image: `${siteUrl}/logo.png`,
  url: siteUrl,
  telephone: "+94701188111",
  email: "jaffnacasasandilipay@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Seerani Junction, Keerimalai Road",
    addressLocality: "Sandilipay",
    addressRegion: "Jaffna",
    postalCode: "40098",
    addressCountry: "LK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "9.7489",
    longitude: "80.2206",
  },
  priceRange: "$$",
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Air Conditioning",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Kitchen",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Family Rooms",
      value: true,
    },
  ],
  numberOfRooms: {
    "@type": "QuantitativeValue",
    value: "3",
  },
  checkinTime: "14:00",
  checkoutTime: "11:00",
  sameAs: [
    "https://maps.app.goo.gl/R6QjdgCoJw1ePQZo6",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen">
        <SideStaggerNavigation />
        <Header>
          <section id="home">
            <HeroComingSoon />
          </section>
          <CountdownNotify />
          <section id="rooms">
            <RoomsHighlights />
          </section>
          <section id="attractions">
            <Attractions />
          </section>
          <ContactSection />
          <Footer />
        </Header>
      </main>
    </>
  );
}

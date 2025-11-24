import { Header } from "@/components/header";
import { HeroComingSoon } from "@/components/hero-coming-soon";
import { CountdownNotify } from "@/components/countdown-notify";
import { RoomsHighlights } from "@/components/rooms-highlights";
import { Attractions } from "@/components/attractions";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroComingSoon />
      <CountdownNotify />
      <RoomsHighlights />
      <Attractions />
      <ContactSection />
      <Footer />
    </main>
  );
}

import { Header } from "@/components/header";
import { HeroComingSoon } from "@/components/hero-coming-soon";
import { CountdownNotify } from "@/components/countdown-notify";
import { RoomsHighlights } from "@/components/rooms-highlights";
import { Attractions } from "@/components/attractions";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { SideStaggerNavigation } from "@/components/side-stagger-nav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SideStaggerNavigation />
      <Header />
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
    </main>
  );
}

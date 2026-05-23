import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ReelsGrid from "@/components/ReelsGrid";
import Manifesto from "@/components/Manifesto";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 80 }}>
        <Hero />
        <AboutUs />
        <Services />
        <Portfolio />
        <ReelsGrid />
        <section id="manifiesto">
          <Manifesto />
        </section>
        <Cta />
      </main>
      <Footer />
    </>
  );
}

import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Arsip Perencana | Jasa Arsitek & Desain Bangunan Profesional</title>
        <meta
          name="description"
          content="Arsip Perencana adalah studio arsitektur dengan teknologi BIM untuk desain rumah, gedung, dan bangunan. Konsultasi gratis, harga bersahabat, revisi tanpa batas."
        />
        <meta
          name="keywords"
          content="jasa arsitek, desain rumah, desain bangunan, BIM, arsitektur, DED, RAB, gambar kerja"
        />
        <meta property="og:title" content="Arsip Perencana | Jasa Arsitek Profesional" />
        <meta
          property="og:description"
          content="Studio arsitektur dengan teknologi BIM untuk desain rumah dan bangunan. Konsultasi gratis!"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://arsipperencana.vercel.app" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <ProblemSection />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;

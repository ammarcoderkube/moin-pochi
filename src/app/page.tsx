import PreloaderLogo from "@/components/Preloader/PreloaderLogo";
import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Work from "@/components/Work/Work";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import Cta from "@/components/Cta/Cta";
import Footer from "@/components/Footer/Footer";
import ExperienceController from "@/components/ExperienceController";

export default function Home() {
  return (
    <div className="page-wrap">
      <div className="capa-overview-wrap" />
      <PreloaderLogo />
      <Navigation />
      <main
        data-tl-desktop=""
        data-tl-type="trigger"
        data-tl-trigger=".hero"
        data-tl-start="53% top"
        data-tl-from="{'zIndex': 20}"
        data-tl-to="{'zIndex': 99, 'duration': 0.1}"
        className="main-wrap"
      >
        <Hero />
        <About />
        <Work />
        <Services />
        <Cta />
        <Testimonial />
      </main>
      <Footer />
      <ExperienceController />
    </div>
  );
}

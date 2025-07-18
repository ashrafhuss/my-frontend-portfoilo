import Image from "next/image";
import { PortfolioNavbar } from "./_components/Navbar";
import { HeroSection } from "./_components/Hero";
import { AboutSection } from "./_components/About";
import { ProjectsSection } from "./_components/Projects";
import { SkillsSection } from "./_components/Skills";
import { ContactSection } from "./_components/Contact";
import { TestimonialsSection } from "./_components/Testemonial";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
   <>
   <PortfolioNavbar />
    <HeroSection/>
    <AboutSection/>
    <ProjectsSection/>
    <SkillsSection/>
    <ContactSection/>
    {/* <TestimonialsSection/> */}
    <Footer/>
   </>
  );
}

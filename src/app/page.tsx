'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { PortfolioNavbar } from './_components/Navbar';
import { HeroSection } from './_components/Hero';
import { AboutSection } from './_components/About';
import { ProjectsSection } from './_components/Projects';
import { SkillsSection } from './_components/Skills';
import { ContactSection } from './_components/Contact';
import { TestimonialsSection } from './_components/Testemonial';
import { Footer } from './_components/Footer';

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    setColor(resolvedTheme === 'dark' ? '#ffffff' : '#000000');
  }, [resolvedTheme]);
  return (
    <>
      <PortfolioNavbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      {/* <TestimonialsSection/> */}
      <Footer />
    </>
  );
}

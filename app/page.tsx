"use client"
import { useEffect, useRef, useState } from "react";
import About from "./_sections/about/about";
import Contact from "./_sections/contact/contact";
import Header from "./_sections/header/header";
import Hero from "./_sections/hero/hero";
import Projects from "./_sections/projects/projects";
import colors from './colors.module.scss';

export default function Home() {
  const aboutSectionRef = useRef<HTMLElement | null>();
  const projectsSectionRef = useRef<HTMLElement | null>();
  const contactSectionRef = useRef<HTMLElement | null>();
  const [activeSection, setActiveSection] = useState<string | null>();

  const handleScroll = () => {
    const pageYOffset = window.scrollY;
    let newActiveSection = null;

    [aboutSectionRef.current, projectsSectionRef.current, contactSectionRef.current].forEach((section) => {
      if (section) {
        const sectionOffsetTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
          newActiveSection = section.id;
        }
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    console.log("assigning scroll")
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main className="flex flex-col">
        <section className="h-screen" id="hero" style={{ backgroundColor: colors.bg1 }}>
          <Hero />
        </section>
        <section ref={(el) => { aboutSectionRef.current = el }} className="h-full md:h-screen" id="about" style={{ backgroundColor: colors.bg2 }}>
          <About />
        </section>
        <section ref={(el) => { projectsSectionRef.current = el }} className="h-full md:h-screen" id="projects" style={{ backgroundColor: colors.bg1 }}>
          <Projects />
        </section>
        <section ref={(el) => { contactSectionRef.current = el }} className="h-full md:h-screen pb-10 md:pb-0" id="contact" style={{ backgroundColor: colors.bg2 }}>
          <Contact />
        </section>
      </main>
    </>
  )
}

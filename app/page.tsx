import About from "./_sections/about/about";
import Contact from "./_sections/contact/contact";
import Header from "./_sections/header/header";
import Hero from "./_sections/hero/hero";
import Projects from "./_sections/projects/projects";
import colors from './colors.module.scss';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <section className="h-screen" id="hero" style={{ backgroundColor: colors.bg1 }}>
          <Hero />
        </section>
        <section className="h-full md:h-screen" id="about" style={{ backgroundColor: colors.bg2 }}>
          <About />
        </section>
        <section className="h-full md:h-screen" id="projects" style={{ backgroundColor: colors.bg1 }}>
          <Projects />
        </section>
        <section className="h-full md:h-screen" id="contact" style={{ backgroundColor: colors.bg2 }}>
          <Contact />
        </section>
      </main>
    </>
  )
}

import Header from "./_components/header/header";
import Hero from "./_components/hero/hero";
import colors from './variables.module.scss';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <section id="hero" style={{ backgroundColor: colors.bg1 }}>
          <Hero />
        </section>
        <section id="about" style={{ backgroundColor: colors.bg2 }}>

        </section>
        <section id="projects" style={{ backgroundColor: colors.bg1 }}>

        </section>
        <section id="contact" style={{ backgroundColor: colors.bg2 }}>

        </section>
      </main>
    </>
  )
}

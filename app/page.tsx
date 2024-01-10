import Header from "./_components/header/header";
import Hero from "./_components/hero/hero";
import colors from './variables.module.scss';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <section className="h-screen" id="hero" style={{ backgroundColor: colors.bg1 }}>
          <Hero />
        </section>
        <section className="h-screen" id="about" style={{ backgroundColor: colors.bg2 }}>

        </section>
        <section className="h-screen" id="projects" style={{ backgroundColor: colors.bg1 }}>

        </section>
        <section className="h-screen" id="contact" style={{ backgroundColor: colors.bg2 }}>

        </section>
      </main>
    </>
  )
}

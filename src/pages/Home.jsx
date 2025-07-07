import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import WhyChooseUs from "../components/sections/WhyChooseUs"
import Services from "../components/sections/Services"
import Portfolio from "../components/sections/Portfolio"
import { Testimonials } from "../components/sections/Testimonials"


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <Testimonials/>
    </main>
  )
}

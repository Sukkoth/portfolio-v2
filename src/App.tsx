import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Experience } from "./components/sections/Experience"
import { TechStack } from "./components/sections/TechStack"
import { Projects } from "./components/sections/Projects"
import { Contact } from "./components/sections/Contact"
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Analytics/>
    </div>
  )
}

export default App
import { Helmet } from 'react-helmet-async'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { TechStack } from './components/sections/TechStack'
import { Experience } from './components/sections/Experience'
import { Contact } from './components/sections/Contact'
import { personalInfo } from './data/personal'

function App() {
  return (
    <>
      <Helmet>
        <title>{personalInfo.name} — {personalInfo.role}</title>
        <meta name="description" content={personalInfo.tagline} />
        <meta property="og:title" content={`${personalInfo.name} — ${personalInfo.role}`} />
        <meta property="og:description" content={personalInfo.tagline} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App

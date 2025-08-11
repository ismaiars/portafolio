import { Suspense } from 'react'
import { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import About from '@/components/sections/about'
import Methodology from '@/components/sections/methodology'
import Timeline from '@/components/sections/timeline'
import Projects from '@/components/sections/projects'
import Contact from '@/components/sections/contact'
import { Navigation } from '@/components/sections/navigation'
import { Footer } from '@/components/sections/footer'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Portafolio de Ismael Salazar - Desarrollador Full Stack especializado en Node.js, Python, Next.js y tecnologías modernas.',
}

const personalInfo = {
  name: 'Ismael Salazar',
  title: 'Full Stack Developer',
  description: 'Desarrollador Full Stack especializado en Node.js, Python, Next.js y tecnologías modernas.',
  email: 'iarsfate@gmail.com',
  location: 'Toluca, México',
  website: 'https://ismael-salazar-iars.vercel.app',
  avatar: '/images/avatar.jpg',
  resume: '/docs/cv_ismael_salazar.pdf'
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={personalInfo} />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        <Suspense fallback={<LoadingSpinner />}>
          {/* Hero Section */}
          <section id="home" className="min-h-screen">
            <Hero />
          </section>
          
          {/* About Section */}
          <section id="about" className="py-12 md:py-20">
            <About />
          </section>
          
          {/* Methodology Section */}
          <section id="methodology" className="py-12 md:py-20">
            <Methodology />
          </section>
          
          {/* Timeline Section */}
          <section id="timeline" className="py-12 md:py-20">
            <Timeline />
          </section>
          
          {/* Projects Section */}
          <section id="projects" className="py-12 md:py-20">
            <Projects />
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="py-12 md:py-20">
            <Contact />
          </section>
        </Suspense>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  )
}
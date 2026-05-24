import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import AppPreview from '@/components/landing/AppPreview'
import MicroLearning from '@/components/landing/MicroLearning'
import HowItWorks from '@/components/landing/HowItWorks'
import StreakSection from '@/components/landing/StreakSection'
import Courses from '@/components/landing/Courses'
import Features from '@/components/landing/Features'
import Testimonials from '@/components/landing/Testimonials'
import Pricing from '@/components/landing/Pricing'
import FAQ from '@/components/landing/FAQ'
import CTA from '@/components/landing/CTA'
import Footer from '@/components/landing/Footer'

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AppPreview />
      <MicroLearning />
      <HowItWorks />
      <StreakSection />
      <Courses />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

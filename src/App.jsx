import { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

const Problem = lazy(() => import('./sections/Problem'))
const Features = lazy(() => import('./sections/Features'))
const HowItWorks = lazy(() => import('./sections/HowItWorks'))
const Pricing = lazy(() => import('./sections/Pricing'))
const Testimonials = lazy(() => import('./sections/Testimonials'))
const FAQ = lazy(() => import('./sections/FAQ'))
const FinalCTA = lazy(() => import('./sections/FinalCTA'))
const Footer = lazy(() => import('./sections/Footer'))

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-bg text-gray-200">
        <Navbar />
        <Hero />
        <Suspense fallback={null}>
          <Problem />
          <Features />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <FAQ />
          <FinalCTA />
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App

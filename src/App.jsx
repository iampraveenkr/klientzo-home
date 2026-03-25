import { BrowserRouter } from 'react-router-dom'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import Pricing from './sections/Pricing'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-bg text-gray-200">
        <Navbar />
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

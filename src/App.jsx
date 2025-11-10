import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <WhyUs />
        <Testimonials />
        <CTA />
      </main>
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Sinar Turbo Sparepart. All rights reserved.</p>
          <nav className="flex gap-6 text-sm">
            <a href="#services" className="hover:text-white">Layanan</a>
            <a href="#products" className="hover:text-white">Sparepart</a>
            <a href="#contact" className="hover:text-white">Kontak</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App

import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">
              ST
            </div>
            <span className="font-bold text-gray-800">Sinar Turbo Sparepart</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-gray-900">Layanan</a>
            <a href="#products" className="hover:text-gray-900">Sparepart</a>
            <a href="#why" className="hover:text-gray-900">Kenapa Kami</a>
            <a href="#testimonials" className="hover:text-gray-900">Testimoni</a>
            <a href="#contact" className="hover:text-gray-900">Kontak</a>
            <a href="#contact" className="ml-2 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Pesan Sekarang</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <span className="sr-only">Toggle Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-3 text-gray-700">
            <a href="#services" className="block">Layanan</a>
            <a href="#products" className="block">Sparepart</a>
            <a href="#why" className="block">Kenapa Kami</a>
            <a href="#testimonials" className="block">Testimoni</a>
            <a href="#contact" className="block">Kontak</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white">Pesan Sekarang</a>
          </div>
        </div>
      )}
    </header>
  )
}

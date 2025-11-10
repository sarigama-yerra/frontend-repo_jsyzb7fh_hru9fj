export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold">Butuh Bantuan Sekarang?</h2>
        <p className="mt-2 text-blue-100">Hubungi kami untuk layanan tambal ban on-call atau tanya stok sparepart.</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a href="tel:+6281234567890" className="inline-flex items-center rounded-md bg-white text-blue-700 px-5 py-3 font-semibold hover:bg-blue-50">☎️ 0812-3456-7890</a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-white px-5 py-3 font-semibold hover:bg-white/10">💬 WhatsApp</a>
        </div>
        <p className="mt-4 text-sm text-blue-100">Jl. Contoh No. 123, Jakarta • Buka: 08.00 - 21.00 • Panggilan darurat 24/7</p>
      </div>
    </section>
  )
}

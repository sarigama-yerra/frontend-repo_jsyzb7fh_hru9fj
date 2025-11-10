export default function Testimonials() {
  const list = [
    { name: 'Andi, Jakarta', text: 'Layanannya cepat, teknisinya ramah. Ban bocor ditangani di tempat, selesai 20 menit!' },
    { name: 'Sinta, Depok', text: 'Belanja aki dan oli di sini, harganya bersaing dan ada garansi. Recommended!' },
    { name: 'Budi, Bekasi', text: 'Panggil malam-malam tetap dilayani. Mantap, mobil bisa dipakai lagi.' },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Apa Kata Pelanggan</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {list.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <div className="text-4xl">⭐️⭐️⭐️⭐️⭐️</div>
              <p className="mt-4 text-gray-700">“{t.text}”</p>
              <p className="mt-3 text-sm text-gray-500">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

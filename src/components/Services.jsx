export default function Services() {
  const items = [
    { title: 'Tambal Ban Darurat', desc: 'Panggilan 24/7, datang ke lokasi Anda untuk perbaikan cepat dan aman.', icon: '🧰' },
    { title: 'Ganti Ban/Velg', desc: 'Stok ban berbagai ukuran, balancing & spooring bekerjasama dengan partner.', icon: '🛞' },
    { title: 'Oli & Aki', desc: 'Tersedia oli mesin, transmisi, aki kering/basah dari brand terpercaya.', icon: '⚡' },
    { title: 'Rem & Suspensi', desc: 'Kampas rem, shockbreaker, bushing, dan komponen kaki-kaki lainnya.', icon: '🛠️' },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Layanan Utama</h2>
        <p className="mt-2 text-center text-gray-600">Semua kebutuhan perbaikan ringan & sparepart mobil tersedia.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-4 font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

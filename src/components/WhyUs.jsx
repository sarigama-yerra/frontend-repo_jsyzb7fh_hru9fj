export default function WhyUs() {
  const points = [
    { title: 'Respon Cepat', desc: 'Tim kami siap melayani panggilan darurat kapan pun Anda butuh.' },
    { title: 'Produk Original', desc: 'Kami hanya menjual sparepart original atau OEM berkualitas.' },
    { title: 'Teknisi Berpengalaman', desc: 'Ditangani mekanik bersertifikat dan berpengalaman.' },
    { title: 'Garansi Layanan', desc: 'Jaminan purna jual untuk setiap layanan & produk.' },
  ]

  return (
    <section id="why" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold text-gray-900">Kenapa Pilih Kami?</h2>
          <p className="mt-2 text-gray-600">Pelayanan profesional, produk terjamin, dan harga bersahabat.</p>

          <div className="mt-8 space-y-5">
            {points.map((p) => (
              <div key={p.title} className="flex items-start gap-4">
                <span className="mt-1 h-6 w-6 rounded-full bg-green-100 text-green-700 grid place-items-center">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">{p.title}</p>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl border border-gray-200 p-4">
            <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_30%_20%,#bbf7d0,transparent_40%),radial-gradient(circle_at_70%_60%,#86efac,transparent_35%)] grid place-items-center">
              <div className="text-center">
                <div className="text-7xl">🧲</div>
                <p className="mt-4 font-semibold text-gray-700">Alat & Material Berkualitas</p>
                <p className="text-sm text-gray-500">Menjamin hasil rapi dan tahan lama</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Products() {
  const products = [
    { name: 'Ban Mobil R15', price: 'Rp 750.000', tag: 'Best Seller' },
    { name: 'Aki 45Ah', price: 'Rp 1.100.000', tag: 'Garansi 6 bulan' },
    { name: 'Oli 5W-30 4L', price: 'Rp 450.000', tag: 'Diskon 10%' },
    { name: 'Kampas Rem Depan', price: 'Rp 320.000', tag: 'Original Part' },
    { name: 'Busi Iridium', price: 'Rp 180.000', tag: 'Hemat BBM' },
    { name: 'Filter Oli', price: 'Rp 85.000', tag: 'Universal' },
  ]

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Sparepart Populer</h2>
            <p className="mt-2 text-gray-600">Harga kompetitif dan kualitas terjamin.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Minta Daftar Lengkap</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group rounded-2xl bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-[4/3] bg-[radial-gradient(circle_at_30%_20%,#e5e7eb,transparent_40%),radial-gradient(circle_at_70%_60%,#d1d5db,transparent_35%)]"></div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{p.name}</h3>
                  <span className="text-xs bg-blue-600/10 text-blue-700 px-2 py-1 rounded">{p.tag}</span>
                </div>
                <p className="mt-2 font-bold text-gray-900">{p.price}</p>
                <a href="#contact" className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700">Pesan sekarang →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

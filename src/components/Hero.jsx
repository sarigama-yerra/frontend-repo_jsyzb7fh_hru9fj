export default function Hero() {
  return (
    <section id="home" className="pt-28 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Solusi Tambal Ban & Sparepart Mobil Terlengkap
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Layanan panggilan tambal ban darurat, penggantian ban, hingga penjualan oli, aki, kampas rem, dan sparepart lainnya. Cepat, terpercaya, dan bergaransi.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700">Hubungi Sekarang</a>
            <a href="#products" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-white font-semibold hover:bg-gray-800">Lihat Sparepart</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500"></span>Siap 24/7</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500"></span>Teknisi Berpengalaman</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-yellow-500"></span>Harga Transparan</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl border border-blue-100 p-4">
            <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_30%_20%,#bfdbfe,transparent_40%),radial-gradient(circle_at_70%_60%,#93c5fd,transparent_35%)] grid place-items-center">
              <div className="text-center">
                <div className="text-7xl">🛞</div>
                <p className="mt-4 font-semibold text-gray-700">Layanan Tambal Ban On-Call</p>
                <p className="text-sm text-gray-500">Datang ke lokasi Anda dalam 30-60 menit*</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white border shadow-md rounded-xl px-4 py-3 text-sm">
            <p className="font-semibold">Gratis Cek Tekanan Angin</p>
            <p className="text-gray-500">untuk setiap pembelian ban</p>
          </div>
        </div>
      </div>
    </section>
  )
}

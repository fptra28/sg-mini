## [Unreleased]

### Added
- Halaman Panduan Trade Pilot kini menjadi pusat pengetahuan interaktif yang responsif dengan pencarian, filter kategori, materi mulai cepat, daftar artikel, mode baca, running text harga live, serta konten Indonesia dan Inggris yang mengikuti panel, tipografi, spacing, dan aksen kuning halaman Trade Pilot lainnya.
- Tabel statis Performa per Timeframe untuk XAU/USD ditambahkan pada Riwayat Performa Trade Pilot dengan delapan timeframe, metrik sampel/status/SL/TP, win rate, completion rate, kolom pertama sticky, dan horizontal scroll responsif.
- Riwayat Performa Trade Pilot kini dilengkapi tiga insight timeframe statis dan ringkasan performa XAU/USD berisi jumlah sampel, win rate, TP, SL, progress outcome, serta aksi lihat riwayat dalam layout responsif tanpa ruang kosong berlebih.
- Section statis Trading Plan Adaptif ditambahkan pada Analisis Trade Pilot dengan pilihan akun dan profil risiko, input finansial contoh, status rekomendasi, diagnostik risiko minimum, peringatan keamanan, serta skenario Buy/Sell responsif.
- Banner statis Ringkasan Konteks Pasar ditambahkan pada Analisis Trade Pilot dengan varian bullish/bearish yang menggunakan aset `bullishBG.png` dan `bearishBG.png`, lengkap dengan ringkasan indikator dwibahasa dan layout responsif.
- Section statis Konteks Fundamental ditambahkan pada Analisis Trade Pilot dengan tab berita, akses Kalender Ekonomi, daftar berita terkait, serta tautan menuju halaman News Client Area.
- Section hasil Analisis Trade Pilot ditambahkan dengan status instrumen, timeframe, gauge bias arah, preview grafik harga, serta perbandingan skenario Buy/Sell menggunakan dataset statis sementara sebagai placeholder keluaran engine analisis.
- Kontrol Trade Pilot kini interaktif: pergantian instrumen dan timeframe memperbarui widget, tombol pengaturan/indikator membuka toolbar TradingView, fullscreen memakai Fullscreen API, dan Capture Chart mengunduh tangkapan panel sebagai PNG melalui Screen Capture API.
- Modul Trade Pilot Client Area kini memiliki tiga route terlokalisasi: Analisis, Riwayat Performa, dan Panduan, lengkap dengan dropdown submenu pada sidebar serta metadata per halaman.
- Running text harga live berbasis WebSocket yang bergerak kontinu dari kanan ke kiri ditambahkan khusus pada halaman Trade Pilot untuk XAUUSD, BCO, HKK, dan JPK, dengan simbol berakhiran atau mengandung `NC` selalu dikecualikan.
- Menu Trade Pilot ditambahkan ke sidebar desktop dan mobile Client Area, lengkap dengan route terlokalisasi dan penanda navigasi aktif.
- Header keamanan HTTP (`nosniff`, frame policy, referrer policy, permissions policy, dan HSTS pada production) ditambahkan ke aplikasi website publik dan Client Area.
- Dokumentasi implementasi reCAPTCHA v3 ditambahkan untuk menjelaskan konsep, konfigurasi, alur verifikasi, dan panduan deployment.

### Changed
- Section Konteks Fundamental Trade Pilot kini memiliki tab Berita Terkini dan Kalender Ekonomi yang mengganti konten di tempat tanpa navigasi; tab kalender menampilkan hingga lima event hari ini dari sumber kalender ekonomi yang sama dengan dashboard, tombol refresh memuat ulang data server, dan CTA Pelajari menyesuaikan konten aktif.
- Grafik pada hasil Analisis Trade Pilot kini memakai widget TradingView asli dengan sumber `OANDA:XAUUSD`, menggantikan candle sintetis Lightweight Charts agar harga, candle, skala, serta perilaku pan/zoom konsisten dengan chart TradingView utama; angka harga statis di header hasil juga diganti dengan identitas sumber data agar tidak menampilkan quote yang berbeda.
- Ringkasan statistik Riwayat Performa Trade Pilot didesain ulang menjadi panel tujuh kartu dengan Total Analisis sebagai anchor visual dan tone berbeda untuk status valid, expired, SL, TP1, TP2, serta invalid; konten riwayat juga dipisahkan dari placeholder Panduan dan dilokalkan ke Indonesia serta Inggris.
- Kartu statistik Riwayat Performa dipadatkan menjadi layout horizontal ikon–angka dengan label tepat di bawah angka, sekaligus mengurangi tinggi minimum, padding panel, dan jarak antarkartu agar tidak menyisakan ruang kosong berlebih.
- Warna harga dan ikon arah pada running text Trade Pilot kini dihitung dari perbandingan harga sekarang terhadap harga open; hasil naik berwarna hijau dengan ikon panah atas, sedangkan hasil turun berwarna merah dengan ikon panah bawah tanpa status netral.
- Skala tipografi halaman Analisis Trade Pilot diperkecil secara menyeluruh pada heading, harga, label kontrol, berita, banner konteks pasar, dan Trading Plan agar hierarki lebih rapat serta nyaman dibaca di area konten Client Area.
- Hasil Analisis Trade Pilot dipisahkan dari instrumen, timeframe, dan harga WebSocket pada chart utama agar mockup statis tidak disalahartikan sebagai hasil kalkulasi live.
- Komponen halaman Analisis Trade Pilot dipisahkan mengikuti atomic design: tombol kecil di `atoms`, picker/header/toolbar di `molecules`, komposisi chart di `organisms`, serta konfigurasi instrumen pada modul shared.
- Tampilan halaman Analisis Trade Pilot diselaraskan dengan referensi desain melalui panel pemilih instrumen, ringkasan harga live, kontrol timeframe, dan chart TradingView responsif untuk XAU/USD, BCO, HKK, serta JPK.
- Halaman Trade Pilot Client Area dipindahkan dari route `/client-area/trade-pilot` ke `/client-area/trade-pilot/analisis`; link sidebar dan metadata canonical kini menggunakan route baru.
- Dependency `lucide-react` pada workspace Client Area diperbarui dari versi `1.23.0` ke `1.52.0` agar instalasi ikon tersinkronisasi dengan registry dan lockfile terbaru.
- Logging error server Client Area kini memakai ringkasan yang dibatasi agar stack trace dan payload upstream yang berpotensi sensitif tidak tercetak; error browser nonkritis juga hanya dicatat pada development.
- Token Historical Data dan Economic Calendar tidak lagi memiliki nilai default hardcoded dan sekarang wajib dipasok melalui environment deployment.
- Tautan menu Akun Reguler pada navbar website publik dan Client Area bahasa Indonesia kini membuka situs khusus `reguler.sg-berjangka.com`, menggantikan halaman produk lokal.
- Fallback autentikasi dummy pada login dan verifikasi OTP Client Area dinonaktifkan; sesi kini hanya dibuat setelah server UAT mengembalikan token yang valid, sedangkan kegagalan API ditampilkan sebagai error pada form.
- Login dan integrasi API Client Area kini menggunakan flavor server UAT secara default, sehingga endpoint SSO tidak lagi mengarah ke server development yang tidak terjangkau.
- Fitur Referral Code dinonaktifkan sementara melalui feature flag internal; item menu Account tetap terlihat dalam keadaan terkunci dan akses URL langsung diarahkan kembali ke halaman Account, sementara implementasi desainnya tetap dipertahankan untuk aktivasi berikutnya.
- Tombol kembali pada halaman Referral Code kini mengikuti gaya tombol kembali subhalaman Account lainnya, termasuk border, latar gelap, jarak, dan warna hover.
- Halaman Referral Code didesain ulang menjadi halaman utilitas akun yang menampilkan kode dan link referral aktif dengan aksi salin, alur penggunaan berbentuk timeline, dan CTA registrasi; banner serta susunan card promosi lama dihapus.
- Label layanan referral pada menu Account kini menggunakan nama `Referral Code` dalam Bahasa Indonesia dan Inggris, menggantikan `Referral SG Solid`/`SG Solid Referral`.
- Menu layanan Account pada Client Area kini menggunakan daftar baris ringkas dengan pemisah, menggantikan tampilan grid kartu agar navigasi lebih sederhana.
- Panduan penggunaan Client Area kini menyertakan tautan langsung ke halaman login Client Area bahasa Indonesia agar pengguna dapat mengaksesnya dari langkah login.
- Routing deployment dipisahkan secara eksplisit: halaman publik memakai `mini.sg-berjangka.com`, sedangkan login dan seluruh halaman Client Area memakai `client-mini.sg-berjangka.com`.
- Docker build dan runtime kini meneruskan `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CLIENT_SITE_URL`, dan `NEXT_PUBLIC_WEBSITE_URL` secara konsisten ke masing-masing aplikasi.

### Fixed
- Running text Trade Pilot kini memprioritaskan simbol kontrak yang benar-benar diperbarui oleh WebSocket (`XUL10`, `BCO10_BBJ`, `HKK50_BBJ`, dan `JPK50_BBJ`) serta menampilkan field `price` tanpa fallback bid/ask, sehingga pergerakan angka mengikuti tick feed utama.
- Widget TradingView pada Analisis Trade Pilot kini di-remount dengan container baru ketika instrumen, timeframe, atau visibilitas toolbar berubah, sehingga chart selalu mengikuti kontrol yang dipilih dan tidak mempertahankan iframe lama.
- Layout Analisis Trade Pilot kini responsif terhadap ruang konten setelah sidebar: susunan dua kolom hanya aktif pada layar lebar, kartu status tidak meluber, timeframe dapat digulir horizontal, kontrol chart dapat membungkus, dan informasi harga tetap terbaca pada layar kecil.
- Ikon dan konten interaktif Trade Pilot kini dirender melalui Client Component khusus dengan named export Lucide yang valid agar tidak menjadi elemen `undefined` pada runtime.
- Pengiriman OTP otomatis saat form verifikasi dibuka kini menjalankan Server Action di dalam React transition, sehingga tidak lagi memunculkan error `useActionState` dan status pending tetap diperbarui dengan benar.
- Login Client Area kini mengenali respons sukses UAT dengan pesan `need OTP Authorization` sebagai sesi sementara untuk verifikasi OTP, sehingga token pra-OTP tidak dapat langsung membuat sesi dan melewati halaman OTP.
- Route locale dasar pada deployment Client Area, seperti `/id` dan `/en`, kini diarahkan ke halaman login Client Area dan tidak lagi menghasilkan halaman 404.
- Tautan kembali dari Client Area kini memakai origin website publik yang dikonfigurasi, sementara route Client Area lama pada website diarahkan ke deployment Client Area.
- Route halaman publik yang tidak sengaja dibuka melalui domain Client Area kini dialihkan kembali ke domain website publik dengan path locale dan query string tetap dipertahankan.
- Override `SG_ADMIN_REQUEST_ORIGIN` berbasis localhost dihapus dari environment produksi agar request website dan Client Area mengirim origin deployment masing-masing ke SG Admin.
- Konfigurasi nginx kini mengenali hostname mini untuk website publik dan Client Area.

## [0.1.0] - 2026-09-25

### Added
- Client Area kini memiliki page template admin tersendiri untuk sesi terautentikasi, lengkap dengan sidebar persisten, top bar responsif, drawer navigasi mobile, ringkasan profil, pemilih bahasa, notifikasi, iklan sidebar, dan aksi logout global tanpa memakai template website publik.
- Repository diubah menjadi monorepo npm workspaces dengan aplikasi `apps/website` dan `apps/client-area` yang memiliki source, asset, konfigurasi Next.js, perintah development, dan target deployment independen.
- Data sensitif berupa nomor identitas dan NPWP pada Profil Client Area kini memiliki aksi lihat dan konfirmasi password masing-masing melalui Server Action; server hanya mengirim field yang diminta, memeriksa sesi aktif, dan otomatis menyamarkan kembali data setelah dua menit.
- Halaman Daily Statement ditambahkan ke Account Client Area dengan tab Account Statement, Open Position, dan Settled Statement yang memiliki state aktif maupun nonaktif yang tegas, ringkasan finansial serta posisi demo yang responsif, dan aksi unduh PDF berdasarkan tab aktif.
- Halaman Dokumen Persetujuan ditambahkan ke Account Client Area dengan daftar formulir PBK/CDDS bergaya kartu gelap dan tipografi ringkas sesuai design system, aksi unduh PDF per dokumen, metadata rekening aktif, serta salinan konten Indonesia dan Inggris.
- Disclaimer dwibahasa ditambahkan di bagian bawah seluruh halaman Client Area untuk menegaskan bahwa semua informasi, data, grafik, dan fitur bersifat hanya untuk dilihat (view only) dan tidak dapat digunakan untuk mengeksekusi transaksi.
- Konfigurasi root `vercel.json` ditambahkan dengan schema resmi Vercel dan framework preset Next.js agar konfigurasi deployment dapat divalidasi dan dikenali secara eksplisit.

### Changed
- Halaman login Client Area kini memakai layout full-screen berbasis tinggi viewport; panel login dan visual mengisi seluruh ruang yang tersedia sementara disclaimer tetap berada di bagian bawah tanpa menyisakan area kosong pada layar desktop besar.
- Shell admin Client Area kini memakai sidebar dashboard konvensional yang lebih ringkas dengan navigasi flat serta profil dan logout di bagian bawah; banner iklan dikeluarkan dari sidebar, sementara top bar dibuat fixed dan konten diberi offset agar tidak tertutup saat halaman digulir.
- Website publik tidak lagi membaca sesi Client Area; tombol Client Area sekarang menuju deployment eksternal melalui `NEXT_PUBLIC_CLIENT_AREA_URL`, sementara route lama dialihkan untuk menjaga kompatibilitas tautan.
- Aplikasi Client Area hanya mengekspos route Client Area dan mengarahkan root langsung ke halaman login bahasa Indonesia.
- Setiap informasi pada accordion Profil Client Area kini ditampilkan sebagai kartu terpisah dengan border dan latar gelap, tetap responsif dalam satu kolom di mobile dan dua kolom di layar lebih besar.
- Status akun demo pada Client Area kini menggunakan label ringkas `Verified`, dan nomor telepon kontak darurat demo ditampilkan lengkap.
- Tombol Client Area di navbar kini menampilkan foto profil nasabah dengan ring beraksen emas ketika sesi login aktif; ikon akun tetap digantikan secara aman hanya pada kondisi terautentikasi.
- Halaman Account Client Area didesain ulang dengan kartu identitas nasabah sebagai header utama bersama di seluruh route Account. Header menampilkan foto, nama, email, status verifikasi, keamanan, dan nomor akun; konten layanan, Profile, atau Referral berubah di bawahnya tanpa menduplikasi kartu identitas.
- Tampilan Profil Client Area diselaraskan dengan referensi `client-dashboard-ui-design`: kartu identitas beraksen emas kini memakai foto profil, status akun, dan nomor rekening, sedangkan Data Pribadi, Tujuan Pembukaan Rekening, Data Darurat, Data Pekerjaan, dan Data Kekayaan ditata dalam accordion view-only eksklusif berisi dataset demo lengkap, sehingga membuka satu bagian otomatis menutup bagian lainnya. Mode akun Demo/Real tidak ditampilkan karena bukan bagian dari identitas profil nasabah.
- Halaman Profil di Client Area kini sepenuhnya view-only dan hanya menampilkan data akun yang tersedia tanpa input, tombol simpan, placeholder, atau pesan prototipe.
- Live quote kini membuka WebSocket upstream langsung dari browser melalui `NEXT_PUBLIC_LIVE_QUOTE_SOCKET_URL`, menggantikan relay SSE `/api/live-quotes`; broker WebSocket server dihapus agar koneksi realtime tidak mempertahankan Vercel Function dan mengonsumsi Provisioned Memory selama stream aktif.
- Folder `proposal-assets/` dan arsip `proposal-assets-sgb.zip` kini diabaikan oleh Git agar materi proposal lokal tidak ikut masuk repository.
- Folder konfigurasi lokal `nginx/` dan skrip screenshot lokal `.screenshot-sgb.mjs` kini diabaikan oleh Git agar artefak lingkungan pengembangan tidak ikut masuk repository.
- Login Client Area kini menggunakan reCAPTCHA v3 tak terlihat dengan action khusus `client_area_login`; verifikasi server juga memeriksa skor (default minimum `0.65`), action, dan hostname agar token tidak dapat digunakan lintas konteks.
- Fetching berita di `src/lib/news.ts` kini menggunakan API SG Admin (`/api/v1/berita`) beserta header `X-API-Key` dari `SG_ADMIN_API_KEY`, menggantikan API Newsmaker dan bearer token. Adapter berita juga mendukung respons list yang dipaginasi serta variasi field konten, kategori, dan gambar dari API baru.
- Halaman publik `/education/ebook` kini memakai layout library editorial dengan CTA yang menggulir ke koleksi kategori. Seluruh CTA login Client Area dan download aplikasi dihapus agar materi ebook dapat dijelajahi langsung.

### Fixed
- Wrapper form login Client Area kembali memakai lebar penuh hingga `27.5rem`, sehingga penambahan tautan kembali tidak membuat card dan field form menyusut mengikuti lebar konten.
- Tautan kembali pada form login Client Area kini mengarah ke route dashboard Client Area sesuai locale dan tidak lagi memakai `href` kosong.
- Komposisi halaman login Client Area kini berada di dalam container desktop terpusat dengan gutter kanan-kiri yang seimbang, jarak antarpanel yang lebih rapi, serta lebar form dan area visual yang lebih proporsional; visual utama dibuat sedikit lebih dominan sambil mempertahankan rasio aslinya agar ponsel dan ilustrasi tidak terpotong.
- Docker build monorepo kini menyalin manifest package setiap workspace sebelum `npm ci`, sehingga dependency terpasang di tahap `deps` dan `/app/node_modules` tersedia untuk tahap builder. Build context juga mengecualikan output Next.js, cache dependency, dan aset proposal lokal agar transfer context lebih kecil.
- Bubble Live Chat tidak lagi dipaksa menjadi `76x76px` oleh `TawkChatWidget`; ukuran bubble, badge, dan posisi panel kini sepenuhnya mengikuti konfigurasi responsif dari `widget.js`.
- Gambar pada card berita dari SG Admin kini mengutamakan `image_url` dan selalu dimuat melalui proxy internal. Path lama `uploads/...` juga dinormalisasi menjadi URL storage yang benar, sehingga gambar tidak gagal saat diakses langsung oleh browser.
- Tombol pemulihan pada error boundary global, locale, dan Client Area kini memakai callback `retry` dari Next.js 16.3, sehingga tidak lagi memanggil prop `unstable_retry` yang tidak tersedia di production bundle.

### Changed
- Kontrol kategori dan rentang tanggal pada Historical Data Browser kini ditampilkan melalui tombol dan modal yang berada di tengah layar pada perangkat mobile. Modal dirender langsung ke halaman utama agar tidak terpengaruh animasi atau container konten.
- Output standalone Next.js kini hanya digunakan di luar Vercel, sehingga deployment Vercel tidak gagal saat proses packaging pada Next.js 16.3.

### Removed
- Menu, halaman, route, salinan konten, dan dokumentasi pengguna untuk fitur Dokumen Persetujuan di Client Area telah dihapus.
- Seluruh integrasi deployment Cloudflare/OpenNext dihapus, termasuk konfigurasi Worker dan R2, skrip `cf:*`, dependensi terkait, dan origin tunnel `trycloudflare.com`; deployment Cloudflare tidak lagi didukung oleh repository ini.
- Integrasi Vercel Web Analytics di root layout dihapus; aplikasi tetap memakai Firebase Analytics melalui `FirebaseBootstrap`.

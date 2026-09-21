# LMS Mobile App - iPhone 17 Pro Max (Frontend & Backend)

Aplikasi mobile LMS yang dirancang presisi sesuai spesifikasi **iPhone 17 Pro Max** (resolusi 440 × 956 pt / rasio 19.5:9), terdiri dari layar **Login** dan **Dashboard** yang saling terhubung secara interaktif, dengan struktur proyek yang rapi terbagi menjadi **Frontend** dan **Backend**.

---

## 🔑 Kredensial Login

- **ID / NIP / NIM**: `Admin` (atau `admin`)
- **Password**: `Admin123`

> Saat kredensial dimasukkan dengan benar, aplikasi akan menampilkan animasi loading lalu secara mulus beralih ke layar **Dashboard**. Jika salah, akan muncul notifikasi error pop-up (toast).

---

## 📂 Struktur Direktori Proyek

```text
mobile-apps-kita/
├── index.html                      # Root redirect otomatis ke frontend/index.html
├── README.md                       # Dokumentasi utama proyek
│
├── frontend/                       # 🌐 KODE FRONTEND (MOBILE WEB & APP)
│   ├── .vscode/                    # Rekomendasi ekstensi VS Code otomatis
│   │   ├── extensions.json
│   │   └── settings.json
│   ├── index.html                  # Layar 1: Login LMS (iPhone 17 Pro Max)
│   ├── dashboard.html              # Layar 2: Dashboard LMS (iPhone 17 Pro Max)
│   ├── css/
│   │   ├── common.css              # Shared styles: Frame bezel iPhone 17 Pro Max, Status bar, Dynamic Island
│   │   ├── auth.css                # Styling khusus formulir login & logo toga
│   │   └── dashboard.css           # Styling khusus dashboard: header Jakii, search, card mata kuliah, bottom tab bar
│   ├── js/
│   │   ├── auth.js                 # Logika verifikasi kredensial Admin/Admin123 & redirect
│   │   └── dashboard.js            # Fitur search filter realtime, tab switching, dan modal logout
│   └── mobile_code/                # 📱 Komponen Multi-Platform (Bonus)
│       ├── flutter_login_screen.dart
│       ├── flutter_dashboard_screen.dart
│       ├── ReactNativeLoginScreen.jsx
│       └── ReactNativeDashboardScreen.jsx
│
└── backend/                        # ⚙️ KODE BACKEND (NODE.JS API)
    ├── package.json
    ├── server.js                   # REST API server (Auth login, courses, user profile)
    └── README.md                   # Petunjuk menjalankan backend
```

---

## 🚀 Cara Menjalankan & Membuka di VS Code

### 1. Menjalankan Frontend di VS Code (Dengan Ekstensi Mobile)

#### Pilihan A: Menggunakan Ekstensi "Mobile View" / "Device Simulator"
1. Buka folder `c:\mobile apps kita` di VS Code.
2. Pasang ekstensi **Mobile View** (`poyarkov.mobile-view`) atau **Device Simulator** dari panel Extensions (`Ctrl + Shift + X`).
3. Buka file `frontend/index.html`, klik kanan lalu pilih **Open in Mobile View**.
4. Masukkan ID: `Admin` dan Password: `Admin123`, lalu klik **Masuk** untuk langsung berpindah ke layar **Dashboard**.

#### Pilihan B: Menggunakan Ekstensi "Live Server"
1. Klik kanan pada file `frontend/index.html` (atau `index.html` root) lalu pilih **Open with Live Server**.
2. Di browser Anda, tekan `F12` lalu aktifkan **Toggle Device Toolbar** (`Ctrl + Shift + M`).
3. Pilih perangkat **iPhone 16/17 Pro Max** atau atur ukuran ke `440 × 956`.

#### Pilihan C: Buka Langsung Tanpa Ekstensi
- Klik dua kali file `frontend/index.html` langsung di Windows Explorer.
- Layar otomatis terbungkus dalam **Frame Bezel Fisik iPhone 17 Pro Max** yang elegan lengkap dengan Dynamic Island dan tombol sakelar toolbar.

---

### 2. Menjalankan Server Backend (Opsional)

Backend bekerja secara independen menggunakan pustaka bawaan Node.js (tanpa perlu `npm install`):

1. Buka terminal di VS Code (`Ctrl + ~`).
2. Masuk ke folder backend dan jalankan:
   ```bash
   cd backend
   node server.js
   ```
3. Server aktif di `http://localhost:4000`. Frontend secara otomatis akan berkomunikasi dengan API backend jika server sedang menyala, dan tetap dapat bekerja secara *offline/standalone* jika server belum dinyalakan.

---

## 🎨 Fitur-Fitur Layar Dashboard (Sesuai Referensi)

1. **Header Pengguna**:
   - Avatar bundar biru lembut.
   - Nama: **Halo, Jakii**.
   - Subjudul: *Semangat terus belajarnya!*.
2. **Search Bar**:
   - Input pencarian interaktif: ketik nama mata kuliah (misal: "Basis" atau "Web") untuk memfilter kartu secara realtime.
3. **Semester Card**:
   - Menampilkan badge aktif: **`Semester 3 • 2025/2026`**.
4. **4 Kartu Mata Kuliah Saya**:
   - **Pemrograman Web** (Ikon `</>`, 4 dari 6 materi, **67%** progress).
   - **Basis Data** (Ikon dokumen database, 3 dari 5 materi, **60%** progress).
   - **Jaringan Komputer** (Ikon laptop, 2 dari 4 materi, **50%** progress).
   - **Desain UI/UX** (Ikon palet warna, 1 dari 6 materi, **17%** progress).
5. **iOS Bottom Navigation Bar**:
   - 4 tab: **Beranda**, **Kuis**, **Diskusi**, dan **Profile**.
   - Menekan tab **Profile** akan memunculkan menu bottom-sheet untuk **Keluar (Logout)** kembali ke halaman login.

# LMS Mobile Login Screen - iPhone 17 Pro Max

Proyek antarmuka (UI/UX) screen Login LMS mobile dengan dimensi presisi sesuai **iPhone 17 Pro Max** (440 × 956 pt / rasio 19.5:9). Dibuat dengan bahasa pemrograman yang universal, ringan, dan **dapat langsung dibuka di Visual Studio Code (VS Code) menggunakan ekstensi mobile preview**.

---

## 📱 Spesifikasi Desain & Komponen (Sesuai Referensi)

- **Ukuran Layar Target**: iPhone 17 Pro Max (440 x 956 px logical resolution).
- **iOS Status Bar & Dynamic Island**: Waktu 17:20, sinyal seluler, WiFi, baterai, dan Dynamic Island khas iPhone seri Pro Max.
- **Identitas LMS**:
  - Logo Topi Toga (*Mortarboard*) vector SVG gradien biru cerah.
  - Tipografi judul **LMS** berani dan kontras.
  - Subjudul *"Your Learning Journey Starts Here"*.
- **Form Login**:
  - Input `ID / NIP / NIM` dengan ikon pengguna.
  - Input `Password` dengan ikon gembok dan tombol interaktif tampilkan/sembunyikan (ikon mata).
  - Checkbox custom aktif: `Ingat saya`.
  - Tautan interaktif: `Lupa password?`.
  - Tombol aksi utama **`Masuk`** berbentuk pil melengkung dengan gradien biru dan efek *soft blue glow*.
  - Footer: *Belum punya akun?* **Hubungi Administrator**.
  - iOS Home Indicator di sisi bawah layar.

---

## 🚀 Cara Membuka di VS Code dengan Ekstensi Mobile

### Pilihan 1: Menggunakan Ekstensi "Mobile View" atau "Device Simulator"
1. Buka folder `c:\mobile apps kita` di VS Code.
2. Pasang ekstensi **Mobile View** (`poyarkov.mobile-view`) atau **Device Simulator** dari tab *Extensions* (`Ctrl + Shift + X`).
3. Buka file `index.html`.
4. Klik kanan di area kode `index.html` dan pilih **Open in Mobile View** / **Device Preview**.
5. Pilih tipe perangkat **iPhone 17 Pro Max / iPhone 16 Pro Max** atau sesuaikan ukuran ke `440 x 956`.

---

### Pilihan 2: Menggunakan Ekstensi "Live Server" (Sangat Populer)
1. Di VS Code, pasang ekstensi **Live Server** oleh *Ritwick Dey*.
2. Klik kanan pada file `index.html`, lalu pilih **Open with Live Server** (atau klik tombol **Go Live** di status bar bawah VS Code).
3. Browser Anda akan terbuka otomatis di alamat `http://127.0.0.1:5500`.
4. Jika ingin tampilan responsive ponsel langsung di browser:
   - Tekan `F12` (atau `Ctrl + Shift + I`) untuk membuka Developer Tools.
   - Tekan icon ponsel **Toggle Device Toolbar** (`Ctrl + Shift + M`).
   - Masukkan dimensi: Lebar: `440` dan Tinggi: `956` (100%).

---

### Pilihan 3: Buka Langsung Tanpa Ekstensi
Cukup klik dua kali (*double click*) file `index.html` di File Explorer Windows Anda. Halaman ini sudah dilengkapi dengan:
- **Frame Bezel Fisik iPhone 17 Pro Max** yang elegan lengkap dengan Dynamic Island dan tombol samping.
- Tombol **Toggle Frame HP** di toolbar atas untuk mengganti tampilan antara frame ponsel atau layar penuh (*full screen*).

---

## 📁 Struktur Direktori

```text
mobile-apps-kita/
├── .vscode/
│   ├── extensions.json             # Rekomendasi ekstensi VS Code otomatis
│   └── settings.json               # Konfigurasi Live Server
├── index.html                      # Layar Login utama (Semantik HTML5 & SVG)
├── style.css                       # Styling presisi iPhone 17 Pro Max
├── app.js                          # Interaktivitas (Show/Hide Password, Toast, Form)
├── README.md                       # Dokumentasi dan panduan pemakaian
└── mobile_code/
    ├── flutter_login_screen.dart   # Kode jika ingin digunakan pada proyek Flutter (Dart)
    └── ReactNativeLoginScreen.jsx  # Kode jika ingin digunakan pada React Native (JSX)
```

---

## 💡 Fitur Interaktif Tambahan
1. **Show / Hide Password**: Klik ikon mata di sebelah kanan kolom password untuk melihat atau menyembunyikan kata sandi.
2. **Animasi & Toast Notifikasi**: Menampilkan notifikasi popup ala iOS saat tombol *Masuk*, *Lupa password*, atau *Hubungi Administrator* diklik.
3. **Responsive**: Secara otomatis menyesuaikan jika dibuka pada ukuran mobile atau desktop.

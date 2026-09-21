# LMS Mobile Backend API

Backend sederhana dan ringan berbasis **Node.js** untuk mendukung autentikasi dan penyediaan data dashboard LMS.

---

## ⚡ Cara Menjalankan Server

Tidak perlu melakukan `npm install` karena server menggunakan pustaka bawaan Node.js (`http`).

Cukup jalankan perintah berikut di terminal:

```bash
node server.js
```

Atau menggunakan npm:

```bash
npm start
```

Server akan aktif di: **`http://localhost:4000`**

---

## 📡 Daftar Endpoint API

### 1. Autentikasi Login
- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Body JSON**:
  ```json
  {
    "username": "Admin",
    "password": "Admin123"
  }
  ```
- **Response Sukses (200)**:
  ```json
  {
    "success": true,
    "message": "Login berhasil",
    "user": {
      "id": "Admin",
      "name": "Jakii",
      "semester": "Semester 3 • 2025/2026"
    }
  }
  ```

---

### 2. Data Mata Kuliah
- **URL**: `/api/courses`
- **Method**: `GET`
- **Response**: Mengembalikan daftar 4 mata kuliah (Pemrograman Web, Basis Data, Jaringan Komputer, Desain UI/UX) lengkap dengan status materi dan persentase progress.

---

### 3. Profil Pengguna
- **URL**: `/api/user`
- **Method**: `GET`
- **Response**: Mengembalikan data profil "Jakii".

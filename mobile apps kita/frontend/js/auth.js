// ==========================================================================
// LMS Mobile - Auth Logic (Login Screen)
// Kredensial Valid: ID = Admin, Password = Admin123
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('usernameInput');
  const passwordInput = document.getElementById('passwordInput');
  const togglePasswordBtn = document.getElementById('togglePasswordBtn');
  const eyeIcon = document.getElementById('eyeIcon');
  const eyeOffIcon = document.getElementById('eyeOffIcon');
  const submitBtn = document.getElementById('submitBtn');
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  // Toolbar Preview Controls
  const toggleFrameBtn = document.getElementById('toggleFrameBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  // 1. Toggle Lihat / Sembunyikan Password
  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');

      if (isPassword) {
        eyeIcon.classList.add('hidden');
        eyeOffIcon.classList.remove('hidden');
      } else {
        eyeIcon.classList.remove('hidden');
        eyeOffIcon.classList.add('hidden');
      }
      passwordInput.focus();
    });
  }

  // 2. Helper Notifikasi Toast iOS Style
  let toastTimer;
  function showToast(message, isSuccess = true) {
    if (!toastNotification || !toastMessage) return;

    clearTimeout(toastTimer);
    toastMessage.textContent = message;
    toastNotification.style.backgroundColor = isSuccess 
      ? 'rgba(15, 23, 42, 0.94)' 
      : 'rgba(225, 29, 72, 0.94)';

    toastNotification.classList.add('show');

    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3200);
  }

  // 3. Logika Verifikasi Login (Mendukung Backend API & Standalone)
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const username = usernameInput.value.trim();
      const password = passwordInput.value;

      if (!username || !password) {
        showToast('Mohon masukkan ID dan Password', false);
        return;
      }

      // Animasi tombol loading
      const originalHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <span style="display:inline-flex;align-items:center;gap:8px;">
          <svg style="animation:spin 1s linear infinite;width:18px;height:18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
          </svg>
          Memverifikasi...
        </span>
      `;
      submitBtn.disabled = true;

      // Coba kirim ke Backend API jika aktif
      let authenticated = false;
      let userData = { id: 'Admin', name: 'Jakii', semester: 'Semester 3 • 2025/2026' };

      try {
        const res = await fetch('http://localhost:4000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
          signal: AbortSignal.timeout(1200) // Timeout cepat jika server belum nyala
        });

        if (res.ok) {
          const json = await res.json();
          if (json.success) {
            authenticated = true;
            userData = json.user;
          }
        }
      } catch (err) {
        // Jika backend belum dijalankan, gunakan verifikasi lokal langsung
        const validId = (username.toLowerCase() === 'admin');
        const validPass = (password === 'Admin123');
        if (validId && validPass) {
          authenticated = true;
        }
      }

      if (authenticated) {
        // Simpan sesi ke localStorage
        localStorage.setItem('lms_auth', JSON.stringify({
          isLoggedIn: true,
          user: userData,
          loginTime: new Date().toISOString()
        }));

        showToast(`Login berhasil! Mengalihkan ke Dashboard... ✨`, true);

        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 700);
      } else {
        submitBtn.innerHTML = originalHtml;
        submitBtn.disabled = false;
        showToast('ID atau Password salah! (ID: Admin, Password: Admin123)', false);
        passwordInput.value = '';
        passwordInput.focus();
      }
    });
  }

  // 4. Quick Auto-fill untuk kemudahan testing
  const hintBadge = document.getElementById('hintBadge');
  if (hintBadge) {
    hintBadge.addEventListener('click', () => {
      usernameInput.value = 'Admin';
      passwordInput.value = 'Admin123';
      showToast('Kredensial Admin otomatis terisi! Tekan Masuk.');
    });
  }

  // 5. Toolbar Preview Controls
  if (toggleFrameBtn) {
    toggleFrameBtn.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.toggle('pure-screen');
      const isPure = document.body.classList.contains('pure-screen');
      toggleFrameBtn.textContent = isPure ? 'Tampilkan Frame HP' : 'Sembunyikan Frame HP';
    });
  }

  if (themeToggleBtn) {
    let dark = false;
    themeToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      dark = !dark;
      document.body.style.backgroundColor = dark ? '#0B0F17' : '#EBF3F9';
      themeToggleBtn.textContent = dark ? 'Latar Terang' : 'Latar Gelap';
    });
  }
});

// CSS Keyframes untuk animasi loading spinner
const authStyle = document.createElement('style');
authStyle.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(authStyle);

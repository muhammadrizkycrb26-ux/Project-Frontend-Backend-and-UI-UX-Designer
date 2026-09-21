// ==========================================================================
// LMS Mobile Login Script (iPhone 17 Pro Max)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('usernameInput');
  const passwordInput = document.getElementById('passwordInput');
  const togglePasswordBtn = document.getElementById('togglePasswordBtn');
  const eyeIcon = document.getElementById('eyeIcon');
  const eyeOffIcon = document.getElementById('eyeOffIcon');
  const rememberMe = document.getElementById('rememberMe');
  const submitBtn = document.getElementById('submitBtn');
  const forgotPassLink = document.getElementById('forgotPassLink');
  const contactAdminLink = document.getElementById('contactAdminLink');
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  // Toolbar elements
  const toggleFrameBtn = document.getElementById('toggleFrameBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  // 1. Toggle Password Visibility (Lihat / Sembunyikan Password)
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

  // 2. Helper Fungsi Toast Popup (Mirip Notifikasi iOS)
  let toastTimeout;
  function showToast(message, isSuccess = true) {
    if (!toastNotification || !toastMessage) return;

    clearTimeout(toastTimeout);
    toastMessage.textContent = message;
    toastNotification.style.backgroundColor = isSuccess 
      ? 'rgba(15, 23, 42, 0.92)' 
      : 'rgba(225, 29, 72, 0.92)';

    toastNotification.classList.add('show');

    toastTimeout = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 2800);
  }

  // 3. Form Submit Handler
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = usernameInput.value.trim();
      const password = passwordInput.value;

      if (!username || !password) {
        showToast('Mohon lengkapi ID dan Password', false);
        return;
      }

      // Animasi status tombol saat memproses
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <span style="display:inline-flex;align-items:center;gap:8px;">
          <svg style="animation:spin 1s linear infinite;width:18px;height:18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
          </svg>
          Memproses...
        </span>
      `;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        showToast(`Selamat datang, ${username}! ✨`, true);
      }, 900);
    });
  }

  // 4. Link Tautan Interaktif (Lupa Password & Admin)
  if (forgotPassLink) {
    forgotPassLink.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Silakan hubungi admin atau periksa email terdaftar');
    });
  }

  if (contactAdminLink) {
    contactAdminLink.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Kontak Admin: admin@lms-campus.ac.id');
    });
  }

  // 5. Toolbar Preview Controls
  if (toggleFrameBtn) {
    toggleFrameBtn.addEventListener('click', () => {
      document.body.classList.toggle('pure-screen');
      const isPure = document.body.classList.contains('pure-screen');
      toggleFrameBtn.textContent = isPure ? 'Tampilkan Frame HP' : 'Sembunyikan Frame HP';
    });
  }

  if (themeToggleBtn) {
    let dark = false;
    themeToggleBtn.addEventListener('click', () => {
      dark = !dark;
      document.body.style.backgroundColor = dark ? '#0B0F17' : '#EBF3F9';
      themeToggleBtn.textContent = dark ? 'Latar Terang' : 'Latar Gelap';
    });
  }
});

// CSS Keyframes untuk animasi loading spinner
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);

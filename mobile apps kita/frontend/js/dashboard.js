// ==========================================================================
// LMS Mobile - Dashboard Logic
// Menangani pencarian mata kuliah, tab navigasi, dan logout
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const coursesList = document.getElementById('coursesList');
  const tabItems = document.querySelectorAll('.tab-item');
  const profileModal = document.getElementById('profileModal');
  const btnCloseSheet = document.getElementById('btnCloseSheet');
  const btnLogout = document.getElementById('btnLogout');
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  // Toolbar Preview Controls
  const toggleFrameBtn = document.getElementById('toggleFrameBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  // Helper Toast
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
    }, 2800);
  }

  // 1. Filter Pencarian Mata Kuliah Realtime
  if (searchInput && coursesList) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const courseCards = coursesList.querySelectorAll('.course-card');
      let matches = 0;

      courseCards.forEach(card => {
        const title = card.getAttribute('data-name')?.toLowerCase() || '';
        const modules = card.getAttribute('data-modules')?.toLowerCase() || '';

        if (title.includes(query) || modules.includes(query)) {
          card.style.display = 'block';
          matches++;
        } else {
          card.style.display = 'none';
        }
      });

      // Tampilkan feedback jika tidak ada yang cocok
      let noResultEl = document.getElementById('noCoursesResult');
      if (matches === 0) {
        if (!noResultEl) {
          noResultEl = document.createElement('div');
          noResultEl.id = 'noCoursesResult';
          noResultEl.style.cssText = 'text-align:center;padding:30px 10px;color:#7E93A6;font-size:13px;';
          noResultEl.textContent = 'Tidak ada mata kuliah yang cocok dengan kata kunci.';
          coursesList.appendChild(noResultEl);
        }
      } else if (noResultEl) {
        noResultEl.remove();
      }
    });
  }

  // 2. Navigasi Tab Bawah (iOS Tab Bar)
  tabItems.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const tabName = tab.getAttribute('data-tab');

      if (tabName === 'profile') {
        // Tampilkan modal drawer profil untuk logout
        if (profileModal) profileModal.classList.add('show');
        return;
      }

      tabItems.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (tabName === 'home') {
        showToast('Menampilkan Beranda');
      } else if (tabName === 'quiz') {
        showToast('Menu Kuis & Ujian');
      } else if (tabName === 'discussion') {
        showToast('Forum Diskusi Mahasiswa');
      }
    });
  });

  // 3. Tutup Modal Profile
  if (btnCloseSheet && profileModal) {
    btnCloseSheet.addEventListener('click', () => {
      profileModal.classList.remove('show');
    });
  }

  if (profileModal) {
    profileModal.addEventListener('click', (e) => {
      if (e.target === profileModal) {
        profileModal.classList.remove('show');
      }
    });
  }

  // 4. Tombol Logout (Kembali ke Login)
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      localStorage.removeItem('lms_auth');
      showToast('Berhasil keluar. Mengalihkan ke halaman Login...', true);
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 700);
    });
  }

  // 5. Interaksi Klik pada Kartu Mata Kuliah
  const courseCards = document.querySelectorAll('.course-card');
  courseCards.forEach(card => {
    card.addEventListener('click', () => {
      const name = card.getAttribute('data-name');
      showToast(`Membuka materi: ${name}`);
    });
  });

  // 6. Toolbar Controls
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

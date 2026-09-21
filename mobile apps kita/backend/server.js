// ==========================================================================
// LMS Mobile Backend Server (Node.js Native HTTP)
// Tidak memerlukan dependencies tambahan (Zero-dependency, siap jalan)
// ==========================================================================

const http = require('http');

const PORT = process.env.PORT || 4000;

// Data Pengguna Dummy (Sesuai Screenshot Desain)
const userData = {
  id: 'Admin',
  name: 'Jakii',
  greeting: 'Halo, Jakii',
  subGreeting: 'Semangat terus belajarnya!',
  semester: 'Semester 3 • 2025/2026',
  avatarUrl: null
};

// Data Mata Kuliah (Presisi sesuai Screenshot)
const coursesData = [
  {
    id: 'web-dev',
    title: 'Pemrograman Web',
    completedModules: 4,
    totalModules: 6,
    subtitle: '4 dari 6 materi',
    progress: 67,
    icon: 'code',
    iconBg: '#1A92F1'
  },
  {
    id: 'database',
    title: 'Basis Data',
    completedModules: 3,
    totalModules: 5,
    subtitle: '3 dari 5 materi',
    progress: 60,
    icon: 'database',
    iconBg: '#1A92F1'
  },
  {
    id: 'network',
    title: 'Jaringan Komputer',
    completedModules: 2,
    totalModules: 4,
    subtitle: '2 dari 4 materi',
    progress: 50,
    icon: 'network',
    iconBg: '#1A92F1'
  },
  {
    id: 'uiux',
    title: 'Desain UI/UX',
    completedModules: 1,
    totalModules: 6,
    subtitle: '1 dari 6 materi',
    progress: 17,
    icon: 'palette',
    iconBg: '#1A92F1'
  }
];

// Helper Header CORS
function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

// Helper JSON Response
function sendJson(res, statusCode, data) {
  setCorsHeaders(res);
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

// Server Request Handler
const server = http.createServer((req, res) => {
  setCorsHeaders(res);

  // Tangani Preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);

  // Endpoint 1: POST /api/auth/login
  if (req.method === 'POST' && url.pathname === '/api/auth/login') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { username, password } = JSON.parse(body || '{}');

        // Validasi: ID Admin & Password Admin123
        const isValidId = username && (username.trim().toLowerCase() === 'admin');
        const isValidPass = password && (password === 'Admin123');

        if (isValidId && isValidPass) {
          sendJson(res, 200, {
            success: true,
            message: 'Login berhasil',
            token: 'dummy-jwt-token-admin-123456',
            user: userData
          });
        } else {
          sendJson(res, 401, {
            success: false,
            message: 'ID atau Password salah! (Gunakan ID: Admin, Password: Admin123)'
          });
        }
      } catch (err) {
        sendJson(res, 400, { success: false, message: 'Invalid JSON body' });
      }
    });
    return;
  }

  // Endpoint 2: GET /api/user
  if (req.method === 'GET' && url.pathname === '/api/user') {
    sendJson(res, 200, {
      success: true,
      data: userData
    });
    return;
  }

  // Endpoint 3: GET /api/courses
  if (req.method === 'GET' && url.pathname === '/api/courses') {
    sendJson(res, 200, {
      success: true,
      total: coursesData.length,
      data: coursesData
    });
    return;
  }

  // Endpoint Root Status
  if (url.pathname === '/' || url.pathname === '/api/health') {
    sendJson(res, 200, {
      status: 'online',
      service: 'LMS Mobile Backend API',
      endpoints: [
        'POST /api/auth/login',
        'GET /api/user',
        'GET /api/courses'
      ]
    });
    return;
  }

  // 404 Not Found
  sendJson(res, 404, { success: false, message: 'Endpoint tidak ditemukan' });
});

server.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`🚀 LMS Mobile Backend Server Running!`);
  console.log(`🔗 URL: http://localhost:${PORT}`);
  console.log(`📡 Endpoints:`);
  console.log(`   - POST http://localhost:${PORT}/api/auth/login`);
  console.log(`   - GET  http://localhost:${PORT}/api/courses`);
  console.log(`   - GET  http://localhost:${PORT}/api/user`);
  console.log(`=========================================`);
});

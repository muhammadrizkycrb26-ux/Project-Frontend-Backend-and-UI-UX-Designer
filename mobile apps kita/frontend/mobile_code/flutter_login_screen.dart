import 'package:flutter/material.dart';

/// Screen Login LMS untuk Flutter
/// Desain Presisi 1:1 sesuai spesifikasi iPhone 17 Pro Max
class LmsLoginScreen extends StatefulWidget {
  const LmsLoginScreen({super.key});

  @override
  State<LmsLoginScreen> createState() => _LmsLoginScreenState();
}

class _LmsLoginScreenState extends State<LmsLoginScreen> {
  final TextEditingController _idController = TextEditingController(text: 'Admin');
  final TextEditingController _passwordController = TextEditingController(text: 'Admin123');
  bool _obscurePassword = true;
  bool _rememberMe = true;

  @override
  void dispose() {
    _idController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  void _handleLogin() {
    final id = _idController.text.trim();
    final pass = _passwordController.text;

    if (id.toLowerCase() == 'admin' && pass == 'Admin123') {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Login Berhasil! Mengalihkan ke Dashboard...')),
      );
      // Navigator.pushReplacementNamed(context, '/dashboard');
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          backgroundColor: Colors.redAccent,
          content: Text('ID atau Password salah! (ID: Admin, Pass: Admin123)'),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        height: double.infinity,
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [
              Color(0xFFC8EBFC),
              Color(0xFFE0F3FE),
              Color(0xFFF8FBFE),
              Color(0xFFE3F4FE),
              Color(0xFFCEEEFD),
            ],
            stops: [0.0, 0.2, 0.5, 0.8, 1.0],
          ),
        ),
        child: SafeArea(
          child: Column(
            children: [
              Expanded(
                child: Center(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.symmetric(horizontal: 38.0),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        // Logo Topi Toga
                        _buildGraduationCapLogo(),
                        const SizedBox(height: 12),

                        // Title LMS
                        const Text(
                          'LMS',
                          style: TextStyle(
                            fontSize: 38,
                            fontWeight: FontWeight.w800,
                            color: Color(0xFF1A92F1),
                            letterSpacing: 0.5,
                          ),
                        ),
                        const SizedBox(height: 6),

                        // Subtitle
                        const Text(
                          'Your Learning Journey\nStarts Here',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            fontSize: 13.5,
                            color: Color(0xFF7E93A6),
                            height: 1.4,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        const SizedBox(height: 32),

                        // Input ID / NIP / NIM
                        _buildInputField(
                          controller: _idController,
                          hintText: 'ID / NIP / NIM',
                          prefixIcon: Icons.person_outline_rounded,
                        ),
                        const SizedBox(height: 14),

                        // Input Password
                        _buildInputField(
                          controller: _passwordController,
                          hintText: 'Password',
                          prefixIcon: Icons.lock_outline_rounded,
                          isPassword: true,
                          obscureText: _obscurePassword,
                          onToggleVisibility: () {
                            setState(() {
                              _obscurePassword = !_obscurePassword;
                            });
                          },
                        ),
                        const SizedBox(height: 14),

                        // Baris Opsi: Ingat Saya & Lupa Password
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Row(
                              children: [
                                SizedBox(
                                  width: 20,
                                  height: 20,
                                  child: Checkbox(
                                    value: _rememberMe,
                                    activeColor: const Color(0xFF1A92F1),
                                    shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(4),
                                    ),
                                    side: const BorderSide(
                                      color: Color(0xFFCBDDEB),
                                      width: 1.2,
                                    ),
                                    onChanged: (val) {
                                      setState(() {
                                        _rememberMe = val ?? false;
                                      });
                                    },
                                  ),
                                ),
                                const SizedBox(width: 8),
                                const Text(
                                  'Ingat saya',
                                  style: TextStyle(
                                    fontSize: 13,
                                    color: Color(0xFF7E93A6),
                                    fontWeight: FontWeight.w500,
                                  ),
                                ),
                              ],
                            ),
                            GestureDetector(
                              onTap: () {},
                              child: const Text(
                                'Lupa password?',
                                style: TextStyle(
                                  fontSize: 13,
                                  color: Color(0xFF2497F2),
                                  fontWeight: FontWeight.w500,
                                ),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 24),

                        // Tombol Masuk
                        Container(
                          width: double.infinity,
                          height: 52,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(999),
                            gradient: const LinearGradient(
                              begin: Alignment.topCenter,
                              end: Alignment.bottomCenter,
                              colors: [
                                Color(0xFF2EA0F6),
                                Color(0xFF1588E5),
                              ],
                            ),
                            boxShadow: [
                              BoxShadow(
                                color: const Color(0xFF1588E5).withOpacity(0.38),
                                blurRadius: 20,
                                offset: const Offset(0, 8),
                              ),
                            ],
                          ),
                          child: ElevatedButton(
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.transparent,
                              shadowColor: Colors.transparent,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(999),
                              ),
                            ),
                            onPressed: _handleLogin,
                            child: const Text(
                              'Masuk',
                              style: TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(height: 28),

                        // Footer
                        Column(
                          children: const [
                            Text(
                              'Belum punya akun?',
                              style: TextStyle(
                                fontSize: 12.5,
                                color: Color(0xFF8295A7),
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                            SizedBox(height: 3),
                            Text(
                              'Hubungi Administrator',
                              style: TextStyle(
                                fontSize: 13,
                                color: Color(0xFF1A92F1),
                                fontWeight: FontWeight.w700,
                                decoration: TextDecoration.underline,
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ),

              // Home Indicator
              Container(
                margin: const EdgeInsets.only(bottom: 8),
                width: 140,
                height: 4.5,
                decoration: BoxDecoration(
                  color: Colors.black.withOpacity(0.85),
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildGraduationCapLogo() {
    return Container(
      width: 100,
      height: 80,
      decoration: BoxDecoration(
        color: const Color(0xFF1A92F1).withOpacity(0.12),
        shape: BoxShape.circle,
      ),
      child: const Icon(Icons.school_rounded, size: 58, color: Color(0xFF1A92F1)),
    );
  }

  Widget _buildInputField({
    required TextEditingController controller,
    required String hintText,
    required IconData prefixIcon,
    bool isPassword = false,
    bool obscureText = false,
    VoidCallback? onToggleVisibility,
  }) {
    return Container(
      height: 52,
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.78),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: const Color(0xFFDFEDF7), width: 1.2),
      ),
      child: TextField(
        controller: controller,
        obscureText: isPassword ? obscureText : false,
        style: const TextStyle(
          fontSize: 14.5,
          color: Color(0xFF1E293B),
          fontWeight: FontWeight.w500,
        ),
        decoration: InputDecoration(
          border: InputBorder.none,
          hintText: hintText,
          hintStyle: const TextStyle(color: Color(0xFF92A5B8), fontSize: 14),
          prefixIcon: Icon(prefixIcon, color: const Color(0xFF9BB0C4), size: 21),
          suffixIcon: isPassword
              ? IconButton(
                  icon: Icon(
                    obscureText ? Icons.visibility_outlined : Icons.visibility_off_outlined,
                    color: const Color(0xFF9BB0C4),
                    size: 21,
                  ),
                  onPressed: onToggleVisibility,
                )
              : null,
          contentPadding: const EdgeInsets.symmetric(vertical: 14),
        ),
      ),
    );
  }
}

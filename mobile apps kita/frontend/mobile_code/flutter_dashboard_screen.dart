import 'package:flutter/material.dart';

/// Screen Dashboard LMS untuk Flutter
/// Desain Presisi 1:1 sesuai spesifikasi iPhone 17 Pro Max (440 x 956 pt)
class LmsDashboardScreen extends StatefulWidget {
  const LmsDashboardScreen({super.key});

  @override
  State<LmsDashboardScreen> createState() => _LmsDashboardScreenState();
}

class _LmsDashboardScreenState extends State<LmsDashboardScreen> {
  int _currentTabIndex = 0;
  final TextEditingController _searchController = TextEditingController();

  final List<Map<String, dynamic>> _courses = [
    {
      'title': 'Pemrograman Web',
      'modules': '4 dari 6 materi',
      'percentage': 67,
      'icon': Icons.code_rounded,
    },
    {
      'title': 'Basis Data',
      'modules': '3 dari 5 materi',
      'percentage': 60,
      'icon': Icons.description_outlined,
    },
    {
      'title': 'Jaringan Komputer',
      'modules': '2 dari 4 materi',
      'percentage': 50,
      'icon': Icons.laptop_chromebook_rounded,
    },
    {
      'title': 'Desain UI/UX',
      'modules': '1 dari 6 materi',
      'percentage': 17,
      'icon': Icons.palette_outlined,
    },
  ];

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
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
              Color(0xFFDCF1FD),
              Color(0xFFF8FBFE),
              Color(0xFFE6F4FD),
              Color(0xFFD0EEFD),
            ],
            stops: [0.0, 0.18, 0.48, 0.8, 1.0],
          ),
        ),
        child: SafeArea(
          child: Column(
            children: [
              // Area Konten Scrollable
              Expanded(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 10.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // 1. Header Profil: Halo, Jakii
                      Row(
                        children: [
                          Container(
                            width: 58,
                            height: 58,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              color: const Color(0xFFE1F0FD),
                              border: Border.all(color: Colors.white, width: 2),
                              boxShadow: [
                                BoxShadow(
                                  color: const Color(0xFF1A92F1).withOpacity(0.12),
                                  blurRadius: 12,
                                  offset: const Offset(0, 4),
                                ),
                              ],
                            ),
                            child: const Icon(
                              Icons.person_rounded,
                              size: 34,
                              color: Color(0xFFB4D7F5),
                            ),
                          ),
                          const SizedBox(width: 16),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: const [
                              Text(
                                'Halo, Jakii',
                                style: TextStyle(
                                  fontSize: 19,
                                  fontWeight: FontWeight.w800,
                                  color: Color(0xFF1E293B),
                                  letterSpacing: -0.2,
                                ),
                              ),
                              SizedBox(height: 2),
                              Text(
                                'Semangat terus belajarnya!',
                                style: TextStyle(
                                  fontSize: 13,
                                  fontWeight: FontWeight.w500,
                                  color: Color(0xFF7E93A6),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                      const SizedBox(height: 20),

                      // 2. Search Bar
                      Container(
                        height: 44,
                        decoration: BoxDecoration(
                          color: Colors.white.withOpacity(0.75),
                          borderRadius: BorderRadius.circular(999),
                          border: Border.all(color: const Color(0xFFDFEDF7), width: 1.2),
                        ),
                        child: TextField(
                          controller: _searchController,
                          style: const TextStyle(fontSize: 13.5, color: Color(0xFF1E293B)),
                          decoration: const InputDecoration(
                            hintText: 'Cari mata kuliah, tugas, atau materi...',
                            hintStyle: TextStyle(color: Color(0xFF94A3B8), fontSize: 13),
                            prefixIcon: Icon(Icons.search, color: Color(0xFF94A3B8), size: 20),
                            border: InputBorder.none,
                            contentPadding: EdgeInsets.symmetric(vertical: 11),
                          ),
                        ),
                      ),
                      const SizedBox(height: 12),

                      // 3. Semester Selector Card
                      Container(
                        height: 44,
                        padding: const EdgeInsets.symmetric(horizontal: 16),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(14),
                          border: Border.all(color: const Color(0xFFDFEDF7), width: 1.2),
                          boxShadow: [
                            BoxShadow(
                              color: const Color(0xFF1A92F1).withOpacity(0.04),
                              blurRadius: 8,
                              offset: const Offset(0, 2),
                            ),
                          ],
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: const [
                            Row(
                              children: [
                                Icon(Icons.calendar_today_outlined, size: 17, color: Color(0xFF1A92F1)),
                                SizedBox(width: 10),
                                Text(
                                  'Semester 3 • 2025/2026',
                                  style: TextStyle(
                                    fontSize: 13.5,
                                    fontWeight: FontWeight.w700,
                                    color: Color(0xFF1A92F1),
                                  ),
                                ),
                              ],
                            ),
                            Icon(Icons.chevron_right, color: Color(0xFF64748B), size: 20),
                          ],
                        ),
                      ),
                      const SizedBox(height: 20),

                      // 4. Mata Kuliah Saya Section Header
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const Text(
                            'Mata Kuliah Saya',
                            style: TextStyle(
                              fontSize: 17.5,
                              fontWeight: FontWeight.w800,
                              color: Color(0xFF1E293B),
                            ),
                          ),
                          GestureDetector(
                            onTap: () {},
                            child: const Text(
                              'Lihat Semua',
                              style: TextStyle(
                                fontSize: 13,
                                fontWeight: FontWeight.w600,
                                color: Color(0xFF1A92F1),
                                decoration: TextDecoration.underline,
                              ),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 14),

                      // 5. Course Cards
                      ..._courses.map((course) => _buildCourseCard(course)),
                    ],
                  ),
                ),
              ),

              // 6. iOS Bottom Navigation Bar (4 Tab)
              Container(
                height: 64,
                decoration: BoxDecoration(
                  color: Colors.white.withOpacity(0.95),
                  border: const Border(top: BorderSide(color: Color(0xFFE2EEF8), width: 1.2)),
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    _buildTabItem(0, Icons.home_outlined, 'Beranda'),
                    _buildTabItem(1, Icons.quiz_outlined, 'Kuis'),
                    _buildTabItem(2, Icons.chat_bubble_outline_rounded, 'Diskusi'),
                    _buildTabItem(3, Icons.person_outline_rounded, 'Profile'),
                  ],
                ),
              ),

              // iOS Home Indicator
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

  Widget _buildCourseCard(Map<String, dynamic> course) {
    final double percent = (course['percentage'] as int) / 100.0;

    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFFE2EEF8), width: 1.2),
        boxShadow: [
          BoxShadow(
            color: const Color(0xFF1A92F1).withOpacity(0.04),
            blurRadius: 10,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  Container(
                    width: 44,
                    height: 44,
                    decoration: BoxDecoration(
                      color: const Color(0xFF1A92F1),
                      borderRadius: BorderRadius.circular(12),
                      boxShadow: [
                        BoxShadow(
                          color: const Color(0xFF1A92F1).withOpacity(0.25),
                          blurRadius: 8,
                          offset: const Offset(0, 3),
                        ),
                      ],
                    ),
                    child: Icon(course['icon'] as IconData, color: Colors.white, size: 22),
                  ),
                  const SizedBox(width: 14),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        course['title'] as String,
                        style: const TextStyle(
                          fontSize: 14.5,
                          fontWeight: FontWeight.w700,
                          color: Color(0xFF1E293B),
                        ),
                      ),
                      const SizedBox(height: 3),
                      Text(
                        course['modules'] as String,
                        style: const TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.w500,
                          color: Color(0xFF7E93A6),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
              Text(
                '${course['percentage']}%',
                style: const TextStyle(
                  fontSize: 13.5,
                  fontWeight: FontWeight.w600,
                  color: Color(0xFF7E93A6),
                ),
              ),
            ],
          ),
          const SizedBox(height: 14),
          // Progress Bar
          ClipRRect(
            borderRadius: BorderRadius.circular(999),
            child: LinearProgressIndicator(
              value: percent,
              backgroundColor: const Color(0xFFE8F3FA),
              valueColor: const AlwaysStoppedAnimation<Color>(Color(0xFF1A92F1)),
              minHeight: 5.5,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTabItem(int index, IconData icon, String label) {
    final bool isSelected = _currentTabIndex == index;
    return GestureDetector(
      onTap: () => setState(() => _currentTabIndex = index),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(icon, color: const Color(0xFF1A92F1), size: 24),
          const SizedBox(height: 4),
          Text(
            label,
            style: TextStyle(
              fontSize: 11,
              fontWeight: isSelected ? FontWeight.w800 : FontWeight.w600,
              color: const Color(0xFF1A92F1),
            ),
          ),
        ],
      ),
    );
  }
}

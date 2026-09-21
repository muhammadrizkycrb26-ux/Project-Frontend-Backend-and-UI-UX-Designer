import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';

// Screen Dashboard LMS untuk React Native / Expo
// Dioptimalkan untuk iPhone 17 Pro Max (440 x 956 pt)
export default function DashboardScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  const courses = [
    {
      id: '1',
      title: 'Pemrograman Web',
      modules: '4 dari 6 materi',
      percentage: 67,
      icon: '</>',
    },
    {
      id: '2',
      title: 'Basis Data',
      modules: '3 dari 5 materi',
      percentage: 60,
      icon: '🗄️',
    },
    {
      id: '3',
      title: 'Jaringan Komputer',
      modules: '2 dari 4 materi',
      percentage: 50,
      icon: '💻',
    },
    {
      id: '4',
      title: 'Desain UI/UX',
      modules: '1 dari 6 materi',
      percentage: 17,
      icon: '🎨',
    },
  ];

  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Konten Scrollable */}
      <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent}>
        {/* 1. Header Profil */}
        <View style={styles.userHeader}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>👤</Text>
          </View>
          <View>
            <Text style={styles.greetingTitle}>Halo, Jakii</Text>
            <Text style={styles.greetingSubtitle}>Semangat terus belajarnya!</Text>
          </View>
        </View>

        {/* 2. Search Bar */}
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari mata kuliah, tugas, atau materi..."
            placeholderTextColor="#94A3B8"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* 3. Semester Selector */}
        <TouchableOpacity
          style={styles.semesterCard}
          onPress={() => Alert.alert('Semester', 'Semester Aktif: Semester 3 (2025/2026)')}
        >
          <View style={styles.semesterLeft}>
            <Text style={styles.semesterIcon}>📅</Text>
            <Text style={styles.semesterText}>Semester 3 • 2025/2026</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        {/* 4. Section: Mata Kuliah Saya */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Mata Kuliah Saya</Text>
          <TouchableOpacity onPress={() => Alert.alert('Mata Kuliah', 'Menampilkan semua mata kuliah')}>
            <Text style={styles.sectionLink}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>

        {/* 5. Course Cards */}
        {filteredCourses.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.courseCard}
            activeOpacity={0.9}
            onPress={() => Alert.alert('Mata Kuliah', `Membuka materi ${item.title}`)}
          >
            <View style={styles.courseTop}>
              <View style={styles.courseInfo}>
                <View style={styles.badgeIcon}>
                  <Text style={styles.badgeText}>{item.icon}</Text>
                </View>
                <View>
                  <Text style={styles.courseTitle}>{item.title}</Text>
                  <Text style={styles.courseModules}>{item.modules}</Text>
                </View>
              </View>
              <Text style={styles.coursePercent}>{item.percentage}%</Text>
            </View>

            {/* Progress Bar */}
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${item.percentage}%` }]} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 6. Bottom Tab Navigation Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('home')}
        >
          <Text style={styles.tabIcon}>🏠</Text>
          <Text style={[styles.tabLabel, activeTab === 'home' && styles.tabLabelActive]}>
            Beranda
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setActiveTab('quiz');
            Alert.alert('Kuis', 'Halaman Kuis & Ujian');
          }}
        >
          <Text style={styles.tabIcon}>📋</Text>
          <Text style={styles.tabLabel}>Kuis</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setActiveTab('chat');
            Alert.alert('Diskusi', 'Forum Diskusi Mahasiswa');
          }}
        >
          <Text style={styles.tabIcon}>💬</Text>
          <Text style={styles.tabLabel}>Diskusi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            Alert.alert(
              'Profil Jakii',
              'ID: Admin • Semester 3',
              [
                { text: 'Batal', style: 'cancel' },
                {
                  text: 'Keluar (Logout)',
                  style: 'destructive',
                  onPress: () => Alert.alert('Logout', 'Anda telah keluar'),
                },
              ]
            );
          }}
        >
          <Text style={styles.tabIcon}>👤</Text>
          <Text style={styles.tabLabel}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* iOS Home Indicator */}
      <View style={styles.homeIndicatorWrapper}>
        <View style={styles.homeIndicator} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCF1FD',
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 20,
  },
  userHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 20,
  },
  avatarCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#E1F0FD',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  avatarEmoji: {
    fontSize: 26,
  },
  greetingTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#1E293B',
  },
  greetingSubtitle: {
    fontSize: 13,
    color: '#7E93A6',
    marginTop: 2,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderWidth: 1.2,
    borderColor: '#DFEDF7',
    borderRadius: 999,
    height: 44,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 13.5,
    color: '#1E293B',
  },
  semesterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderWidth: 1.2,
    borderColor: '#DFEDF7',
    borderRadius: 14,
    height: 44,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  semesterLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  semesterIcon: {
    fontSize: 14,
  },
  semesterText: {
    fontSize: 13.5,
    fontWeight: '700',
    color: '#1A92F1',
  },
  chevron: {
    fontSize: 18,
    color: '#64748B',
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 17.5,
    fontWeight: '800',
    color: '#1E293B',
  },
  sectionLink: {
    fontSize: 13,
    color: '#1A92F1',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  courseCard: {
    backgroundColor: '#FFF',
    borderWidth: 1.2,
    borderColor: '#E2EEF8',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  courseTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  badgeIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#1A92F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseTitle: {
    fontSize: 14.5,
    fontWeight: '700',
    color: '#1E293B',
  },
  courseModules: {
    fontSize: 12,
    color: '#7E93A6',
    marginTop: 2,
  },
  coursePercent: {
    fontSize: 13.5,
    fontWeight: '600',
    color: '#7E93A6',
  },
  progressTrack: {
    width: '100%',
    height: 5.5,
    backgroundColor: '#E8F3FA',
    borderRadius: 999,
    marginTop: 14,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1A92F1',
    borderRadius: 999,
  },
  tabBar: {
    flexDirection: 'row',
    height: 64,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderTopWidth: 1.2,
    borderTopColor: '#E2EEF8',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabItem: {
    alignItems: 'center',
    gap: 2,
  },
  tabIcon: {
    fontSize: 18,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#1A92F1',
  },
  tabLabelActive: {
    fontWeight: '800',
  },
  homeIndicatorWrapper: {
    alignItems: 'center',
    paddingBottom: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  homeIndicator: {
    width: 140,
    height: 4.5,
    backgroundColor: '#0F172A',
    borderRadius: 10,
  },
});

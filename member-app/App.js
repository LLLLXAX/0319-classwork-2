import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://ui-avatars.com/api/?name=羅偉峰&background=3b82f6&color=fff&size=150' }}
              style={styles.avatar} 
            />
          </View>
          
          <Text style={styles.name}>羅偉峰</Text>
          <Text style={styles.title}>學生 / 開發者</Text>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="book-education-outline" size={20} color="#60a5fa" />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>科系 (Department)</Text>
              <Text style={styles.infoValue}>資訊工程系</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="email-outline" size={20} color="#60a5fa" />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>電子郵件 (Email)</Text>
              <Text style={styles.infoValue}>user@example.com</Text>
            </View>
          </View>
          
          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="code-tags" size={20} color="#60a5fa" />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>專長 (Skills)</Text>
              <Text style={styles.infoValue}>React Native, Expo, UI/UX</Text>
            </View>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a', // Sleek dark mode background
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: Math.min(width - 48, 400),
    backgroundColor: '#1e293b',
    borderRadius: 30,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.35,
    shadowRadius: 30,
    elevation: 15,
    borderWidth: 1,
    borderColor: '#334155',
    marginTop: 60, // Leave space for avatar
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -80, // Pull avatar up out of the card to overlap edge
    marginBottom: 20,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
    borderWidth: 4,
    borderColor: '#1e293b',
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
  },
  name: {
    fontSize: 28,
    fontWeight: '800',
    color: '#f8fafc',
    marginBottom: 6,
    letterSpacing: 1,
  },
  title: {
    fontSize: 16,
    color: '#94a3b8',
    fontWeight: '500',
    marginBottom: 24,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#334155',
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
    backgroundColor: '#0f172a',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(59, 130, 246, 0.15)', // Light blue tint
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 16,
    color: '#f8fafc',
    fontWeight: '600',
  },
});

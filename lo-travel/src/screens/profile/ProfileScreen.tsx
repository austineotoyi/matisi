import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Screen, Card, Button } from '../../components';
import { UserService, AuthService } from '../../services';
import { useAuthStore } from '../../store/authStore';
import { colors, spacing, typography, radius } from '../../theme';

const MENU = [
  { key: 'EditProfile', label: 'Edit Profile', emoji: '✏️' },
  { key: 'SavedTravelers', label: 'Saved Travelers', emoji: '👥' },
  { key: 'PassportManagement', label: 'Passport Management', emoji: '📘' },
  { key: 'PassportDetails', label: 'Passport Details', emoji: '🛂' },
  { key: 'SavedCards', label: 'Saved Cards', emoji: '💳' },
  { key: 'SavedAddresses', label: 'Saved Addresses', emoji: '📍' },
  { key: 'BookingHistory', label: 'Booking History', emoji: '🧾' },
  { key: 'Favorites', label: 'Wishlist', emoji: '❤️' },
  { key: 'Wallet', label: 'Wallet', emoji: '👛' },
  { key: 'HelpCenter', label: 'Help Center', emoji: '💬' },
  { key: 'Settings', label: 'Settings', emoji: '⚙️' },
];

export const ProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const logout = useAuthStore((s) => s.logout);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => { UserService.getProfile().then((r) => setProfile(r.data)); }, []);

  const onLogout = async () => {
    await logout();
    navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] });
  };

  return (
    <Screen>
      <View style={styles.header}>
        <View style={styles.avatar}><Text style={{ fontSize: 28 }}>🧑</Text></View>
        <Text style={typography.h2 as any}>{profile?.fullName ?? 'Traveler'}</Text>
        <Text style={typography.caption as any}>{profile?.email}</Text>
      </View>

      <Card style={{ marginBottom: spacing.md }}>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={typography.h3 as any}>{profile?.loyaltyPoints ?? 0}</Text>
            <Text style={typography.caption as any}>Loyalty Points</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={typography.h3 as any}>${profile?.walletBalance?.toFixed(2) ?? '0.00'}</Text>
            <Text style={typography.caption as any}>Wallet Balance</Text>
          </View>
        </View>
      </Card>

      {MENU.map((m) => (
        <Pressable key={m.key} style={styles.menuRow} onPress={() => navigation.navigate(m.key)} accessibilityLabel={m.label} accessibilityRole="button">
          <Text style={{ fontSize: 18, marginRight: spacing.sm }}>{m.emoji}</Text>
          <Text style={[typography.body as any, { flex: 1 }]}>{m.label}</Text>
          <Text style={{ color: colors.textSecondary }}>›</Text>
        </Pressable>
      ))}

      <View style={{ height: spacing.md }} />
      <Button label="Log Out" variant="secondary" onPress={onLogout} accessibilityLabel="Log out" />
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: { alignItems: 'center', marginBottom: spacing.md },
  avatar: { width: 72, height: 72, borderRadius: 36, backgroundColor: colors.backgroundSecondary, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.sm },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around' },
  statItem: { alignItems: 'center' },
  menuRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: spacing.sm, borderBottomWidth: 1, borderBottomColor: colors.divider },
});

import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList, Pressable, StyleSheet, Image } from 'react-native';
import { Screen, Card, SectionHeader, Skeleton } from '../../components';
import { FlightService, HotelService, TourService, NotificationService } from '../../services';
import { useAuthStore } from '../../store/authStore';
import { colors, spacing, typography, radius, shadow } from '../../theme';

const QUICK_LINKS = [
  { key: 'Flights', label: 'Flights', emoji: '✈️' },
  { key: 'Hotels', label: 'Hotels', emoji: '🏨' },
  { key: 'Tours', label: 'Tours', emoji: '🌍' },
  { key: 'Cars', label: 'Cars', emoji: '🚗' },
  { key: 'Visa', label: 'Visa', emoji: '📄' },
  { key: 'Insurance', label: 'Insurance', emoji: '🛡️' },
];

export const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const user = useAuthStore((s) => s.user);
  const [loading, setLoading] = useState(true);
  const [hotels, setHotels] = useState<any[]>([]);
  const [tours, setTours] = useState<any[]>([]);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    (async () => {
      const [h, t, n] = await Promise.all([
        HotelService.search({ city: 'Dubai', checkIn: '', checkOut: '', guests: 1 }),
        TourService.search(),
        NotificationService.unreadCount(),
      ]);
      setHotels(h.data);
      setTours(t.data);
      setUnread(n.data);
      setLoading(false);
    })();
  }, []);

  const handleQuickLink = (key: string) => {
    if (key === 'Flights') navigation.navigate('FlightSearch');
    else if (key === 'Hotels') navigation.navigate('RecommendedHotels');
    else if (key === 'Tours') navigation.navigate('RecommendedTours');
    else if (key === 'Cars') navigation.navigate('CarRentalRecommendations');
    else if (key === 'Visa') navigation.navigate('VisaRequirements');
    else navigation.navigate('InsuranceOptions');
  };

  return (
    <Screen>
      <View style={styles.headerRow}>
        <View>
          <Text style={typography.caption as any}>Welcome back,</Text>
          <Text style={typography.h2 as any}>{user?.fullName?.split(' ')[0] ?? 'Traveler'} 👋</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('Notifications')} style={styles.bellWrap} accessibilityRole="button" accessibilityLabel="Notifications">
          <Text style={{ fontSize: 22 }}>🔔</Text>
          {unread > 0 && <View style={styles.badge} />}
        </Pressable>
      </View>

      <Pressable style={styles.searchBar} onPress={() => navigation.navigate('FlightSearch')} accessibilityRole="button" accessibilityLabel="Search flights, hotels, and tours">
        <Text style={{ color: colors.textSecondary }}>Search flights, hotels, tours…</Text>
      </Pressable>

      <View style={styles.quickLinksRow}>
        {QUICK_LINKS.map((q) => (
          <Pressable key={q.key} style={styles.quickLink} onPress={() => handleQuickLink(q.key)} accessibilityRole="button" accessibilityLabel={q.label}>
            <View style={styles.quickLinkCircle}>
              <Text style={{ fontSize: 22 }}>{q.emoji}</Text>
            </View>
            <Text style={typography.caption as any}>{q.label}</Text>
          </Pressable>
        ))}
      </View>

      <Card style={styles.promoCard}>
        <Text style={[typography.h3 as any, { color: colors.textInverse }]}>Flash Sale ✈️</Text>
        <Text style={{ color: colors.textInverse, marginTop: 4 }}>Up to 25% off flights to Dubai this week</Text>
      </Card>

      <SectionHeader title="Recommended Hotels" onSeeAll={() => navigation.navigate('RecommendedHotels')} />
      {loading ? (
        <Skeleton height={140} />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={hotels}
          keyExtractor={(i) => i.hotelId}
          renderItem={({ item }) => (
            <Card style={styles.hotelCard} onPress={() => navigation.navigate('HotelDetails', { hotelId: item.hotelId })}>
              <View style={styles.hotelImage} />
              <Text style={typography.h3 as any} numberOfLines={1}>{item.name}</Text>
              <Text style={typography.caption as any}>⭐ {item.rating} · {item.city}</Text>
              <Text style={typography.price as any}>${item.pricePerNight}/night</Text>
            </Card>
          )}
        />
      )}

      <SectionHeader title="Popular Tours" onSeeAll={() => navigation.navigate('RecommendedTours')} />
      {loading ? (
        <Skeleton height={140} />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tours}
          keyExtractor={(i) => i.tourId}
          renderItem={({ item }) => (
            <Card style={styles.hotelCard} onPress={() => navigation.navigate('TourDetails', { tourId: item.tourId })}>
              <View style={styles.hotelImage} />
              <Text style={typography.h3 as any} numberOfLines={1}>{item.title}</Text>
              <Text style={typography.caption as any}>⭐ {item.rating} · {item.duration}</Text>
              <Text style={typography.price as any}>${item.price}</Text>
            </Card>
          )}
        />
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
  bellWrap: { padding: spacing.xs },
  badge: { position: 'absolute', top: 4, right: 4, width: 8, height: 8, borderRadius: 4, backgroundColor: colors.accent },
  searchBar: {
    backgroundColor: colors.backgroundSecondary, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.md,
  },
  quickLinksRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: spacing.sm },
  quickLink: { alignItems: 'center', width: '16%', marginBottom: spacing.sm },
  quickLinkCircle: {
    width: 48, height: 48, borderRadius: 24, backgroundColor: colors.backgroundSecondary,
    alignItems: 'center', justifyContent: 'center', marginBottom: 4,
  },
  promoCard: { backgroundColor: colors.primary, marginTop: spacing.sm, borderWidth: 0 },
  hotelCard: { width: 180, marginRight: spacing.sm },
  hotelImage: { height: 90, borderRadius: radius.md, backgroundColor: colors.divider, marginBottom: spacing.xs },
});

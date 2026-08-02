import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Screen, Card, StateScreen, Skeleton, SectionHeader } from '../../components';
import { HotelService } from '../../services';
import { colors, spacing, typography } from '../../theme';

export const RecommendedHotelsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { HotelService.recommendationsForDestination('DXB').then((r) => { setHotels(r.data); setLoading(false); }); }, []);

  if (loading) return <Screen><Skeleton height={400} /></Screen>;
  if (hotels.length === 0) return <Screen scroll={false}><StateScreen emoji="🏨" title="No Hotels Available" message="Try adjusting your dates or destination." /></Screen>;

  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.xs }]}>Hotels Near Your Destination</Text>
      <FlatList
        data={hotels}
        keyExtractor={(i) => i.hotelId}
        contentContainerStyle={{ paddingBottom: spacing.xl }}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: spacing.sm }} onPress={() => navigation.navigate('HotelDetails', { hotelId: item.hotelId })}>
            <View style={styles.image} />
            <View style={styles.row}>
              <Text style={typography.h3 as any}>{item.name}</Text>
              <Text style={typography.price as any}>${item.pricePerNight}/night</Text>
            </View>
            <Text style={typography.caption as any}>⭐ {item.rating} ({item.reviews}) · {item.distanceFromCenter} from center</Text>
            <View style={{ flexDirection: 'row', gap: spacing.xs, marginTop: spacing.xs }}>
              {item.freeBreakfast && <Badge label="Free Breakfast" />}
              {item.freeCancellation && <Badge label="Free Cancellation" />}
            </View>
          </Card>
        )}
      />
    </Screen>
  );
};

const Badge: React.FC<{ label: string }> = ({ label }) => (
  <View style={styles.badge}><Text style={styles.badgeText}>{label}</Text></View>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.xs },
  image: { height: 120, borderRadius: 12, backgroundColor: colors.divider },
  badge: { backgroundColor: colors.successBg, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 999 },
  badgeText: { fontSize: 11, color: colors.success, fontWeight: '600' },
});

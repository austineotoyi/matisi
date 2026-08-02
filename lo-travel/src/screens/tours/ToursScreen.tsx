import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Screen, Card, Button, StateScreen, Skeleton } from '../../components';
import { TourService } from '../../services';
import { colors, spacing, typography } from '../../theme';

export const RecommendedToursScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { TourService.recommendationsForDestination('DXB').then((r) => { setTours(r.data); setLoading(false); }); }, []);

  if (loading) return <Screen><Skeleton height={400} /></Screen>;
  if (tours.length === 0) return <Screen scroll={false}><StateScreen emoji="🌍" title="No Tours Available" message="Check back soon for new experiences." /></Screen>;

  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.xs }]}>Things To Do</Text>
      <FlatList
        data={tours}
        keyExtractor={(i) => i.tourId}
        contentContainerStyle={{ paddingBottom: spacing.xl }}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: spacing.sm }} onPress={() => navigation.navigate('TourDetails', { tourId: item.tourId })}>
            <View style={styles.image} />
            <View style={styles.row}>
              <Text style={typography.h3 as any}>{item.title}</Text>
              <Text style={typography.price as any}>${item.price}</Text>
            </View>
            <Text style={typography.caption as any}>⭐ {item.rating} · {item.duration} · {item.groupSize}</Text>
            {item.instantConfirmation && <Text style={{ color: colors.success, fontSize: 12, marginTop: 4 }}>Instant Confirmation</Text>}
          </Card>
        )}
      />
    </Screen>
  );
};

export const TourDetailsScreen: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const [tour, setTour] = useState<any>(null);
  useEffect(() => { TourService.getDetails(route.params?.tourId).then((r) => setTour(r.data)); }, []);
  if (!tour) return <Screen><Skeleton height={280} /></Screen>;

  return (
    <Screen>
      <View style={styles.imageLarge} />
      <Text style={typography.h1 as any}>{tour.title}</Text>
      <Text style={typography.caption as any}>⭐ {tour.rating} · {tour.duration} · {tour.groupSize}</Text>
      <Text style={[typography.price as any, { marginVertical: spacing.md }]}>${tour.price} per person</Text>
      <Button label="Add to Trip" onPress={() => navigation.navigate('TourCheckout')} accessibilityLabel="Add tour to trip" />
    </Screen>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.xs },
  image: { height: 120, borderRadius: 12, backgroundColor: colors.divider },
  imageLarge: { height: 200, borderRadius: 16, backgroundColor: colors.divider, marginBottom: spacing.md },
});

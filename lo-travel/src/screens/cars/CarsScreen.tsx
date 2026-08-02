import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Screen, Card, StateScreen, Skeleton } from '../../components';
import { CarService } from '../../services';
import { colors, spacing, typography } from '../../theme';

export const CarRentalRecommendationsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { CarService.search().then((r) => { setCars(r.data); setLoading(false); }); }, []);

  if (loading) return <Screen><Skeleton height={300} /></Screen>;
  if (cars.length === 0) return <Screen scroll={false}><StateScreen emoji="🚗" title="No Cars Available" message="Try a different pickup location or date." /></Screen>;

  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Car Rentals</Text>
      <FlatList
        data={cars}
        keyExtractor={(i) => i.carId}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: spacing.sm }} onPress={() => navigation.navigate('CarDetails', { carId: item.carId })}>
            <View style={styles.row}>
              <View>
                <Text style={typography.h3 as any}>{item.model}</Text>
                <Text style={typography.caption as any}>{item.type} · {item.seats} seats · {item.bags} bags · {item.transmission}</Text>
              </View>
              <Text style={typography.price as any}>${item.pricePerDay}/day</Text>
            </View>
          </Card>
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({ row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } });

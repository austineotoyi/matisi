import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Screen, Card, Button, Skeleton } from '../../components';
import { HotelService } from '../../services';
import { colors, spacing, typography } from '../../theme';

export const HotelDetailsScreen: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const { hotelId } = route.params ?? {};
  const [hotel, setHotel] = useState<any>(null);

  useEffect(() => { HotelService.getDetails(hotelId).then((r) => setHotel(r.data)); }, [hotelId]);

  if (!hotel) return <Screen><Skeleton height={300} /></Screen>;

  return (
    <Screen>
      <View style={styles.image} />
      <Text style={typography.h1 as any}>{hotel.name}</Text>
      <Text style={typography.caption as any}>⭐ {hotel.rating} ({hotel.reviews} reviews) · {hotel.city}</Text>
      <Card style={{ marginVertical: spacing.md }}>
        <Text style={typography.body as any}>{hotel.distanceFromAirport} from airport · {hotel.distanceFromCenter} from center</Text>
        <Text style={typography.body as any}>{hotel.freeBreakfast ? 'Breakfast included' : 'No breakfast included'}</Text>
        <Text style={typography.price as any}>${hotel.pricePerNight}/night</Text>
      </Card>
      <Button label="Select Room" onPress={() => navigation.navigate('RoomSelection', { hotelId })} accessibilityLabel="Select a room" />
    </Screen>
  );
};

export const RoomSelectionScreen: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const [rooms, setRooms] = useState<any[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => { HotelService.getRooms(route.params?.hotelId).then((r) => setRooms(r.data)); }, []);

  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Select Your Room</Text>
      <FlatList
        data={rooms}
        keyExtractor={(i) => i.roomId}
        renderItem={({ item }) => (
          <Card selected={selected === item.roomId} onPress={() => setSelected(item.roomId)} style={{ marginBottom: spacing.sm }}>
            <Text style={typography.h3 as any}>{item.name}</Text>
            <Text style={typography.caption as any}>{item.amenities.join(' · ')}</Text>
            <Text style={typography.price as any}>${item.price}/night</Text>
          </Card>
        )}
        ListFooterComponent={<Button label="Continue" onPress={() => navigation.navigate('HotelCheckout')} accessibilityLabel="Continue to hotel checkout" />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({ image: { height: 180, borderRadius: 16, backgroundColor: colors.divider, marginBottom: spacing.md } });

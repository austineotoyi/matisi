import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Screen, Card, StateScreen, Skeleton } from '../../components';
import { FlightService, HotelService, TourService } from '../../services';
import { spacing, typography } from '../../theme';

export const SavedFlightsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [flights, setFlights] = useState<any[] | null>(null);

  useEffect(() => {
    FlightService.search({
      origin: 'NBO', destination: 'DXB', departureDate: '', passengers: 1, cabinClass: 'economy', tripType: 'roundtrip',
    }).then((r) => setFlights(r.data.slice(0, 2)));
  }, []);

  if (flights === null) return <Screen><Skeleton height={200} /></Screen>;
  if (flights.length === 0) {
    return <Screen scroll={false}><StateScreen emoji="✈️" title="No Saved Flights" message="Tap the heart icon on a flight to save it here." /></Screen>;
  }
  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Saved Flights</Text>
      <FlatList
        data={flights}
        keyExtractor={(f) => f.flightId}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: spacing.sm }} onPress={() => navigation.navigate('FlightDetails', { flightId: item.flightId })}>
            <Text style={typography.h3 as any}>{item.airline}</Text>
            <Text style={typography.body as any}>{item.originCity} → {item.destinationCity}</Text>
            <Text style={typography.price as any}>${item.price.toFixed(2)}</Text>
          </Card>
        )}
      />
    </Screen>
  );
};

export const SavedHotelsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [hotels, setHotels] = useState<any[] | null>(null);

  useEffect(() => {
    HotelService.recommendationsForDestination('DXB').then((r) => setHotels(r.data.slice(0, 2)));
  }, []);

  if (hotels === null) return <Screen><Skeleton height={200} /></Screen>;
  if (hotels.length === 0) {
    return <Screen scroll={false}><StateScreen emoji="🏨" title="No Saved Hotels" message="Tap the heart icon on a hotel to save it here." /></Screen>;
  }
  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Saved Hotels</Text>
      <FlatList
        data={hotels}
        keyExtractor={(h) => h.hotelId}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: spacing.sm }} onPress={() => navigation.navigate('HotelDetails', { hotelId: item.hotelId })}>
            <Text style={typography.h3 as any}>{item.name}</Text>
            <Text style={typography.caption as any}>⭐ {item.rating} · {item.city}</Text>
            <Text style={typography.price as any}>${item.pricePerNight}/night</Text>
          </Card>
        )}
      />
    </Screen>
  );
};

export const SavedToursScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [tours, setTours] = useState<any[] | null>(null);

  useEffect(() => {
    TourService.recommendationsForDestination('DXB').then((r) => setTours(r.data.slice(0, 2)));
  }, []);

  if (tours === null) return <Screen><Skeleton height={200} /></Screen>;
  if (tours.length === 0) {
    return <Screen scroll={false}><StateScreen emoji="🌍" title="No Saved Tours" message="Tap the heart icon on a tour to save it here." /></Screen>;
  }
  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Saved Tours</Text>
      <FlatList
        data={tours}
        keyExtractor={(t) => t.tourId}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: spacing.sm }} onPress={() => navigation.navigate('TourDetails', { tourId: item.tourId })}>
            <Text style={typography.h3 as any}>{item.title}</Text>
            <Text style={typography.caption as any}>⭐ {item.rating} · {item.duration}</Text>
            <Text style={typography.price as any}>${item.price}</Text>
          </Card>
        )}
      />
    </Screen>
  );
};

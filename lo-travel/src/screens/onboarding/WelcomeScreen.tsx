import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../../components';
import { colors, spacing, typography } from '../../theme';

export const WelcomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <View style={styles.container}>
    <LinearGradient colors={[colors.primary, colors.accent]} style={styles.hero}>
      <Text style={styles.logo}>LO</Text>
    </LinearGradient>
    <View style={styles.body}>
      <Text style={typography.h1 as any}>Welcome to LO</Text>
      <Text style={[typography.body as any, { color: colors.textSecondary, marginTop: spacing.xs, marginBottom: spacing.xl }]}>
        Flights, hotels, tours, cars, visas & insurance — all in one app.
      </Text>
      <Button label="Log In" onPress={() => navigation.navigate('Login')} />
      <View style={{ height: spacing.sm }} />
      <Button label="Sign Up" variant="secondary" onPress={() => navigation.navigate('Signup')} />
      <View style={{ height: spacing.sm }} />
      <Button label="Continue as Guest" variant="ghost" onPress={() => navigation.replace('Main')} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  hero: { height: '40%', alignItems: 'center', justifyContent: 'center' },
  logo: { fontSize: 48, fontWeight: '800', color: colors.textInverse },
  body: { flex: 1, padding: spacing.xl, justifyContent: 'center' },
});

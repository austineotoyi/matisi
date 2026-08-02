import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, ViewStyle } from 'react-native';
import { colors, radius } from '../theme';

/** Shimmer placeholder used while mock services "load" (simulated latency). */
export const Skeleton: React.FC<{ width?: number | string; height?: number; style?: ViewStyle }> = ({
  width = '100%',
  height = 16,
  style,
}) => {
  const opacity = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.5, duration: 600, useNativeDriver: true }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        { width: width as any, height, borderRadius: radius.sm, backgroundColor: colors.divider, opacity },
        style,
      ]}
    />
  );
};

export const styles = StyleSheet.create({});

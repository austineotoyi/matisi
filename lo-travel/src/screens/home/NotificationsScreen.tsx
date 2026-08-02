import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { Screen, StateScreen } from '../../components';
import { NotificationService, Notification } from '../../services/NotificationService';
import { colors, spacing, typography, radius } from '../../theme';

const ICON: Record<string, string> = { booking: '🧾', promotion: '🎉', flightStatus: '✈️' };

export const NotificationsScreen: React.FC = () => {
  const [items, setItems] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    const res = await NotificationService.getAll();
    setItems(res.data);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const markRead = async (id: string) => {
    await NotificationService.markRead(id);
    load();
  };

  if (!loading && items.length === 0) {
    return <Screen scroll={false}><StateScreen emoji="🔔" title="No Notifications Yet" message="We'll let you know when something needs your attention." /></Screen>;
  }

  return (
    <Screen scroll={false}>
      <Text style={[typography.h2 as any, { marginBottom: spacing.md }]}>Notifications</Text>
      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.row, !item.read && styles.rowUnread]}
            onPress={() => markRead(item.id)}
            accessibilityRole="button"
            accessibilityLabel={`${item.title}. ${item.message}${!item.read ? '. Unread' : ''}`}
          >
            <Text style={{ fontSize: 22, marginRight: spacing.sm }}>{ICON[item.type] ?? '🔔'}</Text>
            <View style={{ flex: 1 }}>
              <Text style={typography.h3 as any}>{item.title}</Text>
              <Text style={typography.bodySmall as any}>{item.message}</Text>
            </View>
            {!item.read && <View style={styles.dot} />}
          </Pressable>
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', padding: spacing.md, borderRadius: radius.lg, marginBottom: spacing.xs, backgroundColor: colors.backgroundSecondary },
  rowUnread: { borderWidth: 1, borderColor: colors.accent },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.accent },
});

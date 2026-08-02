import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Screen, Card, Input, Button } from '../../components';
import { SupportService, ChatMessage } from '../../services/SupportService';
import { colors, spacing, typography, radius } from '../../theme';

const HELP_TOPICS = ['Booking Issues', 'Payments & Refunds', 'Visa Questions', 'Check-in Help', 'Account & Login'];

export const HelpCenterScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Help Center</Text>
    <Card style={{ marginBottom: spacing.md }} onPress={() => navigation.navigate('LiveChat')}>
      <Text style={typography.h3 as any}>💬 Chat with us</Text>
      <Text style={typography.bodySmall as any}>Get instant help from our AI assistant, 24/7.</Text>
    </Card>
    {HELP_TOPICS.map((t) => (
      <Card key={t} style={{ marginBottom: spacing.sm }} onPress={() => {}}>
        <Text style={typography.body as any}>{t}</Text>
      </Card>
    ))}
    <Button label="Contact Us" variant="secondary" onPress={() => navigation.navigate('ContactUs')} accessibilityLabel="Contact support" />
  </Screen>
);

export const LiveChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'welcome', sender: 'ai', text: "Hi! I'm the LO assistant. How can I help with your trip today?", createdAt: new Date().toISOString() },
  ]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);

  const send = async () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = { id: `u-${Date.now()}`, sender: 'user', text: input, createdAt: new Date().toISOString() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setSending(true);
    const res = await SupportService.sendChatMessage(userMsg.text);
    setMessages((m) => [...m, res.data]);
    setSending(false);
  };

  return (
    <Screen scroll={false}>
      <Text style={[typography.h2 as any, { marginBottom: spacing.sm }]}>Live Chat</Text>
      <FlatList
        style={{ flex: 1 }}
        data={messages}
        keyExtractor={(m) => m.id}
        renderItem={({ item }) => (
          <View style={[styles.bubble, item.sender === 'user' ? styles.bubbleUser : styles.bubbleAgent]}>
            <Text style={{ color: item.sender === 'user' ? colors.textInverse : colors.textBody }}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputRow}>
        <View style={{ flex: 1 }}>
          <Input label="" placeholder="Type a message…" value={input} onChangeText={setInput} accessibilityLabel="Chat message input" />
        </View>
        <Button label="Send" fullWidth={false} onPress={send} loading={sending} accessibilityLabel="Send message" />
      </View>
    </Screen>
  );
};

export const ContactUsScreen: React.FC = () => (
  <Screen>
    <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Contact Us</Text>
    <Card style={{ marginBottom: spacing.sm }}><Text style={typography.body as any}>📞 +254 700 000 000</Text></Card>
    <Card style={{ marginBottom: spacing.sm }}><Text style={typography.body as any}>✉️ support@lotravel.com</Text></Card>
    <Card><Text style={typography.body as any}>💬 Live chat available 24/7</Text></Card>
  </Screen>
);

const styles = StyleSheet.create({
  bubble: { maxWidth: '80%', padding: spacing.sm, borderRadius: radius.lg, marginBottom: spacing.xs },
  bubbleUser: { backgroundColor: colors.accent, alignSelf: 'flex-end' },
  bubbleAgent: { backgroundColor: colors.backgroundSecondary, alignSelf: 'flex-start' },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginTop: spacing.sm },
});

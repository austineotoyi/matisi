import React from 'react';
import { Modal, View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { colors, radius, spacing, shadow, typography } from '../theme';
import { Button } from './Button';

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

/** Shared bottom sheet used for filters, sort options, seat legends, meal detail, etc. */
export const BottomSheet: React.FC<BottomSheetProps> = ({ visible, onClose, title, children }) => (
  <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
    <Pressable style={styles.backdrop} onPress={onClose} />
    <View style={styles.sheet}>
      <View style={styles.handle} />
      {title ? <Text style={[typography.h3 as any, { marginBottom: spacing.md }]}>{title}</Text> : null}
      {children}
    </View>
  </Modal>
);

interface DialogProps {
  visible: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  destructive?: boolean;
}

/** Shared confirmation dialog — e.g. "Cancel booking?" for both user + support agent flows. */
export const ConfirmDialog: React.FC<DialogProps> = ({
  visible,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Back',
  onConfirm,
  onCancel,
}) => (
  <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
    <View style={styles.dialogBackdrop}>
      <View style={styles.dialogCard}>
        <Text style={[typography.h3 as any, { marginBottom: spacing.xs }]}>{title}</Text>
        <Text style={[typography.body as any, { marginBottom: spacing.lg }]}>{message}</Text>
        <View style={{ flexDirection: 'row', gap: spacing.sm }}>
          <View style={{ flex: 1 }}>
            <Button label={cancelLabel} variant="secondary" onPress={onCancel} />
          </View>
          <View style={{ flex: 1 }}>
            <Button label={confirmLabel} variant="primary" onPress={onConfirm} />
          </View>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(28,35,116,0.35)' },
  sheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    padding: spacing.lg,
    ...shadow.floating,
  },
  handle: {
    width: 44,
    height: 5,
    borderRadius: radius.pill,
    backgroundColor: colors.border,
    alignSelf: 'center',
    marginBottom: spacing.md,
  },
  dialogBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(28,35,116,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  dialogCard: {
    width: '100%',
    backgroundColor: colors.background,
    borderRadius: radius.xl,
    padding: spacing.lg,
    ...shadow.floating,
  },
});

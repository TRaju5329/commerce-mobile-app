import { FlatList, Text, View, Pressable, StyleSheet } from "react-native";
import ScreenContainer from "../../../shared/layout/ScreenContainer";
import { useCartStore } from "../../cart/store/cartStore";
import { colors } from "../../../core/theme/colors";
import { spacing } from "../../../core/theme/spacing";
import { typography } from "../../../core/theme/typography";

export default function CartScreen() {
  const { items, increaseQty, decreaseQty, removeItem } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <ScreenContainer>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>

            <Text style={styles.price}>₹{item.price}</Text>

            <View style={styles.qtyRow}>
              <Pressable onPress={() => decreaseQty(item.id)}>
                <Text style={styles.qtyBtn}>−</Text>
              </Pressable>

              <Text style={styles.qty}>{item.quantity}</Text>

              <Pressable onPress={() => increaseQty(item.id)}>
                <Text style={styles.qtyBtn}>+</Text>
              </Pressable>
            </View>

            <Pressable onPress={() => removeItem(item.id)}>
              <Text style={styles.remove}>Remove</Text>
            </Pressable>
          </View>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total: ₹{total}</Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },

  title: {
    ...typography.subtitle,
    color: colors.text,
  },

  price: {
    marginTop: spacing.xs,
    color: colors.textMuted,
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.sm,
    gap: spacing.md,
  },

  qtyBtn: {
    fontSize: 20,
    paddingHorizontal: spacing.sm,
    color: colors.primary,
  },

  qty: {
    fontSize: 16,
  },

  remove: {
    marginTop: spacing.sm,
    color: "red",
  },

  totalContainer: {
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderColor: colors.border,
  },

  total: {
    ...typography.title,
    color: colors.text,
  },
});
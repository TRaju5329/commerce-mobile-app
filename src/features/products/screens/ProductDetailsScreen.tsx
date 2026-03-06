import { View, Text, StyleSheet, Pressable } from "react-native";
import { useCartStore } from "../../cart/store/cartStore";

export default function ProductDetailsScreen({ route }: any) {
  const { product } = route.params;

  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder} />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>₹{product.price}</Text>

      <Pressable
        style={styles.button}
        onPress={() => addToCart(product)}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  imagePlaceholder: {
    height: 200,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
  },

  price: {
    fontSize: 18,
    marginTop: 8,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
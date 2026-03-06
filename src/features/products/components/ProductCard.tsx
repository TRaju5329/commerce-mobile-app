import { View, Text, StyleSheet, Pressable } from "react-native";
import { Product } from "../types";
import { useCartStore } from "../../cart/store/cartStore";
import { useNavigation } from "@react-navigation/native";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);
  const navigation = useNavigation<any>();

  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate("ProductDetails", { product })}
    >
      <View style={styles.imagePlaceholder} />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>₹{product.price}</Text>

      <Pressable
        style={styles.button}
        onPress={() => addToCart(product)}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    padding: 12,
  },

  imagePlaceholder: {
    height: 120,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    marginBottom: 10,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
  },

  price: {
    marginTop: 4,
    marginBottom: 8,
    fontWeight: "700",
  },

  button: {
    backgroundColor: "#000",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});
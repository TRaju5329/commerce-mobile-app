import { FlatList, StyleSheet } from "react-native";
import { useState } from "react";

import ScreenContainer from "../../../shared/layout/ScreenContainer";
import ProductCard from "../../products/components/ProductCard";
import ProductSearch from "../../products/components/ProductSearch";
import { mockProducts } from "../../products/mockProducts";

import { spacing } from "../../../core/theme/spacing";

export default function ProductsScreen() {
  const [search, setSearch] = useState("");

  const filteredProducts = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScreenContainer>
      <ProductSearch value={search} onChange={setSearch} />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => <ProductCard product={item} />}
        showsVerticalScrollIndicator={false}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: spacing.md,
    marginBottom: spacing.md,
  },

  container: {
    paddingBottom: spacing.lg,
  },
});
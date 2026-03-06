import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductsScreen from "../../features/customer/screens/ProductsScreen";
import ProductDetailsScreen from "../../features/products/screens/ProductDetailsScreen";

const Stack = createNativeStackNavigator();

export default function ProductsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsList"
        component={ProductsScreen}
        options={{ title: "Products" }}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ title: "Product Details" }}
      />
    </Stack.Navigator>
  );
}
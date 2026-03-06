import { useEffect } from "react";
import RootNavigator from "./src/app/navigation/RootNavigator";
import { useCartStore } from "./src/features/cart/store/cartStore";

export default function App() {
  const loadCart = useCartStore((state) => state.loadCart);

  useEffect(() => {
    loadCart();
  }, []);

  return <RootNavigator />;
}
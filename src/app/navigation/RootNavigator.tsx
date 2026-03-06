import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../../features/auth/screens/LoginScreen";
import { useAuthStore } from "../../features/auth/store/authStore";
import CustomerNavigator from "./CustomerNavigator";
import AdminNavigator from "./AdminNavigator";

export default function RootNavigator() {
  const role = useAuthStore((state) => state.role);

  return (
    <NavigationContainer>
      {role === null && <LoginScreen />}
      {role === "customer" && <CustomerNavigator />}
      {role === "admin" && <AdminNavigator />}
    </NavigationContainer>
  );
}
import { View, Text, StyleSheet } from "react-native";
import Button from "../../../shared/components/Button";
import ScreenContainer from "../../../shared/layout/ScreenContainer";
import { useAuthStore } from "../store/authStore";

export default function LoginScreen() {
  const login = useAuthStore((state) => state.login);

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Commerce App</Text>

        <Button
          title="Login as Customer"
          onPress={() => login("customer")}
        />

        <Button
          title="Login as Admin"
          onPress={() => login("admin")}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
});
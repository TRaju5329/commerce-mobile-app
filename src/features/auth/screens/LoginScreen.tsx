import { Text, View, StyleSheet } from "react-native";
import Button from "../../../shared/components/Button";
import ScreenContainer from "../../../shared/layout/ScreenContainer";

export default function LoginScreen() {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Commerce App</Text>

        <Button title="Login as Customer" onPress={() => {}} />
        <Button title="Login as Admin" onPress={() => {}} />
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
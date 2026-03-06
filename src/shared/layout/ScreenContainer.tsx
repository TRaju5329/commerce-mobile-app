import { View, StyleSheet } from "react-native";
import { colors } from "../../core/theme/colors";

export default function ScreenContainer({ children }: any) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
});
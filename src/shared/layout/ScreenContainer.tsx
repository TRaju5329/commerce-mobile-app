import { SafeAreaView, StyleSheet } from "react-native";
import { colors } from "../../core/theme/colors";
import { spacing } from "../../core/theme/spacing";

export default function ScreenContainer({ children }: any) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
});
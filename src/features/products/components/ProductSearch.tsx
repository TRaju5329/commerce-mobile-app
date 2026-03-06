import { TextInput, StyleSheet, View } from "react-native";

interface Props {
  value: string;
  onChange: (text: string) => void;
}

export default function ProductSearch({ value, onChange }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search products..."
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    padding: 12,
  },
});
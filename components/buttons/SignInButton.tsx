import { ButtonColors } from "@/constants/theme";
import { Pressable, StyleSheet, Text } from "react-native";

export default function SignInButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Sign In</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
  },
  text: {
    color: ButtonColors.signInText,
    fontSize: 16,
    fontWeight: "600",
  },
});
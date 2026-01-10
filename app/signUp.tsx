import GoogleButton from "@/components/forms/GoogleButton";
import InputField from "@/components/forms/InputField_";
import { ButtonColors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const router = useRouter();

  const handleSignUp = () => {
    Alert.alert("Sign Up", `Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
    router.push("/(tabs)");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#000" onPress={() => router.back()} />
        <Text style={styles.title}>Sign Up</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <InputField
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>E-mail</Text>
        <InputField
          placeholder="Enter your e-mail"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <InputField
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Terms & Privacy */}
        <Pressable
          style={styles.termsContainer}
          onPress={() => setAgreedToTerms(!agreedToTerms)}
        >
          <Ionicons
            name={agreedToTerms ? "checkbox" : "square-outline"}
            size={22}
            color={agreedToTerms ? "#4F63AC" : "#888"}
          />
          <Text style={styles.terms}>
            I agree with{" "}
            <Text style={{ color: "#4F63AC", fontWeight: "600" }}>
              Terms & Privacy
            </Text>
          </Text>
        </Pressable>

        {/* Sign Up Button */}
        <Pressable
          style={styles.button}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.or}>Or sign up with</Text>
          <View style={styles.line} />
        </View>

        {/* Google Sign Up */}
        <GoogleButton onPress={() => Alert.alert("Google Sign Up")} />

        {/* Footer */}
        <Text style={styles.footer}>
          Already have an account?{" "}
          <Text
            style={{ color: "#4F63AC", fontWeight: "600" }}
            onPress={() => router.push("/signIn")}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25, // slightly tighter
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginLeft: 12,
    color: "#000",
  },
  form: {
    width: "100%",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginTop: 10, // reduced
    marginBottom: 4, // reduced
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8, // reduced
    marginBottom: 20, // reduced
  },
  terms: {
    fontSize: 14,
    marginLeft: 8,
    color: "#555",
  },
  button: {
    backgroundColor: ButtonColors.signUpBackground,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: ButtonColors.signUpText,
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20, // slightly reduced
  },
  line: { flex: 1, height: 1, backgroundColor: "#ccc" },
  or: { marginHorizontal: 10, fontSize: 14, color: "#888" },
  footer: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
    color: "#555",
  },
});

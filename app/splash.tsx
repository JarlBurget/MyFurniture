import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import SignInButton from "../components/buttons/SignInButton";
import SignUpButton from "../components/buttons/SignUpButton";

export default function SplashScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/splash_image.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        <Text style={styles.textLine}>You’ll find</Text>
        <Text style={[styles.textLine, styles.orangeUnderline]}>
          All you need
        </Text>
        <Text style={styles.textLine}>Here!</Text>
      </View>

      <SignUpButton onPress={() => router.push("/signUp")} />
      <SignInButton onPress={() => router.push("/signIn")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 300, // reduced from 30 to 15
  },
  textContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  textLine: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  orangeUnderline: {
    color: "#FCA34D",
    textDecorationLine: "underline",
  },
});

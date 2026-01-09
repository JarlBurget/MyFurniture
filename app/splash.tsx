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
      <Text style={styles.text}>
  You’ll find <Text style={{ color: "#FCA34D" }}>all you need</Text> here!
</Text>


      <SignUpButton onPress={() => router.push("/signUp")} />
      <SignInButton onPress={() => router.push("/signIn")} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  image: { width: 300, height: 300, marginBottom: 30 },
  text: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 40 },
});
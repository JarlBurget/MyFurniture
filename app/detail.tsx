import { FavoritesContext } from "@/app/context/FavoritesContext";
import { furnitureData, FurnitureItem } from "@/app/data";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function DetailScreen() {
  const router = useRouter();
  const { productId } = useLocalSearchParams();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const [product, setProduct] = useState<FurnitureItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const found = furnitureData.find((p) => p.id === Number(productId)) || null;
    setProduct(found);
    setLoading(false);
  }, [productId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4F63AC" />
        <Text>Loading product...</Text>
      </View>
    );
  }

  if (!product) return <Text style={{ padding: 20 }}>Product not found</Text>;

  const isFavorite = favorites.includes(product.id);

  return (
    <View style={styles.container}>
      {/* Top Back Button */}
      <TouchableOpacity
        style={styles.backButtonTop}
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={20} color="#4F63AC" />
      </TouchableOpacity>

      {/* Image */}
      <Image source={{ uri: product.imageUrl }} style={styles.image} />

      {/* Card */}
      <View style={styles.cardContainer}>
        <ScrollView
          contentContainerStyle={styles.cardContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Text style={styles.description}>{product.description}</Text>

          <View style={styles.buttonsContainer}>
            {/* Heart icon */}
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => toggleFavorite(product.id)}
            >
              <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                size={28}
                color={isFavorite ? "#E53935" : "#4F63AC"}
              />
            </TouchableOpacity>

            {/* Back Button */}
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.55,
  },
  backButtonTop: {
    position: "absolute",
    top: 32,
    left: 24,
    zIndex: 10,
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardContainer: {
    flex: 1,
    marginTop: -40, // overlap image
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  cardContent: {
    paddingBottom: 40, // space for buttons
  },
  title: { fontSize: 26, fontWeight: "600", marginBottom: 12 },
  price: { fontSize: 32, fontWeight: "700", marginBottom: 14 },
  description: { fontSize: 16, color: "#606060", lineHeight: 24, marginBottom: 32 },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  iconButton: {
    width: 60,
    height: 60,
    borderRadius: 14,
    backgroundColor: "#F1F3FF",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    paddingVertical: 16,
    paddingHorizontal: 28,
    backgroundColor: "#4F63AC",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});

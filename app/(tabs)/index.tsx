import { FavoritesContext } from "@/app/context/FavoritesContext";
import { furnitureData, FurnitureItem } from "@/app/data";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type Category = "all" | "chair" | "table" | "armchair" | "bed" | "lamp";

const categories = [
  { key: "all", label: "All", icon: "apps" },
  { key: "chair", label: "Chairs", icon: "chair-rolling" },
  { key: "table", label: "Tables", icon: "table-furniture" },
  { key: "armchair", label: "Armchairs", icon: "sofa" },
  { key: "bed", label: "Beds", icon: "bed-king" },
  { key: "lamp", label: "Lamps", icon: "floor-lamp" },
];

export default function HomeScreen() {
  const router = useRouter();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const [products, setProducts] = useState<FurnitureItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  useEffect(() => {
    setProducts(furnitureData);
    setLoading(false);
  }, []);

  const filteredData = products.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderItem = ({ item }: { item: FurnitureItem }) => {
    const isFavorite = favorites.includes(item.id);

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push(`/detail?productId=${item.id}`)}
      >
        <Image source={{ uri: item.imageUrl }} style={styles.image} />

        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => toggleFavorite(item.id)}
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={22}
            color={isFavorite ? "#E53935" : "#444"}
          />
        </TouchableOpacity>

        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4F63AC" />
        <Text>Loading products...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
          <Ionicons name="search" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.header}>Find All You Need</Text>

        <View style={{ width: 30 }} />
      </View>

      {/* Search */}
      {showSearch && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchText}
          onChangeText={setSearchText}
        />
      )}

      {/* Category Filter */}
      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            const isActive = selectedCategory === item.key;

            return (
              <TouchableOpacity
                style={[
                  styles.categoryItem,
                  isActive && styles.categoryItemActive,
                ]}
                onPress={() => setSelectedCategory(item.key as Category)}
              >
                <MaterialCommunityIcons
                  name={item.icon}
                  size={20}
                  color={isActive ? "#fff" : "#555"}
                />
                <Text
                  style={[
                    styles.categoryText,
                    isActive && styles.categoryTextActive,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Products */}
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 50,
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  header: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    flex: 1,
  },

  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  categoryContainer: {
    marginVertical: 12,
  },

  categoryItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#F2F2F2",
    marginRight: 10,
    minWidth: 70,
  },

  categoryItemActive: {
    backgroundColor: "#4F63AC",
  },

  categoryText: {
    fontSize: 12,
    marginTop: 4,
    color: "#555",
    fontWeight: "500",
  },

  categoryTextActive: {
    color: "#fff",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 20,
    width: "48%",
    padding: 10,
    position: "relative",
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 10,
  },

  heartIcon: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 4,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
  },

  price: {
    fontSize: 13,
    color: "#4F63AC",
    marginTop: 4,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

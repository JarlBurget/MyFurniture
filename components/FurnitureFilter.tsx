import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

type Category = 'all' | 'chair' | 'table' | 'armchair' | 'bed' | 'lamp';

interface FilterOption {
  id: Category;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}

interface FurnitureFilterProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const filterOptions: FilterOption[] = [
  { id: 'all', label: 'All', icon: 'grid-outline' },
  { id: 'chair', label: 'Chairs', icon: 'desktop-outline' },
  { id: 'table', label: 'Tables', icon: 'tablet-landscape-outline' },
  { id: 'armchair', label: 'Armchairs', icon: 'tv-outline' },
  { id: 'bed', label: 'Beds', icon: 'bed-outline' },
  { id: 'lamp', label: 'Lamps', icon: 'bulb-outline' },
];

export default function FurnitureFilter({ selectedCategory, onSelectCategory }: FurnitureFilterProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {filterOptions.map((option) => {
        const isSelected = selectedCategory === option.id;
        return (
          <TouchableOpacity
            key={option.id}
            style={[styles.filterButton, isSelected && styles.filterButtonActive]}
            onPress={() => onSelectCategory(option.id)}
          >
            <Ionicons
              name={option.icon}
              size={24}
              color={isSelected ? "#fff" : "#4F63AC"}
            />
            <Text style={[styles.filterText, isSelected && styles.filterTextActive]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  contentContainer: {
    paddingRight: 16,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 10,
    backgroundColor: "#F1F3FF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E0E4FF",
  },
  filterButtonActive: {
    backgroundColor: "#4F63AC",
    borderColor: "#4F63AC",
  },
  filterText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#4F63AC",
  },
  filterTextActive: {
    color: "#fff",
  },
});

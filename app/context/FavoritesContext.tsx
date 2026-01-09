import React, { createContext, ReactNode, useState } from "react";

interface FavoritesContextType {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  toggleFavorite: () => {},
});

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

const toggleFavorite = (id: number) => {
  setFavorites(prev => {
    const updated = prev.includes(id)
      ? prev.filter(fid => fid !== id)
      : [...prev, id];

    console.log("Updated Favorites:", updated);
    return updated;
  });
};

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
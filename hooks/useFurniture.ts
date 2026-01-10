import { FurnitureItem, furnitureData } from "@/app/data";
import axios from "axios";
import { useEffect, useState } from "react";

interface UseFurnitureReturn {
  data: FurnitureItem[];
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook to fetch furniture data from an HTTPS API
 * Falls back to local JSON if no URL is provided
 * @param url - Optional HTTPS URL to fetch furniture data from
 * @returns Object with data, loading, and error fields
 */
export const useFurniture = (url?: string): UseFurnitureReturn => {
  const [data, setData] = useState<FurnitureItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFurniture = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!url) {
          // Fallback to local JSON if no URL provided
          setData(furnitureData);
        } else {
          // Fetch from HTTPS API
          const response = await axios.get<FurnitureItem[]>(url, {
            timeout: 10000, // 10 second timeout
          });

          if (Array.isArray(response.data)) {
            setData(response.data);
          } else {
            setError("Invalid data format received from API");
          }
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.code === "ECONNABORTED") {
            setError("Request timeout - please check your connection");
          } else if (err.response?.status === 404) {
            setError("API endpoint not found (404)");
          } else if (err.response?.status === 500) {
            setError("Server error (500) - please try again later");
          } else if (err.message === "Network Error") {
            setError("Network error - please check your internet connection");
          } else {
            setError(err.message || "Failed to fetch furniture data");
          }
        } else {
          setError("An unexpected error occurred");
        }

        // Fallback to local data on error
        console.warn("Failed to fetch from API, using local data:", err);
        setData(furnitureData);
      } finally {
        setLoading(false);
      }
    };

    fetchFurniture();
  }, [url]);

  return { data, loading, error };
};

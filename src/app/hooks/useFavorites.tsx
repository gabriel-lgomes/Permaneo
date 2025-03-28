import { useState, useEffect } from "react";
import { Course } from "../interfaces/Course";

// Hook para gerenciar os favoritos
export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Course[]>([]);

  // Loading favorites of the local storage
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Update the favorites on the localStorage
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  // Add course on favorites
  const addToFavorites = (course: Course) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.find((fav) => fav.id === course.id)) {
        const newFavorites = [...prevFavorites, course];
        return newFavorites;
      }
      return prevFavorites;
    });
  };

  const removeFromFavorites = (courseId: number) => {
    // Update local state
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (course) => course.id !== courseId
      );

      // Updated local storage after remototion
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  };

  // Verify if course is in the favorites list
  const isFavorite = (courseId: number) => {
    return favorites.some((course) => course.id === courseId);
  };

  return { favorites, addToFavorites, removeFromFavorites, isFavorite };
};

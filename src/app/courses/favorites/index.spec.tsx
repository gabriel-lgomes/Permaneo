import { describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { useFavorites } from "@/app/hooks/useFavorites";
import FavoritesPage from "./page";

// Mock do hook useFavorites
vi.mock("@/app/hooks/useFavorites", () => ({
  useFavorites: vi.fn(),
}));

type Course = {
  id: number;
  title: string;
  description: string;
};

describe("FavoritesPage", () => {
  test('deve renderizar o título "Meus cursos favoritos"', async () => {
    const mockFavorites: Course[] = []; // Mocking a lista vazia com tipo explícito

    (useFavorites as vi.Mock).mockReturnValue({
      favorites: mockFavorites,
    });

    render(<FavoritesPage />);

    const title = await screen.getByRole("heading");
    expect(title).toBeInTheDocument();
  });

  test("deve renderizar os cursos favoritos quando houver", async () => {
    const mockFavorites: Course[] = [
      {
        id: 1,
        title: "Curso React",
        description: "Aprenda React do zero!",
      },
      {
        id: 2,
        title: "Curso Node.js",
        description: "Desenvolva backend com Node.js.",
      },
    ];

    (useFavorites as vi.Mock).mockReturnValue({
      favorites: mockFavorites,
    });

    render(<FavoritesPage />);

    // Verify if the cards are rendered
    const cardElements = screen.getAllByRole("link");
    expect(cardElements).toHaveLength(mockFavorites.length);

    // Verify if the title is rendered
    expect(screen.getByText(mockFavorites[0].title)).toBeInTheDocument();
  });
});

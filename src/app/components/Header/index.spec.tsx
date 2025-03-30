import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Test render header", () => {
  test("Should render title", async () => {
    render(<Header />);

    const titles = await screen.findAllByRole("heading");
    expect(titles).toHaveLength(1);
  });

  test("Should render Logo", async () => {
    render(<Header />);

    const logo = screen.getByAltText("Grupo Permaneo");
    expect(logo).toHaveAttribute("alt", "Grupo Permaneo");
  });

  test("Should render Nav", async () => {
    render(<Header />);

    // Get the links with the correct name
    const coursesLink = screen.getByRole("link", { name: /cursos/i });
    const favoritesLink = screen.getByRole("link", { name: /favoritos/i });

    // Check if the links exist in the document
    expect(coursesLink).toBeInTheDocument();
    expect(favoritesLink).toBeInTheDocument();
  });
});

import { describe, test, expect, vi, beforeEach } from "vitest";
import { screen, render } from "@testing-library/react";
import Home from "./page";
import { useCourses } from "./context/CoursesContext";

// Mock do useCourses
vi.mock("./context/CoursesContext", () => ({
  useCourses: vi.fn(),
}));

const mockUseCourses = useCourses as vi.MockedFunction<typeof useCourses>;

describe("Test rendering the home page", () => {
  beforeEach(() => {
    // Reset mock antes de cada teste
    mockUseCourses.mockReset();
  });

  test("Should render title", async () => {
    mockUseCourses.mockReturnValue({ courses: [] });
    render(<Home />);

    const title = await screen.findByRole("heading", {
      name: "Cursos",
    });

    expect(title).toBeInTheDocument();
  });

  test("Should render 'Nenhum curso encontrado' when no courses", () => {
    mockUseCourses.mockReturnValue({ courses: null });
    render(<Home />);

    const noCoursesMessage = screen.getByText("Nenhum curso encontrado!");
    expect(noCoursesMessage).toBeInTheDocument();
  });

  test("Should render correct number of Card components", () => {
    const mockCourses = [
      {
        id: "1",
        title: "Curso 1",
        description: "Descrição do curso 1",
      },
      {
        id: "2",
        title: "Curso 2",
        description: "Descrição do curso 2",
      },
    ];

    mockUseCourses.mockReturnValue({ courses: mockCourses });
    render(<Home />);

    const cards = screen.getAllByRole("link");
    expect(cards).toHaveLength(mockCourses.length);
  });

  test("Should render Card with correct props", () => {
    const mockCourse = {
      id: "1",
      title: "Curso Teste",
      description: "Descrição teste",
    };

    mockUseCourses.mockReturnValue({ courses: [mockCourse] });
    render(<Home />);

    // Verify data
    expect(screen.getByText(mockCourse.title)).toBeInTheDocument();
    expect(screen.getByText(mockCourse.description)).toBeInTheDocument();

    // Verify if id is correct
    const cardLink = screen.getByRole("link");
    expect(cardLink).toHaveAttribute("href", `/courses/${mockCourse.id}`);
  });
});

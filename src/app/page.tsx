"use client";
import { useCourses } from "./context/CoursesContext";
import Card from "./components/Card/Card";

export default function Home() {
  // Accessing the context
  const { courses } = useCourses();

  return (
    <main>
      <section className="py-8">
        <div className="container mx-auto lg:max-w-[1280px] max-w-full">
          <h1 className="text-4xl font-black">Courses</h1>
          <div className="mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-x-4 gap-y-8 py-8">
            {courses &&
              courses.map((course) => (
                <Card
                  key={course.id}
                  id={`/courses/${course.id}`}
                  title={course.title}
                  text={course.description}
                  image="/grupopermaneo_logo.webp"
                />
              ))}
            {!courses && (
              <p className="text-2xl font-black">Nenhum curso encontrado!</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

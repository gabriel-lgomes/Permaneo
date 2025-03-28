"use client";

import Card from "@/app/components/Card/Card";
import { useFavorites } from "@/app/hooks/useFavorites";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  console.log(favorites);

  return (
    <section className="py-8">
      <div className="container mx-auto lg:max-w-[1280px] max-w-full">
        <h1 className="text-4xl font-black">Meus cursos favoritos</h1>
        <div className="mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-x-4 gap-y-8 py-8">
          {/* Map in the courses case it exists */}
          {favorites &&
            favorites.map((course) => (
              <Card
                key={course.id}
                id={`/courses/${course.id}`}
                title={course.title}
                text={course.description}
                image="/grupopermaneo_logo.webp"
              />
            ))}
        </div>
        {favorites.length === 0 && (
          <p className="text-2xl text-center">Nenhum curso encontrado!</p>
        )}
      </div>
    </section>
  );
}

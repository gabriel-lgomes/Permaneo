"use client";

import { useCourses } from "@/app/context/CoursesContext";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function CourseDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const { courses, isCoursePurchased } = useCourses();
  const course = courses.find((c) => c.id === Number(id));

  // Redirect if course is purchased
  if (isCoursePurchased(Number(id))) {
    redirect(`${id}/player`, undefined);
  }

  return (
    <div className="container mx-auto">
      {course && (
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-black">{course.title}</h1>
          <p className="text-2xl">{course.description}</p>
          <div className="flex items-center flex-wrap lg:gap-14 gap-8">
            <div>
              <p className="text-2xl font-black">
                {/* format price */}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(course.price)}
              </p>
              <p className="text-xs">
                {/* format date */}
                Curso criado em:
                {new Date(course.created_at).toLocaleDateString("pt-BR")}
              </p>
            </div>
            <div>
              <Link
                href={"#"}
                className="text-2xl text-white bg-primary rounded-xl px-8 py-2"
              >
                Comprar curso
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

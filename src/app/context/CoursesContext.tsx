"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { courses } from "../data/courses";
import { user } from "../data/users";
import { Course } from "../interfaces/Course";
import { User } from "../interfaces/User";

// Definindo o tipo do contexto
interface CoursesContextType {
  courses: Course[];
  user: User;
  isCoursePurchased: (courseId: number) => boolean;
}

// Criando o contexto com tipo explícito e valor inicial
const CoursesContext = createContext<CoursesContextType>({
  courses: [],
  user: {
    id: 0,
    name: "",
    courses: [],
  },
  isCoursePurchased: () => false,
});

// Provider que disponibiliza o contexto
export const CoursesProvider = ({ children }: { children: ReactNode }) => {
  // Função para verificar se curso foi comprado
  const isCoursePurchased = (courseId: number) => {
    return user.courses.some((course) => course.courseId === courseId);
  };

  return (
    <CoursesContext.Provider value={{ courses, user, isCoursePurchased }}>
      {children}
    </CoursesContext.Provider>
  );
};

// Hook para acessar o contexto
export const useCourses = () => {
  const context = useContext(CoursesContext);
  if (!context) {
    throw new Error("useCourses must be used within a CoursesProvider");
  }
  return context;
};

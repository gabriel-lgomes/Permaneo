"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { courses } from "../data/courses";
import { user } from "../data/users";
import { Course } from "../interfaces/Course";
import { User } from "../interfaces/User";

// Defining the context type
interface CoursesContextType {
  courses: Course[];
  user: User;
  isCoursePurchased: (courseId: number) => boolean;
}

// Creating the context with explicit type and initial value
const CoursesContext = createContext<CoursesContextType>({
  courses: [],
  user: {
    id: 0,
    name: "",
    courses: [],
  },
  isCoursePurchased: () => false,
});

// Provider of context
export const CoursesProvider = ({ children }: { children: ReactNode }) => {
  // function to check if a course is purchased
  const isCoursePurchased = (courseId: number) => {
    return user.courses.some((course) => course.courseId === courseId);
  };

  return (
    <CoursesContext.Provider value={{ courses, user, isCoursePurchased }}>
      {children}
    </CoursesContext.Provider>
  );
};

// Hook for access the context
export const useCourses = () => {
  const context = useContext(CoursesContext);
  if (!context) {
    throw new Error("useCourses must be used within a CoursesProvider");
  }
  return context;
};

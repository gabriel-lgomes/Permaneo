"use client";

import Button from "@/app/components/Button/Button";
import { useCourses } from "@/app/context/CoursesContext";
import React, { useEffect, useRef, useState } from "react";

export default function CoursePlayer({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const { courses } = useCourses();
  const course = courses.find((c) => c.id === Number(id));
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [savedTime, setSavedTime] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Function to pause the course
  function handlePause(playerRef: HTMLVideoElement) {
    playerRef.pause();
    localStorage.setItem(
      `course-progress-${id}`,
      playerRef.currentTime.toString()
    );
    setIsPaused(true);
    // Get the saved time
    const getProgress = localStorage.getItem(`course-progress-${id}`);
    setSavedTime(parseFloat(getProgress || "0"));
  }

  // Function to restart the course
  function handleRestart(playerRef: HTMLVideoElement) {
    playerRef.currentTime = 0;
    playerRef.play();
    setSavedTime(1);
    localStorage.setItem(`course-progress-${id}`, "0");
    setIsPaused(false);
  }

  // Function to resume the course
  function handleResume(playerRef: HTMLVideoElement) {
    playerRef.currentTime = savedTime;
    playerRef.play();
    setIsPaused(false);
  }

  // Function to play the course
  function handlePlay(playerRef: HTMLVideoElement) {
    playerRef.play();
    setSavedTime(1);
  }

  // Check if there is a progress saved
  useEffect(() => {
    const savedProgress = localStorage.getItem(`course-progress-${id}`);
    if (savedProgress) {
      setSavedTime(parseFloat(savedProgress));
      setIsPaused(true);
      playerRef.current!.currentTime = parseFloat(savedProgress);
    }
  }, [id]);

  if (!course) {
    return <div className="container mx-auto">Curso não encontrado</div>;
  }

  return (
    <div className="container mx-auto pb-10">
      <div className="relative">
        <div className="flex flex-col gap-6 max-w-[1000px] mx-auto">
          <h1 className="text-3xl font-black">{course.title}</h1>
          <video
            ref={playerRef}
            width="900"
            controls
            onPause={() => playerRef.current && handlePause(playerRef.current)}
            onPlay={() => playerRef.current && handlePlay(playerRef.current)}
          >
            <source src="/video.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>

          {/* Buttons of Controll */}
          <div className="flex gap-4">
            {savedTime > 0 && (
              <Button
                type="secondary"
                onClick={() => handleRestart(playerRef.current!)}
              >
                Reiniciar curso
              </Button>
            )}
            {savedTime === 0 && (
              <Button
                type="primary"
                onClick={() => handlePlay(playerRef.current!)}
              >
                Iniciar curso
              </Button>
            )}
            {isPaused ? (
              <Button
                type="primary"
                onClick={() => handleResume(playerRef.current!)}
              >
                Continuar assistindo
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

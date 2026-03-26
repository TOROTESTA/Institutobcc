"use client";

import { useState } from "react";
import type { Exercise } from "../data/exercises/types";
import { ExerciseRenderer } from "./ExerciseRenderer";

type Props = {
  course: string;
  exercises: Exercise[];
  defaultOpen?: boolean;
};

export function CourseAccordion({ course, exercises, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-[0_18px_50px_rgba(16,47,82,0.08)]">
      
      {/* Header clickeable */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-8 py-6 text-left transition hover:bg-[var(--accent-soft)]"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            Course
          </p>
          <h2 className="mt-1 text-2xl font-extrabold text-[var(--primary)]">
            {course}
          </h2>
          <p className="mt-1 text-sm text-[var(--text)]">
            {exercises.length} {exercises.length === 1 ? "exercise" : "exercises"}
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)] transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>

      {/* Contenido desplegable */}
      {open && (
        <div className="space-y-8 border-t border-[var(--border)] px-8 py-8">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <h3 className="text-xl font-extrabold text-[var(--primary)]">
                {exercise.title}
              </h3>
              <div className="mt-6">
                <ExerciseRenderer exercise={exercise} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { isAnswerCorrect } from "../lib/normalize";
import type { Exercise } from "../data/exercises/types";

type Props = {
  exercise: Exercise;
};

export function FillInTheBlanksExercise({ exercise }: Props) {
  const blanks = useMemo(
    () => exercise.parts.filter((part) => part.type === "blank"),
    [exercise.parts]
  );

  const initialAnswers = useMemo(() => {
    return Object.fromEntries(blanks.map((blank) => [blank.id, ""])) as Record<string, string>;
  }, [blanks]);

  const [answers, setAnswers] = useState<Record<string, string>>(initialAnswers);
  const [submitted, setSubmitted] = useState(false);

  const score = blanks.filter((blank) =>
    isAnswerCorrect(answers[blank.id] ?? "", blank.answers)
  ).length;

  function handleChange(id: string, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleReset() {
    setAnswers(initialAnswers);
    setSubmitted(false);
  }

  return (
    <div className="exercise-page-wrap">
      <section className="exercise-hero">
        <div className="px-2 pb-4">
          {exercise.instructions && (
            <p className="text-sm leading-6 text-[var(--text)]">
              {exercise.instructions}
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        {/* Score bar — solo mobile */}
        <div className="mb-4 flex items-center justify-between rounded-2xl bg-[var(--primary)] px-5 py-4 text-white lg:hidden">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/75">Score</p>
            <p className="text-3xl font-extrabold">
              {submitted ? `${score}/${blanks.length}` : "--"}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setSubmitted(true)}
              className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-[var(--primary)]"
            >
              Corregir
            </button>
            <button
              onClick={handleReset}
              className="rounded-xl border border-white/40 px-4 py-2 text-sm font-bold text-white"
            >
              Reiniciar
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          {/* Ejercicio */}
          <div className="rounded-[1.5rem] bg-[var(--surface)] p-4 md:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-[var(--border)] pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)] md:text-sm">
                  Fill in the blanks
                </p>
                <h2 className="mt-1 text-xl font-extrabold text-[var(--primary)] md:text-2xl">
                  Complete the activity
                </h2>
              </div>
              <div className="hidden rounded-full bg-[var(--primary-soft)] px-4 py-2 text-sm font-bold text-[var(--primary)] md:block">
                Auto-corrected
              </div>
            </div>

            <div className="whitespace-pre-wrap text-base leading-[3rem] text-[var(--text-dark)] md:text-[18px] md:leading-[3.2rem]">
              {exercise.parts.map((part, index) => {
                if (part.type === "text") {
                  return <span key={`${part.type}-${index}`}>{part.value}</span>;
                }

                const value = answers[part.id] ?? "";
                const correct = isAnswerCorrect(value, part.answers);

                let inputClass =
                  `mx-1 inline-block rounded-lg border px-2 py-1 text-center text-sm font-semibold outline-none transition md:text-base ${part.wide ? "min-w-[180px] w-[220px] md:w-[280px]" : "min-w-[80px] w-[120px] md:min-w-[100px] md:w-[140px]"} `;

                if (!submitted) {
                  inputClass += "border-slate-300 bg-white focus:border-[var(--primary)]";
                } else if (correct) {
                  inputClass += "border-green-600 bg-green-50 text-green-700";
                } else {
                  inputClass += "border-red-500 bg-red-50 text-red-700";
                }

                return (
                  <span key={part.id} className="mx-1 inline-flex flex-col align-middle">
                    <input
                      type="text"
                      value={value}
                      placeholder={part.placeholder || "..."}
                      onChange={(e) => handleChange(part.id, e.target.value)}
                      className={inputClass}
                    />
                    {submitted && !correct && (
                      <span className="mt-1 text-center text-xs font-semibold text-[var(--accent)]">
                        Correct: {part.answers[0]}
                      </span>
                    )}
                  </span>
                );
              })}
            </div>

            {/* Botones — solo desktop */}
            <div className="mt-8 hidden flex-wrap gap-4 lg:flex">
              <button onClick={() => setSubmitted(true)} className="btn-primary">
                Corregir
              </button>
              <button onClick={handleReset} className="btn-secondary">
                Reiniciar
              </button>
            </div>
          </div>

          {/* Score sidebar — solo desktop */}
          <aside className="hidden rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_18px_50px_rgba(16,47,82,0.08)] lg:block">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
              Your result
            </p>
            <div className="mt-4 rounded-[1.5rem] bg-[var(--primary)] px-6 py-8 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-white/75">Score</p>
              <p className="mt-3 text-5xl font-extrabold">
                {submitted ? `${score}/${blanks.length}` : "--"}
              </p>
              <p className="mt-3 text-sm text-white/80">
                Completá el ejercicio y tocá "Corregir".
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <button onClick={() => setSubmitted(true)} className="btn-primary w-full">
                Corregir
              </button>
              <button onClick={handleReset} className="btn-secondary w-full">
                Reiniciar
              </button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
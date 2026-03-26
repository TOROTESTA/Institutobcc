import type { Exercise } from "../data/exercises/types";
import { FillInTheBlanksExercise } from "./FillInTheBlanksExercise";

type Props = {
  exercise: Exercise;
};

export function ExerciseRenderer({ exercise }: Props) {
  switch (exercise.type) {
    case "fill-in-the-blanks":
      return <FillInTheBlanksExercise exercise={exercise} />;
    default:
      return <p>Tipo de ejercicio no soportado.</p>;
  }
}
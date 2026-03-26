export type ExerciseBase = {
  slug: string;
  title: string;
  topic: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  instructions: string;
  type: "fill-in-the-blanks";
};

export type FillBlankPart =
  | {
      type: "text";
      value: string;
    }
  | {
      type: "blank";
      id: string;
      answers: string[];
      placeholder?: string;
    };

export type FillInTheBlanksExercise = ExerciseBase & {
  type: "fill-in-the-blanks";
  parts: FillBlankPart[];
};

export type Exercise = FillInTheBlanksExercise;
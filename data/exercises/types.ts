
export type Exercise = {
  id: string;
  title: string;
  type: "fill-in-the-blanks";
  course?: string;
  instructions?: string;
  parts: ExercisePart[];
};

export type ExercisePart =
  | { type: "text"; value: string }
  | {
      type: "blank";
      id: string;
      answers: string[];
      placeholder?: string;
      wide?: boolean;
    };

    
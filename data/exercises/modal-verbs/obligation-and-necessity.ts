import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    id: "obn-001",
    title: "Exercise 1 – Fill in the blanks with the correct modal verb",
    instructions: "Use: have to, must, mustn't, don't have to, can.",
    type: "fill-in-the-blanks",
    parts: [
      { type: "text", value: "1- He " },
      { type: "blank", id: "obn-1-1", answers: ["mustn't"], placeholder: "..." },
      { type: "text", value: " ride a bike without hands. It's dangerous." },

      { type: "text", value: "\n2- They " },
      { type: "blank", id: "obn-1-2", answers: ["mustn't"], placeholder: "..." },
      { type: "text", value: " eat in the classroom. It's not allowed." },

      { type: "text", value: "\n3- I " },
      { type: "blank", id: "obn-1-3", answers: ["can't"], placeholder: "..." },
      { type: "text", value: " drink milk. I'm allergic to it." },

      { type: "text", value: "\n4- You " },
      { type: "blank", id: "obn-1-4", answers: ["don't have to"], placeholder: "..." },
      { type: "text", value: " come to the party if you don't want to. It's optional." },

      { type: "text", value: "\n5- We " },
      { type: "blank", id: "obn-1-5", answers: ["have to", "must"], placeholder: "..." },
      { type: "text", value: " wear a uniform to school every day." },

      { type: "text", value: "\n6- She " },
      { type: "blank", id: "obn-1-6", answers: ["can"], placeholder: "..." },
      { type: "text", value: " swim very well. She won a competition." },
    ],
  },
];
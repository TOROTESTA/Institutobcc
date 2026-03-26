import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    id: "rs-001",
    title: "Exercise 1 – Rewrite the sentences in Reported Speech",
    course: "Pre Int – Teens 3 / Intensive 2",
    type: "fill-in-the-blanks",
    parts: [
      { type: "text", value: '1- "I can\'t come today."\nHe said ' },
      { type: "blank", id: "rs-1-1", answers: ["he couldn't come that day"], placeholder: "...", wide: true },
      { type: "text", value: "." },

      { type: "text", value: '\n\n2- "Do you understand this exercise?"\nThe teacher asked ' },
      { type: "blank", id: "rs-1-2", answers: ["if we understood that exercise"], placeholder: "...", wide: true },
      { type: "text", value: "." },

      { type: "text", value: '\n\n3- "Don\'t be noisy!"\nShe told us ' },
      { type: "blank", id: "rs-1-3", answers: ["not to be noisy"], placeholder: "...", wide: true },
      { type: "text", value: "." },

      { type: "text", value: '\n\n4- "Why did you leave early?"\nHe asked her ' },
      { type: "blank", id: "rs-1-4", answers: ["why she had left early"], placeholder: "...", wide: true },
      { type: "text", value: "." },

      { type: "text", value: '\n\n5- "I will help you."\nShe said ' },
      { type: "blank", id: "rs-1-5", answers: ["she would help me"], placeholder: "...", wide: true },
      { type: "text", value: "." },

      { type: "text", value: '\n\n6- "Can you come with me?"\nHe asked me ' },
      { type: "blank", id: "rs-1-6", answers: ["if I could go with him"], placeholder: "...", wide: true },
      { type: "text", value: "." },

      { type: "text", value: '\n\n7- "Don\'t run!"\nThe teacher told us ' },
      { type: "blank", id: "rs-1-7", answers: ["not to run"], placeholder: "...", wide: true },
      { type: "text", value: "." },

      { type: "text", value: '\n\n8- "Where do you live?"\nShe asked him ' },
      { type: "blank", id: "rs-1-8", answers: ["where he lived"], placeholder: "...", wide: true },
      { type: "text", value: "." },

      { type: "text", value: '\n\n9- "Can you help me?"\nShe asked ' },
      { type: "blank", id: "rs-1-9", answers: ["if I could help her"], placeholder: "...", wide: true },
      { type: "text", value: "." },

      { type: "text", value: '\n\n10- "Don\'t talk!"\nThe teacher told us ' },
      { type: "blank", id: "rs-1-10", answers: ["not to talk"], placeholder: "...", wide: true },
      { type: "text", value: "." },
    ],
  },

  {
    id: "rs-002",
    title: "Exercise 2 – Rewrite the sentences in Reported Speech",
    course: "Pre Int – Teens 3 / Intensive 2",
    type: "fill-in-the-blanks",
    parts: [
      { type: "text", value: '"Why are you late?"\nShe asked him ' },
      { type: "blank", id: "rs-2-1", answers: ["why he was late"], placeholder: "...", wide: true },
      { type: "text", value: "." },
    ],
  },
];
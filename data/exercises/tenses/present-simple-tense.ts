import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    id: "pst-001",
    title: "Exercise 1 – Complete using the Present Simple",
    type: "fill-in-the-blanks",
    parts: [
      { type: "text", value: "1- We " },
      { type: "blank", id: "pst-1-1", answers: ["don't have"], placeholder: "not have" },
      { type: "text", value: " a car." },

      { type: "text", value: "\n2- The restaurant " },
      { type: "blank", id: "pst-1-2", answers: ["closes"], placeholder: "close" },
      { type: "text", value: " at 10 p.m." },

      { type: "text", value: "\n3- Luis " },
      { type: "blank", id: "pst-1-3", answers: ["doesn't like"], placeholder: "not like" },
      { type: "text", value: " tea." },

      { type: "text", value: "\n4- They " },
      { type: "blank", id: "pst-1-4", answers: ["work"], placeholder: "work" },
      { type: "text", value: " in an office." },

      { type: "text", value: "\n5- I " },
      { type: "blank", id: "pst-1-5", answers: ["speak"], placeholder: "speak" },
      { type: "text", value: " German and English." },

      { type: "text", value: "\n6- Tony " },
      { type: "blank", id: "pst-1-6", answers: ["studies"], placeholder: "study" },
      { type: "text", value: " at the university." },

      { type: "text", value: "\n7- It " },
      { type: "blank", id: "pst-1-7", answers: ["rains"], placeholder: "rain" },
      { type: "text", value: " a lot in Ireland." },

      { type: "text", value: "\n8- You " },
      { type: "blank", id: "pst-1-8", answers: ["don't play"], placeholder: "not play" },
      { type: "text", value: " computer games." },
    ],
  },

  {
    id: "pst-002",
    title: "Exercise 2 – Complete using the Present Simple",
    type: "fill-in-the-blanks",
    parts: [
      { type: "text", value: "1- Lisa " },
      { type: "blank", id: "pst-2-1", answers: ["doesn't have"], placeholder: "not have" },
      { type: "text", value: " a car." },

      { type: "text", value: "\n2- He " },
      { type: "blank", id: "pst-2-2", answers: ["reads"], placeholder: "read" },
      { type: "text", value: " newspapers every day." },

      { type: "text", value: "\n3- They " },
      { type: "blank", id: "pst-2-3", answers: ["don't like"], placeholder: "not like" },
      { type: "text", value: " tea." },

      { type: "text", value: "\n4- We " },
      { type: "blank", id: "pst-2-4", answers: ["work"], placeholder: "work" },
      { type: "text", value: " in a factory." },

      { type: "text", value: "\n5- The shop " },
      { type: "blank", id: "pst-2-5", answers: ["closes"], placeholder: "close" },
      { type: "text", value: " at 6 p.m." },

      { type: "text", value: "\n6- Marco " },
      { type: "blank", id: "pst-2-6", answers: ["studies"], placeholder: "study" },
      { type: "text", value: " English at school." },

      { type: "text", value: "\n7- I " },
      { type: "blank", id: "pst-2-7", answers: ["don't play"], placeholder: "not play" },
      { type: "text", value: " football." },

      { type: "text", value: "\n8- It " },
      { type: "blank", id: "pst-2-8", answers: ["rains"], placeholder: "rain" },
      { type: "text", value: " a lot in Scotland." },
    ],
  },
]
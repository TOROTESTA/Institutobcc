import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    id: "pcp-001",
    title: "Exercise 1 – Make present continuous sentences and questions",
    instructions: "Positive, negative and questions. Use contractions where possible.",
    type: "fill-in-the-blanks",
    parts: [
      { type: "text", value: "Example: Hannah / study / in her bedroom → Hannah's studying in her bedroom.\n" },

      { type: "text", value: "\n1- what / you / do / at the moment?\n" },
      { type: "blank", id: "pcp-1-1", answers: ["What are you doing at the moment?"], placeholder: "What are you...?", wide: true },

      { type: "text", value: "\n2- we / run / because it's late\n" },
      { type: "blank", id: "pcp-1-2", answers: ["We're running because it's late."], placeholder: "We're...", wide: true },

      { type: "text", value: "\n3- why / Dave and his wife / argue?\n" },
      { type: "blank", id: "pcp-1-3", answers: ["Why are Dave and his wife arguing?"], placeholder: "Why are Dave...?", wide: true },

      { type: "text", value: "\n4- they / not wait / for a taxi\n" },
      { type: "blank", id: "pcp-1-4", answers: ["They aren't waiting for a taxi."], placeholder: "They aren't...", wide: true },

      { type: "text", value: "\n5- you / use / this computer?\n" },
      { type: "blank", id: "pcp-1-5", answers: ["Are you using this computer?"], placeholder: "Are you...?", wide: true },

      { type: "text", value: "\n6- Paul / get dressed?\n" },
      { type: "blank", id: "pcp-1-6", answers: ["Is Paul getting dressed?"], placeholder: "Is Paul...?", wide: true },

      { type: "text", value: "\n7- I / not wear / a jacket today\n" },
      { type: "blank", id: "pcp-1-7", answers: ["I'm not wearing a jacket today."], placeholder: "I'm not...", wide: true },
    ],
  },

  {
    id: "pcp-002",
    title: "Exercise 2 – Make present continuous sentences and questions",
    instructions: "Positive, negative and questions. Use contractions where possible.",
    type: "fill-in-the-blanks",
    parts: [
      { type: "text", value: "Example: Alan / work / at home today → Alan's working at home today.\n" },

      { type: "text", value: "\n1- why / Amy and her husband / argue?\n" },
      { type: "blank", id: "pcp-2-1", answers: ["Why are Amy and her husband arguing?"], placeholder: "Why are Amy...?", wide: true },

      { type: "text", value: "\n2- I / not wear / a sweater today\n" },
      { type: "blank", id: "pcp-2-2", answers: ["I'm not wearing a sweater today."], placeholder: "I'm not...", wide: true },

      { type: "text", value: "\n3- you / use / this dictionary?\n" },
      { type: "blank", id: "pcp-2-3", answers: ["Are you using this dictionary?"], placeholder: "Are you...?", wide: true },

      { type: "text", value: "\n4- Christine / get dressed?\n" },
      { type: "blank", id: "pcp-2-4", answers: ["Is Christine getting dressed?"], placeholder: "Is Christine...?", wide: true },

      { type: "text", value: "\n5- we / run / because it's late\n" },
      { type: "blank", id: "pcp-2-5", answers: ["We're running because it's late."], placeholder: "We're...", wide: true },

      { type: "text", value: "\n6- what / you / do / at the moment?\n" },
      { type: "blank", id: "pcp-2-6", answers: ["What are you doing at the moment?"], placeholder: "What are you...?", wide: true },

      { type: "text", value: "\n7- they / not wait / for a bus\n" },
      { type: "blank", id: "pcp-2-7", answers: ["They aren't waiting for a bus."], placeholder: "They aren't...", wide: true },
    ],
  },

  {
    id: "pcp-003",
    title: "Exercise 3 – Complete Tom's email with the verbs in the -ing form",
    instructions: "Use these verbs: be, dance, go, listen, study, do, sit.",
    type: "fill-in-the-blanks",
    parts: [
      { type: "text", value: "Hi Emily,\nMy name's Tom and I'm a student at Leeds University. I don't like studying but I like\n" },
      { type: "blank", id: "pcp-3-1", answers: ["being"], placeholder: "" },
      { type: "text", value: " a student. I live in a house with another student. We like\n" },
      { type: "blank", id: "pcp-3-2", answers: ["sitting"], placeholder: "" },
      { type: "text", value: " in the pub and talking. We also like\n" },
      { type: "blank", id: "pcp-3-3", answers: ["listening"], placeholder: "" },
      { type: "text", value: " to good music, but we both hate\n" },
      { type: "blank", id: "pcp-3-4", answers: ["dancing"], placeholder: "" },
      { type: "text", value: " – we can't dance very well. I love\n" },
      { type: "blank", id: "pcp-3-5", answers: ["going"], placeholder: "" },
      { type: "text", value: " home at the weekend. My mum's a great cook!\n\nWhat do you like\n" },
      { type: "blank", id: "pcp-3-6", answers: ["doing"], placeholder: "" },
      { type: "text", value: "?\n\nWrite soon,\nTom" },
    ],
  },
];
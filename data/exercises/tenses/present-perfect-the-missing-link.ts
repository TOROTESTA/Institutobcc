import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  // ─── WRITTEN PRACTICE ────────────────────────────────────────────────────

  {
    id: "ppml-001",
    title: "Exercise 1 – Fill in the gaps using Present Perfect",
    instructions: "Use the time expressions just, already, yet, ever, for, since where needed.",
    course: "Written Practice",
    type: "fill-in-the-blanks",
    parts: [
      { type: "text", value: "She " },
      { type: "blank", id: "ppml-1-1", answers: ["has lived"], placeholder: "live" },
      { type: "text", value: " in London " },
      { type: "blank", id: "ppml-1-2", answers: ["since"], placeholder: "..." },
      { type: "text", value: " 2015." },

      { type: "text", value: "\nI " },
      { type: "blank", id: "ppml-1-3", answers: ["haven't finished"], placeholder: "not finish" },
      { type: "text", value: " my homework " },
      { type: "blank", id: "ppml-1-4", answers: ["yet"], placeholder: "..." },
      { type: "text", value: ". I still need to do the last exercise." },

      { type: "text", value: "\nWe " },
      { type: "blank", id: "ppml-1-5", answers: ["have been"], placeholder: "be" },
      { type: "text", value: " to the new café. It's really nice!" },

      { type: "text", value: "\nMark " },
      { type: "blank", id: "ppml-1-6", answers: ["has known"], placeholder: "know" },
      { type: "text", value: " Sarah " },
      { type: "blank", id: "ppml-1-7", answers: ["for"], placeholder: "..." },
      { type: "text", value: " a long time." },

      { type: "text", value: "\nHave you " },
      { type: "blank", id: "ppml-1-8", answers: ["ever"], placeholder: "..." },
      { type: "text", value: " seen that new movie? It's great!" },

      { type: "text", value: "\nI " },
      { type: "blank", id: "ppml-1-9", answers: ["have never eaten"], placeholder: "never / eat" },
      { type: "text", value: " sushi before, but I would like to try it." },

      { type: "text", value: "\nThey " },
      { type: "blank", id: "ppml-1-10", answers: ["haven't heard"], placeholder: "not hear" },
      { type: "text", value: " from their friend " },
      { type: "blank", id: "ppml-1-11", answers: ["since"], placeholder: "..." },
      { type: "text", value: " last week." },

      { type: "text", value: "\nMy parents " },
      { type: "blank", id: "ppml-1-12", answers: ["have been"], placeholder: "be" },
      { type: "text", value: " married " },
      { type: "blank", id: "ppml-1-13", answers: ["for"], placeholder: "..." },
      { type: "text", value: " 20 years." },

      { type: "text", value: "\nWe " },
      { type: "blank", id: "ppml-1-14", answers: ["have just arrived"], placeholder: "just / arrive" },
      { type: "text", value: " at the airport." },

      { type: "text", value: "\nI " },
      { type: "blank", id: "ppml-1-15", answers: ["have worked"], placeholder: "work" },
      { type: "text", value: " in this company " },
      { type: "blank", id: "ppml-1-16", answers: ["for"], placeholder: "..." },
      { type: "text", value: " two years." },
    ],
  },

  {
    id: "ppml-002",
    title: "Exercise 2 – Fill in the blanks in the Present Perfect tense",
    course: "Written Practice",
    type: "fill-in-the-blanks",
    parts: [
      { type: "text", value: "She " },
      { type: "blank", id: "ppml-2-1", answers: ["hasn't done"], placeholder: "not do" },
      { type: "text", value: " her homework yet." },

      { type: "text", value: "\nOh, no! I " },
      { type: "blank", id: "ppml-2-2", answers: ["have left"], placeholder: "leave" },
      { type: "text", value: " my keys at work!" },

      { type: "text", value: "\nHave you ever " },
      { type: "blank", id: "ppml-2-3", answers: ["won"], placeholder: "win" },
      { type: "text", value: " a cup in a sports event?" },

      { type: "text", value: "\nWe still " },
      { type: "blank", id: "ppml-2-4", answers: ["haven't met"], placeholder: "not meet" },
      { type: "text", value: " the CEO of the company. We're nervous about it!" },

      { type: "text", value: "\nSamy " },
      { type: "blank", id: "ppml-2-5", answers: ["hasn't bought"], placeholder: "not buy" },
      { type: "text", value: " any new clothes recently. Let's buy her some!" },
    ],
  },

  {
    id: "ppml-003",
    title: "Exercise 3 – Choose the correct time expression",
    instructions: "Choose from: just, already, yet, ever, for, since.",
    course: "Written Practice",
    type: "fill-in-the-blanks",
    parts: [
      { type: "text", value: "I've " },
      { type: "blank", id: "ppml-3-1", answers: ["just"], placeholder: "..." },
      { type: "text", value: " finished my project! Now I can relax." },

      { type: "text", value: "\nHave you " },
      { type: "blank", id: "ppml-3-2", answers: ["ever"], placeholder: "..." },
      { type: "text", value: " visited Japan?" },

      { type: "text", value: "\nWe've known each other " },
      { type: "blank", id: "ppml-3-3", answers: ["since"], placeholder: "..." },
      { type: "text", value: " we were kids." },

      { type: "text", value: "\nHe hasn't called me " },
      { type: "blank", id: "ppml-3-4", answers: ["yet"], placeholder: "..." },
      { type: "text", value: ". I'm starting to get worried." },

      { type: "text", value: "\nThey've " },
      { type: "blank", id: "ppml-3-5", answers: ["already"], placeholder: "..." },
      { type: "text", value: " gone to the supermarket." },

      { type: "text", value: "\nShe's been a doctor " },
      { type: "blank", id: "ppml-3-6", answers: ["since"], placeholder: "..." },
      { type: "text", value: " 2005." },

      { type: "text", value: "\nI haven't seen that movie " },
      { type: "blank", id: "ppml-3-7", answers: ["yet"], placeholder: "..." },
      { type: "text", value: "." },

      { type: "text", value: "\nWe've been waiting " },
      { type: "blank", id: "ppml-3-8", answers: ["for"], placeholder: "..." },
      { type: "text", value: " an hour for the bus." },

      { type: "text", value: "\nHave you " },
      { type: "blank", id: "ppml-3-9", answers: ["ever"], placeholder: "..." },
      { type: "text", value: " tried this new Italian restaurant?" },

      { type: "text", value: "\nIt's " },
      { type: "blank", id: "ppml-3-10", answers: ["already"], placeholder: "..." },
      { type: "text", value: " two months since I last saw you." },
    ],
  },

  {
    id: "ppml-004",
    title: "Exercise 4 – Fill in the blanks in the Present Perfect tense",
    course: "Written Practice",
    type: "fill-in-the-blanks",
    parts: [
      { type: "text", value: "Tom " },
      { type: "blank", id: "ppml-4-1", answers: ["hasn't arrived"], placeholder: "not arrive" },
      { type: "text", value: " home yet." },

      { type: "text", value: "\nI still " },
      { type: "blank", id: "ppml-4-2", answers: ["haven't met"], placeholder: "not meet" },
      { type: "text", value: " my mother in law." },

      { type: "text", value: "\nHave " },
      { type: "blank", id: "ppml-4-3", answers: ["the students completed"], placeholder: "the students complete" },
      { type: "text", value: " the tasks yet?" },

      { type: "text", value: "\nWe " },
      { type: "blank", id: "ppml-4-4", answers: ["have travelled"], placeholder: "travel" },
      { type: "text", value: " to different places in our lives." },

      { type: "text", value: "\nShe " },
      { type: "blank", id: "ppml-4-5", answers: ["has spent"], placeholder: "spend" },
      { type: "text", value: " all her money on her holidays." },
    ],
  },

  {
    id: "ppml-005",
    title: "Exercise 5 – Complete the sentences using the Present Perfect",
    course: "Written Practice",
    type: "fill-in-the-blanks",
    parts: [
      { type: "text", value: "She " },
      { type: "blank", id: "ppml-5-1", answers: ["has just finished"], placeholder: "just / finish" },
      { type: "text", value: " her new painting." },

      { type: "text", value: "\nThey " },
      { type: "blank", id: "ppml-5-2", answers: ["haven't started"], placeholder: "not / start" },
      { type: "text", value: " their project yet." },

      { type: "text", value: "\nHave you ever " },
      { type: "blank", id: "ppml-5-3", answers: ["participated"], placeholder: "participate" },
      { type: "text", value: " in an art competition?" },

      { type: "text", value: "\nWe " },
      { type: "blank", id: "ppml-5-4", answers: ["haven't met"], placeholder: "not / meet" },
      { type: "text", value: " the new director yet." },

      { type: "text", value: "\nHe " },
      { type: "blank", id: "ppml-5-5", answers: ["has already exhibited"], placeholder: "already / exhibit" },
      { type: "text", value: " his work in several galleries." },
    ],
  },

  {
    id: "ppml-006",
    title: "Exercise 6 – Complete using Present Perfect and the correct time expression",
    instructions: "Use: just, already, yet, ever, for, since.",
    course: "Written Practice",
    type: "fill-in-the-blanks",
    parts: [
      { type: "text", value: "I " },
      { type: "blank", id: "ppml-6-1", answers: ["have lived"], placeholder: "live" },
      { type: "text", value: " here " },
      { type: "blank", id: "ppml-6-2", answers: ["for"], placeholder: "..." },
      { type: "text", value: " five years." },

      { type: "text", value: "\nWe " },
      { type: "blank", id: "ppml-6-3", answers: ["have never visited"], placeholder: "never / visit" },
      { type: "text", value: " that museum, but we want to go next weekend." },

      { type: "text", value: "\nThey " },
      { type: "blank", id: "ppml-6-4", answers: ["have waited"], placeholder: "wait" },
      { type: "text", value: " for the bus " },
      { type: "blank", id: "ppml-6-5", answers: ["for"], placeholder: "..." },
      { type: "text", value: " 20 minutes." },

      { type: "text", value: "\nMy brother " },
      { type: "blank", id: "ppml-6-6", answers: ["has bought"], placeholder: "buy" },
      { type: "text", value: " a new car " },
      { type: "blank", id: "ppml-6-7", answers: ["since"], placeholder: "..." },
      { type: "text", value: " last week." },

      { type: "text", value: "\nShe " },
      { type: "blank", id: "ppml-6-8", answers: ["hasn't called"], placeholder: "not call" },
      { type: "text", value: " me " },
      { type: "blank", id: "ppml-6-9", answers: ["since"], placeholder: "..." },
      { type: "text", value: " we met at the party." },

      { type: "text", value: "\nHave you " },
      { type: "blank", id: "ppml-6-10", answers: ["eaten"], placeholder: "eat" },
      { type: "text", value: " your lunch " },
      { type: "blank", id: "ppml-6-11", answers: ["yet"], placeholder: "..." },
      { type: "text", value: "? It's already 3 p.m." },

      { type: "text", value: "\nI " },
      { type: "blank", id: "ppml-6-12", answers: ["have just finished"], placeholder: "just / finish" },
      { type: "text", value: " reading that book. It's amazing!" },

      { type: "text", value: "\nHe " },
      { type: "blank", id: "ppml-6-13", answers: ["has been"], placeholder: "be" },
      { type: "text", value: " to many countries " },
      { type: "blank", id: "ppml-6-14", answers: ["since"], placeholder: "..." },
      { type: "text", value: " his childhood." },

      { type: "text", value: "\nWe " },
      { type: "blank", id: "ppml-6-15", answers: ["have known"], placeholder: "know" },
      { type: "text", value: " each other " },
      { type: "blank", id: "ppml-6-16", answers: ["for"], placeholder: "..." },
      { type: "text", value: " a long time." },
    ],
  },

  {
    id: "ppml-007",
    title: "Exercise 7 – Fill in the gaps with the correct time expression and verb form",
    instructions: "Use: just, already, yet, ever, for, since.",
    course: "Written Practice",
    type: "fill-in-the-blanks",
    parts: [
      { type: "text", value: "I " },
      { type: "blank", id: "ppml-7-1", answers: ["have been"], placeholder: "be" },
      { type: "text", value: " at the party " },
      { type: "blank", id: "ppml-7-2", answers: ["since"], placeholder: "..." },
      { type: "text", value: " last Saturday." },

      { type: "text", value: "\nShe " },
      { type: "blank", id: "ppml-7-3", answers: ["has finished"], placeholder: "finish" },
      { type: "text", value: " the report. " },
      { type: "blank", id: "ppml-7-4", answers: ["just"], placeholder: "..." },
      { type: "text", value: " five minutes ago." },

      { type: "text", value: "\nThey " },
      { type: "blank", id: "ppml-7-5", answers: ["have lived"], placeholder: "live" },
      { type: "text", value: " in this city " },
      { type: "blank", id: "ppml-7-6", answers: ["for"], placeholder: "..." },
      { type: "text", value: " ten years." },

      { type: "text", value: "\nHe " },
      { type: "blank", id: "ppml-7-7", answers: ["has travelled"], placeholder: "travel" },
      { type: "text", value: " a lot " },
      { type: "blank", id: "ppml-7-8", answers: ["for"], placeholder: "..." },
      { type: "text", value: " the last few years." },

      { type: "text", value: "\nWe " },
      { type: "blank", id: "ppml-7-9", answers: ["haven't spoken"], placeholder: "not speak" },
      { type: "text", value: " to John " },
      { type: "blank", id: "ppml-7-10", answers: ["since"], placeholder: "..." },
      { type: "text", value: " the meeting." },

      { type: "text", value: "\nI " },
      { type: "blank", id: "ppml-7-11", answers: ["have just met"], placeholder: "just / meet" },
      { type: "text", value: " my new neighbor." },

      { type: "text", value: "\nThe teacher " },
      { type: "blank", id: "ppml-7-12", answers: ["has already explained"], placeholder: "already / explain" },
      { type: "text", value: " the lesson." },

      { type: "text", value: "\nHe " },
      { type: "blank", id: "ppml-7-13", answers: ["has never gone"], placeholder: "never / go" },
      { type: "text", value: " to a concert before." },

      { type: "text", value: "\nWe " },
      { type: "blank", id: "ppml-7-14", answers: ["have worked"], placeholder: "work" },
      { type: "text", value: " on this project " },
      { type: "blank", id: "ppml-7-15", answers: ["for"], placeholder: "..." },
      { type: "text", value: " 2 hours." },

      { type: "text", value: "\nI " },
      { type: "blank", id: "ppml-7-16", answers: ["have known"], placeholder: "know" },
      { type: "text", value: " Susan " },
      { type: "blank", id: "ppml-7-17", answers: ["for"], placeholder: "..." },
      { type: "text", value: " a long time now." },
    ],
  },
];
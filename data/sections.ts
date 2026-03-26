export type Topic = {
  slug: string;
  title: string;
  description?: string;
};

export type TopicGroup = {
  slug: string;
  title: string;
  topics: Topic[];
};

export type Section = {
  slug: string;
  title: string;
  description?: string;
  groups: TopicGroup[];
};

export const sections: Section[] = [
  {
    slug: "tenses",
    title: "Tenses",
    description: "Practice exercises focused on present, past and future time.",
    groups: [
      {
        slug: "present-time",
        title: "Present time",
        topics: [
          { slug: "present-simple-tense", title: "Present Simple Tense" },
          { slug: "present-continuous-progressive", title: "Present Continuous / Progressive" },
          { slug: "present-simple-vs-progressive", title: "Present Simple vs Progressive" },
        ],
      },
      {
        slug: "past-time",
        title: "Past time",
        topics: [
          { slug: "past-simple-tense", title: "Past Simple Tense" },
          { slug: "past-continuous-progressive", title: "Past Continuous / Progressive" },
          { slug: "past-perfect", title: "Past Perfect" },
          { slug: "mixed-past-tenses", title: "Mixed Past tenses" },
        ],
      },
      {
        slug: "past-into-present",
        title: "Past into present",
        topics: [
          { slug: "present-perfect-the-missing-link", title: "Present Perfect: the missing link" },
          { slug: "present-perfect-vs-past-simple", title: "Present Perfect vs Past Simple" },
          { slug: "present-perfect-simple-vs-present-perfect-continuous", title: "Present Perfect Simple vs Present Perfect Continuous" },
        ],
      },
      {
        slug: "future-time",
        title: "Future time",
        topics: [
          { slug: "future-simple-tense", title: "Future Simple Tense" },
          { slug: "going-to-form", title: "Going to form" },
          { slug: "present-continuous-with-future-reference", title: "Present Continuous with Future reference" },
          { slug: "present-simple-used-for-future-reference", title: "Present Simple used for Future reference" },
          { slug: "phrases-to-talk-about-the-future", title: "Phrases to talk about the Future" },
          { slug: "future-continuous", title: "Future Continuous" },
          { slug: "future-perfect", title: "Future Perfect" },
        ],
      },
      {
        slug: "mixed-tenses",
        title: "Mixed Tenses",
        topics: [
          { slug: "mixed-tenses-core", title: "Mixed Tenses" },
        ],
      },
    ],
  },
  {
    slug: "prepositions-of-time-and-place",
    title: "Prepositions of Time and Place",
    description: "Exercises to practise time and place prepositions.",
    groups: [
      {
        slug: "main-topics",
        title: "Main topics",
        topics: [
          { slug: "prepositions-of-time", title: "Prepositions of time" },
          { slug: "prepositions-of-place", title: "Prepositions of place" },
        ],
      },
    ],
  },
  {
    slug: "there-is-are-countable-uncountable-nouns-quantifiers",
    title: "There is / are - Countable & Uncountable Nouns - Quantifiers",
    description: "Core structures and noun quantity practice.",
    groups: [
      {
        slug: "main-topics",
        title: "Main topics",
        topics: [
          { slug: "there-is-are", title: "There is / are" },
          { slug: "countable-and-uncountable-nouns", title: "Countable & Uncountable Nouns" },
          { slug: "quantifiers", title: "Quantifiers" },
        ],
      },
    ],
  },
  {
    slug: "adjectives-and-adverbs-comparative-superlative",
    title: "Adjectives & Adverbs - Comparative / Superlative",
    description: "Exercises to compare things and describe actions.",
    groups: [
      {
        slug: "main-topics",
        title: "Main topics",
        topics: [
          { slug: "comparative-and-superlative", title: "Comparative & Superlative" },
          { slug: "adverbs", title: "Adverbs" },
        ],
      },
    ],
  },
  {
    slug: "modal-verbs",
    title: "Modal Verbs",
    description: "Practice with modal meaning and use.",
    groups: [
      {
        slug: "main-topics",
        title: "Main topics",
        topics: [
          { slug: "obligation-and-necessity", title: "Obligation & Necessity" },
          { slug: "possibility", title: "Possibility" },
          { slug: "deduction", title: "Deduction" },
          { slug: "mixed-modal-verbs", title: "Mixed modal verbs" },
        ],
      },
    ],
  },
  {
    slug: "relative-clauses",
    title: "Relative Clauses",
    description: "Exercises focused on defining and organising ideas.",
    groups: [
      {
        slug: "main-topics",
        title: "Main topics",
        topics: [
          { slug: "relative-clauses-core", title: "Relative Clauses" },
        ],
      },
    ],
  },
  {
    slug: "passive-voice",
    title: "Passive Voice",
    description: "Practice with passive structures.",
    groups: [
      {
        slug: "main-topics",
        title: "Main topics",
        topics: [
          { slug: "passive-voice-core", title: "Passive Voice" },
        ],
      },
    ],
  },
  {
    slug: "conditional-sentences",
    title: "Conditional Sentences",
    description: "Exercises to practise conditionals.",
    groups: [
      {
        slug: "main-topics",
        title: "Main topics",
        topics: [
          { slug: "type-1-conditional-sentence", title: "Type 1 Conditional Sentence" },
          { slug: "type-2-conditional-sentence", title: "Type 2 Conditional Sentence" },
          { slug: "mixed-conditional-sentences", title: "Mixed Conditional Sentences" },
        ],
      },
    ],
  },
  {
    slug: "reported-speech",
    title: "Reported Speech",
    description: "Transforming direct speech into reported speech.",
    groups: [
      {
        slug: "main-topics",
        title: "Main topics",
        topics: [
          { slug: "reported-speech-core", title: "Reported Speech" },
        ],
      },
    ],
  },
  {
    slug: "gerund-or-infinitive",
    title: "Gerund or Infinitive",
    description: "Practice choosing the correct form.",
    groups: [
      {
        slug: "main-topics",
        title: "Main topics",
        topics: [
          { slug: "gerund-or-infinitive-core", title: "Gerund or Infinitive" },
        ],
      },
    ],
  },
  {
    slug: "other-structures",
    title: "Other Structures",
    description: "Additional key structures for practice.",
    groups: [
      {
        slug: "main-topics",
        title: "Main topics",
        topics: [
          { slug: "question-tags", title: "Question Tags" },
          { slug: "used-to", title: "Used to" },
          { slug: "something-nothing-anything", title: "Something / Nothing / Anything" },
        ],
      },
    ],
  },
  {
    slug: "multiple-choice",
    title: "Multiple Choice",
    description: "Practice choosing the correct option.",
    groups: [
      {
        slug: "main-topics",
        title: "Main topics",
        topics: [
          { slug: "multiple-choice", title: "Multiple Choice" },
        ],
      },
    ],
  },
];

export function getSectionBySlug(sectionSlug: string) {
  return sections.find((section) => section.slug === sectionSlug);
}

export function getTopicBySlugs(sectionSlug: string, topicSlug: string) {
  const section = getSectionBySlug(sectionSlug);

  if (!section) {
    return null;
  }

  for (const group of section.groups) {
    const topic = group.topics.find((item) => item.slug === topicSlug);

    if (topic) {
      return { section, group, topic };
    }
  }

  return null;
}
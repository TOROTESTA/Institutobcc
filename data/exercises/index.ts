import type { Exercise } from "./types";

// — Tenses —
import { exercises as presentSimpleTense } from "./tenses/present-simple-tense";
import { exercises as presentContinuous } from "./tenses/present-continuous-progressive";
import { exercises as presentSimpleVsProgressive } from "./tenses/present-simple-vs-progressive";

// — Past time —
import { exercises as pastSimpleTense } from "./tenses/past-simple-tense";
import { exercises as pastContinuous } from "./tenses/past-continuous-progressive";
import { exercises as pastPerfect } from "./tenses/past-perfect";
import { exercises as mixedPastTenses } from "./tenses/mixed-past-tenses";

// — Past into present —
import { exercises as presentPerfectMissingLink } from "./tenses/present-perfect-the-missing-link";
import { exercises as presentPerfectVsPastSimple } from "./tenses/present-perfect-vs-past-simple";
import { exercises as presentPerfectSimpleVsContinuous } from "./tenses/present-perfect-simple-vs-present-perfect-continuous";

// — Future time —
import { exercises as futureSimpleTense } from "./tenses/future-simple-tense";
import { exercises as goingToForm } from "./tenses/going-to-form";
import { exercises as presentContinuousFutureRef } from "./tenses/present-continuous-with-future-reference";
import { exercises as presentSimpleFutureRef } from "./tenses/present-simple-used-for-future-reference";
import { exercises as phrasesForFuture } from "./tenses/phrases-to-talk-about-the-future";
import { exercises as futureContinuous } from "./tenses/future-continuous";
import { exercises as futurePerfect } from "./tenses/future-perfect";

// — Mixed —
import { exercises as mixedTenses } from "./tenses/mixed-tenses-core";

// — Prepositions —
import { exercises as prepositionsOfTime } from "./prepositions-of-time-and-place/prepositions-of-time";
import { exercises as prepositionsOfPlace } from "./prepositions-of-time-and-place/prepositions-of-place";

// — There is/are / Countable / Quantifiers —
import { exercises as thereIsAre } from "./there-is-are-countable-uncountable-nouns-quantifiers/there-is-are";
import { exercises as countableUncountable } from "./there-is-are-countable-uncountable-nouns-quantifiers/countable-and-uncountable-nouns";
import { exercises as quantifiers } from "./there-is-are-countable-uncountable-nouns-quantifiers/quantifiers";

// — Adjectives & Adverbs —
import { exercises as comparativeSuperlative } from "./adjectives-and-adverbs-comparative-superlative/comparative-and-superlative";
import { exercises as adverbs } from "./adjectives-and-adverbs-comparative-superlative/adverbs";

// — Modal Verbs —
import { exercises as obligationNecessity } from "./modal-verbs/obligation-and-necessity";
import { exercises as possibility } from "./modal-verbs/possibility";
import { exercises as deduction } from "./modal-verbs/deduction";
import { exercises as mixedModalVerbs } from "./modal-verbs/mixed-modal-verbs";

// — Relative Clauses —
import { exercises as relativeClauses } from "./relative-clauses/relative-clauses-core";

// — Passive Voice —
import { exercises as passiveVoice } from "./passive-voice/passive-voice-core";

// — Conditional Sentences —
import { exercises as type1Conditional } from "./conditional-sentences/type-1-conditional-sentence";
import { exercises as type2Conditional } from "./conditional-sentences/type-2-conditional-sentence";
import { exercises as mixedConditionals } from "./conditional-sentences/mixed-conditional-sentences";

// — Reported Speech —
import { exercises as reportedSpeech } from "./reported-speech/reported-speech-core";

// — Gerund or Infinitive —
import { exercises as gerundOrInfinitive } from "./gerund-or-infinitive/gerund-or-infinitive-core";

// — Other Structures —
import { exercises as questionTags } from "./other-structures/question-tags";
import { exercises as usedTo } from "./other-structures/used-to";
import { exercises as somethingNothingAnything } from "./other-structures/something-nothing-anything";

import { exercises as multipleChoice } from "./multiple-choice/multiple-choice"; 
export const exerciseMap: Record<string, Record<string, Exercise[]>> = {
  tenses: {
    "present-simple-tense": presentSimpleTense,
    "present-continuous-progressive": presentContinuous,
    "present-simple-vs-progressive": presentSimpleVsProgressive,
    "past-simple-tense": pastSimpleTense,
    "past-continuous-progressive": pastContinuous,
    "past-perfect": pastPerfect,
    "mixed-past-tenses": mixedPastTenses,
    "present-perfect-the-missing-link": presentPerfectMissingLink,
    "present-perfect-vs-past-simple": presentPerfectVsPastSimple,
    "present-perfect-simple-vs-present-perfect-continuous": presentPerfectSimpleVsContinuous,
    "future-simple-tense": futureSimpleTense,
    "going-to-form": goingToForm,
    "present-continuous-with-future-reference": presentContinuousFutureRef,
    "present-simple-used-for-future-reference": presentSimpleFutureRef,
    "phrases-to-talk-about-the-future": phrasesForFuture,
    "future-continuous": futureContinuous,
    "future-perfect": futurePerfect,
    "mixed-tenses-core": mixedTenses,
  },

  "prepositions-of-time-and-place": {
    "prepositions-of-time": prepositionsOfTime,
    "prepositions-of-place": prepositionsOfPlace,
  },

  "there-is-are-countable-uncountable-nouns-quantifiers": {
    "there-is-are": thereIsAre,
    "countable-and-uncountable-nouns": countableUncountable,
    quantifiers: quantifiers,
  },

  "adjectives-and-adverbs-comparative-superlative": {
    "comparative-and-superlative": comparativeSuperlative,
    adverbs: adverbs,
  },

  "modal-verbs": {
    "obligation-and-necessity": obligationNecessity,
    possibility: possibility,
    deduction: deduction,
    "mixed-modal-verbs": mixedModalVerbs,
  },

  "relative-clauses": {
    "relative-clauses-core": relativeClauses,
  },

  "passive-voice": {
    "passive-voice-core": passiveVoice,
  },

  "conditional-sentences": {
    "type-1-conditional-sentence": type1Conditional,
    "type-2-conditional-sentence": type2Conditional,
    "mixed-conditional-sentences": mixedConditionals,
  },

  "reported-speech": {
    "reported-speech-core": reportedSpeech,
  },

  "gerund-or-infinitive": {
    "gerund-or-infinitive-core": gerundOrInfinitive,
  },

  "other-structures": {
    "question-tags": questionTags,
    "used-to": usedTo,
    "something-nothing-anything": somethingNothingAnything,
  },
  
    "multiple-choice": {
    "multiple-choice": multipleChoice,
  },
};

export function getExercisesByTopic(
  section: string,
  topic: string
): Exercise[] {
  return exerciseMap[section]?.[topic] ?? [];
}

export const exercises: Exercise[] = Object.values(exerciseMap)
  .flatMap((topics) => Object.values(topics))
  .flat();

  
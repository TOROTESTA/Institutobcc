export function normalizeAnswer(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

export function isAnswerCorrect(userAnswer: string, validAnswers: string[]) {
  const normalizedUserAnswer = normalizeAnswer(userAnswer);

  return validAnswers.some(
    (answer) => normalizeAnswer(answer) === normalizedUserAnswer
  );
}
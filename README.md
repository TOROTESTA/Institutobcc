# Instituto BCC – English Practice

A web platform for BCC English Institute students to practice grammar exercises by topic, with instant auto-correction.

## Features

- 📚 Exercises organized by section, group and topic
- ✅ Auto-corrected fill-in-the-blank exercises
- 🎯 Multiple choice exercises
- 📱 Fully responsive (mobile & desktop)
- 🗂️ Course-based accordion navigation
- 🔗 Shareable links per topic and course

## Tech Stack

- [Next.js 15](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Project Structure
```
app/
  sections/[section]/[topic]/   → Dynamic topic pages
  page.tsx                      → Home page
components/
  FillInTheBlanksExercise.tsx   → Exercise component with auto-correction
  CourseAccordion.tsx           → Collapsible course sections
  ExerciseRenderer.tsx          → Exercise type router
  Header.tsx                    → Site header
data/
  sections.ts                   → Navigation structure
  exercises/
    index.ts                    → Exercise map and lookup
    types.ts                    → TypeScript types
    tenses/                     → Tense exercises
    modal-verbs/                → Modal verb exercises
    passive-voice/              → Passive voice exercises
    reported-speech/            → Reported speech exercises
    multiple-choice/            → Multiple choice exercises
    ...                         → Other topics
```

## Getting Started
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Adding New Exercises

1. Open the relevant file in `data/exercises/<section>/<topic>.ts`
2. Add a new exercise object to the `exercises` array
3. Follow the existing structure — no other files need to be changed

### Exercise with course (shows as accordion):
```typescript
{
  id: "unique-id",
  title: "Exercise 1 – Description",
  course: "Course Name",
  type: "fill-in-the-blanks",
  parts: [
    { type: "text", value: "She " },
    { type: "blank", id: "b1", answers: ["has lived"], placeholder: "live" },
    { type: "text", value: " here for years." },
  ],
}
```

### Exercise without course (shows directly):
```typescript
{
  id: "unique-id",
  title: "Exercise 1 – Description",
  type: "fill-in-the-blanks",
  parts: [...],
}
```

### Wide blank (for full sentence answers):
```typescript
{ type: "blank", id: "b1", answers: ["was built"], placeholder: "...", wide: true }
```

## Deployment

Deployed on [Vercel](https://vercel.com/). Every push to `main` triggers a new deployment.

---

Built with ❤️ for Instituto BCC.
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopicBySlugs } from "../../../../data/sections";
import { getExercisesByTopic } from "../../../../data/exercises";
import { CourseAccordion } from "../../../../components/CourseAccordion";
import { ExerciseRenderer } from "../../../../components/ExerciseRenderer";

type Props = {
  params: Promise<{
    section: string;
    topic: string;
  }>;
};

export default async function TopicPage({ params }: Props) {
  const { section: sectionSlug, topic: topicSlug } = await params;

  const topicData = getTopicBySlugs(sectionSlug, topicSlug);

  if (!topicData) {
    notFound();
  }

  const { section, group, topic } = topicData;
  const topicExercises = getExercisesByTopic(sectionSlug, topicSlug);

  const hasCourses = topicExercises.some((e) => e.course);

  const groupedByCourse = topicExercises.reduce<Record<string, typeof topicExercises>>(
    (acc, exercise) => {
      const course = exercise.course ?? "";
      if (!acc[course]) acc[course] = [];
      acc[course].push(exercise);
      return acc;
    },
    {}
  );

  return (
    <div>
      <section className="exercise-hero">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <Link
            href={`/sections/${section.slug}`}
            className="mb-6 inline-flex items-center text-sm font-bold text-[var(--accent)] hover:underline"
          >
            ← Back to {section.title}
          </Link>

          <p className="section-kicker">{group.title}</p>
          <h1 className="max-w-3xl text-4xl font-extrabold text-[var(--primary)] md:text-5xl">
            {topic.title}
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--text)]">
            Exercises for this topic will appear here as they are loaded.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        {topicExercises.length === 0 ? (
          <div className="rounded-[2rem] border border-[var(--border)] bg-white p-10 shadow-[0_18px_50px_rgba(16,47,82,0.08)]">
            <p className="section-kicker">Coming soon</p>
            <h2 className="text-3xl font-extrabold text-[var(--primary)]">
              No exercises loaded yet
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text)]">
              This topic page is already prepared. When new material arrives,
              exercises can be added directly to this section.
            </p>
          </div>
        ) : hasCourses ? (
          <div className="space-y-6">
            {Object.entries(groupedByCourse)
              .filter(([course]) => course !== "")
              .map(([course, exercises], index) => (
                <CourseAccordion
                  key={course}
                  course={course}
                  exercises={exercises}
                  defaultOpen={index === 0}
                />
              ))}
          </div>
        ) : (
          <div className="space-y-8">
            {topicExercises.map((exercise) => (
              <div
                key={exercise.id}
                className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <h3 className="text-xl font-extrabold text-[var(--primary)]">
                  {exercise.title}
                </h3>
                <div className="mt-6">
                  <ExerciseRenderer exercise={exercise} />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
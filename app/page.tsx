import Link from "next/link";
import { sections } from "../data/sections";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-6">
        <h1 className="text-4xl font-extrabold text-[var(--primary)] md:text-5xl">
          Practice exercises by topic
        </h1>
        <p className="mt-3 text-lg text-[var(--text)]">
          Elementary / Pre-Intermediate level. Choose a section and start practising.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => {
            const topicCount = section.groups.reduce(
              (acc, group) => acc + group.topics.length,
              0
            );

            return (
              <Link
                key={section.slug}
                href={`/sections/${section.slug}`}
                className="exercise-card"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--primary)]">
                    Section
                  </span>
                  <span className="text-sm font-semibold text-[var(--accent)]">
                    Open →
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-[var(--primary)]">
                  {section.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text)]">
                  {section.description}
                </p>

                <p className="mt-5 text-sm font-semibold text-[var(--primary)]">
                  {topicCount} topics
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
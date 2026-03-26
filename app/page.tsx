import Link from "next/link";
import { sections } from "../data/sections";

export default function HomePage() {
  return (
    <div>
      <section className="hero-section">
        <div className="mx-auto grid min-h-[540px] max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
              English practice
            </p>

            <h1 className="max-w-xl text-5xl font-extrabold leading-tight text-[var(--primary)] md:text-6xl">
              Practice exercises by topic
            </h1>

            <p className="mt-5 max-w-lg text-lg font-medium text-[var(--text)]">
              Elementary / Pre-Intermediate level. Choose a section and start
              practising by topic.
            </p>
           </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-white/70 p-4 shadow-2xl backdrop-blur-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-[var(--accent-soft)] to-white p-8">
                <div className="grid gap-4">
                  <div className="rounded-2xl bg-white p-5 shadow-md">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                      Organized content
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold text-[var(--primary)]">
                      Sections, groups and topics
                    </h3>
                    <p className="mt-2 text-[var(--text)]">
                      The structure is ready. New exercises can be added topic by
                      topic.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl bg-white p-5 shadow-md">
                      <p className="text-sm font-semibold text-[var(--primary)]">
                        Grammar
                      </p>
                      <p className="mt-2 text-sm text-[var(--text)]">
                        Tenses, modals, passives
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-md">
                      <p className="text-sm font-semibold text-[var(--primary)]">
                        Topic navigation
                      </p>
                      <p className="mt-2 text-sm text-[var(--text)]">
                        Easy to expand later
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full bg-[var(--accent)]/15 md:block" />
            <div className="absolute -right-6 -top-6 hidden h-20 w-20 rounded-full bg-[var(--primary)]/10 md:block" />
          </div>
        </div>
      </section>

      <section id="sections" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="section-kicker">Contents</p>
          <h2 className="section-title">Practice sections</h2>
          <p className="section-text">
            Each section contains topic groups and topics ready to receive
            exercises.
          </p>
        </div>

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
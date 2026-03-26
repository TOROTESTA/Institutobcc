import Link from "next/link";
import { notFound } from "next/navigation";
import { getSectionBySlug } from "../../../data/sections";

type Props = {
  params: Promise<{
    section: string;
  }>;
};

export default async function SectionPage({ params }: Props) {
  const { section: sectionSlug } = await params;
  const section = getSectionBySlug(sectionSlug);

  if (!section) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <Link
        href="/"
        className="mb-6 inline-flex items-center text-sm font-bold text-[var(--accent)] hover:underline"
      >
        ← Back to sections
      </Link>

      <p className="section-kicker">Section</p>
      <h1 className="text-4xl font-extrabold text-[var(--primary)] md:text-5xl">
        {section.title}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--text)]">
        {section.description}
      </p>

      <div className="mt-12 space-y-10">
        {section.groups.map((group) => (
          <section key={group.slug}>
            <h2 className="text-2xl font-extrabold text-[var(--primary)]">
              {group.title}
            </h2>

            <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {group.topics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/sections/${section.slug}/${topic.slug}`}
                  className="exercise-card"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--primary)]">
                      Topic
                    </span>
                    <span className="text-sm font-semibold text-[var(--accent)]">
                      Open →
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[var(--primary)]">
                    {topic.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--text)]">
                    Ready to receive exercises for this topic.
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
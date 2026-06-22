import SectionHeading from "./SectionHeading";

const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Statistics",
  "Data Science",
  "Quantitative Finance",
  "Software Engineering",
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="Building a foundation in AI and software."
          description="Krishaansh is building a long-term foundation in computer science, mathematics and practical engineering."
        />

        <div className="space-y-6 text-base leading-8 text-slate-400 md:text-lg">
          <p>
            I am a B.Tech Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at KIIT University. My interests span AI, machine learning, statistics, quantitative finance and software engineering. I enjoy building practical systems and learning in public.
          </p>
          <p>
            I am especially interested in the overlap between AI, data science
            and quantitative finance. The goal is not to rush toward inflated
            claims, but to keep building useful projects, document the learning
            process and improve through consistent practice.
          </p>
          <p>
            This website is designed to grow with that journey: a home for
            projects, notes, resume material and public learning over the next
            several years.
          </p>

          <div className="grid gap-3 pt-4 sm:grid-cols-2">
            {interests.map((interest) => (
              <div
                key={interest}
                className="border-l border-blue-500/70 py-1 pl-4 text-sm font-medium text-slate-200"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

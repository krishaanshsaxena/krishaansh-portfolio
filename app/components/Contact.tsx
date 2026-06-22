import SectionHeading from "./SectionHeading";

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/krishaanshsaxena",
    href: "https://github.com/krishaanshsaxena",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/krishaansh-saxena",
    href: "https://www.linkedin.com/in/krishaansh-saxena/",
  },
  {
    label: "Email",
    value: "Email address coming soon",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Contact"
          title="Simple ways to connect."
          description="The best places to follow the work right now are GitHub and LinkedIn. Email integration is reserved for a future update."
        />

        <div className="divide-y divide-slate-800 rounded-lg border border-slate-800 bg-slate-900/35">
          {contactLinks.map((link) => (
            <div
              key={link.label}
              className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-medium text-slate-400">
                  {link.label}
                </p>
                <p className="mt-1 text-slate-100">{link.value}</p>
              </div>
              {link.href ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  Visit
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

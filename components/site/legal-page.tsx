import { Container } from "./container";
import { Breadcrumbs } from "./breadcrumbs";

export interface LegalSection {
  heading: string;
  body: React.ReactNode;
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <section className="pt-28 md:pt-32">
      <Container>
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: title, path: "#" },
          ]}
        />
        <div className="mx-auto max-w-3xl pb-24">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight">
            {title}
          </h1>
          <p className="mt-3 font-mono text-sm text-muted-subtle">
            Last updated: {updated}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted">{intro}</p>

          <div className="mt-12 flex flex-col gap-10">
            {sections.map((section, i) => (
              <div key={section.heading} className="flex flex-col gap-3">
                <h2 className="font-display text-xl font-medium tracking-tight">
                  {i + 1}. {section.heading}
                </h2>
                <div className="flex flex-col gap-3 text-[15px] leading-relaxed text-muted [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-2 [&_li]:ml-5 [&_li]:list-disc">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

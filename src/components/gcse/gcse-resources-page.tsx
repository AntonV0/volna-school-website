import type { ReactNode } from "react";
import { gcsePaths, gcseSources } from "@/content/gcse-content";
import { gcseResourceLibrary, russianMaterialsUrl } from "@/content/gcse-resource-library";
import { ButtonLink } from "@/components/ui/button-link";
import { GcseBreadcrumb, GcseHeading, GcseLink, GcseNav, GcseSection } from "./gcse-shared";
import s from "./gcse.module.css";
import r from "./gcse-resources.module.css";

function ResourceLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return <GcseLink href={href} ariaLabel={`${label} (opens in a new tab)`}>{children}</GcseLink>;
}

const references = [
  {
    title: "GCSE Russian specification",
    description: "The official 1RU0 course content, assessment requirements and marking criteria.",
    href: gcseSources.specification,
    label: "Read the specification (PDF)",
  },
  {
    title: "Summer 2027 exam timetable",
    description: "Pearson’s final UK GCSE timetable for the Summer 2027 examination series.",
    href: gcseSources.timetable,
    label: "View the 2027 timetable (PDF)",
  },
  {
    title: "Grade boundaries",
    description: "Find the marks needed for each grade in the relevant exam series. Boundaries vary from year to year.",
    href: gcseSources.gradeBoundaries,
    label: "View grade boundaries",
  },
];

export function GcseResourcesPage() {
  return (
    <div className={`${s.page} ${s.resourcesPage} ${r.page}`}>
      <section className={`${s.section} ${s.guideHero}`}>
        <div className={s.wrap}>
          <GcseBreadcrumb current="Exam resources" />
          <div className={`${s.resourcesHero} ${r.hero}`}>
            <div>
              <span className={s.eyebrow}>Pearson Edexcel · GCSE Russian · 1RU0</span>
              <h1>GCSE Russian<br />exam resources.</h1>
              <p className={s.intro}>Find official past papers, mark schemes and listening audio, alongside the documents that explain the qualification and exam-day requirements.</p>
              <GcseLink href="#past-papers">Browse past papers</GcseLink>
            </div>
            <aside className={`${s.guideNote} ${r.note}`}>
              <span className={s.eyebrow}>About these resources</span>
              <p>Available to everyone, whether or not they study with Volna. We link to the original materials on Pearson and JCQ; we do not host their files.</p>
              <p>Official resource links open in a new tab.</p>
            </aside>
          </div>
        </div>
      </section>
      <GcseNav items={[
        { id: "past-papers", label: "Past papers" },
        { id: "official-guidance", label: "Official guidance" },
        { id: "exam-day", label: "Exam day" },
      ]} />
      <GcseSection id="past-papers">
        <GcseHeading eyebrow="Higher Tier · 1RU0" title="Past papers, organised by year.">
          Choose a series to find matching papers, mark schemes and audio. The listening mark schemes include the transcript.
        </GcseHeading>
        <div className={r.libraryNote}>
          <p>Public Higher Tier materials from 2023–2025. Recent series may be restricted to exam centres; the 2026 papers are not included here.</p>
          <span>Links checked 20 October 2026</span>
        </div>
        <div className={r.library}>
          {gcseResourceLibrary.map((series, index) => (
            <details className={r.series} key={series.year} open={index === 0}>
              <summary>
                <span>Summer {series.year}<small>Higher Tier · four papers</small></span>
                <span className={r.indicator} aria-hidden="true" />
              </summary>
              <div className={r.paperList}>
                {series.papers.map((paper) => (
                  <section className={r.paper} key={paper.code} aria-labelledby={`paper-${series.year}-${paper.code.replace("/", "-")}`}>
                    <div>
                      <h3 id={`paper-${series.year}-${paper.code.replace("/", "-")}`}>{paper.name}</h3>
                      <span className={r.code}>{paper.code}</span>
                    </div>
                    <ul className={r.files}>
                      {paper.links.map((link) => (
                        <li key={link.href}>
                          <ResourceLink href={link.href} label={`Summer ${series.year} ${paper.name}, Higher Tier: ${link.label} (${link.format}${link.size ? `, approximately ${link.size}` : ""})`}>
                            {link.size ? (
                              <span>{link.label}<span className={r.fileSize}>{link.format} · approx. {link.size}</span></span>
                            ) : <>{link.label} <span className={r.format}>{link.format}</span></>}
                          </ResourceLink>
                        </li>
                      ))}
                    </ul>
                    {paper.name === "Speaking" && series.speakingNote && (
                      <p className={r.correction}>{series.speakingNote}</p>
                    )}
                  </section>
                ))}
              </div>
            </details>
          ))}
        </div>
        <div className={r.libraryFooter}>
          <p>For other years, Foundation Tier, sample assessments or adapted materials, use Pearson’s Russian library. Volna students should follow their teacher’s guidance on which papers to use.</p>
          <ResourceLink href={russianMaterialsUrl} label="Browse all Pearson GCSE Russian materials">Browse all Pearson Russian materials</ResourceLink>
        </div>
      </GcseSection>
      <GcseSection id="official-guidance" wash>
        <GcseHeading eyebrow="Reference library" title="Specifications, dates and grade boundaries.">
          Check the qualification code and exam year before using a document. For a parent-friendly explanation of the papers and exam entry, see our exam guide.
        </GcseHeading>
        <div className={r.references}>
          {references.map((resource) => (
            <article key={resource.title}>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <ResourceLink href={resource.href} label={resource.label}>{resource.label}</ResourceLink>
            </article>
          ))}
        </div>
        <div className={r.guideLink}><GcseLink href={gcsePaths.exams}>Read our GCSE exam guide</GcseLink></div>
      </GcseSection>
      <GcseSection id="exam-day">
        <GcseHeading eyebrow="Before the exam" title="Know the rules before you arrive.">
          Read the candidate guidance alongside the instructions from your own school, college or exam centre.
        </GcseHeading>
        <div className={`${s.resourcesCallout} ${r.callout}`}>
          <div>
            <h3>JCQ information for candidates</h3>
            <p>Official written-exam guidance covering what to bring, permitted equipment and conduct in the exam room. Effective from September 2026.</p>
          </div>
          <ResourceLink href="https://www.jcq.org.uk/knowledge-hub/written-exams/" label="Read JCQ written-exam guidance">Read candidate guidance</ResourceLink>
        </div>
      </GcseSection>
      <nav className={`${s.exploreMore} ${r.explore}`} aria-label="Explore GCSE">
        <div className={s.wrap}>
          <span>Continue exploring</span>
          <div>
            <GcseLink href={`${gcsePaths.main}#course-options`}>Courses &amp; fees</GcseLink>
            <GcseLink href={gcsePaths.curriculum}>Curriculum</GcseLink>
            <GcseLink href={gcsePaths.exams}>Exam guide</GcseLink>
          </div>
        </div>
      </nav>
      <GcseSection id="next-step">
        <div className={r.start}>
          <div>
            <h2>Looking for support with GCSE Russian?</h2>
            <p>Tell us about the student’s Russian and intended exam year. We’ll help you find a suitable course and arrange a free trial lesson.</p>
          </div>
          <ButtonLink variant="exam" href={gcsePaths.trial}>Request a free trial lesson</ButtonLink>
        </div>
      </GcseSection>
    </div>
  );
}

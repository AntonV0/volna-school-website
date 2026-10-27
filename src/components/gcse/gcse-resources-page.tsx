import { AnimatedDisclosure } from "./animated-disclosure";
import type { ReactNode } from "react";
import { gcsePaths, gcseSources } from "@/content/gcse-content";
import { gcseResourceLibrary, russianMaterialsUrl } from "@/content/gcse-resource-library";
import { boundaryGrades, gcseGradeBoundaries } from "@/content/gcse-grade-boundaries";
import { ButtonLink } from "@/components/ui/button-link";
import { GcseBreadcrumb, GcseHeading, GcseLink, GcseNav, GcseSection } from "./gcse-shared";
import { GcseResourceAccordion } from "./gcse-resource-accordion";
import { GcseResourcesHeroImage } from "./gcse-resources-hero-image";
import s from "./gcse.module.css";
import r from "./gcse-resources.module.css";

function ResourceLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return <a className={s.textLink} href={href} target="_blank" rel="noreferrer" aria-label={`${label} (opens in a new tab)`}>
    {children}
    <span aria-hidden="true" data-link-kind="external">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" focusable="false"><path d="M7 17 17 7M7 7h10v10" /></svg>
    </span>
  </a>;
}

function ResourceIcon({ label }: { label: string }) {
  const path = label.includes("audio")
    ? <><path d="M4 14v-3a8 8 0 0 1 16 0v3" /><rect x="3" y="12" width="4" height="8" rx="2" /><rect x="17" y="12" width="4" height="8" rx="2" /></>
    : label.includes("materials")
      ? <><path d="M12 6v15M3 4h5a4 4 0 0 1 4 2 4 4 0 0 1 4-2h5v15h-5a5 5 0 0 0-4 2 5 5 0 0 0-4-2H3Z" /><path d="M6 8h3m6 0h3M6 12h3m6 0h3" /></>
      : label.includes("Mark scheme")
        ? <><path d="M14 3H5v18h14V8Z" /><path d="M14 3v5h5M8 13l2 2 5-5m-7 8h7" /></>
        : <><path d="M14 3H5v18h14V8Z" /><path d="M14 3v5h5M8 12h7m-7 4h7" /></>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{path}</svg>;
}

function SeriesGradeBoundaries({ year, title, sources }: {
  year: number;
  title: string;
  sources: { label: string; href: string }[];
}) {
  const data = gcseGradeBoundaries[year];
  return (
    <AnimatedDisclosure className={r.boundaries}>
      <summary><span>Grade boundaries <small>Overall &amp; each paper</small></span><svg className={r.boundaryChevron} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="m5 7 5 5 5-5" /></svg></summary>
      <div className={r.boundaryContent}>
        <p id={`boundary-note-${year}`}>Numbers show the minimum marks needed for each grade. Paper boundaries are <strong>notional</strong>: use them to review practice papers, not as separate GCSE grades. The overall grade uses the combined marks after Pearson applies each paper’s weighting.</p>
        <p className={r.scrollHint}>Scroll across to see every grade →</p>
        <div className={r.boundaryScroll} role="region" aria-label={`${title} Higher Tier grade boundaries; scroll horizontally on small screens`} tabIndex={0}>
          <table aria-label={`${title} Russian Higher grade boundaries`} aria-describedby={`boundary-note-${year}`}>
            <thead><tr><th scope="col">Assessment</th><th scope="col">Out of</th>{boundaryGrades.map((grade) => <th scope="col" key={grade}><span className={r.gradeLabel}>Grade </span>{grade}</th>)}</tr></thead>
            <tbody>
              {[data.overall, ...data.papers].map((row) => <tr key={row.name} className={row.name === "Overall" ? r.overall : undefined}><th scope="row">{row.name}{row.name === "Overall" && <span className={r.weightedLabel}>Weighted marks</span>}</th><td>{row.max}</td>{row.marks.map((mark, index) => <td key={boundaryGrades[index]}>{mark}</td>)}</tr>)}
            </tbody>
          </table>
        </div>
        <div className={r.boundarySources}>
          <p>Source: Pearson Edexcel. An overall mark below grade 3 is ungraded (U).</p>
          <div><span>Original Pearson documents:</span>{sources.map((link) => <ResourceLink key={link.href} href={link.href} label={`${title}: ${link.label} (PDF)`}>{link.label === "Overall grade boundaries" ? "Overall qualification boundaries (PDF)" : "Notional paper boundaries (PDF)"}</ResourceLink>)}</div>
        </div>
      </div>
    </AnimatedDisclosure>
  );
}

const references = [
  {
    title: "GCSE Russian specification",
    description: "What students study and how listening, speaking, reading and writing are assessed. Qualification code: 1RU0.",
    href: gcseSources.specification,
    label: "View specification (PDF)",
    icon: "document",
  },
  {
    title: "Summer 2027 exam dates",
    description: "Higher Tier · GCSE Russian (1RU0)",
    href: gcseSources.timetable,
    label: "View 2027 timetable (PDF)",
    icon: "calendar",
  },
];

const examDates2027 = [
  { paper: "Listening", date: "2027-05-27", label: "Thursday 27 May 2027" },
  { paper: "Reading", date: "2027-05-27", label: "Thursday 27 May 2027" },
  { paper: "Writing", date: "2027-06-07", label: "Monday 7 June 2027" },
];

export function GcseResourcesPage() {
  return (
    <div className={`${s.page} ${s.resourcesPage} ${r.page}`}>
      <section className={`${s.section} ${s.guideHero}`}>
        <div className={s.wrap}>
          <GcseBreadcrumb current="Exam resources" />
          <div className={r.heroContent}>
          <div className={`${s.resourcesHero} ${r.hero}`}>
            <div>
              <span className={s.eyebrow}>Pearson Edexcel · Higher Tier · 1RU0</span>
              <h1>GCSE Russian<br />exam resources</h1>
              <p className={s.intro}>Find past papers, mark schemes and listening audio, plus grade boundaries and guidance for exam day.</p>
              <div className={`${s.actions} ${r.heroActions}`}>
                <ButtonLink variant="exam" href="#past-papers">Browse past papers</ButtonLink>
                <ButtonLink variant="examSecondary" href="#grade-boundaries">Understand grade boundaries</ButtonLink>
              </div>
            </div>
            <GcseResourcesHeroImage />
          </div>
            <aside className={r.resourceNotice}>
              <strong>Open to everyone</strong>
              <p>Links take you to original Pearson Edexcel and JCQ files. We do not host their materials.</p>
            </aside>
          </div>
        </div>
      </section>
      <GcseNav items={[
        { id: "past-papers", label: "Past papers" },
        { id: "grade-boundaries", label: "Grade boundaries" },
        { id: "official-guidance", label: "Official guidance" },
        { id: "exam-day", label: "Exam day" },
      ]} />
      <GcseSection id="past-papers">
        <GcseHeading title="GCSE Russian Higher Tier past papers" />
        <div className={r.libraryNote}>
          <p>Links to official Pearson Edexcel past papers, mark schemes, speaking materials and listening audio.</p>
          <p>June 2026 papers are not yet publicly available.</p>
        </div>
        <GcseResourceAccordion items={gcseResourceLibrary.map((series) => ({
          year: series.year,
          title: series.title,
          subtitle: `Higher Tier · ${series.adapted ? "three written papers · adapted series" : "four papers"}`,
          children: (
              <div className={r.seriesContent}>
                {series.adapted && <p className={r.seriesNote}>This autumn series assessed listening, reading and writing only. Its overall boundaries cover those three papers, so use it for individual skills practice rather than a current four-paper mock.</p>}
                <div className={`${r.paperList} ${series.papers.length === 3 ? r.threePapers : ""}`}>
                {series.papers.map((paper) => (
                  <section className={r.paper} key={paper.code} aria-labelledby={`paper-${series.year}-${paper.code.replace("/", "-")}`}>
                    <div>
                      <h4 id={`paper-${series.year}-${paper.code.replace("/", "-")}`}>Paper {paper.code.split("/")[1].charAt(0)} · {paper.name}</h4>
                      <span className={r.code}>{paper.code}</span>
                    </div>
                    <ul className={r.files}>
                      {paper.links.map((link) => (
                        <li key={link.href}>
                          <a className={r.download} href={link.href} target={link.format === "ZIP" ? undefined : "_blank"} rel="noreferrer" aria-label={`${series.title} ${paper.name}, Higher Tier: ${link.label} (${link.format}${link.size ? `, approximately ${link.size}` : ""}; ${link.format === "ZIP" ? "download ZIP" : "opens in a new tab"})`}>
                            <span className={r.resourceIcon}><ResourceIcon label={link.label} /></span>
                            <span>{link.label}<small>{link.format}{link.format === "ZIP" && " download"}{link.size && <> · <span className={r.size}>approx. {link.size}</span></>}</small></span>
                            <svg className={`${r.externalIcon} ${link.format === "ZIP" ? r.zipIcon : link.format !== "PDF" ? r.audioIcon : ""}`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
                              {link.format === "ZIP" ? <path d="M8 2v8M5 7l3 3 3-3M3 11v3h10v-3" /> : link.format === "PDF" ? <path d="M4 12 12 4M4 4h8v8" /> : <><circle cx="8" cy="8" r="6" /><path d="m6.5 5.5 4 2.5-4 2.5Z" fill="currentColor" strokeWidth=".5" /></>}
                            </svg>
                          </a>
                        </li>
                      ))}
                    </ul>
                    {paper.name === "Speaking" && series.speakingNote && (
                      <p className={r.correction}>{series.speakingNote}</p>
                    )}
                  </section>
                ))}
                </div>
                <SeriesGradeBoundaries year={series.year} title={series.title} sources={series.boundaries} />
              </div>
          ),
        }))} />
        <div className={r.libraryFooter}>
          <p>For Foundation Tier papers, sample assessments, extra-time audio and accessible papers, visit Pearson’s full GCSE Russian library.</p>
          <ResourceLink href={russianMaterialsUrl} label="Browse all Pearson GCSE Russian materials">Browse all Pearson Russian materials</ResourceLink>
        </div>
      </GcseSection>
      <GcseSection id="grade-boundaries" wash>
        <GcseHeading className={r.sectionIntro} title="How to use grade boundaries">
          Grade boundaries can change each year. Use the boundaries for the same year and exam series as your practice paper.
        </GcseHeading>
        <div className={r.boundaryComparison}>
          <article><h3>Your overall GCSE grade</h3><p>Your final grade combines listening, speaking, reading and writing. Each skill contributes 25%, although the papers have different maximum marks. Pearson adjusts the marks so each skill counts equally before comparing the combined total with the overall boundaries.</p></article>
          <article><h3>Your performance on a practice paper</h3><p>The boundaries for an individual paper are called “notional” boundaries. They help you estimate the grade level of your work on that paper, but do not give you a final GCSE grade.</p></article>
        </div>
        <div className={r.guideLink}><ResourceLink href={gcseSources.gradeBoundaries} label="View Pearson’s grade-boundary archive">View Pearson’s grade-boundary archive</ResourceLink></div>
      </GcseSection>
      <GcseSection id="official-guidance">
        <GcseHeading className={r.sectionIntro} title="The qualification and key dates">
          Official Pearson Edexcel documents covering the course requirements and 2027 exam dates.
        </GcseHeading>
        <div className={r.references}>
          {references.map((resource) => (
            <article key={resource.title} className={resource.icon === "calendar" ? r.examReference : undefined}>
              <span className={r.referenceIcon}>
                {resource.icon === "calendar" ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4m10-4v4M3 11h18m-14 4h2m4 0h2m-8 3h2" /></svg> : <ResourceIcon label={resource.title} />}
              </span>
              <div>
                <div className={r.referenceTitle}>
                  <h3>{resource.title}</h3>
                  {resource.icon === "calendar" && <span className={r.finalBadge}>Final timetable</span>}
                </div>
                <p>{resource.description}</p>
                {resource.icon === "calendar" && <>
                  <ul className={r.examDates} aria-label="Summer 2027 Higher Tier exam dates and speaking window">
                    <li>
                      <strong>Speaking window</strong>
                      <span className={r.speakingDate}><time dateTime="2027-04-15">15 April</time>–<time dateTime="2027-05-20">20 May 2027</time><small>Your school, college or exam centre confirms your individual date and time.</small></span>
                    </li>
                    {examDates2027.map((exam) => <li key={exam.paper}>
                      <strong>{exam.paper}</strong>
                      <time dateTime={exam.date}>{exam.label}</time>
                      <span>Afternoon</span>
                    </li>)}
                  </ul>
                  <p className={r.examReminder}>Confirm your written exam dates and arrival times with your exam centre.</p>
                  <p className={r.examReminder}><strong>Another exam in the same session?</strong> Contact your exams officer as soon as you receive your timetable. This includes exams with another board or at another school, college or exam centre.</p>
                  <div className={r.speakingSource}><ResourceLink href="https://qualifications.pearson.com/en/qualifications/edexcel-gcses/russian-2017.news.html?article=%2Fcontent%2Fdemo%2Fen%2Fnews-policy%2Fsubject-updates%2Flanguages%2F2027-speaking-windows-confirmed" label="Pearson’s speaking-window announcement">Pearson’s speaking-window announcement</ResourceLink></div>
                </>}
              </div>
              <ResourceLink href={resource.href} label={resource.label}>{resource.label}</ResourceLink>
            </article>
          ))}
        </div>
        <div className={r.otherDates}>
          <h3>Other key dates</h3>
          <dl>
            <div><dt>Standard exam-entry deadline</dt><dd><time dateTime="2027-02-21">21 February 2027</time><p>Your school, college or exam centre may set an earlier deadline. Late-entry fees apply after Pearson’s standard deadline.</p><GcseLink href={`${gcsePaths.exams}#exam-entry`}>Exam entry and late fees</GcseLink></dd></div>
            <div><dt>Exam contingency day</dt><dd><time dateTime="2027-06-23">23 June 2027</time><p>Keep this date available in case exams need to be rescheduled following significant disruption.</p></dd></div>
            <div><dt>GCSE results day</dt><dd><time dateTime="2027-08-19">19 August 2027</time><p>Your school, college or exam centre will explain how to receive your results.</p></dd></div>
          </dl>
          <div className={r.dateSources}>
            <ResourceLink href="https://support.pearson.com/uk/articles/en_US/Knowledge/Entries-UK-Centre-Entry-Deadlines" label="Pearson exam-entry deadlines">Pearson entry deadlines</ResourceLink>
            <ResourceLink href="https://www.jcq.org.uk/wp-content/uploads/sites/2/2026/05/Key_Dates_June2027_FINAL.pdf" label="JCQ 2027 key dates (PDF)">JCQ 2027 key dates (PDF)</ResourceLink>
          </div>
        </div>
        <div className={r.guideLink}><GcseLink href={gcsePaths.exams}>Read our GCSE exam guide</GcseLink></div>
      </GcseSection>
      <GcseSection id="exam-day">
        <GcseHeading className={r.sectionIntro} title="Know the rules before you arrive">
          Read the candidate guidance alongside the instructions from your own school, college or exam centre.
        </GcseHeading>
        <div className={`${s.resourcesCallout} ${r.callout}`}>
          <ul className={r.examChecklist} aria-label="Written-exam checklist">
            {[
              { title: "Check where and when to arrive", text: "Check your personal timetable and confirm the exam location and arrival time with your exam centre." },
              { title: "Bring the right equipment", text: "Pack black pens and the permitted equipment listed in your exam instructions. Use a clear pencil case if you bring one." },
              { title: "Keep prohibited items out of the exam room", text: "Do not take phones, watches, earphones or unauthorised notes into the exam room, even if you do not intend to use them." },
            ].map((item) => <li key={item.title}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="m5 12 4 4L19 6" /></svg>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </li>)}
          </ul>
          <div className={r.candidateAction}>
            <p>Read the full written-exam rules from the Joint Council for Qualifications (JCQ).</p>
            <small>Effective from September 2026</small>
            <ButtonLink variant="examSecondary" href="https://www.jcq.org.uk/knowledge-hub/written-exams/" target="_blank" rel="noreferrer" aria-label="Read JCQ candidate guidance (opens in a new tab)">Read JCQ candidate guidance</ButtonLink>
          </div>
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
            <p>Tell us about the student’s current Russian level and intended exam year. We’ll help you choose a suitable course and arrange a free trial lesson.</p>
          </div>
          <ButtonLink variant="exam" href={gcsePaths.trial}>Request a free trial lesson</ButtonLink>
        </div>
      </GcseSection>
    </div>
  );
}

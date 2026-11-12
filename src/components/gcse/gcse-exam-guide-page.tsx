import { calendarHref } from "@/content/calendars";
import { GcseViewTransition } from "./gcse-view-transition";
import { AnimatedDisclosure } from "./animated-disclosure";
import { ViewportIndicator } from "@/components/dev/viewport-indicator";
import { examTuition, gbp } from "@/content/tuition-prices";
import { ButtonLink } from "@/components/ui/button-link";
import { InPageButtonLink } from "@/components/ui/in-page-button-link";
import { ApprovedImage } from "@/components/ui/approved-image";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import {
  gcseCalendars,
  gcseExamDates,
  gcsePapers,
  gcsePaths,
  gcseSources,
} from "@/content/gcse-content";
import {
  GcseBreadcrumb,
  GcseHeading,
  GcseLink,
  GcseNav,
  GcseQuestions,
  GcseSection,
} from "./gcse-shared";
import s from "./gcse.module.css";
import c from "./gcse-exam-guide.module.css";

export function GcseExamGuidePage() {
  return (
    <div className={`${s.page} ${s.examGuidePage}`}>
      {process.env.NODE_ENV !== "production" && <ViewportIndicator />}
      <GcseViewTransition name="gcse-hero-frame" default="none" share="gcse-hero-frame">
      <section className={`${s.section} ${s.guideHero}`}>
      <GcseViewTransition name="gcse-hero-content" default="none" share="gcse-content">
        <div className={s.wrap}>
          <GcseBreadcrumb current="Exam guide" />
          <div className={c.heroContent}>
          <div className={c.heroGrid}>
            <div>
              <span className={s.eyebrow}>
                Pearson Edexcel · Higher&nbsp;Tier&nbsp;·&nbsp;1RU0
              </span>
              <h1>
                <span className={c.heroTitlePrefix}>Your </span>GCSE Russian
                <br />
                exam guide
              </h1>
              <p className={s.intro}>
                Understand the exam papers, explore mock exams and plan
                exam entry, with key dates for&nbsp;2027.
              </p>
              <div className={`${s.actions} ${c.heroActions}`}>
                <InPageButtonLink stickyElements="header, [data-gcse-navigation]" variant="exam" href="#mock-exams">View mock exams &amp; fees</InPageButtonLink>
                <InPageButtonLink stickyElements="header, [data-gcse-navigation]" variant="examSecondary" href="#exam-dates">View 2027 exam dates</InPageButtonLink>
              </div>
            </div>
            <div className={c.heroImage}>
              <ApprovedImage image={VOLNA_IMAGES.courses.gcse.examGuide[0]}
                sizes="(min-width: 1440px) 580px, (min-width: 1024px) 44vw, (min-width: 768px) calc((100vw - 64px) / 2.2), 1px" />
            </div>
          </div>
          <aside className={c.entryReminder} aria-label="Official exam entry">
            <div>
              <strong>Exam entry is separate from tuition</strong>
              <p>Families arrange exam entry through a school, college or exam centre.</p>
            </div>
            <GcseLink href="#exam-entry">Plan exam entry</GcseLink>
          </aside>
          </div>
        </div>
      </GcseViewTransition>
      </section>
      </GcseViewTransition>
      <GcseNav
        items={[
          { id: "papers", label: "Exam papers" },
          { id: "speaking", label: "Speaking" },
          { id: "mock-exams", label: "Mock exams" },
          { id: "exam-entry", label: "Exam entry" },
          { id: "exam-dates", label: "2027 dates" },
          { id: "igcse-russian", label: "IGCSE Russian" },
          { id: "exam-questions", label: "Questions" },
        ]}
      />
      <GcseViewTransition name="gcse-body" default="none" share="gcse-content">
      <div data-gcse-body>
      <GcseSection id="papers">
        <GcseHeading
          title="How GCSE Russian is assessed"
        >
          Our courses prepare students for Pearson Edexcel GCSE Russian at
          Higher Tier. Here’s what each paper involves and how long it lasts.
        </GcseHeading>
        <div className={s.papers}>
          {gcsePapers.map((paper) => (
            <article key={paper.code} className={c.paperRow}>
              <div className={c.paperIdentity}>
                <svg className={c.paperIcon} aria-hidden="true" focusable="false" viewBox="0 0 32 32">
                  <use href={`/images/icons/gcse-skills-detailed.svg#${paper.title.toLowerCase()}`} />
                </svg>
                <div>
                <h3>{paper.title}</h3>
                <span className={s.paperCode}>{paper.code}</span>
                </div>
              </div>
              <p>{paper.description}</p>
              <div className={c.paperDuration}>
                <strong>{paper.duration}</strong>
                <span>25% of the qualification</span>
              </div>
            </article>
          ))}
        </div>
        <div className={c.paperNotes}>
          <p>Dictionaries are not permitted, including during speaking preparation.</p>
        </div>
        <div className={`${s.sourceLine} ${c.paperSources}`}>
          <p>
            Paper format: Pearson Edexcel GCSE Russian specification, Issue 5.
          </p>
          <div>
            <GcseLink href={gcseSources.specification} ariaLabel="Read the specification (PDF) (opens in a new tab)">
              Read the specification (PDF)
            </GcseLink>
            <GcseLink href={gcsePaths.resources}>Past papers, mark schemes &amp; audio</GcseLink>
          </div>
        </div>
      </GcseSection>
      <GcseSection id="speaking" wash>
        <GcseHeading
          eyebrow="Paper 2 · Higher Tier"
          title="What happens in the speaking exam?"
        >
          The exam centre arranges a speaking assessment with a teacher,
          conducted in Russian and recorded for marking by Pearson. Students
          complete the following three tasks in order.
        </GcseHeading>
        <div className={s.rhythm}>
          <article>
            <span>Task 1 · Role play</span>
            <h3>Handle an everyday situation</h3>
            <p>
              Students use a task card to ask and answer questions in an
              everyday situation, including one question they have not seen
              in advance.
            </p>
          </article>
          <article>
            <span>Task 2 · Picture discussion</span>
            <h3>Discuss a picture and its topic</h3>
            <p>
              Students answer questions about a picture and its wider topic,
              describing events and explaining their ideas and opinions.
            </p>
          </article>
          <article>
            <span>Task 3 · Conversation</span>
            <h3>Keep the discussion going</h3>
            <p>
              Students begin with a topic chosen in advance and agreed with
              their teacher. The conversation then moves to a different theme
              selected by the teacher from Pearson’s options.
            </p>
          </article>
        </div>
        <div className={s.sourceLine}>
          <p>
            Speaking practice is included in our GCSE lessons.
          </p>
          <GcseLink href="#speaking-mocks">
            Speaking mocks &amp; preparation
          </GcseLink>
        </div>
      </GcseSection>
      <GcseSection id="mock-exams">
        <div className={s.mockGrid}>
          <div>
            <h2>GCSE Russian mock exams</h2>
            <p className={s.intro}>
              We offer two optional sittings each school year for listening,
              reading and writing. Speaking mocks and individual preparation
              are arranged separately.
            </p>
          </div>
          <div className={s.mockOffers}>
          <aside className={`${s.mockCard} ${c.mockOffer}`}>
            <span className={s.eyebrow}>Listening, reading &amp; writing</span>
            <div className={s.mockPrice}>
              £60<span>per sitting · three papers</span>
            </div>
            <ul>
              <li>Listening, reading and writing papers</li>
              <li>Supervised online via Zoom; papers marked afterwards</li>
              <li>Feedback on areas to improve</li>
            </ul>
            <p>
              Register your interest and we’ll contact you about the next sitting.
            </p>
            <ButtonLink variant="exam" href="/registration?course=gcse&enquiry=mock">
              Register interest in mocks
            </ButtonLink>
          </aside>
          <aside id="speaking-mocks" className={`${s.mockCard} ${c.mockOffer} ${c.speakingMockAnchor}`}>
            <h3 className={`${s.eyebrow} ${c.offerTitle}`}>Speaking mocks &amp; preparation</h3>
            <div className={s.mockPrice}>
              {gbp(examTuition.gcse.privateHour)}<small className={c.hourUnit}> / hour</small>
              <span className={c.speakingPrices}>
                <span>30 minutes: {gbp(examTuition.gcse.private30)}</span>
                <span aria-hidden="true"> · </span>
                <span>90 minutes: {gbp(examTuition.gcse.private90)}</span>
              </span>
            </div>
            <ul>
              <li>Practise the speaking assessment with a teacher</li>
              <li>Develop and extend spoken responses</li>
              <li>Receive feedback on areas to improve</li>
            </ul>
            <p>Choose a full speaking mock or preparation focused on your child’s needs.</p>
            <ButtonLink variant="exam" href="/registration?course=gcse&enquiry=mock&mock=speaking">
              Ask about speaking support
            </ButtonLink>
          </aside>
          </div>
        </div>
      </GcseSection>
      <GcseSection id="exam-entry" wash>
        <div className={c.entryHeading}>
        <GcseHeading
          eyebrow="Taking the official exam"
          title="How to arrange exam entry"
        >
          Start by asking the student’s school or college whether they can
          arrange GCSE Russian entry. If not, you’ll need an external exam centre.
        </GcseHeading>
        </div>
        <div className={s.entryGrid}>
          <article>
            <span className={s.eyebrow}>Option 01</span>
            <h3>The student’s school or college</h3>
            <p>
              Ask the school or college’s exams officer whether they can enter
              the student for Pearson Edexcel GCSE Russian (1RU0), Higher Tier,
              including the speaking
              assessment.
            </p>
          </article>
          <article>
            <span className={s.eyebrow}>Option 02</span>
            <h3>An external exam centre</h3>
            <p>
              If the school or college cannot arrange entry, look for a centre that accepts
              private candidates—students who study elsewhere. Confirm that it
              offers GCSE Russian and can arrange the speaking assessment.
            </p>
          </article>
        </div>
        <aside id="speaking-arrangements" className={`${c.speakingArrangements} ${c.speakingMockAnchor}`} aria-labelledby="speaking-arrangements-title">
          <h3 id="speaking-arrangements-title">Help with the speaking assessment</h3>
          <p>
            For students studying with Volna, one of our teachers may be able to
            conduct the official speaking assessment at their school, college or
            exam centre. This depends on location, teacher availability and
            agreement with the centre, so we cannot guarantee the service.
          </p>
          <p>
            Ask about speaking arrangements when requesting a free trial.
            Existing students can contact Volna directly.
          </p>
          <ButtonLink variant="examSecondary" href="/registration?course=gcse">
            Request a free trial lesson
          </ButtonLink>
        </aside>
        <AnimatedDisclosure mobileOnly className={`${c.overseasEntry} ${c.mobileDisclosure}`}>
          <summary><h3>Studying outside the UK?</h3><span className={c.disclosureChevron} aria-hidden="true" /></summary>
          <div>
          <p>Tell us the student’s country, Russian level and intended exam year
            when requesting a free trial. We can discuss suitable courses and
            possible exam-entry routes before you arrange a centre.</p>
          <p>Families arrange official entry with an approved centre, including
            the speaking assessment. Availability varies by country and centre,
            and exam-entry fees are separate from tuition.</p>
          <GcseLink href={gcsePaths.trial}>Request a free trial and discuss exam options</GcseLink>
          </div>
        </AnimatedDisclosure>
        <div className={s.entryChecklist}>
          <hr className={c.entryDivider} />
          <h3 className={c.entryPreparationTitle}>Before you confirm exam entry</h3>
          <div className={c.entryDeadline}>
            <p><strong>Arrange entry early.</strong> For summer 2027, Pearson’s standard
              entry deadline is <time dateTime="2027-02-21">21 February</time>.</p>
            <p>Late entry fees apply from <time dateTime="2027-02-22">22 February</time>,
              with higher late fees from <time dateTime="2027-04-22">22 April</time>.
              These are Pearson’s dates for UK centres. Your centre may set earlier
              deadlines and its own charges; late entry is subject to its agreement.</p>
          </div>
          <h4 className={c.entryChecklistTitle}>Confirm these details with your centre</h4>
          <dl className={c.entryDetails}>
            <div><dt>Qualification</dt><dd>Pearson Edexcel GCSE Russian (1RU0), Higher Tier</dd></div>
            <div><dt>Fees and support</dt><dd>Entry deadline, total fees and any access arrangements</dd></div>
            <div><dt>Speaking assessment</dt><dd>Who conducts it, and its date and location</dd></div>
            <div><dt>Written exams</dt><dd>Personal timetable and arrival instructions</dd></div>
          </dl>
          <p className={c.entryResponsibility}>
            <span>Volna can advise on exam-entry options, but cannot register students.
            Families arrange official entry directly with their chosen school,
            college or exam centre.</span>
          </p>
        </div>
        <div className={s.sourceLine}>
          <div>
            <GcseLink href="https://www.jcq.org.uk/private-candidates/" ariaLabel="Find an exam centre with JCQ (opens in a new tab)">
              Find an exam centre
            </GcseLink>
            <GcseLink href="https://support.pearson.com/uk/articles/en_US/Knowledge/Entries-UK-Centre-Entry-Deadlines" ariaLabel="Pearson entry deadlines (opens in a new tab)">
              Pearson entry deadlines
            </GcseLink>
          </div>
        </div>
      </GcseSection>
      <GcseSection id="exam-dates">
        <div className={c.datesHeading}>
        <GcseHeading
          title="Summer 2027 exam dates"
        >
          These are Pearson Edexcel’s published dates for UK exams. Your exam
          centre will confirm exact start times and arrival instructions.
        </GcseHeading>
        </div>
        <div className={s.dateGrid}>
          {gcseExamDates.map((date) => (
            <article key={date.iso}>
              <span className={s.eyebrow}>{date.label}</span>
              <h3>
                <time dateTime={date.iso}>{date.date}</time>
              </h3>
              <p>{date.note}</p>
              {date.label === "Speaking window" && (
                <div className={c.mobileSpeakingSource}>
                  <GcseLink href={gcseSources.speaking} ariaLabel="Speaking window (opens in a new tab)">Speaking window</GcseLink>
                </div>
              )}
            </article>
          ))}
        </div>
        <div className={s.sourceLine}>
          <div>
            <GcseLink href={gcseSources.timetable} ariaLabel="Final timetable (PDF) (opens in a new tab)">
              Final timetable (PDF)
            </GcseLink>
            <span className={c.desktopSpeakingSource}>
              <GcseLink href={gcseSources.speaking} ariaLabel="Speaking window (opens in a new tab)">Speaking window</GcseLink>
            </span>
          </div>
        </div>
        <AnimatedDisclosure mobileOnly className={`${c.calendarDisclosure} ${c.mobileDisclosure}`}>
        <summary><h3>Looking for your lesson calendar?</h3><span className={c.disclosureChevron} aria-hidden="true" /></summary>
        <div className={`${s.calendarLinks} ${c.lessonCalendars}`}>
          <div>
            <h3>Looking for your lesson calendar?</h3>
            <p>
              View teaching dates and school holidays for 2026–27.
            </p>
          </div>
          <div className={c.lessonCalendarOptions}>
            {gcseCalendars.map((calendar, index) => (
              <div key={calendar.href}>
              <div className={`${s.calendarActions} ${c.lessonCalendarActions}`}>
                <GcseLink href={calendarHref(`gcse-${index === 0 ? "one" : "two"}-year`)}>
                  {calendar.label} calendar<span className="sr-only">: GCSE, 2026–27</span>
                </GcseLink>
                <GcseLink href={calendar.href} ariaLabel={`Download PDF: GCSE ${calendar.label.toLowerCase()} calendar, 2026–27`}>Download PDF</GcseLink>
              </div>
              {index === 1 && <p className={s.calendarYearNote}>First year of the two-year course only.</p>}
              </div>
            ))}
            <GcseLink href="/term-dates?from=gcse">School holidays</GcseLink>
          </div>
        </div>
        </AnimatedDisclosure>
      </GcseSection>
      <GcseSection id="igcse-russian">
        <div className={c.igcsePanel}>
        <div className={c.igcseClarification}>
          <h2>Looking for IGCSE Russian?</h2>
          <p>Cambridge International and Pearson Edexcel do not currently offer
            Russian as an IGCSE or International GCSE. Our courses prepare students
            for Pearson Edexcel GCSE Russian (1RU0).</p>
          <p>If your child’s school refers to their course as “IGCSE Russian”,
            tell us about their course and exam plans when requesting a free trial.
            We’ll help clarify the qualification and discuss whether our classes
            would suit them.</p>
          <ButtonLink variant="exam" href={gcsePaths.trial}>Request a free trial</ButtonLink>
        </div>
        <div className={c.igcseImage}>
          <ApprovedImage image={VOLNA_IMAGES.courses.gcse.studyOptions[1]}
            sizes="(min-width: 1024px) 34vw, (min-width: 768px) 40vw, calc(100vw - 40px)" />
        </div>
        </div>
      </GcseSection>
      <GcseSection id="exam-questions">
        <div className={`${s.faqGrid} ${c.examFaqGrid}`}>
          <div>
            <h2>Your exam questions answered</h2>
            <GcseLink href={`${gcsePaths.main}#questions`}>
              Course &amp; lesson FAQs
            </GcseLink>
          </div>
          <GcseQuestions
            items={[
              {
                question: "Are mock exams compulsory?",
                answer:
                  "No. Mock exams are optional and charged separately from tuition. We recommend them for timed practice and feedback before the official exams.",
              },
              {
                question: "Does the mock include speaking?",
                answer:
                  "The £60 mock covers listening, reading and writing. One-to-one speaking mocks and preparation sessions are available separately at our private GCSE tuition rates.",
                link: { href: "#mock-exams", label: "See mock options" },
              },
              {
                question: "Can a Volna teacher conduct the official speaking assessment?",
                answer:
                  "This may be possible for students studying with Volna, depending on location, teacher availability and approval from the student’s school, college or exam centre. Contact us to discuss the options; availability cannot be guaranteed.",
                link: { href: "#speaking-arrangements", label: "Speaking assessment arrangements" },
              },
              {
                question: "Does joining a Volna course include exam entry?",
                answer:
                  "No. Course enrolment and official exam entry are separate. Families must arrange exam entry directly with the student’s school, college or chosen exam centre. Volna can advise on the options, but cannot register students.",
                link: { href: "#exam-entry", label: "How to arrange exam entry" },
              },
              {
                question: "What if the student is preparing for summer 2028?",
                answer:
                  "The exam dates shown here apply to summer 2027. Students preparing for 2028 should use the timetable for their own exam year. The 2026–27 course calendars show lesson dates, not their final exam dates.",
                link: { href: "https://qualifications.pearson.com/en/support/support-topics/exams/exam-timetables.html", label: "View Pearson exam timetables" },
              },
            ]}
          />
        </div>
      </GcseSection>
      <nav className={s.exploreMore} aria-label="Explore GCSE">
        <div className={s.wrap}>
          <span>Continue exploring</span>
          <div>
            <GcseLink href={`${gcsePaths.main}#course-options`}>Courses &amp; fees</GcseLink>
            <GcseLink href={gcsePaths.curriculum}>Curriculum</GcseLink>
            <GcseLink href={gcsePaths.resources}>Exam resources</GcseLink>
          </div>
        </div>
      </nav>
      <GcseSection id="start" aliases={["registration"]}>
        <div className={s.examGuideStart}>
          <div>
            <span className={s.eyebrow}>Your next step</span>
            <h2>Find the right GCSE course</h2>
            <p>Tell us about your child’s Russian and intended exam year. We’ll recommend a suitable course and arrange a free trial lesson.</p>
          </div>
          <ButtonLink variant="exam" href={gcsePaths.trial}>Request a free trial</ButtonLink>
        </div>
      </GcseSection>
      </div>
      </GcseViewTransition>
    </div>
  );
}

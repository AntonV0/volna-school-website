import { calendarHref } from "@/content/calendars";
import { examTuition, gbp } from "@/content/tuition-prices";
import { ButtonLink } from "@/components/ui/button-link";
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
      <section className={`${s.section} ${s.guideHero}`}>
        <div className={s.wrap}>
          <GcseBreadcrumb current="Exam guide" />
          <div className={c.heroContent}>
          <div className={c.heroGrid}>
            <div>
              <span className={s.eyebrow}>
                Pearson Edexcel · 1RU0 · Higher Tier
              </span>
              <h1>
                Your GCSE Russian
                <br />
                exam guide.
              </h1>
              <p className={s.intro}>
                Understand the exam papers, explore mock exams and plan
                official exam entry, with key dates for 2027.
              </p>
              <div className={`${s.actions} ${c.heroActions}`}>
                <ButtonLink variant="exam" href="#mock-exams">Explore mock exams</ButtonLink>
                <ButtonLink variant="examSecondary" href="#exam-dates">View 2027 exam dates</ButtonLink>
              </div>
            </div>
            <div className={c.heroImage}>
              <ApprovedImage image={VOLNA_IMAGES.courses.gcse.examGuide[0]}
                sizes="(min-width: 1440px) 580px, (min-width: 1024px) 44vw, 1px" />
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
      </section>
      <GcseNav
        items={[
          { id: "papers", label: "Exam papers" },
          { id: "speaking", label: "Speaking" },
          { id: "mock-exams", label: "Mock exams" },
          { id: "exam-entry", label: "Exam entry" },
          { id: "exam-dates", label: "2027 dates" },
          { id: "exam-questions", label: "Questions" },
        ]}
      />
      <GcseSection id="papers">
        <GcseHeading
          title="How GCSE Russian is assessed."
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
                <span>25% of the final result</span>
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
          A teacher conducts the assessment in Russian, and Pearson marks the
          recording. The exam centre arranges the appointment. Students
          complete the three tasks below in order.
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
              Students discuss a topic they have chosen in advance, followed
              by a second theme chosen by the teacher from Pearson’s options.
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
              We offer two optional mock-exam sessions each school year for
              listening, reading and writing. Individual speaking mocks and
              preparation sessions are arranged separately.
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
              <li>Develop responses and work on areas needing attention</li>
              <li>Receive feedback on areas to improve</li>
            </ul>
            <p>Sessions are tailored to the student, whether they need a full
              mock assessment or focused preparation.</p>
            <ButtonLink variant="exam" href="/registration?course=gcse&enquiry=mock&mock=speaking">
              Ask about speaking support
            </ButtonLink>
          </aside>
          </div>
        </div>
      </GcseSection>
      <GcseSection id="exam-entry">
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
              If the school cannot arrange entry, look for a centre that accepts
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
            Considering lessons with Volna? We can discuss possible speaking
            arrangements when arranging your free trial.
            Existing students can contact the school directly.
          </p>
          <ButtonLink variant="examSecondary" href="/registration?course=gcse">
            Request a free trial lesson
          </ButtonLink>
          <p className={c.arrangementsNote}>
            Any arrangement must be approved by the exam centre.
          </p>
        </aside>
        <div className={s.entryChecklist}>
          <div className={c.entryDeadline}>
            <p><strong>Arrange entry early.</strong> For summer 2027, Pearson’s standard
              entry deadline is <time dateTime="2027-02-21">21 February</time>.</p>
            <p>Late entry fees apply from <time dateTime="2027-02-22">22 February</time>,
              with higher late fees from <time dateTime="2027-04-22">22 April</time>.
              These are Pearson’s dates for UK centres. Your centre may set earlier
              deadlines and its own charges; late entry is subject to its agreement.</p>
          </div>
          <h3>Confirm these details with your centre</h3>
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
      <GcseSection id="exam-dates" wash>
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
            </article>
          ))}
        </div>
        <div className={s.sourceLine}>
          <div>
            <GcseLink href={gcseSources.timetable} ariaLabel="Final timetable (PDF) (opens in a new tab)">
              Final timetable (PDF)
            </GcseLink>
            <GcseLink href={gcseSources.speaking} ariaLabel="Speaking window (opens in a new tab)">Speaking window</GcseLink>
          </div>
        </div>
        <div className={`${s.calendarLinks} ${c.lessonCalendars}`}>
          <div>
            <h3>Looking for your lesson calendar?</h3>
            <p>
              View teaching dates and school holidays for 2026–27.
            </p>
          </div>
          <div>
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
      </GcseSection>
      <GcseSection id="exam-questions">
        <div className={`${s.faqGrid} ${c.examFaqGrid}`}>
          <div>
            <span className={s.eyebrow}>Practical questions</span>
            <h2>Exam questions answered</h2>
            <GcseLink href={`${gcsePaths.main}#questions`}>
              Questions about joining a course
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
                  "This may be possible for students studying with Volna, depending on location, teacher availability and approval from the exam centre. Contact us to discuss the options; availability cannot be guaranteed.",
                link: { href: "#speaking-arrangements", label: "Speaking assessment arrangements" },
              },
              {
                question: "Does joining a Volna course register the student for the official exam?",
                answer:
                  "No. Course enrolment and official exam entry are separate. Families must arrange exam entry directly with the student’s school, college or chosen exam centre. Volna can advise on the options, but cannot register students.",
                link: { href: "#exam-entry", label: "How to arrange exam entry" },
              },
              {
                question: "What if the student is preparing for summer 2028?",
                answer:
                  "The exam dates shown here apply to summer 2027. Students preparing for 2028 should use the timetable for their own exam year. The 2026–27 course calendars show lesson dates, not their final exam dates.",
              },
            ]}
          />
        </div>
      </GcseSection>
      <GcseSection id="start" aliases={["registration"]}>
        <div className={s.examGuideStart}>
          <div>
            <span className={s.eyebrow}>Your next step</span>
            <h2>Find the right GCSE course.</h2>
            <p>Complete the registration form and we’ll contact you to discuss
              the student’s Russian, recommend a course and arrange a free trial lesson.</p>
          </div>
          <ButtonLink variant="exam" href={gcsePaths.trial}>Request a free trial lesson</ButtonLink>
        </div>
      </GcseSection>
    </div>
  );
}

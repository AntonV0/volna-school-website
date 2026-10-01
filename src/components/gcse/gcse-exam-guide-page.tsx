import { calendarHref } from "@/content/calendars";
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
  GcseStart,
} from "./gcse-shared";
import s from "./gcse.module.css";

export function GcseExamGuidePage() {
  return (
    <div className={s.page}>
      <section className={`${s.section} ${s.guideHero}`}>
        <div className={s.wrap}>
          <GcseBreadcrumb current="Exam guide" />
          <div className={s.guideIntro}>
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
                Understand the papers, practise with purpose and arrange your
                exam entry in good time. Here are the essentials for students
                and families preparing with Volna.
              </p>
            </div>
            <aside className={s.guideNote}>
              <span className={s.eyebrow}>Two steps to remember</span>
              <h2>
                Study with Volna.
                <br />
                Enter through a centre.
              </h2>
              <p>
                Course enrolment and official exam entry are separate. Your
                school or exam centre confirms the entry, fees and individual
                exam arrangements.
              </p>
              <GcseLink href="#exam-entry">Plan your exam entry</GcseLink>
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
          eyebrow="The assessment"
          title="Four papers. Equal weight."
        >
          Each paper contributes 25% of the qualification. These timings are for
          the Higher Tier taught on our courses.
        </GcseHeading>
        <div className={s.papers}>
          {gcsePapers.map((paper) => (
            <article key={paper.code}>
              <span className={s.paperNumber}>{paper.number}</span>
              <div>
                <h3>{paper.title}</h3>
                <span className={s.paperCode}>{paper.code}</span>
              </div>
              <p>{paper.description}</p>
              <div className={s.duration}>
                <span className={s.paperWeight}>
                  <strong>25%</strong> of the qualification
                </span>
                <strong>{paper.duration}</strong>
              </div>
            </article>
          ))}
        </div>
        <div className={s.sourceLine}>
          <p>
            Paper format: Pearson Edexcel GCSE Russian specification, Issue 5.
          </p>
          <GcseLink href={gcseSources.specification}>
            Read the specification (PDF)
          </GcseLink>
        </div>
      </GcseSection>
      <GcseSection id="speaking" wash>
        <GcseHeading
          eyebrow="Paper 2 · Higher Tier"
          title="Three ways to show your spoken Russian."
        >
          The assessment lasts 10–12 minutes, plus 12 minutes’ preparation for
          the role play and picture-based task. Your exam centre arranges the
          appointment and conducts the assessment.
        </GcseHeading>
        <div className={s.rhythm}>
          <article>
            <span>Task 1 · Role play</span>
            <h3>Handle an everyday situation</h3>
            <p>
              Use the prompts on your card to respond in Russian, ask questions
              and deal with an unexpected question.
            </p>
          </article>
          <article>
            <span>Task 2 · Picture discussion</span>
            <h3>Describe and develop</h3>
            <p>
              Answer questions about a picture, then develop your ideas and
              opinions about its wider topic.
            </p>
          </article>
          <article>
            <span>Task 3 · Conversation</span>
            <h3>Keep the discussion going</h3>
            <p>
              Discuss two themes: one based on a topic you choose in advance,
              and a second allocated by Pearson.
            </p>
          </article>
        </div>
        <div className={s.sourceLine}>
          <p>
            Speaking practice is part of lessons. The optional £60 mock covers
            listening, reading and writing only.
          </p>
          <GcseLink href={`${gcsePaths.curriculum}#skills`}>
            How we develop language skills
          </GcseLink>
        </div>
      </GcseSection>
      <GcseSection id="mock-exams">
        <div className={s.mockGrid}>
          <div>
            <span className={s.eyebrow}>A rehearsal with feedback</span>
            <h2>Make practice count.</h2>
            <p className={s.intro}>
              Volna offers two optional GCSE mock exams each school year, in the
              autumn and spring terms. They give students experience of timed
              papers and show where further work will help.
            </p>
            <p className={s.bodyText}>
              Students complete listening, reading and writing past papers
              online via Zoom under supervised exam conditions. Marked work and
              feedback help the teacher identify revision priorities.
            </p>
          </div>
          <aside className={s.mockCard}>
            <span className={s.eyebrow}>Optional mock exam</span>
            <div className={s.mockPrice}>
              £60<span>per mock sitting</span>
            </div>
            <ul>
              <li>Listening, reading and writing papers</li>
              <li>Online invigilation and marking</li>
              <li>Feedback on areas to improve</li>
            </ul>
            <p>
              The speaking paper is not included in this three-paper mock.
              Contact the school for the next sitting and booking arrangements.
            </p>
            <GcseLink href="mailto:info@volnaschool.com?subject=GCSE%20mock%20exam%20enquiry">
              Ask about the next mock
            </GcseLink>
          </aside>
        </div>
      </GcseSection>
      <GcseSection id="exam-entry">
        <GcseHeading
          eyebrow="Taking the official exam"
          title="Choose where you’ll sit it."
        >
          Contact a centre early enough to confirm that it can accept the
          student and arrange every component, including speaking.
        </GcseHeading>
        <div className={s.entryGrid}>
          <article>
            <span className={s.eyebrow}>Option 01</span>
            <h3>Your school or college</h3>
            <p>
              Ask the exams officer whether they can enter you for Pearson
              Edexcel GCSE Russian (1RU0), Higher Tier, and arrange the speaking
              assessment. Agree any fees, deadlines and required information
              directly with them.
            </p>
          </article>
          <article>
            <span className={s.eyebrow}>Option 02</span>
            <h3>An external exam centre</h3>
            <p>
              If your school cannot arrange entry, contact a centre that accepts
              private candidates for this qualification. Confirm Russian
              availability, speaking arrangements and the full cost before
              booking.
            </p>
          </article>
        </div>
        <div className={s.entryChecklist}>
          <h3>Confirm these details with your centre</h3>
          <ul>
            <li>The qualification and tier: GCSE Russian 1RU0, Higher Tier</li>
            <li>Entry deadline, fees and any access arrangements needed</li>
            <li>Who conducts speaking, and where and when it takes place</li>
            <li>Your written exam timetable and arrival instructions</li>
          </ul>
          <p>
            Volna can help you understand the options. The selected exam centre
            is responsible for confirming and processing your official entry.
          </p>
        </div>
      </GcseSection>
      <GcseSection id="exam-dates" wash>
        <GcseHeading
          eyebrow="Summer 2027 · Official dates"
          title="Put the key dates in your diary."
        >
          For students taking the exam in 2027. Your centre supplies your
          personal timetable and exact arrival times.
        </GcseHeading>
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
          <p>
            Checked 28 September 2026 against Pearson’s final 2027 timetable and
            speaking-window announcement.
          </p>
          <div>
            <GcseLink href={gcseSources.timetable}>
              Final timetable (PDF)
            </GcseLink>
            <GcseLink href={gcseSources.speaking}>Speaking window</GcseLink>
          </div>
        </div>
        <div className={s.calendarLinks}>
          <div>
            <h3>Looking for your lesson calendar?</h3>
            <p>
              These show teaching dates for 2026–27. One-year lessons finish on
              24 May, before the written exams; the PDF’s July term end applies
              to the wider school. The two-year calendar covers its first
              academic year, not the 2028 exam series.
            </p>
          </div>
          <div>
            {gcseCalendars.map((calendar, index) => (
              <div key={calendar.href} className={s.calendarActions}>
                <GcseLink href={calendarHref(`gcse-${index === 0 ? "one" : "two"}-year`)}>
                  {calendar.label} calendar<span className="sr-only">: GCSE, 2026–27</span>
                </GcseLink>
                <a href={calendar.href} download aria-label={`Download PDF: GCSE ${calendar.label.toLowerCase()} calendar, 2026–27`}>Download PDF <span aria-hidden="true">↓</span></a>
              </div>
            ))}
            <GcseLink href="/term-dates">School holidays</GcseLink>
          </div>
        </div>
      </GcseSection>
      <GcseSection id="exam-questions">
        <div className={s.faqGrid}>
          <div>
            <span className={s.eyebrow}>Practical questions</span>
            <h2>Before exam day.</h2>
            <GcseLink href={`${gcsePaths.main}#questions`}>
              Questions about joining a course
            </GcseLink>
          </div>
          <GcseQuestions
            items={[
              {
                question: "Are mock exams compulsory?",
                answer:
                  "No. They are optional, although we recommend them as useful practice. The mock fee is separate from regular tuition.",
              },
              {
                question: "Does the mock include speaking?",
                answer:
                  "No. The mock covers listening, reading and writing. Speak to the school about preparation for the speaking paper; your official speaking assessment is arranged separately through your exam centre.",
              },
              {
                question: "When will my speaking exam take place?",
                answer:
                  "The 2027 speaking window is 15 April to 20 May. Your exam centre sets the individual appointment within that window and tells you when and where to attend.",
              },
              {
                question: "What if I am preparing for summer 2028?",
                answer:
                  "The dates above are for the 2027 exam series. Use your course calendar for this year’s lessons, and check Pearson’s timetable and your centre’s arrangements for your own exam year.",
              },
            ]}
          />
        </div>
      </GcseSection>
      <GcseStart compact examGuide />
    </div>
  );
}

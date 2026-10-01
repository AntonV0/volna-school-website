import { calendarHref } from "@/content/calendars";
import {
  alevelCalendars,
  alevelExamDates,
  alevelPapers,
  alevelPaths,
  alevelSources,
} from "@/content/alevel-content";
import {
  ALevelBreadcrumb,
  ALevelHeading,
  ALevelLink,
  ALevelNav,
  ALevelQuestions,
  ALevelSection,
  ALevelStart,
} from "./alevel-shared";
import s from "./alevel.module.css";

export function ALevelExamGuidePage() {
  return (
    <div className={s.page}>
      <section className={`${s.section} ${s.guideHero}`}>
        <div className={s.wrap}>
          <ALevelBreadcrumb current="Exam guide" />
          <div className={s.guideIntro}>
            <div>
              <span className={s.eyebrow}>Pearson Edexcel · 9RU0</span>
              <h1>
                Your A Level Russian
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
              <ALevelLink href="#exam-entry">Plan your exam entry</ALevelLink>
            </aside>
          </div>
        </div>
      </section>
      <ALevelNav
        items={[
          { id: "papers", label: "Exam papers" },
          { id: "speaking", label: "Speaking & IRP" },
          { id: "mock-exams", label: "Mock exams" },
          { id: "exam-entry", label: "Exam entry" },
          { id: "exam-dates", label: "2027 dates" },
          { id: "exam-questions", label: "Questions" },
        ]}
      />
      <ALevelSection id="papers">
        <ALevelHeading
          eyebrow="The assessment"
          title="Three components. One qualification."
        >
          Two written papers and a speaking assessment test different aspects of
          advanced Russian. The weighting is shown beside each component.
        </ALevelHeading>
        <div className={s.papers}>
          {alevelPapers.map((paper) => (
            <article key={paper.code}>
              <span className={s.paperNumber}>{paper.number}</span>
              <div>
                <h3>{paper.title}</h3>
                <span className={s.paperCode}>{paper.code}</span>
              </div>
              <p>{paper.description}</p>
              <div className={s.duration}>
                <span className={s.paperWeight}>
                  <strong>{paper.weighting}</strong> of the qualification
                </span>
                <strong>{paper.duration}</strong>
              </div>
            </article>
          ))}
        </div>
        <div className={s.sourceLine}>
          <p>
            Paper format: Pearson Edexcel A Level Russian specification, Issue
            3.
          </p>
          <ALevelLink href={alevelSources.specification}>
            Read the specification (PDF)
          </ALevelLink>
        </div>
      </ALevelSection>
      <ALevelSection id="speaking" wash>
        <ALevelHeading eyebrow="Paper 3" title="Speaking with substance.">
          Two tasks give you the opportunity to explain ideas, respond to
          questions and develop a discussion in Russian.
        </ALevelHeading>
        <div className={s.entryGrid}>
          <article>
            <span className={s.eyebrow}>Task 1 · Theme discussion</span>
            <h3>Respond to a viewpoint</h3>
            <p>
              Use the preparation time to consider a stimulus statement. Discuss
              your response with the examiner, then explore the wider theme.
            </p>
          </article>
          <article>
            <span className={s.eyebrow}>Task 2 · Independent research</span>
            <h3>Explain what you found</h3>
            <p>
              Present findings from your written sources and your own response.
              Answer follow-up questions and discuss your research in more
              depth.
            </p>
          </article>
        </div>
        <aside className={s.speakingNote}>
          <h3>Before the assessment: your RP3 form</h3>
          <p>
            Submit it to your teacher-examiner at least three weeks before your
            speaking assessment, listing your findings and sources, including at
            least two written sources. Agree the deadline with your centre.
          </p>
          <ALevelLink href={`${alevelPaths.curriculum}#research`}>
            Research guidance and independence
          </ALevelLink>
        </aside>
      </ALevelSection>
      <ALevelSection id="mock-exams">
        <div className={s.mockGrid}>
          <div>
            <span className={s.eyebrow}>A rehearsal with feedback</span>
            <h2>Make practice count.</h2>
            <p className={s.intro}>
              Volna offers two optional A Level mock exams each school year, in
              the autumn and spring terms. They give students experience of
              timed papers and show where further work will help.
            </p>
            <p className={s.bodyText}>
              Students complete the two written papers online via Zoom under
              supervised exam conditions. Marked work and feedback help the
              teacher identify revision priorities.
            </p>
          </div>
          <aside className={s.mockCard}>
            <span className={s.eyebrow}>Optional mock exam</span>
            <div className={s.mockPrice}>
              £60<span>per mock sitting</span>
            </div>
            <ul>
              <li>Paper 1 and Paper 2</li>
              <li>Online invigilation and marking</li>
              <li>Feedback on areas to improve</li>
            </ul>
            <p>
              Speaking is not included in this two-paper mock. Contact the
              school for the next sitting and booking arrangements.
            </p>
            <ALevelLink href="mailto:info@volnaschool.com?subject=A%20Level%20mock%20exam%20enquiry">
              Ask about the next mock
            </ALevelLink>
          </aside>
        </div>
      </ALevelSection>
      <ALevelSection id="exam-entry">
        <ALevelHeading
          eyebrow="Taking the official exam"
          title="Choose where you’ll sit it."
        >
          Contact a centre early enough to confirm that it can accept the
          student and arrange every component, including speaking.
        </ALevelHeading>
        <div className={s.entryGrid}>
          <article>
            <span className={s.eyebrow}>Option 01</span>
            <h3>Your school or college</h3>
            <p>
              Ask the exams officer whether they can enter you for Pearson
              Edexcel A Level Russian (9RU0), and arrange the speaking
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
            <li>The qualification: Pearson Edexcel A Level Russian 9RU0</li>
            <li>Entry deadline, fees and any access arrangements needed</li>
            <li>Who conducts speaking, and where and when it takes place</li>
            <li>Your written exam timetable and arrival instructions</li>
          </ul>
          <p>
            Volna can help you understand the options. The selected exam centre
            is responsible for confirming and processing your official entry.
          </p>
        </div>
      </ALevelSection>
      <ALevelSection id="exam-dates" wash>
        <ALevelHeading
          eyebrow="Summer 2027 · Official dates"
          title="Put the key dates in your diary."
        >
          For students taking the exam in 2027. Your exam centre supplies your
          personal timetable and exact arrival times.
        </ALevelHeading>
        <div className={s.dateGrid}>
          {alevelExamDates.map((date) => (
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
            <ALevelLink href={alevelSources.timetable}>
              Final timetable (PDF)
            </ALevelLink>
            <ALevelLink href={alevelSources.speaking}>
              Speaking window
            </ALevelLink>
          </div>
        </div>
        <div className={s.calendarLinks}>
          <div>
            <h3>Looking for your lesson calendar?</h3>
            <p>
              These show teaching dates for 2026–27. One-year lessons are
              highlighted through 19 May, between the written papers; the July
              term end refers to the wider school. The two-year calendar covers
              its first academic year.
            </p>
          </div>
          <div>
            {alevelCalendars.map((calendar, index) => (
              <div key={calendar.href} className={s.calendarActions}>
                <ALevelLink href={calendarHref(`alevel-${index === 0 ? "one" : "two"}-year`)}>
                  {calendar.label} calendar<span className="sr-only">: A Level, 2026–27</span>
                </ALevelLink>
                <a href={calendar.href} download aria-label={`Download PDF: A Level ${calendar.label.toLowerCase()} calendar, 2026–27`}>Download PDF <span aria-hidden="true">↓</span></a>
              </div>
            ))}
            <ALevelLink href="/term-dates">School holidays</ALevelLink>
          </div>
        </div>
      </ALevelSection>
      <ALevelSection id="exam-questions">
        <div className={s.faqGrid}>
          <div>
            <span className={s.eyebrow}>Practical questions</span>
            <h2>Before exam day.</h2>
            <ALevelLink href={`${alevelPaths.main}#questions`}>
              Questions about joining a course
            </ALevelLink>
          </div>
          <ALevelQuestions
            items={[
              {
                question: "Are mock exams compulsory?",
                answer:
                  "No. They are optional, although we recommend them as useful practice. The mock fee is separate from regular tuition.",
              },
              {
                question: "Does the mock include speaking?",
                answer:
                  "No. The £60 mock covers Paper 1 and Paper 2. Your official speaking assessment is arranged through your exam centre. General speaking practice takes place during lessons.",
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
      </ALevelSection>
      <ALevelStart compact examGuide />
    </div>
  );
}

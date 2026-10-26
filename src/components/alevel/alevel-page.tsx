import { calendarHref } from "@/content/calendars";
import {
  examTuition,
  gbp,
  privateLengthsLabel,
} from "@/content/tuition-prices";
import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { StructuredData } from "@/components/seo/structured-data";
import {
  alevelCalendars,
  alevelPaths,
  alevelQuestions,
} from "@/content/alevel-content";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import { siteUrl } from "@/lib/site";
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

export function ALevelPage() {
  return (
    <div className={s.page}>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Course",
              name: "A Level Russian at Volna School",
              description:
                "Online Pearson Edexcel A Level Russian preparation through one-year, two-year and private courses.",
              url: new URL(alevelPaths.main, siteUrl).toString(),
              provider: {
                "@type": "EducationalOrganization",
                name: "Volna School",
                url: siteUrl,
              },
              inLanguage: "en",
            },
            {
              "@type": "FAQPage",
              mainEntity: alevelQuestions.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
          ],
        }}
      />
      <section className={`${s.section} ${s.hero}`}>
        <div className={s.wrap}>
          <ALevelBreadcrumb />
          <div className={s.heroGrid}>
            <div>
              <span className={s.eyebrow}>
                Pearson Edexcel · A Level Russian · 9RU0
              </span>
              <h1>Take your Russian further.</h1>
              <p className={s.intro}>
                Explore ideas, analyse literature and film, and build a
                convincing argument in Russian. Prepare for A Level with
                small-group teaching or individual support.
              </p>
              <div className={s.actions}>
                <ButtonLink href={alevelPaths.trial}>
                  Request a free trial
                </ButtonLink>
                <ALevelLink href="#course-options">Compare courses</ALevelLink>
              </div>
              <dl className={s.facts}>
                <div>
                  <dt>1 or 2 years</dt>
                  <dd>Choose a suitable pace</dd>
                </div>
                <div>
                  <dt>Up to 8</dt>
                  <dd>Students in a group</dd>
                </div>
                <div>
                  <dt>{gbp(examTuition.alevel.groupHour)} / hour</dt>
                  <dd>Group tuition</dd>
                </div>
              </dl>
            </div>
            <div className={s.heroImage}>
              <ApprovedImage
                image={VOLNA_IMAGES.courses.alevel.hero}
                priority
                sizes="(min-width: 1000px) 480px, (min-width: 768px) 45vw, 100vw"
              />
              <span className={s.imageLabel}>
                One-year, two-year and private study options.
              </span>
            </div>
          </div>
        </div>
      </section>
      <ALevelNav
        items={[
          { id: "course-options", label: "Courses & fees" },
          { id: "learning", label: "Learning" },
          { id: "exam-support", label: "Exam support" },
          { id: "questions", label: "Questions" },
        ]}
      />
      <aside id="results" className={s.proof} aria-label="Results and teaching">
        <div className={s.wrap}>
          <div>
            <span className={s.eyebrow}>Summer 2025 results</span>
            <strong>90% achieved A* or A</strong>
            <p>Published results for the 2025 cohort.</p>
          </div>
          <div>
            <strong>Edexcel-trained tutors</strong>
            <p>Teaching shaped around the qualification.</p>
          </div>
          <div>
            <strong>Practice with feedback</strong>
            <p>Weekly homework and optional mock exams.</p>
          </div>
        </div>
      </aside>
      <ALevelSection
        id="course-options"
        aliases={["study-options", "prices", "calendar"]}
      >
        <ALevelHeading
          eyebrow="Find your course"
          title="Compare A Level courses and fees"
        >
          Choose by current Russian level and intended exam year. We’ll help
          assess the fit during the trial.
        </ALevelHeading>
        <div className={s.courseGrid}>
          {[
            {
              title: "One-year course",
              tag: "Focused preparation",
              year: "Summer 2027",
              day: "Wednesdays",
              body: "For confident Russian speakers ready to tackle advanced reading, essays and the full syllabus in one academic year.",
              fit: "Typically Years 12–13. Russian GCSE is recommended; placement also considers literacy and readiness for independent study.",
            },
            {
              title: "Two-year course",
              tag: "Time to develop",
              year: "Summer 2028",
              day: "Thursdays",
              body: "More time to strengthen written Russian, explore cultural topics and develop a thoughtful response to texts and film.",
              fit: "Typically Year 12 or below, with an existing foundation in Russian. The trial helps us assess a suitable starting point.",
            },
          ].map((course, index) => (
            <article className={s.courseCard} key={course.title}>
              <span className={s.eyebrow}>{course.tag}</span>
              <h3>{course.title}</h3>
              <p className={s.examYear}>Working towards {course.year}</p>
              <p>{course.body}</p>
              <p className={s.fit}><strong>Suitable starting point</strong>{course.fit}</p>
              <dl className={s.schedule}>
                <div>
                  <dt>{course.day}</dt>
                  <dd>
                    17:00–18:00
                    <br />
                    18:15–19:15
                  </dd>
                </div>
                <div>
                  <dt>Two one-hour lessons</dt>
                  <dd>Same evening · 15-minute break</dd>
                </div>
              </dl>
              <div className={s.price}>
                <strong>
                  {gbp(examTuition.alevel.groupHour)}
                  <span> / hour</span>
                </strong>
                <span>
                  {gbp(examTuition.alevel.groupHour * 2)} per teaching week
                </span>
              </div>
              <div className={s.calendarActions}>
                <ALevelLink href={calendarHref(`alevel-${index === 0 ? "one" : "two"}-year`)}>View calendar<span className="sr-only">: A Level {index === 0 ? "one-year" : "two-year"} course, 2026–27</span></ALevelLink>
                <a href={alevelCalendars[index].href} download aria-label={`Download PDF: A Level ${index === 0 ? "one-year" : "two-year"} course calendar, 2026–27`}>Download PDF <span aria-hidden="true">↓</span></a>
              </div>
              <p className={s.calendarNote}>
                {index === 0
                  ? "2026–27: highlighted lessons finish on 19 May, between the written papers. The July term end applies to the wider school."
                  : "2026–27: the first academic year of the two-year course."}
              </p>
            </article>
          ))}
          <article className={`${s.courseCard} ${s.privateCard}`}>
            <span className={s.eyebrow}>Individual attention</span>
            <h3>Private tuition</h3>
            <p className={s.examYear}>Your goals. Your schedule.</p>
            <p>
              Focus on essay structure, translation accuracy, discussion skills
              or analysis of our taught text and film, at a pace agreed with
              your teacher.
            </p>
            <p className={s.fit}>
              For school-age students and adults. Useful when a group timetable
              or pace does not fit.
            </p>
            <dl className={s.schedule}>
              <div>
                <dt>Flexible days and times</dt>
                <dd>Arranged with your teacher</dd>
              </div>
              <div>
                <dt>Live online lessons</dt>
                <dd>A plan around your current level and exam timeline</dd>
              </div>
            </dl>
            <div className={s.price}>
              <strong>
                {gbp(examTuition.alevel.privateHour)}
                <span> / hour</span>
              </strong>
              <span>{privateLengthsLabel(examTuition.alevel)}</span>
            </div>
            <ALevelLink href={alevelPaths.privateTrial}>
              Request a private trial
            </ALevelLink>
          </article>
        </div>
        <div className={s.groupAction}>
          <div>
            <h3>Thinking about a group course?</h3>
            <p>
              Request a trial and we’ll help you choose between one year and two
              years.
            </p>
          </div>
          <ButtonLink href={alevelPaths.groupTrial}>
            Request a group trial
          </ButtonLink>
        </div>
        <div className={s.practicalInfo}>
          <div className={s.practicalRow}>
            <h3>Starting level</h3>
            <div>
              <p>
                A Level requires established reading, writing and spoken
                Russian. If you are still building these skills, explore GCSE
                preparation first.
              </p>
              <ALevelLink href="/gcse-courses">Explore GCSE Russian</ALevelLink>
            </div>
          </div>
          <div className={s.practicalRow}>
            <h3>Additional costs</h3>
            <div>
              <p>
                Tuition prices exclude optional mock exams and official
                exam-centre fees. Official entry fees are set by your chosen
                centre.
              </p>
              <ALevelLink href={`${alevelPaths.exams}#mock-exams`}>
                View mock exam fees
              </ALevelLink>
            </div>
          </div>
          <div className={s.practicalRow}>
            <h3>Online lessons</h3>
            <div>
              <p>
                All times are UK local time (GMT/BST). Group lessons use
                Microsoft Teams; private joining details are confirmed with your
                teacher.
              </p>
              <ALevelLink href="/term-dates">School holiday dates</ALevelLink>
            </div>
          </div>
        </div>
        <details className={s.payment}>
          <summary>Payment and joining a course</summary>
          <p>
            If you decide to continue after the trial, we’ll confirm the course
            and lesson arrangements.
            Invoices are sent on the first day of each month for lessons taught
            in the previous month. Pay by card or bank transfer. Private tuition
            arrangements are agreed with the school.
          </p>
          <ALevelLink href="/refund-policy">
            Payment and refund terms
          </ALevelLink>
        </details>
      </ALevelSection>
      <ALevelSection id="learning" aliases={["overview"]} wash>
        <div className={s.learningGrid}>
          <div className={s.learningImage}>
            <ApprovedImage
              image={VOLNA_IMAGES.courses.alevel.studyOptions[1]}
              sizes="(min-width: 900px) 480px, 100vw"
            />
          </div>
          <div>
            <span className={s.eyebrow}>Learning at Volna</span>
            <h2>From fluent conversation to considered argument.</h2>
            <p className={s.intro}>
              A Level asks students to do more with the language they know:
              interpret a text, weigh different views and explain a conclusion.
              We connect that intellectual work with precise, expressive
              Russian.
            </p>
            <div className={s.editorialList}>
              <article>
                <h3>Develop an argument</h3>
                <p>
                  Move beyond description. Make a point, support it with
                  evidence and explain why it matters.
                </p>
              </article>
              <article>
                <h3>Read, watch and analyse</h3>
                <p>
                  Explore characters, ideas and context in literature and film,
                  then turn observations into structured essays.
                </p>
              </article>
              <article>
                <h3>Build independent habits</h3>
                <p>
                  Regular reading, written tasks and vocabulary work make lesson
                  time more productive. Feedback helps students refine their
                  language and essays.
                </p>
              </article>
            </div>
            <div className={s.actions}>
              <ALevelLink href={alevelPaths.curriculum}>
                Explore the curriculum
              </ALevelLink>
              <ALevelLink href="/about-us">Meet the school</ALevelLink>
            </div>
          </div>
        </div>
      </ALevelSection>
      <ALevelSection id="exam-support" aliases={["exam-guide"]}>
        <ALevelHeading eyebrow="Prepare and plan" title="Mock exams, speaking and exam entry">
          Course lessons, practice exams and official exam entry each play a
          different part.
        </ALevelHeading>
        <div className={s.supportGrid}>
          <article>
            <span className={s.bigNumber}>01</span>
            <h3>Try the exam format</h3>
            <p>
              Optional online mocks cover both written papers, with
              invigilation, marking and feedback. Speaking is not included.
            </p>
            <ALevelLink href={`${alevelPaths.exams}#mock-exams`}>
              Mock exams and fees
            </ALevelLink>
          </article>
          <article>
            <span className={s.bigNumber}>02</span>
            <h3>Arrange the official exam</h3>
            <p>
              Exam entry is separate from course enrolment. Plan with your
              school or exam centre, including the speaking assessment.
            </p>
            <ALevelLink href={`${alevelPaths.exams}#exam-entry`}>
              How exam entry works
            </ALevelLink>
          </article>
          <article>
            <span className={s.bigNumber}>03</span>
            <h3>Keep the dates in view</h3>
            <p>
              Check the paper format, the 2027 speaking window and written exam
              dates in one place.
            </p>
            <ALevelLink href={alevelPaths.exams}>
              Open the exam guide
            </ALevelLink>
          </article>
        </div>
      </ALevelSection>
      <ALevelSection id="questions" aliases={["faq"]} wash>
        <div className={s.faqGrid}>
          <div>
            <span className={s.eyebrow}>Before you start</span>
            <h2>A few useful answers.</h2>
            <p className={s.intro}>
              For paper timings, mock exams and exam centres, see our dedicated
              guide.
            </p>
            <ALevelLink href={alevelPaths.exams}>A Level exam guide</ALevelLink>
          </div>
          <ALevelQuestions items={alevelQuestions} />
        </div>
      </ALevelSection>
      <ALevelStart />
    </div>
  );
}

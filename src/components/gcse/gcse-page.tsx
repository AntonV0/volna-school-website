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
  gcseCalendars,
  gcsePaths,
  gcseQuestions,
} from "@/content/gcse-content";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import { siteUrl } from "@/lib/site";
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

export function GcsePage() {
  return (
    <div className={s.page}>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Course",
              name: "GCSE Russian at Volna School",
              description:
                "Online Pearson Edexcel GCSE Russian Higher Tier preparation through one-year, two-year and private courses.",
              url: new URL(gcsePaths.main, siteUrl).toString(),
              provider: {
                "@type": "EducationalOrganization",
                name: "Volna School",
                url: siteUrl,
              },
              inLanguage: "en",
            },
            {
              "@type": "FAQPage",
              mainEntity: gcseQuestions.map((item) => ({
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
          <GcseBreadcrumb />
          <div className={s.heroGrid}>
            <div>
              <span className={s.eyebrow}>
                Pearson Edexcel · GCSE Russian · Higher Tier
              </span>
              <h1>Turn your Russian into a qualification.</h1>
              <p className={s.intro}>
                Build on the Russian you know. Develop confident speaking,
                accurate writing and the exam skills to show what you can do,
                with a teacher guiding each step.
              </p>
              <div className={s.actions}>
                <ButtonLink href={gcsePaths.trial}>
                  Request a free trial
                </ButtonLink>
                <GcseLink href="#course-options">Compare courses</GcseLink>
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
                  <dt>{gbp(examTuition.gcse.groupHour)} / hour</dt>
                  <dd>Group tuition</dd>
                </div>
              </dl>
            </div>
            <div className={s.heroImage}>
              <ApprovedImage
                image={VOLNA_IMAGES.courses.gcse.hero}
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
      <GcseNav
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
            <span className={s.eyebrow}>Recent GCSE results</span>
            <strong>Results update coming soon</strong>
            <p>Latest cohort figures will be added here.</p>
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
      <GcseSection
        id="course-options"
        aliases={["study-options", "prices", "calendar"]}
      >
        <GcseHeading
          eyebrow="Find your course"
          title="Compare GCSE courses and fees"
        >
          Choose by current Russian level and intended exam year. We’ll help
          assess the fit during the trial.
        </GcseHeading>
        <div className={s.courseGrid}>
          {[
            {
              title: "One-year course",
              tag: "Focused preparation",
              year: "Summer 2027",
              day: "Mondays",
              body: "For students with a good foundation in Russian who are ready to prepare for the exam within one academic year.",
              fit: "Typically Year 11, or younger students with suitable reading, writing and speaking skills.",
            },
            {
              title: "Two-year course",
              tag: "Time to develop",
              year: "Summer 2028",
              day: "Tuesdays",
              body: "For students who need more time to develop their language alongside a steady introduction to exam tasks.",
              fit: "Typically Year 10 or below, with placement based on current skills and readiness.",
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
                  {gbp(examTuition.gcse.groupHour)}
                  <span> / hour</span>
                </strong>
                <span>
                  {gbp(examTuition.gcse.groupHour * 2)} per teaching week
                </span>
              </div>
              <div className={s.calendarActions}>
                <GcseLink href={calendarHref(`gcse-${index === 0 ? "one" : "two"}-year`)}>View calendar<span className="sr-only">: GCSE {index === 0 ? "one-year" : "two-year"} course, 2026–27</span></GcseLink>
                <a href={gcseCalendars[index].href} download aria-label={`Download PDF: GCSE ${index === 0 ? "one-year" : "two-year"} course calendar, 2026–27`}>Download PDF <span aria-hidden="true">↓</span></a>
              </div>
              <p className={s.calendarNote}>
                {index === 0
                  ? "2026–27: lessons finish on 24 May, before the written exams. The PDF’s July term end applies to the wider school."
                  : "2026–27: the first academic year of the two-year course."}
              </p>
            </article>
          ))}
          <article className={`${s.courseCard} ${s.privateCard}`}>
            <span className={s.eyebrow}>Individual attention</span>
            <h3>Private tuition</h3>
            <p className={s.examYear}>Your goals. Your schedule.</p>
            <p>
              Strengthen writing accuracy, translation, listening comprehension
              or speaking skills through one-to-one practice at a pace agreed
              with your teacher.
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
                <dt>Online on Zoom</dt>
                <dd>A plan around your current level and exam timeline</dd>
              </div>
            </dl>
            <div className={s.price}>
              <strong>
                {gbp(examTuition.gcse.privateHour)}
                <span> / hour</span>
              </strong>
              <span>{privateLengthsLabel(examTuition.gcse)}</span>
            </div>
            <GcseLink href={gcsePaths.privateTrial}>
              Request a private trial
            </GcseLink>
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
          <ButtonLink href={gcsePaths.groupTrial}>
            Request a group trial
          </ButtonLink>
        </div>
        <div className={s.practicalInfo}>
          <div className={s.practicalRow}>
            <h3>Starting level</h3>
            <div>
              <p>
                GCSE groups build on existing Russian, including reading and
                writing. Starting from scratch? Explore a foundation course
                first.
              </p>
              <GcseLink href="/classes-for-children/russian-for-beginners">
                Foundations for children and teens
              </GcseLink>
              <GcseLink href="/courses-for-adults/russian-foundations">
                Adult foundations
              </GcseLink>
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
              <GcseLink href={`${gcsePaths.exams}#mock-exams`}>
                View mock exam fees
              </GcseLink>
            </div>
          </div>
          <div className={s.practicalRow}>
            <h3>Online lessons</h3>
            <div>
              <p>
                All times are UK local time (GMT/BST). Group lessons use
                Microsoft Teams; private lessons use Zoom.
              </p>
              <GcseLink href="/term-dates">School holiday dates</GcseLink>
            </div>
          </div>
        </div>
        <details className={s.payment}>
          <summary>Payment and joining a course</summary>
          <p>
            If you decide to continue after the trial, we confirm the class and
            invoice the remaining lessons in the school term. Pay by card or
            bank transfer; contact us to discuss monthly instalments. Private
            tuition arrangements are agreed with the school.
          </p>
          <GcseLink href="/refund-policy">Payment and refund terms</GcseLink>
        </details>
      </GcseSection>
      <GcseSection id="learning" aliases={["overview"]} wash>
        <div className={s.learningGrid}>
          <div className={s.learningImage}>
            <ApprovedImage
              image={VOLNA_IMAGES.courses.gcse.studyOptions[1]}
              sizes="(min-width: 900px) 480px, 100vw"
            />
          </div>
          <div>
            <span className={s.eyebrow}>Learning at Volna</span>
            <h2>Build language and exam skills.</h2>
            <p className={s.intro}>
              Knowing Russian is a strong beginning. GCSE preparation helps
              students express that knowledge clearly, accurately and within the
              demands of each task.
            </p>
            <div className={s.editorialList}>
              <article>
                <h3>Language you can use</h3>
                <p>
                  Build vocabulary and grammar through listening, conversation,
                  reading and purposeful writing.
                </p>
              </article>
              <article>
                <h3>Practice that leads somewhere</h3>
                <p>
                  Work through exam-style tasks, learn from corrections and turn
                  feedback into focused revision.
                </p>
              </article>
              <article>
                <h3>Support between lessons</h3>
                <p>
                  Weekly homework keeps skills developing, with teacher feedback
                  to guide the next attempt.
                </p>
              </article>
            </div>
            <div className={s.actions}>
              <GcseLink href={gcsePaths.curriculum}>
                Explore the curriculum
              </GcseLink>
              <GcseLink href="/about-us">Meet the school</GcseLink>
            </div>
          </div>
        </div>
      </GcseSection>
      <GcseSection id="exam-support" aliases={["exam-guide"]}>
        <GcseHeading eyebrow="Prepare and plan" title="Mock exams, speaking and exam entry">
          Course lessons, practice exams and official exam entry each play a
          different part.
        </GcseHeading>
        <div className={s.supportGrid}>
          <article>
            <span className={s.bigNumber}>01</span>
            <h3>Try the exam format</h3>
            <p>
              Optional online mocks give students timed practice in listening,
              reading and writing, followed by marked feedback.
            </p>
            <GcseLink href={`${gcsePaths.exams}#mock-exams`}>
              Mock exams and fees
            </GcseLink>
          </article>
          <article>
            <span className={s.bigNumber}>02</span>
            <h3>Arrange the official exam</h3>
            <p>
              Exam entry is separate from course enrolment. Plan with your
              school or exam centre, including the speaking assessment.
            </p>
            <GcseLink href={`${gcsePaths.exams}#exam-entry`}>
              How exam entry works
            </GcseLink>
          </article>
          <article>
            <span className={s.bigNumber}>03</span>
            <h3>Keep the dates in view</h3>
            <p>
              Check the paper format, the 2027 speaking window and written exam
              dates in one place.
            </p>
            <GcseLink href={gcsePaths.exams}>Open the exam guide</GcseLink>
          </article>
        </div>
      </GcseSection>
      <GcseSection id="questions" aliases={["faq"]} wash>
        <div className={s.faqGrid}>
          <div>
            <span className={s.eyebrow}>Before you start</span>
            <h2>A few useful answers.</h2>
            <p className={s.intro}>
              For paper timings, mock exams and exam centres, see our dedicated
              guide.
            </p>
            <GcseLink href={gcsePaths.exams}>GCSE exam guide</GcseLink>
          </div>
          <GcseQuestions items={gcseQuestions} />
        </div>
      </GcseSection>
      <GcseStart />
    </div>
  );
}

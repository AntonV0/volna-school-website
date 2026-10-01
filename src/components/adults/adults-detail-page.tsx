import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import {
  adultCourses,
  adultPaths,
  type AdultCourse,
} from "@/content/adults-content";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import { adultTrialPath } from "@/lib/registration/adult-focus";
import {
  AdultBreadcrumb,
  AdultHeading,
  AdultLink,
  AdultNav,
  AdultQuestions,
  AdultSection,
  AdultStart,
} from "./adults-shared";
import s from "./adults.module.css";

export function AdultsDetailPage({ course }: { course: AdultCourse }) {
  const beginner = course.slug === "russian-foundations";
  const intermediate = course.slug === "intermediate-russian";
  return (
    <div className={s.page}>
      <section className={`${s.section} ${s.hero}`}>
        <div className={s.wrap}>
          <AdultBreadcrumb current={course.label} />
          <div className={s.heroGrid}>
            <div>
              <span className={s.eyebrow}>
                {course.label} · One-to-one online lessons
              </span>
              <h1>{course.title}</h1>
              <p className={s.intro}>{course.intro}</p>
              <dl className={s.detailFacts}>
                <div>
                  <dt>Who it suits</dt>
                  <dd>
                    {beginner
                      ? "New and returning beginners"
                      : intermediate
                        ? "Learners with some Russian"
                        : "Different levels, a specific goal"}
                  </dd>
                </div>
                <div>
                  <dt>Lesson format</dt>
                  <dd>One-to-one online</dd>
                </div>
                <div>
                  <dt>Tuition</dt>
                  <dd>£35 per hour</dd>
                </div>
              </dl>
              <div className={s.actions}>
                <ButtonLink href={adultTrialPath(course.slug)}>
                  Request a free trial
                </ButtonLink>
                <AdultLink href={`${adultPaths.main}#prices`}>
                  Lesson lengths and fees
                </AdultLink>
              </div>
            </div>
            <div className={s.heroImage}>
              <ApprovedImage
                image={VOLNA_IMAGES.courseDetails[course.image]}
                priority
                sizes="(min-width: 1000px) 480px, (min-width: 768px) 45vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>
      <AdultNav
        items={[
          { id: "starting-point", label: "Who it’s for" },
          {
            id: "learning",
            label: intermediate
              ? "Language skills"
              : beginner
                ? "What you’ll learn"
                : "Your goals",
          },
          {
            id: "practice",
            label:
              beginner || intermediate ? "In practice" : "Your learning plan",
          },
          { id: "between-lessons", label: "Between lessons" },
          ...(intermediate ? [{ id: "next-step", label: "Next steps" }] : []),
          { id: "questions", label: "Questions" },
        ]}
      />
      <AdultSection id="starting-point">
        <div className={s.fitBand}>
          <div>
            <span className={s.eyebrow}>{course.eyebrow}</span>
            <h2>A starting point that fits you.</h2>
          </div>
          <div>
            <p>{course.fit}</p>
            <AdultLink href={`${adultPaths.main}#prices`}>
              See all lesson lengths and practical details
            </AdultLink>
          </div>
        </div>
      </AdultSection>
      <AdultSection id="learning" wash>
        <AdultHeading
          eyebrow={
            beginner
              ? "A learning sequence"
              : intermediate
                ? "Language in balance"
                : "Your reasons to learn"
          }
          title={course.sectionTitle}
        />
        <div
          className={
            beginner
              ? s.learningSequence
              : intermediate
                ? s.skillPanels
                : s.goalPanels
          }
        >
          {course.sections.map((part, i) => (
            <article key={part.title}>
              <span className={s.bigNumber}>0{i + 1}</span>
              <div>
                <h3>{part.title}</h3>
                <p>{part.body}</p>
              </div>
            </article>
          ))}
        </div>
      </AdultSection>
      <AdultSection id="practice">
        <AdultHeading
          eyebrow={
            beginner || intermediate
              ? "From learning to using"
              : "A plan built together"
          }
          title={
            beginner
              ? "Small exchanges. Real progress."
              : intermediate
                ? "Put your Russian to work."
                : "Turn an intention into a lesson."
          }
        >
          {beginner || intermediate
            ? "These examples show the kinds of activities a lesson can include. Your teacher adapts the work to your level and interests."
            : "Your current level shapes what is realistic. Agree the focus with your teacher, then develop it through practice and feedback."}
        </AdultHeading>
        <div className={s.rhythm}>
          {course.examples.map((part, i) => (
            <article key={part.title}>
              <span>0{i + 1}</span>
              <h3>{part.title}</h3>
              <p>{part.body}</p>
            </article>
          ))}
        </div>
        {beginner && (
          <div className={s.callout}>
            <h3>Room to try, repeat and ask.</h3>
            <p>
              Your teacher can slow down, explain a pattern another way or
              return to a sound that needs practice. Short guided exchanges help
              you use new language as you learn it.
            </p>
          </div>
        )}
        {!beginner && !intermediate && (
          <div className={s.callout}>
            <h3>Agree the scope before you start.</h3>
            <p>
              For professional or specialist interests, tell us the situations
              and topics you want to work on. The school will confirm whether it
              can support your goals. Use non-confidential examples for
              work-related practice.
            </p>
          </div>
        )}
      </AdultSection>
      <AdultSection id="between-lessons" wash>
        <div className={s.fitBand}>
          <div>
            <span className={s.eyebrow}>Practice between lessons</span>
            <h2>
              {beginner
                ? "Make the unfamiliar feel familiar."
                : "Keep the language in your week."}
            </h2>
          </div>
          <div>
            <p>{course.practice}</p>
            <p>
              Lesson content and extra exercises are shared by email, giving you
              material to return to in your own time.
            </p>
          </div>
        </div>
      </AdultSection>
      {intermediate && (
        <AdultSection id="next-step">
          <AdultHeading
            eyebrow="Where next?"
            title="Follow your interests—or work towards an exam."
          >
            Continue developing everyday Russian, focus on a personal goal or
            discuss private GCSE or A Level preparation. Exam tuition has
            separate rates and requires a suitable starting level.
          </AdultHeading>
          <div className={s.actions}>
            <AdultLink href={adultPaths.personalised}>
              Russian for Your Goals
            </AdultLink>
            <AdultLink href={`${adultPaths.main}#qualifications`}>
              GCSE and A Level for adults
            </AdultLink>
          </div>
        </AdultSection>
      )}
      <AdultSection id="questions">
        <div className={s.faqGrid}>
          <div>
            <span className={s.eyebrow}>Your questions</span>
            <h2>
              {beginner
                ? "Beginning with confidence."
                : intermediate
                  ? "Finding your next step."
                  : "Making the lessons your own."}
            </h2>
            <AdultLink href={`${adultPaths.main}#questions`}>
              General lesson questions
            </AdultLink>
            {!beginner && !intermediate && (
              <AdultLink href={`${adultPaths.main}#qualifications`}>
                GCSE and A Level for adults
              </AdultLink>
            )}
          </div>
          <AdultQuestions items={course.questions} />
        </div>
      </AdultSection>
      <div className={`${s.wrap} ${s.otherRoutes}`}>
        <span>Explore another starting point</span>
        {adultCourses
          .filter((x) => x.slug !== course.slug)
          .map((x) => (
            <AdultLink key={x.slug} href={`${adultPaths.main}/${x.slug}`}>
              {x.label}
            </AdultLink>
          ))}
      </div>
      <AdultStart focus={course.slug} />
    </div>
  );
}

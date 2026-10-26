import Link from "next/link";
import {
  examTuition,
  gbp,
  privateLengthsLabel,
} from "@/content/tuition-prices";
import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { StructuredData } from "@/components/seo/structured-data";
import {
  adultCourses,
  adultPaths,
  adultQuestions,
} from "@/content/adults-content";
import { VOLNA_IMAGES } from "@/lib/volna-images";
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

export function AdultsPage() {
  return (
    <div className={s.page}>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: adultQuestions.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: { "@type": "Answer", text: q.answer },
          })),
        }}
      />
      <section className={`${s.section} ${s.hero}`}>
        <div className={s.wrap}>
          <AdultBreadcrumb />
          <div className={s.heroGrid}>
            <div>
              <span className={s.eyebrow}>
                Online Russian for adults · One-to-one tuition
              </span>
              <h1>Russian for the life you lead.</h1>
              <p className={s.intro}>
                Start a new language, return to an old interest or find more
                confidence in the Russian you know. Personal lessons bring
                structure to your learning, with room for your own pace and
                priorities.
              </p>
              <div className={s.actions}>
                <ButtonLink href={adultPaths.trial}>
                  Request a free trial
                </ButtonLink>
                <AdultLink href="#courses">Find your starting point</AdultLink>
              </div>
              <dl className={s.facts}>
                <div>
                  <dt>One to one</dt>
                  <dd>Your teacher’s full attention</dd>
                </div>
                <div>
                  <dt>Flexible times</dt>
                  <dd>Agreed with your teacher</dd>
                </div>
                <div>
                  <dt>£35 / hour</dt>
                  <dd>General Russian tuition</dd>
                </div>
              </dl>
            </div>
            <div className={s.heroImage}>
              <ApprovedImage
                image={VOLNA_IMAGES.courses.adults.hero}
                priority
                sizes="(min-width: 1000px) 480px, (min-width: 768px) 45vw, 100vw"
              />
              <span className={s.imageLabel}>
                Beginner, intermediate and goal-focused lessons.
              </span>
            </div>
          </div>
        </div>
      </section>
      <AdultNav
        items={[
          { id: "courses", label: "Find your course" },
          { id: "learning", label: "Learning" },
          { id: "prices", label: "Fees & times" },
          { id: "qualifications", label: "GCSE & A Level" },
          { id: "first-lesson", label: "Your first lesson" },
          { id: "questions", label: "Questions" },
        ]}
      />
      <AdultSection id="courses" aliases={["study-options", "overview"]}>
        <AdultHeading
          eyebrow="Find your starting point"
          title="Where would you like to begin?"
        >
          Beginner and intermediate describe your starting level. Russian for
          Your Goals can suit either: the lessons focus on a particular purpose.
          All three options are one-to-one tuition.
        </AdultHeading>
        <div className={s.choiceGuide}>
          <h3>Which starting point fits?</h3>
          <p>
            <strong>Little or no Russian?</strong>{" "}
            <Link className={s.guideLink} href={adultPaths.beginner}>
              Begin with the foundations.
            </Link>
          </p>
          <p>
            <strong>Already handling simple exchanges?</strong>{" "}
            <Link className={s.guideLink} href={adultPaths.intermediate}>
              Explore intermediate lessons.
            </Link>
          </p>
          <p>
            <strong>A particular situation to prepare for?</strong>{" "}
            <Link className={s.guideLink} href={adultPaths.personalised}>
              Choose your goals
            </Link>
            , at a level agreed with your teacher.
          </p>
        </div>
        <div className={s.routeCards}>
          {adultCourses.map((course, i) => (
            <article key={course.slug}>
              <span className={s.bigNumber}>0{i + 1}</span>
              <h3>{course.label}</h3>
              <p>{course.summary}</p>
              <AdultLink href={`${adultPaths.main}/${course.slug}`}>
                Explore{" "}
                {course.short === "Your goals"
                  ? "goal-focused lessons"
                  : `${course.short.toLowerCase()} lessons`}
              </AdultLink>
            </article>
          ))}
        </div>
      </AdultSection>
      <AdultSection id="learning" wash>
        <div className={s.learningGrid}>
          <div className={s.learningImage}>
            <ApprovedImage
              image={VOLNA_IMAGES.courseDetails["adult-conversation"]}
              sizes="(min-width: 900px) 480px, 100vw"
            />
          </div>
          <div>
            <span className={s.eyebrow}>Learning shaped around you</span>
            <h2>A conversation. A correction. A step forward.</h2>
            <p className={s.intro}>
              Useful language and clear explanations belong together. Your
              teacher connects the skills you are building to the situations
              where you want to use them.
            </p>
            <div className={s.editorialList}>
              <article>
                <h3>Start with what you know</h3>
                <p>
                  You might understand family conversations but struggle to
                  reply, or remember grammar from years ago. Your lessons can
                  build from that uneven starting point.
                </p>
              </article>
              <article>
                <h3>Use Russian with a purpose</h3>
                <p>
                  Listen, discuss, read and write around meaningful topics.
                  Grammar and pronunciation help you communicate more clearly.
                </p>
              </article>
              <article>
                <h3>Keep learning between lessons</h3>
                <p>
                  Revisit vocabulary and practise with follow-up exercises.
                  Feedback gives you something specific to work on next.
                </p>
              </article>
            </div>
            <AdultLink href="/about-us">Meet the school</AdultLink>
          </div>
        </div>
      </AdultSection>
      <AdultSection id="prices" aliases={["calendar"]}>
        <AdultHeading
          eyebrow="Lesson lengths and prices"
          title="Lesson lengths, fees and scheduling"
        >
          The same general Russian rates apply to beginner, intermediate and
          goal-focused lessons. Days and times are agreed around your
          availability and your teacher’s schedule.
        </AdultHeading>
        <div className={s.lessonPrices}>
          {[
            {
              time: "30 minutes",
              price: "£20",
              note: "A shorter session for focused practice.",
            },
            {
              time: "60 minutes",
              price: "£35",
              note: "Time to explore, practise and review.",
            },
            {
              time: "90 minutes",
              price: "£50",
              note: "More space for extended work.",
            },
          ].map((p) => (
            <article key={p.time}>
              <h3>{p.time}</h3>
              <strong>{p.price}</strong>
              <p>{p.note}</p>
              <span>per private lesson</span>
            </article>
          ))}
        </div>
        <div className={s.practicalInfo}>
          <div className={s.practicalRow}>
            <h3>Online and one to one</h3>
            <p>
              Lessons take place on Microsoft Teams or Zoom. We confirm the
              platform and joining details before you start. Agreed lesson times
              use UK local time (GMT/BST).
            </p>
          </div>
          <div className={s.practicalRow}>
            <h3>Term time and holidays</h3>
            <div>
              <p>
                You can enquire throughout the year. Private lessons may
                continue during school holidays by agreement, subject to teacher
                availability.
              </p>
              <AdultLink href="/term-dates">
                View school holiday dates
              </AdultLink>
            </div>
          </div>
        </div>
        <details className={s.payment}>
          <summary>Payment and joining a course</summary>
          <p>
            After your free trial, if you decide to continue, we’ll confirm the
            course and lesson arrangements. Invoices are sent on the first day of each
            month for lessons taught in the previous month. Pay by card or bank
            transfer.
          </p>
          <AdultLink href="/refund-policy">
            Payment, absence and refund terms
          </AdultLink>
        </details>
      </AdultSection>
      <AdultSection id="qualifications" wash>
        <AdultHeading
          eyebrow="GCSE and A Level for adults"
          title="GCSE and A Level tuition for adults"
        >
          Adults can prepare through private tuition. Your current Russian and
          intended exam year help us recommend a suitable plan. Exam preparation
          uses the separate rates below.
        </AdultHeading>
        <div className={s.examRoutes}>
          {[
            {
              name: "GCSE Russian",
              rate: gbp(examTuition.gcse.privateHour),
              other: privateLengthsLabel(examTuition.gcse),
              route: "/gcse-courses",
              key: "gcse",
              body: "Develop language accuracy and practise the listening, speaking, reading and writing tasks.",
            },
            {
              name: "A Level Russian",
              rate: gbp(examTuition.alevel.privateHour),
              other: privateLengthsLabel(examTuition.alevel),
              route: "/a-level-courses",
              key: "alevel",
              body: "Build advanced language, analytical essays and discussion through the taught text, film and cultural themes.",
            },
          ].map((exam) => (
            <article key={exam.key}>
              <span className={s.eyebrow}>Private exam tuition</span>
              <h3>{exam.name}</h3>
              <p>{exam.body}</p>
              <div className={s.price}>
                <strong>
                  {exam.rate}
                  <span> / hour</span>
                </strong>
                <span>{exam.other}</span>
              </div>
              <div className={s.actions}>
                <AdultLink href={exam.route}>Explore {exam.name}</AdultLink>
                <AdultLink
                  href={`/registration?course=${exam.key}&format=private&for=self`}
                >
                  Request {exam.key === "gcse" ? "a GCSE" : "an A Level"}{" "}
                  private trial
                </AdultLink>
              </div>
            </article>
          ))}
        </div>
        <p className={s.examNote}>
          Tuition excludes optional mock exams and official exam-entry fees.
          Entry is arranged separately through a school or exam centre. The
          qualification pages explain the curriculum, assessment and current
          exam dates.
        </p>
      </AdultSection>
      <AdultSection id="first-lesson">
        <AdultHeading
          eyebrow="A first step, without the guesswork"
          title="Start with a free trial."
        >
          You do not need to choose a perfect course before getting in touch.
        </AdultHeading>
        <div className={s.rhythm}>
          <article>
            <span>01 · Share your goals</span>
            <h3>Tell us what brings you here</h3>
            <p>
              Let us know your experience, what you want to learn and the days
              or times that could work.
            </p>
          </article>
          <article>
            <span>02 · Meet your teacher</span>
            <h3>Try a lesson</h3>
            <p>
              Discuss your starting point and experience the teaching before
              deciding how to continue.
            </p>
          </article>
          <article>
            <span>03 · Agree a plan</span>
            <h3>Choose a manageable rhythm</h3>
            <p>
              Review the recommended focus, lesson length and schedule before
              arranging paid tuition.
            </p>
          </article>
        </div>
      </AdultSection>
      <AdultSection id="questions" aliases={["faq"]} wash>
        <div className={s.faqGrid}>
          <div>
            <span className={s.eyebrow}>Practical questions</span>
            <h2>Before your first lesson.</h2>
            <p className={s.intro}>A few details to help you get started.</p>
          </div>
          <AdultQuestions items={adultQuestions} />
        </div>
      </AdultSection>
      <AdultStart />
    </div>
  );
}

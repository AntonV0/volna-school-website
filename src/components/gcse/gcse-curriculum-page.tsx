import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import {
  gcsePaths,
  gcseSkills,
  gcseSources,
  gcseThemes,
} from "@/content/gcse-content";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import {
  GcseBreadcrumb,
  GcseHeading,
  GcseLink,
  GcseNav,
  GcseSection,
  GcseStart,
} from "./gcse-shared";
import s from "./gcse.module.css";

export function GcseCurriculumPage() {
  return (
    <div className={s.page}>
      <section className={`${s.section} ${s.hero}`}>
        <div className={s.wrap}>
          <GcseBreadcrumb current="Curriculum" />
          <div className={s.heroGrid}>
            <div>
              <span className={s.eyebrow}>
                GCSE Russian · What you’ll learn
              </span>
              <h1>
                Stronger language.
                <br />
                More assured answers.
              </h1>
              <p className={s.intro}>
                Develop the vocabulary, accuracy and confidence to move between
                conversation, comprehension and written work. Our courses
                prepare students for Pearson Edexcel GCSE Russian, Higher Tier
                (1RU0).
              </p>
              <div className={s.actions}>
                <ButtonLink href={gcsePaths.trial}>
                  Request a free trial
                </ButtonLink>
                <GcseLink href={`${gcsePaths.main}#course-options`}>
                  Compare courses
                </GcseLink>
              </div>
            </div>
            <div className={s.heroImage}>
              <ApprovedImage
                image={VOLNA_IMAGES.courses.gcse.studyOptions[0]}
                priority
                sizes="(min-width: 1000px) 480px, (min-width: 768px) 45vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>
      <GcseNav
        items={[
          { id: "skills", label: "Language skills" },
          { id: "themes", label: "Themes" },
          { id: "study-rhythm", label: "Study & practice" },
        ]}
      />
      <GcseSection id="skills">
        <GcseHeading
          eyebrow="Four connected skills"
          title="Understand. Respond. Express."
        >
          Language skills reinforce each other: what students hear and read
          gives them more to say and write.
        </GcseHeading>
        <div className={s.skillsGrid}>
          {gcseSkills.map((skill, index) => (
            <article key={skill.title}>
              <span className={s.bigNumber}>0{index + 1}</span>
              <div>
                <h3>{skill.title}</h3>
                <p>{skill.body}</p>
                <p className={s.practice}>{skill.practice}</p>
              </div>
            </article>
          ))}
        </div>
        <div className={s.callout}>
          <h3>Accuracy runs through every skill.</h3>
          <p>
            Vocabulary and grammar are practised in context: choosing the right
            word, controlling tense and case, linking ideas and checking a
            translation. The aim is to make a clearer answer, not simply recall
            a rule.
          </p>
        </div>
      </GcseSection>
      <GcseSection id="themes" wash>
        <div className={s.faqGrid}>
          <div>
            <span className={s.eyebrow}>The subject matter</span>
            <h2>
              Familiar topics.
              <br />
              Wider perspectives.
            </h2>
            <p className={s.intro}>
              The specification brings language into everyday, cultural and
              global contexts. Students explore these themes in relation to
              their own lives and Russian-speaking communities.
            </p>
            <GcseLink href={gcseSources.specification}>
              Pearson specification (PDF)
            </GcseLink>
          </div>
          <div className={s.themes}>
            {gcseThemes.map((theme, index) => (
              <details key={theme.title}>
                <summary>
                  <span className={s.themeNumber}>0{index + 1}</span>
                  <span>
                    <strong>{theme.title}</strong>
                    <small>{theme.description}</small>
                  </span>
                </summary>
                <p>{theme.body}</p>
              </details>
            ))}
          </div>
        </div>
      </GcseSection>
      <GcseSection id="study-rhythm">
        <GcseHeading
          eyebrow="From lesson to independent work"
          title="Learn it. Use it. Revisit it."
        >
          Regular practice and specific feedback connect the work in class to
          the next step.
        </GcseHeading>
        <div className={s.rhythm}>
          <article>
            <span>In the lesson</span>
            <h3>Build and apply</h3>
            <p>
              Explore a topic, work with new language and practise using it in
              spoken and written tasks.
            </p>
          </article>
          <article>
            <span>Between lessons</span>
            <h3>Practise independently</h3>
            <p>
              Complete weekly homework, revisit vocabulary and use the teacher’s
              corrections to strengthen an answer. Lesson materials and homework
              are shared digitally before or after lessons.
            </p>
          </article>
          <article>
            <span>As the exam approaches</span>
            <h3>Refine under time limits</h3>
            <p>
              Use exam-style practice and optional mocks to identify priorities
              for revision.
            </p>
          </article>
        </div>
        <div className={s.pace}>
          <div>
            <span className={s.eyebrow}>Choosing your pace</span>
            <h3>One qualification, two group routes.</h3>
          </div>
          <div>
            <p>
              The one-year course concentrates preparation into a single
              academic year for students with a suitable foundation. The
              two-year course gives more time to develop language and work
              through the content. Both prepare for the same qualification; the
              trial helps us recommend a starting point.
            </p>
            <GcseLink href={`${gcsePaths.main}#course-options`}>
              Compare timetables and fees
            </GcseLink>
          </div>
        </div>
        <div className={s.related}>
          <div>
            <h3>How is the learning assessed?</h3>
            <p>
              See the four papers, mock exam arrangements and official exam
              dates.
            </p>
          </div>
          <GcseLink href={gcsePaths.exams}>Explore the exam guide</GcseLink>
        </div>
      </GcseSection>
      <div className={`${s.wrap} ${s.nextStep}`}>
        <span>Looking beyond GCSE?</span>
        <GcseLink href="/a-level-courses">Explore A Level Russian</GcseLink>
      </div>
      <GcseStart compact />
    </div>
  );
}

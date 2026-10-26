import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { gcsePaths, gcseSources, gcseThemes } from "@/content/gcse-content";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import { GcseBreadcrumb, GcseHeading, GcseLink, GcseNav, GcseSection } from "./gcse-shared";
import s from "./gcse.module.css";
import c from "./gcse-curriculum.module.css";

const skills = [
  { title: "Listening", body: "Students learn to follow spoken Russian, identifying key details, opinions and overall meaning.", practice: "Students work with conversations and longer recordings across the GCSE themes." },
  { title: "Speaking", body: "Students learn to express opinions, explain their ideas and respond to questions in Russian.", practice: "Role plays, picture-based discussions and conversations help students develop fuller responses." },
  { title: "Reading", body: "Students learn to understand different texts, finding relevant details and recognising opinions and meaning in context.", practice: "Students answer comprehension questions and translate passages from Russian into English." },
  { title: "Writing", body: "Students learn to organise their ideas and write clearly in Russian, describing experiences and expressing viewpoints.", practice: "Students write extended responses, address every part of a question and translate from English into Russian." },
];

const topicExamples = [
  ["Family, friendships and role models", "Daily routines, food, shopping and technology", "Celebrations, music, sport, film and reading"],
  ["Holiday experiences and plans", "Travel, accommodation, directions and dealing with problems", "Local places, weather and things to do"],
  ["School subjects, routines and rules", "School pressures and achievements", "Trips, events and exchanges"],
  ["Further study and training", "Jobs, careers and volunteering", "Using languages for relationships, travel and work"],
  ["International sporting and music events", "Campaigns and good causes", "Environmental issues and everyday choices"],
];

function CurriculumIcon({ name }: { name: string }) {
  return (
    <svg aria-hidden="true" focusable="false" width="28" height="28" viewBox="0 0 32 32">
      <use href={`/images/icons/gcse-skills-detailed.svg#${name.toLowerCase()}`} />
    </svg>
  );
}

export function GcseCurriculumPage() {
  return (
    <div className={`${s.page} ${s.curriculumPage} ${c.page}`}>
      <section className={`${s.section} ${s.hero}`}>
        <div className={s.wrap}>
          <GcseBreadcrumb current="Curriculum" />
          <div className={c.heroGrid}>
            <div>
              <span className={s.eyebrow}>Pearson Edexcel · Higher Tier · 1RU0</span>
              <h1>What students learn in GCSE Russian.</h1>
              <p className={s.intro}>
                Students develop listening, speaking, reading and writing through
                the five GCSE themes. Vocabulary and grammar are taught alongside
                practical tasks, helping students use Russian confidently and accurately.
              </p>
              <div className={`${s.actions} ${c.actions}`}>
                <ButtonLink variant="exam" href={gcsePaths.trial}>Request a free trial lesson</ButtonLink>
                <ButtonLink variant="examSecondary" href={`${gcsePaths.main}#course-options`}>
                  Compare courses &amp; fees
                </ButtonLink>
              </div>
            </div>
            <div className={c.heroImage}>
              <ApprovedImage image={VOLNA_IMAGES.courses.gcse.studyOptions[0]} priority
                sizes="(min-width: 1320px) 590px, (min-width: 768px) 44vw, calc(100vw - 40px)" />
            </div>
          </div>
        </div>
      </section>
      <GcseNav items={[
        { id: "skills", label: "Language skills" },
        { id: "themes", label: "Themes" },
        { id: "vocabulary-grammar", label: "Vocabulary & grammar" },
      ]} />
      <GcseSection id="skills">
        <GcseHeading title="Building the skills for GCSE Russian.">
          Students learn to understand more, express their ideas clearly and
          communicate with greater accuracy. Lessons connect new language with
          practical tasks across the GCSE themes.
        </GcseHeading>
        <div className={`${s.skillsGrid} ${c.skillCards}`}>
          {skills.map((skill) => (
            <article key={skill.title}>
              <span className={s.bigNumber} aria-hidden="true"><CurriculumIcon name={skill.title} /></span>
              <div>
                <h3>{skill.title}</h3>
                <p>{skill.body}</p>
                <p className={`${s.practice} ${c.skillPractice}`}>
                  <span className={c.practiceLabel}>In practice</span>
                  {skill.practice}
                </p>
              </div>
            </article>
          ))}
        </div>
      </GcseSection>
      <GcseSection id="themes" wash>
        <div className={`${s.faqGrid} ${c.themesGrid}`}>
          <div>
            <span className={s.eyebrow}>Topics students explore</span>
            <h2>The five GCSE Russian themes.</h2>
            <p className={s.intro}>
              Students develop their Russian through five themes, from everyday life
              to wider global issues. Each provides topics for listening, speaking,
              reading and writing.
            </p>
            <GcseLink href={gcseSources.specification} ariaLabel="Pearson specification (PDF, opens in a new tab)">
              Pearson specification (PDF)
            </GcseLink>
          </div>
          <div className={`${s.themes} ${c.themeAccordion}`}>
            <p className={c.themeCue}>Select a theme to see example topics.</p>
            {gcseThemes.map((theme, index) => (
              <details key={theme.title}>
                <summary>
                  <span className={c.themeIcon} aria-hidden="true">
                    <CurriculumIcon name={["identity", "travel", "school", "future", "global"][index]} />
                  </span>
                  <span><strong>{theme.title}</strong><small>{theme.description}</small></span>
                  <svg className={c.expandControl} aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14" />
                    <path className={c.expandVertical} d="M12 5v14" />
                  </svg>
                </summary>
                <ul className={c.topicList}>
                  {topicExamples[index].map((topic) => <li key={topic}>{topic}</li>)}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </GcseSection>
      <GcseSection id="vocabulary-grammar" aliases={["study-rhythm"]}>
        <GcseHeading title="Developing accurate Russian.">
          Students build the language knowledge to communicate clearly, form
          accurate sentences and improve their own work.
        </GcseHeading>
        <div className={`${s.rhythm} ${c.grammarRows}`}>
          <article>
            <h3><span className={c.grammarIcon}><CurriculumIcon name="vocabulary" /></span>Vocabulary in context</h3>
            <p>Students learn topic vocabulary as useful phrases and expressions,
              building an understanding of how words work together.</p>
          </article>
          <article>
            <h3><span className={c.grammarIcon}><CurriculumIcon name="grammar" /></span>Grammar and sentence structure</h3>
            <p>Students learn to describe past, present and future events, use word
              endings and connect ideas. Each explanation is followed by tasks
              that apply the grammar.</p>
          </article>
          <article>
            <h3><span className={c.grammarIcon}><CurriculumIcon name="review" /></span>Checking and improving work</h3>
            <p>Students review their writing and translations, identifying errors
              in vocabulary, endings and sentence structure. Teacher corrections explain
              what to change and why.</p>
          </article>
        </div>
      </GcseSection>
      <GcseSection id="next-steps">
        <div className={`${s.exploreMore} ${c.continueExploring}`}>
          <div>
            <span>Continue exploring</span>
            <div>
              <GcseLink href={`${gcsePaths.main}#course-options`}>Courses &amp; fees</GcseLink>
              <GcseLink href={gcsePaths.exams}>Exam guide</GcseLink>
              <GcseLink href={gcsePaths.resources}>Exam resources</GcseLink>
            </div>
          </div>
        </div>
        <div className={c.start}>
          <div>
            <span className={s.eyebrow}>Your next step</span>
            <h2>Find the right GCSE course.</h2>
            <p>Complete the registration form and we’ll contact you to discuss the
              student’s Russian, recommend a course and arrange a free trial lesson.</p>
          </div>
          <ButtonLink variant="exam" href={gcsePaths.trial}>Request a free trial lesson</ButtonLink>
        </div>
      </GcseSection>
    </div>
  );
}

import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import {
  alevelPaths,
  alevelSources,
  alevelThemes,
} from "@/content/alevel-content";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import {
  ALevelBreadcrumb,
  ALevelHeading,
  ALevelLink,
  ALevelNav,
  ALevelSection,
  ALevelStart,
} from "./alevel-shared";
import s from "./alevel.module.css";

export function ALevelCurriculumPage() {
  return (
    <div className={s.page}>
      <section className={`${s.section} ${s.hero}`}>
        <div className={s.wrap}>
          <ALevelBreadcrumb current="Curriculum" />
          <div className={s.heroGrid}>
            <div>
              <span className={s.eyebrow}>
                A Level Russian · What you’ll learn
              </span>
              <h1>A language for ideas.</h1>
              <p className={s.intro}>
                Read closely. Question an interpretation. Make a case of your
                own. Our Pearson Edexcel A Level course brings advanced Russian
                together with literature, film and the wider world.
              </p>
              <div className={s.actions}>
                <ButtonLink href={alevelPaths.trial}>
                  Request a free trial
                </ButtonLink>
                <ALevelLink href={`${alevelPaths.main}#course-options`}>
                  Compare courses
                </ALevelLink>
              </div>
            </div>
            <div className={s.heroImage}>
              <ApprovedImage
                image={VOLNA_IMAGES.courses.alevel.studyOptions[0]}
                priority
                sizes="(min-width: 1000px) 480px, (min-width: 768px) 45vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>
      <ALevelNav
        items={[
          { id: "language", label: "Language & argument" },
          { id: "themes", label: "Themes" },
          { id: "works", label: "Literature & film" },
          { id: "research", label: "Research" },
          { id: "study", label: "Independent study" },
        ]}
      />
      <ALevelSection id="language">
        <ALevelHeading
          eyebrow="Beyond conversational fluency"
          title="Make your meaning precise."
        >
          A strong answer needs both a worthwhile idea and the language to
          express it. We develop the two together.
        </ALevelHeading>
        <div className={s.rhythm}>
          <article>
            <span>Understand</span>
            <h3>Read and listen critically</h3>
            <p>
              Identify a viewpoint, notice supporting detail and distinguish
              what a source says from your own interpretation.
            </p>
          </article>
          <article>
            <span>Express</span>
            <h3>Build a persuasive answer</h3>
            <p>
              Organise a discussion or essay around a clear argument. Use
              examples with purpose and explain how they support your
              conclusion.
            </p>
          </article>
          <article>
            <span>Refine</span>
            <h3>Choose language carefully</h3>
            <p>
              Extend vocabulary, control grammar and translate with attention to
              meaning, tone and natural expression.
            </p>
          </article>
        </div>
      </ALevelSection>
      <ALevelSection id="themes" wash>
        <div className={s.faqGrid}>
          <div>
            <span className={s.eyebrow}>Society, culture and history</span>
            <h2>
              Four themes.
              <br />
              Many perspectives.
            </h2>
            <p className={s.intro}>
              Topics give language a context and students something meaningful
              to discuss.
            </p>
            <ALevelLink href={alevelSources.specification}>
              Pearson specification (PDF)
            </ALevelLink>
          </div>
          <div className={s.themes}>
            {alevelThemes.map((theme, i) => (
              <details key={theme.title}>
                <summary>
                  <span className={s.themeNumber}>0{i + 1}</span>
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
      </ALevelSection>
      <ALevelSection id="works">
        <ALevelHeading
          eyebrow="Literature & film"
          title="Two works. A closer look."
        >
          Our group courses study one literary text and one film. Students learn
          to move from recounting events to analysing how a work creates
          meaning.
        </ALevelHeading>
        <div className={s.works}>
          <article>
            <div className={s.workArt} aria-hidden="true">
              <span>А. С. Пушкин</span>
              <strong>
                Пиковая
                <br />
                дама
              </strong>
              <span>1834 · Literature</span>
            </div>
            <div className={s.workBody}>
              <span className={s.eyebrow}>Alexander Pushkin</span>
              <h3>The Queen of Spades</h3>
              <p>
                A pursuit of gambling riches becomes an obsession. Explore how
                Pushkin connects ambition, greed and the supernatural,
                supporting your interpretation with close reference to the text.
              </p>
              <p className={s.practice}>
                From an observation about a passage to an argument about the
                whole work.
              </p>
            </div>
          </article>
          <article>
            <div className={`${s.workArt} ${s.filmArt}`} aria-hidden="true">
              <span>Сергей Бодров</span>
              <strong>
                Кавказский
                <br />
                пленник
              </strong>
              <span>1996 · Film</span>
            </div>
            <div className={s.workBody}>
              <span className={s.eyebrow}>Sergei Bodrov</span>
              <h3>The Caucasian Prisoner</h3>
              <p>
                Two Russian soldiers are held captive in a mountain village.
                Explore how Bodrov portrays conflict, compassion and
                relationships across enemy lines, using scenes to support your
                interpretation.
              </p>
              <p className={s.practice}>
                From describing what happens on screen to explaining its
                significance.
              </p>
            </div>
          </article>
        </div>
        <div className={s.callout}>
          <h3>Getting the book and film</h3>
          <p>
            You can buy a copy of The Queen of Spades. The Caucasian Prisoner is
            provided for students. Your teacher explains the arrangements during
            live lessons.
          </p>
        </div>
        <div className={s.actions}>
          <ALevelLink href={alevelPaths.privateTrial}>
            Ask about private support with the text or film
          </ALevelLink>
        </div>
      </ALevelSection>
      <ALevelSection id="research" wash>
        <ALevelHeading
          eyebrow="Independent Research Project · IRP"
          title="A question of your own."
        >
          An opportunity to investigate a personal interest connected to
          Russian-speaking society or culture.
        </ALevelHeading>
        <ol className={s.researchSteps}>
          <li>
            <span>01</span>
            <div>
              <h3>Define a focus</h3>
              <p>
                Develop your own research question. Your teacher can advise on
                suitability and research methods.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Investigate independently</h3>
              <p>
                Read sources, compare evidence and form your own conclusions.
                Keep clear records of where information comes from.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Explain your findings</h3>
              <p>
                Present and discuss the research in the speaking assessment,
                showing understanding of the sources and your own perspective.
              </p>
            </div>
          </li>
        </ol>
        <div className={s.callout}>
          <h3>Guidance that preserves independence</h3>
          <p>
            We teach research skills and offer general guidance on an
            appropriate topic. The assessed research remains the student’s own
            work; teachers do not rehearse or give improvement feedback on the
            assessed presentation.
          </p>
          <ALevelLink href={`${alevelPaths.exams}#speaking`}>
            Speaking assessment and paperwork
          </ALevelLink>
        </div>
      </ALevelSection>
      <ALevelSection id="study">
        <div className={s.pace}>
          <div>
            <span className={s.eyebrow}>Between lessons</span>
            <h2>Make room for independent study.</h2>
          </div>
          <div>
            <p>
              Read the set text, revisit lesson notes, complete weekly homework
              and prepare ideas for discussion. Digital materials help students
              keep track of the work.
            </p>
            <p>
              Essay feedback becomes a practical next step: sharpen a point,
              improve the evidence or correct recurring language errors. Regular
              study matters on both course routes.
            </p>
            <ALevelLink href={`${alevelPaths.main}#course-options`}>
              Compare the one- and two-year courses
            </ALevelLink>
          </div>
        </div>
        <div className={s.related}>
          <div>
            <h3>See how it is assessed</h3>
            <p>Paper formats, mock exams and official entry arrangements.</p>
          </div>
          <ALevelLink href={alevelPaths.exams}>Open the exam guide</ALevelLink>
        </div>
      </ALevelSection>
      <ALevelStart compact />
    </div>
  );
}

import { AnimatedDisclosure } from "./animated-disclosure";
import { FoundationRoute } from "./foundation-route";
import { CourseCards } from "./course-cards";
import { ViewportIndicator } from "@/components/dev/viewport-indicator";
import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { StructuredData } from "@/components/seo/structured-data";
import {
  gcsePaths,
  gcseQuestions,
  gcseJoiningQuestions,
  gcseQualificationQuestions,
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
    <div className={`${s.page} ${s.overviewPage}`}>
      {process.env.NODE_ENV !== "production" && <ViewportIndicator />}
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
            <div className={s.heroCopy}>
              <span className={s.eyebrow}>
                Pearson Edexcel · Higher Tier · 1RU0
              </span>
              <h1>Turn Russian language skills into a qualification</h1>
              <p className={s.intro}>
                For students with a foundation in Russian who are ready to
                develop their skills through clear goals, regular practice and
                focused exam preparation.
              </p>
              <p className={s.studyFormat}>
                <span>Ways to study</span>
                <span className={s.studyFormatValue}>
                  <span>Online group courses</span>
                  <span className={s.studyFormatSeparator} aria-hidden="true">
                    •
                  </span>
                  <span>1-to-1 private tuition</span>
                </span>
              </p>
              <div className={s.actions}>
                <ButtonLink variant="exam" href={gcsePaths.trial}>
                  Request a free trial lesson
                </ButtonLink>
                <ButtonLink variant="examSecondary" href="#course-options">
                  Compare courses &amp; fees
                </ButtonLink>
              </div>
            </div>
            <div className={s.heroImage}>
              <ApprovedImage
                image={VOLNA_IMAGES.courses.gcse.hero}
                priority
                quality={90}
                sizes="(min-width: 1200px) 820px, (min-width: 1000px) 660px, (min-width: 768px) 55vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>
      <GcseNav
        items={[
          { id: "results", label: "Results" },
          { id: "why-gcse-russian", label: "Why GCSE?" },
          { id: "course-options", label: "Courses & fees" },
          { id: "learning", label: "Learning" },
          { id: "exam-support", label: "Exam support" },
          { id: "questions", label: "Questions" },
        ]}
      />
      <section id="results" className={s.proof} aria-labelledby="gcse-results-heading">
        <div className={s.wrap}>
          <div className={s.resultsSummary}>
            <span className={`${s.eyebrow} ${s.resultsEyebrow}`}>
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
                <path d="M8 6H5v1a3 3 0 0 0 3 3" />
                <path d="M16 6h3v1a3 3 0 0 1-3 3" />
                <path d="M12 12v4" />
                <path d="M9 20h6" />
                <path d="M10 16h4l1 4h-6l1-4Z" />
              </svg>
              GCSE Russian results
            </span>
            <h2 id="gcse-results-heading" className={s.resultsHeading}>
              100% achieved Grade 8 or 9
            </h2>
            <p>
              Across results from 2021–2026, every Volna GCSE student achieved at least
              Grade 8.
            </p>
          </div>
          <dl className={s.resultsGrid}>
            <div>
              <dt>Summer 2026</dt>
              <dd><span>100% Grade 9</span></dd>
            </div>
            <div>
              <dt>Summer 2025</dt>
              <dd>
                <span>92% Grade 9</span>
                <span>8% Grade 8</span>
              </dd>
            </div>
            <div>
              <dt>Summer 2024</dt>
              <dd><span>100% Grade 9</span></dd>
            </div>
            <div>
              <dt>Summer 2023</dt>
              <dd>
                <span>80% Grade 9</span>
                <span>20% Grade 8</span>
              </dd>
            </div>
            <div>
              <dt>Summer 2022</dt>
              <dd>
                <span>75% Grade 9</span>
                <span>25% Grade 8</span>
              </dd>
            </div>
            <div>
              <dt>Summer 2021</dt>
              <dd><span>100% Grade 9</span></dd>
            </div>
          </dl>
        </div>
      </section>
      <GcseSection
        id="why-gcse-russian"
      >
        <div className={s.benefitsLayout}>
        <div className={s.benefitsIntro}>
          <h2>Why take GCSE Russian?</h2>
          <p>Speaking Russian at home does not always mean a student is equally
            confident reading and writing it. GCSE study helps bring these skills together.</p>
        </div>
        <div className={s.benefitsGrid}>
          <article>
            <svg className={s.benefitIcon} viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <rect x="13" y="6" width="38" height="46" rx="4" fill="var(--route-exam-soft)" stroke="currentColor" strokeWidth="2" />
              <path d="M18 14v-3h6m16 0h6v3M22 20h20M25 26h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="m27 44-2 14 7-4 7 4-2-14" fill="var(--brand-teal-soft)" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="32" cy="39" r="8" fill="var(--brand-teal)" stroke="currentColor" strokeWidth="1.5" />
              <path d="m28.5 39 2.5 2.5 4.5-5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
            <h3>Recognise their Russian skills</h3>
            <p>Gain formal recognition for the Russian students use at home or have
              learnt over time.</p>
            </div>
          </article>
          <article>
            <svg className={s.benefitIcon} viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <path d="M16 28v17c10 8 22 8 32 0V28" fill="var(--route-exam-soft)" stroke="currentColor" strokeWidth="2" />
              <path d="m6 23 26-12 26 12-26 12L6 23Z" fill="var(--brand-teal-soft)" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="m32 23 24 1v18M22 45c6 3 14 3 20 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="32" cy="23" r="2" fill="var(--brand-teal)" />
              <path d="m56 41-3 9h6l-3-9Z" fill="var(--brand-teal)" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <div>
            <h3>Strengthen their academic record</h3>
            <p>A strong result contributes to a student’s GCSE profile, which universities may
              consider alongside later qualifications.</p>
            <GcseLink href="#qualification-questions">How universities consider GCSEs</GcseLink>
            </div>
          </article>
          <article>
            <svg className={s.benefitIcon} viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <path d="M9 55V43h15V32h15V25h16v30H9Z" fill="var(--route-exam-soft)" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M39 26h15v28H39Z" fill="var(--brand-teal-soft)" />
              <path d="M24 44v10m15-21v21M8 55h49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="m12 31 17-17h-9m9 0v9" stroke="var(--brand-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="38" y="3" width="23" height="18" rx="4" fill="var(--brand-teal-soft)" stroke="currentColor" strokeWidth="1.5" />
              <path d="m42 16 4-9 4 9m-6.5-3h5" stroke="var(--brand-teal)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M55 7v6m-2.6-4.5 5.2 3m-5.2 0 5.2-3" stroke="var(--brand-teal)" strokeWidth="1.25" strokeLinecap="round" />
            </svg>
            <div>
            <h3>Build towards A level Russian</h3>
            <p>Students develop the reading, writing and grammar needed for further
              study, building a foundation for A level Russian.</p>
            <GcseLink href="/a-level-courses">Explore A level Russian</GcseLink>
            </div>
          </article>
        </div>
        </div>
      </GcseSection>
      <GcseSection
        id="course-options"
        aliases={["study-options", "prices", "calendar"]}
      >
        <GcseHeading
          title="Compare GCSE courses and fees"
        />
        <p className={s.courseQualification}>
          All courses prepare students for Pearson Edexcel GCSE Russian
          (1RU0), Higher Tier.
        </p>
        <CourseCards />
        <div className={s.groupAction}>
          <div>
            <h3>You can join our GCSE courses at any time</h3>
            <p>
              There is no need to wait for the next academic year to start.
              Students can join a suitable GCSE course during the year, or
              begin private tuition at a time that suits their schedule.
            </p>
          </div>
          <div className={s.groupActionButtons}>
            <ButtonLink href={gcsePaths.groupTrial} variant="exam">
              Try a group lesson
            </ButtonLink>
            <ButtonLink href={gcsePaths.privateTrial} variant="exam">
              Try private tuition
            </ButtonLink>
          </div>
        </div>
        <div className={s.practicalInfo}>
          <div className={s.practicalRow}>
            <h3>Additional costs</h3>
            <div>
              <p>
                Tuition prices exclude optional mock exams and official
                exam-entry fees. Your chosen school, college or exam centre
                sets the official entry fees.
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
              <GcseLink href="/term-dates?from=gcse">School holiday dates</GcseLink>
            </div>
          </div>
        </div>
        <AnimatedDisclosure className={s.payment}>
          <summary>Payment and joining a course</summary>
          <p>
            If you decide to continue after the trial, we’ll confirm the course
            and lesson arrangements.
            Invoices are sent on the first day of each month for lessons taught
            in the previous month. Pay by card or bank transfer.
          </p>
          <GcseLink href="/refund-policy">Payment and refund terms</GcseLink>
        </AnimatedDisclosure>
      </GcseSection>
      <GcseSection id="starting-point" aliases={["preparation"]}>
        <section
          className={s.gcsePathway}
          aria-labelledby="gcse-pathway-heading"
        >
          <div className={s.pathwayPreviewIntro}>
            <span className={s.eyebrow}>Not ready for GCSE Russian yet?</span>
            <h2 id="gcse-pathway-heading">Start with the right foundation</h2>
            <p>
              <span className={s.wideIntroCopy}>Our GCSE courses usually suit secondary school students who already
              speak, read and write Russian. For students who need to develop
              these skills, we offer writing support and Russian language
              foundations.</span>
              <span className={s.mobileIntroCopy}>Our GCSE courses usually suit secondary school students who already speak, read and write Russian. Students still developing these skills can prepare first.</span>
            </p>
          </div>
          <div className={s.pathwayPreviewSteps}>
            <FoundationRoute title="Build Russian writing skills" mobileTitle="Speaks Russian but needs writing support">
              <p>A short one-to-one course for students who speak Russian but need to build their writing skills. Reading develops alongside writing.</p>
              <strong className={s.pathwayFact}>Writing course: usually 1–2 months</strong>
              <GcseLink href="/classes-for-children/private-tuition#russian-writing-course">Russian writing course</GcseLink>
            </FoundationRoute>
            <FoundationRoute title="Russian as a Foreign Language (RFL)" mobileTitle="Starting Russian from the basics">
              <p>For students with little or no spoken Russian. Develop speaking, reading and writing before beginning GCSE preparation.</p>
              <strong className={s.pathwayFact}>For students aged 9+</strong>
              <div className={s.pathwayLinks}>
                <GcseLink href="/classes-for-children/russian-for-beginners#ages-9-plus">RFL group course</GcseLink>
                <GcseLink href="/classes-for-children/private-tuition#rfl-private-tuition">RFL private tuition</GcseLink>
              </div>
            </FoundationRoute>
          </div>
          <div className={s.pathwayPreviewAction}>
            <div>
              <h3>Not sure where to start?</h3>
              <p>Tell us the student’s age and experience with Russian. We’ll recommend suitable preparation before or alongside GCSE, depending on their needs.</p>
            </div>
            <ButtonLink variant="exam" href={gcsePaths.trial}>Discuss a starting point</ButtonLink>
          </div>
        </section>
      </GcseSection>
      <GcseSection id="learning" aliases={["overview", "learning-preview", "learning-combined-preview"]}>
        <div className={s.lessonPreview}>
          <div className={s.lessonPreviewHeader}>
            <span className={s.eyebrow}>Learning at Volna</span>
            <h2>What to expect from our GCSE lessons</h2>
            <p>
              <span className={s.wideIntroCopy}>Lessons combine clear explanations, guided practice and time to review answers together. Students learn how to apply what they know—and understand what to work on next.</span>
              <span className={s.mobileIntroCopy}>Teacher-led lessons, exam practice and individual feedback help students build their skills.</span>
            </p>
          </div>
          <div className={s.lessonPreviewBody}>
            <div className={s.lessonPreviewImage}>
              <ApprovedImage image={VOLNA_IMAGES.courses.gcse.studyOptions[2]} sizes="(min-width: 1320px) 490px, (min-width: 1024px) 38vw, 100vw" />
            </div>
            <div className={s.lessonPreviewPoints}>
              <article>
                <span className={s.lessonPreviewLabel}>During lessons</span>
                <h3>Develop Russian language skills</h3>
                <p>Students learn vocabulary through GCSE themes and practise grammar through clear examples. They apply what they learn in conversation and writing, expressing opinions and explaining their ideas.</p>
              </article>
              <article>
                <span className={s.lessonPreviewLabel}>Exam practice</span>
                <h3>Prepare for each exam task</h3>
                <p>Students work through past-paper questions and compare example answers to understand what makes a strong response. Speaking practice helps them move beyond short replies and develop their responses.</p>
              </article>
              <article>
                <span className={s.lessonPreviewLabel}>Between lessons</span>
                <h3>Build on each lesson</h3>
                <p>Writing, reading and listening homework reinforces the current topic. Individual corrections and teacher feedback help students understand their mistakes and identify what to practise next.</p>
              </article>
            </div>
          </div>
          <div className={s.lessonPreviewFooter}>
            <div><h3>See what the course covers</h3><p>Explore the GCSE themes, language skills, vocabulary and grammar.</p></div>
            <GcseLink href={gcsePaths.curriculum}>Explore the curriculum</GcseLink>
          </div>
        </div>
      </GcseSection>
      <section id="exam-support" className={s.examSupportPreview} aria-label="Exam support">
        <div className={s.wrap}>
          <h2>Prepare for the exams</h2>
          <p>
            Find out about optional mock exams, arranging official exam entry
            and accessing Pearson Edexcel practice materials.
          </p>
          <div>
            <article>
              <h3>Practise with a mock exam</h3>
              <p>
                We offer two optional online mock exams each year, with timed
                listening, reading and writing papers and marked feedback.
                Speaking mocks are offered separately as individual sessions.
              </p>
              <GcseLink href={`${gcsePaths.exams}#mock-exams`}>
                Mock exams and fees
              </GcseLink>
            </article>
            <article>
              <h3>Plan the official exam</h3>
              <p>
                We can advise on how and where to register. Families arrange
                exam entry directly with a school, college or exam centre;
                Volna cannot register students on their behalf.
              </p>
              <GcseLink href={gcsePaths.exams}>
                Read the exam guide
              </GcseLink>
            </article>
            <article>
              <h3>Use official exam resources</h3>
              <p>
                Browse links to official Pearson Edexcel past papers, mark schemes
                and listening audio in one place. Our GCSE Russian resources page
                is open to everyone, whether or not they study with Volna.
              </p>
              <GcseLink href={gcsePaths.resources}>View exam resources</GcseLink>
            </article>
          </div>
        </div>
      </section>
      <GcseSection id="questions" aliases={["faq"]} wash>
        <GcseHeading title="Your GCSE Russian questions" />
          <div className={s.faqGroups}>
            <div>
              <h3>Joining the course</h3>
              <GcseQuestions items={gcseJoiningQuestions} />
            </div>
            <div id="qualification-questions" className={s.anchorTarget}>
              <h3>Qualifications and wider benefits</h3>
              <GcseQuestions items={gcseQualificationQuestions} />
            </div>
          </div>
      </GcseSection>
      <nav className={s.exploreMore} aria-label="Explore GCSE">
        <div className={s.wrap}>
          <span>Continue exploring</span>
          <div>
            <GcseLink href={gcsePaths.curriculum}>
              Curriculum
            </GcseLink>
            <GcseLink href={gcsePaths.exams}>Exam guide</GcseLink>
            <GcseLink href={gcsePaths.resources}>Exam resources</GcseLink>
          </div>
        </div>
      </nav>
      <GcseStart />
    </div>
  );
}

import Link from "next/link";
import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { CourseLinkIcon } from "@/components/ui/course-link-icon";
import {
  aboutCourseRoutes,
  aboutMilestones,
  aboutPrinciples,
} from "@/content/about-editorial-content";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import { AboutEditorialNav } from "./about-editorial-nav";
import s from "./about-editorial.module.css";

const people = [
  {
    id: "elena",
    name: "Elena Vlasenko",
    role: "Headteacher",
    responsibility: "Leads the school’s teaching and educational approach.",
    image: VOLNA_IMAGES.staff.elena,
    framing: {
      objectPosition: "50% 50%",
      transform: "scale(1.7)",
      transformOrigin: "85% 4%",
    },
  },
  {
    id: "marina",
    name: "Marina Lucas",
    role: "GCSE and A Level Russian tutor",
    responsibility:
      "Teaches exam students, developing their Russian and exam technique.",
    image: VOLNA_IMAGES.staff.marina,
    framing: { objectPosition: "50% 18%" },
  },
  {
    id: "irina",
    name: "Irina Nogai",
    role: "Early-years Russian teacher",
    responsibility:
      "Introduces younger learners to Russian in early-years lessons.",
    image: VOLNA_IMAGES.staff.irina,
    framing: {
      objectPosition: "50% 38%",
      transform: "scale(1.08)",
      transformOrigin: "50% 40%",
    },
  },
  {
    id: "anton",
    name: "Anton Vlasenko",
    role: "School director",
    responsibility:
      "Looks after admissions and the day-to-day running of the school.",
    image: VOLNA_IMAGES.staff.anton,
    framing: {
      objectPosition: "50% 50%",
      transform: "scale(1.08)",
      transformOrigin: "50% 40%",
    },
  },
];

export function AboutEditorialPage() {
  return (
    <div className={s.page}>
      <section className={`${s.section} ${s.hero}`}>
        <div className={s.wrap}>
          <nav className={s.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About us</span>
          </nav>
          <div className={s.heroGrid}>
            <div>
              <span className={s.eyebrow}>About Volna School</span>
              <h1>A school built around language and people.</h1>
              <p className={s.intro}>
                Russian connects us to family, culture and new possibilities. At
                Volna, experienced teachers help children and adults make that
                connection their own, through live online lessons.
              </p>
              <div className={s.actions}>
                <ButtonLink href="/registration">
                  Request a free trial
                </ButtonLink>
                <a className={s.textLink} href="#team">
                  Meet our people <CourseLinkIcon href="#team" />
                </a>
              </div>
              <dl className={s.facts} id="proof">
                <div>
                  <dt>2009</dt>
                  <dd>Our teaching roots</dd>
                </div>
                <div>
                  <dt>2020</dt>
                  <dd>Volna’s online launch</dd>
                </div>
                <div>
                  <dt>Today</dt>
                  <dd>Children, exams and adults</dd>
                </div>
              </dl>
            </div>
            <figure className={s.heroFigure}>
              <div className={s.heroPhoto}>
                <ApprovedImage
                  image={VOLNA_IMAGES.about.hero}
                  priority
                  sizes="(min-width: 1000px) 560px, (min-width: 768px) 48vw, 100vw"
                />
              </div>
              <figcaption>
                <span>From our school archive</span> Pupils, families and
                teachers at Pushkin’s School in Bracknell, before our move
                online.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <AboutEditorialNav />

      <section className={s.section} id="welcome">
        <div className={`${s.wrap} ${s.welcome}`}>
          <figure className={s.headteacher}>
            <div>
              <ApprovedImage
                image={VOLNA_IMAGES.staff.elena}
                sizes="(min-width: 768px) 280px, 200px"
              />
            </div>
            <figcaption>
              <strong>Elena Vlasenko</strong>
              <span>Headteacher</span>
            </figcaption>
          </figure>
          <div>
            <span className={s.eyebrow}>A welcome from our headteacher</span>
            <h2>Experience in the classroom. Care for the individual.</h2>
            <div className={s.prose}>
              <p>
                Our school grew from years of teaching Russian in weekend
                classrooms. When we moved online in 2020, we brought that
                experience with us, along with the relationships and love of
                language that made those classrooms special.
              </p>
              <p>
                For some families, Russian is a link between generations. For
                other learners, it opens a door to a qualification, a new culture
                or conversations they have always wanted to have.
              </p>
              <p>
                Whatever brings you here, we want you to feel part of our school.
                We look forward to welcoming you to a lesson.
              </p>
            </div>
            <p className={s.signature}>
              Elena Vlasenko <span>Headteacher, Volna School</span>
            </p>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.wash}`} id="approach">
        <span id="mission" className={s.alias} aria-hidden="true" />
        <span id="values" className={s.alias} aria-hidden="true" />
        <div className={s.wrap}>
          <div className={s.heading}>
            <div>
              <span className={s.eyebrow}>What matters in our lessons</span>
              <h2>Good teaching starts with understanding.</h2>
            </div>
            <p>
              We put that into practice through thoughtful class placement,
              connected lessons and feedback students can use.
            </p>
          </div>
          <div className={s.principles}>
            {aboutPrinciples.map((item, index) => (
              <article key={item.title}>
                <span className={s.number}>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <p className={s.detail}>{item.detail}</p>
              </article>
            ))}
          </div>
          <div className={s.careNote}>
            <p>
              A supportive school also needs clear responsibilities. Our
              safeguarding policy explains the school’s approach to protecting
              children.
            </p>
            <Link className={s.textLink} href="/safeguarding-policy">
              Read our safeguarding policy{" "}
              <CourseLinkIcon href="/safeguarding-policy" />
            </Link>
          </div>
        </div>
      </section>

      <section className={s.section} id="team">
        <div className={s.wrap}>
          <div className={s.heading}>
            <div>
              <span className={s.eyebrow}>People behind Volna</span>
              <h2>A school you can put a face to.</h2>
            </div>
            <p>
              Teaching, school leadership and admissions work together to
              support learners and help students and families find the right information.
            </p>
          </div>
          <div className={s.team}>
            {people.map((person) => (
              <article key={person.id}>
                <div className={s.staffPhoto}>
                  <ApprovedImage
                    image={person.image}
                    style={person.framing}
                    sizes="120px"
                    unoptimized
                  />
                </div>
                <div>
                  <h3>{person.name}</h3>
                  <p className={s.role}>{person.role}</p>
                  <p>{person.responsibility}</p>
                </div>
              </article>
            ))}
          </div>
          <div className={s.contact}>
            <p>
              Questions about joining, lesson times or finding a suitable
              course?
            </p>
            <a className={s.textLink} href="mailto:info@volnaschool.com">
              Contact the school{" "}
              <CourseLinkIcon href="mailto:info@volnaschool.com" />
            </a>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.history}`} id="history">
        <div className={s.wrap}>
          <div className={s.heading}>
            <div>
              <span className={s.eyebrow}>School history</span>
              <h2>Our story, from classrooms to online.</h2>
            </div>
            <p>
              The setting has changed. The purpose continues: bringing people
              together to learn and use Russian.
            </p>
          </div>
          <div className={s.historyGrid}>
            <div className={s.archive}>
              <figure>
                <div className={s.archivePhoto}>
                  <ApprovedImage
                    image={{
                      ...VOLNA_IMAGES.about.historyGroup,
                      alt: "Pupils and teachers gathered outside Pushkin’s School",
                    }}
                    sizes="(min-width: 1000px) 560px, 100vw"
                  />
                </div>
                <figcaption>
                  Pupils and teachers at Pushkin’s School. A moment from our
                  weekend-school years.
                </figcaption>
              </figure>
              <figure className={s.performance}>
                <div>
                  <ApprovedImage
                    image={VOLNA_IMAGES.about.historyVideo}
                    sizes="(min-width: 768px) 220px, 40vw"
                  />
                </div>
                <figcaption>
                  Language beyond the page: school performances gave children a
                  chance to bring stories and poetry to life.
                </figcaption>
              </figure>
            </div>
            <ol className={s.timeline}>
              {aboutMilestones.map((item) => (
                <li key={item.year}>
                  <span>{item.year}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={s.section} id="classes">
        <span id="curriculum" className={s.alias} aria-hidden="true" />
        <div className={s.wrap}>
          <div className={s.heading}>
            <div>
              <span className={s.eyebrow}>Classes and courses</span>
              <h2>Find your place at Volna.</h2>
            </div>
            <p>
              Explore the learning, lesson formats and practical details for the
              course that interests you.
            </p>
          </div>
          <div className={s.courses}>
            {aboutCourseRoutes.map((course) => (
              <Link
                className={`${s.course} ${s[course.key]}`}
                key={course.key}
                href={course.href}
              >
                <span className={s.courseTitle}>
                  {course.label}
                  <CourseLinkIcon href={course.href} />
                </span>
                <p>{course.description}</p>
              </Link>
            ))}
          </div>
          <div className={s.start}>
            <div>
              <h3>Join us for a free trial lesson.</h3>
              <p>
                Tell us a little about the learner. We’ll contact you to arrange
                a suitable free trial.
              </p>
            </div>
            <ButtonLink href="/registration">Request a free trial</ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}

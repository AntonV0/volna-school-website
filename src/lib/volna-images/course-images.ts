import type { ApprovedPublicImage } from "@/lib/assets";
import { image } from "@/lib/volna-images/shared";

export type CourseImageKey = "adults" | "alevel" | "children" | "gcse";

export const courseImages = {
    children: {
      hero: image(
        "children-hero.webp",
        1600,
        1067,
        "A child sitting with a laptop and giving a thumbs up",
        "approved-stock",
        "Children course hero",
      ),
      overview: image(
        "children-overview-online-class.webp",
        1600,
        553,
        "An online class with a teacher on a laptop",
        "approved-stock",
        "Children course overview",
      ),
      studyOptions: [
        image(
          "home-course-children.webp",
          1600,
          1066,
          "A school-age learner writing beside a laptop during an online lesson",
          "approved-stock",
          "Children bilingual group option",
        ),
        image(
          "children-option-rfl.webp",
          1600,
          1068,
          "A child doing schoolwork at home with a laptop",
          "approved-stock",
          "Children Russian as a foreign language option",
        ),
        image(
          "children-option-bilingual.webp",
          1600,
          1067,
          "A young child raising her hand during an online lesson",
          "approved-stock",
          "Children Early Years option",
        ),
        image(
          "children-option-private.webp",
          1600,
          1067,
          "A young learner studying online at home",
          "approved-stock",
          "Children private tuition option",
        ),
      ],
      examGuide: [],
      results: undefined,
    },
    gcse: {
      hero: image(
        "gcse-hero.webp",
        1600,
        1067,
        "A GCSE student smiling with a laptop",
        "approved-stock",
        "GCSE course hero",
      ),
      overview: image(
        "exam-hall.webp",
        1600,
        633,
        "Rows of exam desks in an examination hall",
        "approved-stock",
        "GCSE course overview",
      ),
      results: image(
        "gcse-results.webp",
        1600,
        1067,
        "Students celebrating exam results",
        "approved-stock",
        "GCSE results section",
      ),
      studyOptions: [
        image(
          "gcse-option-one-year.webp",
          1600,
          1030,
          "A student studying with a laptop at home",
          "approved-stock",
          "GCSE one-year option",
        ),
        image(
          "gcse-option-two-year.webp",
          1600,
          1067,
          "A teenage student doing homework on a laptop",
          "approved-stock",
          "GCSE two-year option",
        ),
        image(
          "gcse-option-private.webp",
          1600,
          1068,
          "A teenager preparing for exams at a desk",
          "approved-stock",
          "GCSE private tuition option",
        ),
      ],
      examGuide: [
        image(
          "mock-exam-writing.webp",
          1600,
          1068,
          "A student writing during an exam",
          "approved-stock",
          "GCSE mock exam guide",
        ),
        image(
          "exam-hall.webp",
          1600,
          633,
          "An examination hall prepared for students",
          "approved-stock",
          "GCSE exam entry guide",
        ),
      ],
    },
    alevel: {
      hero: image(
        "alevel-hero.webp",
        1600,
        928,
        "An A Level student sitting with a laptop",
        "approved-stock",
        "A Level course hero",
      ),
      overview: image(
        "alevel-option-two-year.webp",
        1600,
        1068,
        "A student making notes while studying online",
        "approved-stock",
        "A Level course overview",
      ),
      results: image(
        "alevel-results.webp",
        1600,
        1067,
        "Students giving a high five after exam results",
        "approved-stock",
        "A Level results section",
      ),
      studyOptions: [
        image(
          "alevel-option-one-year.webp",
          1600,
          1067,
          "A teenage student wearing headphones while studying at a desk",
          "approved-stock",
          "A Level one-year option",
        ),
        image(
          "alevel-option-two-year.webp",
          1600,
          1068,
          "A student studying online and writing notes",
          "approved-stock",
          "A Level two-year option",
        ),
        image(
          "alevel-option-private.webp",
          1600,
          1067,
          "A student wearing headphones and taking notes during an online course",
          "approved-stock",
          "A Level private tuition option",
        ),
      ],
      examGuide: [
        image(
          "mock-exam-writing.webp",
          1600,
          1068,
          "A student writing during an exam",
          "approved-stock",
          "A Level mock exam guide",
        ),
        image(
          "exam-hall.webp",
          1600,
          633,
          "An examination hall prepared for students",
          "approved-stock",
          "A Level exam entry guide",
        ),
      ],
    },
    adults: {
      hero: image(
        "adults-hero.webp",
        1600,
        1067,
        "An adult learner sitting with a laptop",
        "approved-stock",
        "Adult course hero",
      ),
      overview: image(
        "adults-intermediate.webp",
        1600,
        1067,
        "An adult learner joining an online video call",
        "approved-stock",
        "Adult course overview",
      ),
      studyOptions: [
        image(
          "adults-beginner.webp",
          1600,
          1067,
          "An older learner using a laptop at home",
          "approved-stock",
          "Adult beginner option",
        ),
        image(
          "adults-intermediate.webp",
          1600,
          1067,
          "An adult learner waving during a laptop video call",
          "approved-stock",
          "Adult intermediate option",
        ),
        image(
          "adults-customised.webp",
          1600,
          1067,
          "An adult learner speaking with a teacher on a laptop video call",
          "approved-stock",
          "Adult customised option",
        ),
      ],
      examGuide: [],
      results: undefined,
    },
  } satisfies Record<CourseImageKey, {
    examGuide?: ApprovedPublicImage[];
    hero: ApprovedPublicImage;
    overview: ApprovedPublicImage;
    results?: ApprovedPublicImage;
    studyOptions: ApprovedPublicImage[];
  }>;

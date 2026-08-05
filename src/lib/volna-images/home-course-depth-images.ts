import { aboutImages } from "@/lib/volna-images/about-images";
import { courseImages, type CourseImageKey } from "@/lib/volna-images/course-images";

type HomeCourseDepthImageSet = {
  image: (typeof courseImages)[CourseImageKey]["hero"];
  objectPosition?: string;
};

export const homeCourseDepthImages = {
  children: {
    image: courseImages.children.studyOptions[0],
    objectPosition: "65% center",
  },
  gcse: {
    image: courseImages.gcse.studyOptions[1],
    objectPosition: undefined,
  },
  alevel: {
    image: aboutImages.curriculum[0],
    objectPosition: undefined,
  },
  adults: {
    image: courseImages.adults.studyOptions[2],
    objectPosition: undefined,
  },
} satisfies Record<CourseImageKey, HomeCourseDepthImageSet>;

import { aboutImages } from "@/lib/volna-images/about-images";
import { courseImages, type CourseImageKey } from "@/lib/volna-images/course-images";

type HomeCourseDepthImageSet = {
  image: (typeof courseImages)[CourseImageKey]["hero"];
};

export const homeCourseDepthImages = {
  children: {
    image: courseImages.children.studyOptions[2],
  },
  gcse: {
    image: courseImages.gcse.studyOptions[1],
  },
  alevel: {
    image: aboutImages.curriculum[0],
  },
  adults: {
    image: courseImages.adults.studyOptions[2],
  },
} satisfies Record<CourseImageKey, HomeCourseDepthImageSet>;

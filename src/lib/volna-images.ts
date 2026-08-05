import { aboutImages } from "@/lib/volna-images/about-images";
import { courseDetailImages } from "@/lib/volna-images/course-detail-images";
import { courseImages } from "@/lib/volna-images/course-images";
import { homeImages } from "@/lib/volna-images/home-images";
import { homeCourseDepthImages } from "@/lib/volna-images/home-course-depth-images";
import { staffImages } from "@/lib/volna-images/staff-images";

export const VOLNA_IMAGES = {
  home: homeImages,
  homeCourseDepth: homeCourseDepthImages,
  staff: staffImages,
  about: aboutImages,
  courses: courseImages,
  courseDetails: courseDetailImages,
} as const;

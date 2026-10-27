import { ApprovedImage } from "@/components/ui/approved-image";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import r from "./gcse-resources.module.css";

export function GcseResourcesHeroImage() {
  return (
    <div className={r.heroVisual}>
      <div className={r.heroImage}>
        <ApprovedImage image={VOLNA_IMAGES.about.curriculum[0]} priority
          sizes="(min-width: 1440px) 580px, (min-width: 1024px) 44vw, (min-width: 768px) 660px, calc(100vw - 40px)" />
      </div>
    </div>
  );
}

import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const imageDirectory = path.join(projectRoot, "public", "images", "optimised");

const variants = [
  {
    input: "volna-online-russian-school-logo-school-blue-v5.png",
    output: "volna-online-russian-school-logo-school-blue-v6.png",
    subtitle: { left: 128, top: 88, width: 223, height: 17 },
    subtitleBandTop: 84,
    line: { left: 26, right: 454, top: 95, height: 2, gap: 10 },
  },
  {
    input: "volna-online-russian-school-logo-centered-ru-school-blue-v5.png",
    output: "volna-online-russian-school-logo-centered-ru-school-blue-v6.png",
    subtitle: { left: 297, top: 182, width: 451, height: 38 },
    subtitleBandTop: 176,
    line: { left: 52, right: 1017, top: 201, height: 2, gap: 18 },
  },
];

const subtitleScale = 1.14;

for (const variant of variants) {
  const inputPath = path.join(imageDirectory, variant.input);
  const outputPath = path.join(imageDirectory, variant.output);
  const metadata = await sharp(inputPath).metadata();

  if (!metadata.width || !metadata.height) {
    throw new Error(`Unable to read dimensions for ${variant.input}`);
  }

  const subtitleWidth = Math.round(variant.subtitle.width * subtitleScale);
  const subtitleHeight = Math.round(variant.subtitle.height * subtitleScale);
  const subtitleLeft = Math.round((metadata.width - subtitleWidth) / 2);
  const subtitleTop = Math.round(
    variant.subtitle.top + variant.subtitle.height / 2 - subtitleHeight / 2,
  );

  const [mainLockup, subtitle] = await Promise.all([
    sharp(inputPath)
      .extract({
        left: 0,
        top: 0,
        width: metadata.width,
        height: variant.subtitleBandTop,
      })
      .png()
      .toBuffer(),
    sharp(inputPath)
      .extract(variant.subtitle)
      .resize({
        width: subtitleWidth,
        height: subtitleHeight,
        fit: "fill",
        kernel: sharp.kernel.lanczos3,
      })
      .png()
      .toBuffer(),
  ]);

  const leftLineWidth = Math.max(
    0,
    subtitleLeft - variant.line.gap - variant.line.left,
  );
  const rightLineLeft = subtitleLeft + subtitleWidth + variant.line.gap;
  const rightLineWidth = Math.max(0, variant.line.right - rightLineLeft + 1);
  const lineColour = { r: 13, g: 111, b: 153, alpha: 1 };

  const composites = [
    { input: mainLockup, left: 0, top: 0 },
    { input: subtitle, left: subtitleLeft, top: subtitleTop },
  ];

  if (leftLineWidth > 0) {
    composites.push({
      input: await sharp({
        create: {
          width: leftLineWidth,
          height: variant.line.height,
          channels: 4,
          background: lineColour,
        },
      })
        .png()
        .toBuffer(),
      left: variant.line.left,
      top: variant.line.top,
    });
  }

  if (rightLineWidth > 0) {
    composites.push({
      input: await sharp({
        create: {
          width: rightLineWidth,
          height: variant.line.height,
          channels: 4,
          background: lineColour,
        },
      })
        .png()
        .toBuffer(),
      left: rightLineLeft,
      top: variant.line.top,
    });
  }

  await sharp({
    create: {
      width: metadata.width,
      height: metadata.height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite(composites)
    .png({ compressionLevel: 9 })
    .toFile(outputPath);
}

import { readdir, rename, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assetsDir = path.resolve("src/assets");
const MAX_PHOTO_WIDTH = 1600;
const PHOTO_QUALITY = 80;
const WEBP_QUALITY = 78;
const LOGO_MAX_WIDTH = 440;

async function writeTemp(buffer, targetPath) {
  const tempPath = `${targetPath}.tmp`;
  await buffer.toFile(tempPath);
  await unlink(targetPath).catch(() => {});
  await rename(tempPath, targetPath);
}

async function optimizePhoto(filePath) {
  const base = filePath.replace(/\.[^.]+$/, "");
  const pipeline = sharp(filePath).rotate().resize({
    width: MAX_PHOTO_WIDTH,
    withoutEnlargement: true,
  });

  await writeTemp(
    pipeline.clone().jpeg({ quality: PHOTO_QUALITY, mozjpeg: true }),
    `${base}.jpg`,
  );

  await pipeline.clone().webp({ quality: WEBP_QUALITY }).toFile(`${base}.webp`);
}

async function optimizeLogo(filePath) {
  const base = filePath.replace(/\.[^.]+$/, "");
  const pipeline = sharp(filePath).resize({
    width: LOGO_MAX_WIDTH,
    withoutEnlargement: true,
  });

  await writeTemp(
    pipeline.clone().png({ compressionLevel: 9, palette: true }),
    `${base}.png`,
  );

  await pipeline.clone().webp({ quality: 90 }).toFile(`${base}.webp`);
}

const files = await readdir(assetsDir);

for (const name of files) {
  const filePath = path.join(assetsDir, name);
  if (/\.jpe?g$/i.test(name)) {
    await optimizePhoto(filePath);
    console.log(`optimized photo: ${name}`);
  } else if (/^LogoBasilea\.png$/i.test(name)) {
    await optimizeLogo(filePath);
    console.log(`optimized logo: ${name}`);
  }
}

const report = await Promise.all(
  files
    .filter((n) => /\.(jpe?g|png|webp)$/i.test(n))
    .map(async (name) => {
      const { size } = await import("node:fs/promises").then((fs) =>
        fs.stat(path.join(assetsDir, name)),
      );
      return `${name}: ${(size / 1024).toFixed(1)} KB`;
    }),
);

console.log("\nAsset sizes:");
for (const line of report.sort()) console.log(line);

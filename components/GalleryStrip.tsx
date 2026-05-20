import { readdirSync } from "fs";
import path from "path";
import sharp from "sharp";
import GalleryTrack, { type Slot } from "./GalleryTrack";

const GALLERY_H = 384; // matches h-96 (desktop)
const MAX_SLOT_W = 600;
const MIN_SLOT_W = 180;
const MARGIN_R = 8;     // matches mr-2
const MAX_VIEWPORT = 2560;
const SPEED = 40;       // px/s — slow, deliberate scroll

async function buildSlots(): Promise<Slot[]> {
  const imgDir = path.join(process.cwd(), "public", "images");
  const files = readdirSync(imgDir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort();

  return Promise.all(
    files.map(async (file): Promise<Slot> => {
      try {
        const { width = 1, height = 1, orientation = 1 } = await sharp(
          path.join(imgDir, file)
        ).metadata();

        // EXIF orientation 5–8 means the image is physically rotated 90/270°
        const rotated = (orientation ?? 1) >= 5;
        const visualW = rotated ? height : width;
        const visualH = rotated ? width : height;

        const ratio = visualW / visualH;
        const w = Math.max(MIN_SLOT_W, Math.min(Math.round(ratio * GALLERY_H), MAX_SLOT_W));
        return { file, w };
      } catch {
        return { file, w: GALLERY_H };
      }
    })
  );
}

export default async function GalleryStrip() {
  const slots = await buildSlots();
  const setWidth = slots.reduce((sum, s) => sum + s.w + MARGIN_R, 0);
  const copies = Math.max(2, Math.ceil((MAX_VIEWPORT + setWidth) / setWidth));

  return (
    <div className="overflow-hidden h-64 md:h-96 border-y border-black/5 dark:border-white/5">
      <GalleryTrack
        slots={slots}
        setWidth={setWidth}
        copies={copies}
        speed={SPEED}
      />
    </div>
  );
}

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
// Rendered at 64px so it stays crisp on high-DPI tabs.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Same mark as the header logo: "leihl" in ink with a sky-blue dot.
export default async function Icon() {
  const font = await readFile(
    join(process.cwd(), "app/_fonts/PlusJakartaSans-ExtraBold.woff"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius: 14,
          fontFamily: "Jakarta",
          fontSize: 25,
          letterSpacing: "-1px",
          color: "#0f1b2d",
        }}
      >
        <span>leihl</span>
        <span style={{ color: "#3b9be6" }}>.</span>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Jakarta", data: font, weight: 800, style: "normal" }],
    },
  );
}

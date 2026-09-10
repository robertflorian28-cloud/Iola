import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function Icon() {
  const logo = await readFile(join(process.cwd(), "public/assets/logo-transparent.png"));

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#050507" }}>
      {/* Reuse the supplied brand asset; this renderer produces the small PNG icon. */}
      <img src={`data:image/png;base64,${logo.toString("base64")}`} alt="" width={60} height={35} />
    </div>,
    size,
  );
}

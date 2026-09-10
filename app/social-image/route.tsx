import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export async function GET() {
  const logo = await readFile(join(process.cwd(), "public/assets/logo-transparent.png"));
  const font = await readFile(join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans/Geist-Regular.ttf"));

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 80px", background: "#080a09", color: "#f4f1e8", fontFamily: "Geist" }}>
      <img src={`data:image/png;base64,${logo.toString("base64")}`} alt="" width={204} height={120} />
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 64, letterSpacing: -2 }}>Arhitectură și design interior</div>
        <div style={{ fontSize: 28, color: "#bac8bc" }}>De la concept până la implementare.</div>
      </div>
      <div style={{ display: "flex", fontSize: 20, letterSpacing: 5, color: "#bac8bc" }}>IOLA CONCEPT</div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Geist", data: font, style: "normal", weight: 400 }],
    },
  );
}

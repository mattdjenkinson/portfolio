import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Extract parameters from URL
    const title = searchParams.get("title") || "Matthew Jenkinson";
    const description =
      searchParams.get("description") || "Full Stack Developer";
    const theme = searchParams.get("theme") || "dark";

    // Theme colors
    const isDark = theme === "dark";
    const bgColor = isDark ? "#171717" : "#f2f0ed";
    const textColor = isDark ? "#f2f0ed" : "#171717";
    const accentColor = isDark ? "#4ade80" : "#4ade80";
    const mutedColor = isDark ? "#a1a1aa" : "#71717a";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: bgColor,
            padding: "80px",
            fontFamily: "GeistMono",
          }}
        >
          {/* Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              zIndex: 1,
            }}
          >
            {/* Title */}
            <div
              style={{
                fontSize: "72px",
                fontWeight: 400,
                color: textColor,
                lineHeight: 1.2,
                maxWidth: "900px",
                display: "flex",
              }}
            >
              {title}
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: "36px",
                color: mutedColor,
                maxWidth: "800px",
                display: "flex",
              }}
            >
              {description}
            </div>
          </div>

          {/* Footer with accent bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: "6px",
                height: "60px",
                backgroundColor: accentColor,
                borderRadius: "3px",
              }}
            />
            <div
              style={{
                fontSize: "28px",
                color: mutedColor,
                display: "flex",
                paddingBottom: "7px",
              }}
            >
              matthewjenkinson.dev
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "GeistMono",
            data: await readFile(
              join(process.cwd(), "public", "GeistMono-Regular.ttf"),
            ),
            style: "normal",
            weight: 400,
          },
        ],
      },
    );
  } catch (error: unknown) {
    console.error("Error generating OG image:", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}

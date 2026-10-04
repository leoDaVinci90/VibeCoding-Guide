// Pixel icon set (pixelarticons, MIT) inlined as currentColor paths.
// Pixel-art style to match the Geist Pixel display face and the pixel logo.
// viewBox 0 0 24 24, filled (no stroke); `strokeWidth` is accepted for API
// compatibility and ignored.
import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  strokeWidth?: number;
};

const paths: Record<string, string[]> = {
  "book-open": [
    "M2 3h9v2H2zM0 19h11v2H0zM13 3h9v2h-9zm0 16h11v2H13zM11 5h2v18h-2zM0 5h2v14H0zm22 0h2v14h-2zm-7 2h5v2h-5zm0 4h5v2h-5zm0 4h2v2h-2z",
  ],
  zap: [
    "M4 13h8v6h2v2h-2v2h-2v-8H2v-4h2v2Zm12 6h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2v-2h2v2Zm-6-6h8v4h-2v-2h-8V5h-2V3h2V1h2v8Zm-8 2H4V9h2v2Zm2-2H6V7h2v2Zm2-2H8V5h2v2Z",
  ],
  message: ["M20 2H4v2h16zm0 14H6v2h14zm2-12h-2v12h2zM4 4H2v18h2zm2 14H4v2h2z"],
  code: [
    "M11 18H9v-4h2v4Zm-4-1H5v-2h2v2Zm12-2v2h-2v-2h2ZM5 15H3v-2h2v2Zm16 0h-2v-2h2v2Zm-8-1h-2v-4h2v4ZM3 13H1v-2h2v2Zm20 0h-2v-2h2v2ZM5 11H3V9h2v2Zm16 0h-2V9h2v2Zm-6-1h-2V6h2v4ZM7 9H5V7h2v2Zm12 0h-2V7h2v2Z",
  ],
  "list-box": [
    "M4 2h16v2H4zm2 5h2v2H6zm4 0h8v2h-8zm-4 4h2v2H6zm4 0h8v2h-8zm-4 4h2v2H6zm4 0h8v2h-8zm-6 5h16v2H4zM2 4h2v16H2zm18 0h2v16h-2z",
  ],
  clipboard: [
    "M4 6h2v14H4zm2 14h12v2H6zM18 6h2v14h-2zM6 4h2v2H6zm10 0h2v2h-2zm-6-2h4v2h-4zm0 4h4v2h-4zM8 2h2v6H8zm6 0h2v6h-2z",
  ],
  reload: [
    "M16 4h2v6h-2zm-2-2h2v2h-2zm0 2h2v8h-2zM4 8H2v5h2z",
    "M4 6h16v2H4zm4 14H6v-6h2zm2 2H8v-2h2zm0-2H8v-8h2zm10-4h2v-5h-2z",
    "M20 18H4v-2h16z",
  ],
  layout: [
    "M20 20H4v-2h4v-8H4v8H2V6h2v2h16V6h2v12h-2v-8H10v8h10v2Zm0-14H4V4h16v2Z",
  ],
  shield: [
    "M4 2h16v2H4zM2 4h2v10H2zm18 0h2v10h-2zM4 14h2v2H4zm2 2h2v2H6zm4 4h4v2h-4zm10-6h-2v2h2zm-2 2h-2v2h2zm-2 2h-2v2h2zm-6 0H8v2h2z",
  ],
  "git-commit": [
    "M9 7h6v2H9zM7 9h2v6H7zm2 6h6v2H9zm6-6h2v6h-2zM0 11h5v2H0zm19 0h5v2h-5z",
  ],
  flag: [
    "M4 2h2v20H4z",
    "M4 4h16v2H4zm12 2h2v2h-2zm-2 2h2v2h-2zm2 2h2v2h-2zM4 12h16v2H4z",
  ],
  bookmark: [
    "M6 2h12v2H6zM4 4h2v18H4zm14 0h2v18h-2zm-2 16h2v2h-2zm-2-2h2v2h-2zm-8 2h2v2H6zm2-2h2v2H8zm2-2h4v2h-4z",
  ],
  home: [
    "M4 20h16v2H4zm16-10h2v10h-2zM2 10h2v10H2zm2-2h2v2H4zm2-2h2v2H6zm2-2h2v2H8zm2-2h4v2h-4zm4 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zM8 14h2v6H8zm2-2h4v2h-4zm4 2h2v6h-2z",
  ],
  sun: [
    "M13 22h-2v-3h2v3Zm-6-3H5v-2h2v2Zm12 0h-2v-2h2v2Zm-4-2H9v-2h6v2Zm-6-2H7V9h2v6Zm8 0h-2V9h2v6ZM5 13H2v-2h3v2Zm17 0h-3v-2h3v2Zm-7-4H9V7h6v2ZM7 7H5V5h2v2Zm12 0h-2V5h2v2Zm-6-2h-2V2h2v3Z",
  ],
  moon: [
    "M18 22H8v-2h10v2ZM8 20H6v-2h2v2Zm12 0h-2v-2h2v2ZM6 18H4v-2h2v2Zm16 0h-2v-4h-2v-2h2v-2h2v8ZM4 16H2V6h2v10Zm14 0h-6v-2h6v2Zm-6-2h-2v-2h2v2Zm-2-2H8V6h2v6ZM6 6H4V4h2v2Zm8-2h-2v2h-2V4H6V2h8v2Z",
  ],
};

function createIcon(name: string, title: string) {
  const Icon = React.forwardRef<SVGSVGElement, IconProps>(function Icon(
    { size = 20, ...props },
    ref,
  ) {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        shapeRendering="crispEdges"
        role="img"
        aria-hidden={props["aria-label"] ? undefined : true}
        {...props}
      >
        {props["aria-label"] ? <title>{props["aria-label"]}</title> : null}
        {paths[name].map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
    );
  });
  Icon.displayName = title;
  return Icon;
}

export const IconSun = createIcon("sun", "IconSun");
export const IconMoon = createIcon("moon", "IconMoon");
export const IconSidebar = createIcon("layout", "IconSidebar");

/** Chapter glyphs, keyed by the role each plays in the 12-chapter structure. */
export const chapterIcons = {
  welcome: createIcon("book-open", "IconWelcome"),
  vibe: createIcon("zap", "IconVibe"),
  language: createIcon("message", "IconLanguage"),
  web: createIcon("code", "IconWeb"),
  context: createIcon("list-box", "IconContext"),
  briefing: createIcon("clipboard", "IconBriefing"),
  workflow: createIcon("reload", "IconWorkflow"),
  craft: createIcon("layout", "IconCraft"),
  quality: createIcon("shield", "IconQuality"),
  git: createIcon("git-commit", "IconGit"),
  project: createIcon("flag", "IconProject"),
  reference: createIcon("bookmark", "IconReference"),
  home: createIcon("home", "IconHome"),
} as const;

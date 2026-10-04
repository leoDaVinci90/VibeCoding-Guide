// Pixel UI glyphs (pixelarticons, MIT) inlined as currentColor paths — matches
// the pixel chapter icons in StreamlineIcons. Filled, viewBox 24; `strokeWidth`
// is accepted for API compatibility and ignored.
import * as React from "react";
import type { IconProps } from "./StreamlineIcons";

const uiPaths: Record<string, string[]> = {
  chevron: [
    "M16 13v-2h-2v2h2Zm-2-2V9h-2v2h2Zm0 4v-2h-2v2h2Zm-2-6V7h-2v2h2Zm0 8v-2h-2v2h2ZM10 7V5H8v2h2Zm0 12v-2H8v2h2Z",
  ],
  menu: ["M20 18H4v-2h16v2Zm0-5H4v-2h16v2Zm0-5H4V6h16v2Z"],
  close: [
    "M7 19H5V17H7V19ZM19 19H17V17H19V19ZM9 15V17H7V15H9ZM17 17H15V15H17V17ZM11 15H9V13H11V15ZM15 15H13V13H15V15ZM13 13H11V11H13V13ZM11 11H9V9H11V11ZM15 11H13V9H15V11ZM9 9H7V7H9V9ZM17 9H15V7H17V9ZM7 7H5V5H7V7ZM19 7H17V5H19V7Z",
  ],
  "arrow-right": [
    "M4 11v2h16v-2zm12 2v2h2v-2zm-2 2v2h2v-2zm-2 2v2h2v-2zm4-6V9h2v2z",
    "M14 15V7h2v8zm-2 2V5h2v12z",
  ],
  "arrow-up": [
    "M11 20h2V4h-2zm2-12h2V6h-2zm2 2h2V8h-2zm2 2h2v-2h-2zm-6-4H9V6h2z",
    "M15 10H7V8h8zm2 2H5v-2h12z",
  ],
  check: [
    "M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z",
  ],
  copy: [
    "M8 6h12v2H8zM4 2h12v2H4zm2 6h2v12H6zM2 4h2v12H2zm6 16h12v2H8zM20 8h2v12h-2zm-4-4h2v2h-2zM4 16h2v2H4z",
  ],
  idea: [
    "M9 4h6v2H9zM7 6h2v2H7zm8 0h2v2h-2zm4-2h2v2h-2zm2-2h2v2h-2zM0 10h3v2H0zm21 0h3v2h-3zM3 4h2v2H3zM1 2h2v2H1zm6 12h2v2H7zm8 0h2v2h-2zM5 8h2v6H5zm12 0h2v6h-2zm-8 8h6v2H9zm0 4h6v2H9zm0-2h2v2H9zm4 0h2v2h-2zM11 0h2v3h-2z",
  ],
};

function makeUi(name: string, title: string) {
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
        aria-hidden
        {...props}
      >
        {uiPaths[name].map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
    );
  });
  Icon.displayName = title;
  return Icon;
}

export const IconChevron = makeUi("chevron", "IconChevron");
export const IconMenu = makeUi("menu", "IconMenu");
export const IconClose = makeUi("close", "IconClose");
export const IconArrowRight = makeUi("arrow-right", "IconArrowRight");
export const IconArrowUp = makeUi("arrow-up", "IconArrowUp");
export const IconCheck = makeUi("check", "IconCheck");
export const IconCross = makeUi("close", "IconCross");
export const IconIdea = makeUi("idea", "IconIdea");
export const IconCopy = makeUi("copy", "IconCopy");

import * as React from "react";
import type { IconProps } from "./StreamlineIcons";

/** Small hand-authored UI glyphs on a 24-grid, matching the Streamline stroke feel. */
function Ui(
  { size = 20, strokeWidth = 1.6, children, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}
const UiIcon = React.forwardRef(Ui);

export const IconChevron = React.forwardRef<SVGSVGElement, IconProps>(
  function IconChevron(props, ref) {
    return (
      <UiIcon ref={ref} {...props}>
        <path d="m9 6 6 6-6 6" />
      </UiIcon>
    );
  },
);

export const IconMenu = React.forwardRef<SVGSVGElement, IconProps>(
  function IconMenu(props, ref) {
    return (
      <UiIcon ref={ref} {...props}>
        <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
      </UiIcon>
    );
  },
);

export const IconClose = React.forwardRef<SVGSVGElement, IconProps>(
  function IconClose(props, ref) {
    return (
      <UiIcon ref={ref} {...props}>
        <path d="M6 6l12 12M18 6 6 18" />
      </UiIcon>
    );
  },
);

export const IconArrowRight = React.forwardRef<SVGSVGElement, IconProps>(
  function IconArrowRight(props, ref) {
    return (
      <UiIcon ref={ref} {...props}>
        <path d="M4 12h15M13 6l6 6-6 6" />
      </UiIcon>
    );
  },
);

export const IconArrowUp = React.forwardRef<SVGSVGElement, IconProps>(
  function IconArrowUp(props, ref) {
    return (
      <UiIcon ref={ref} {...props}>
        <path d="M12 19V5M6 11l6-6 6 6" />
      </UiIcon>
    );
  },
);

export const IconCheck = React.forwardRef<SVGSVGElement, IconProps>(
  function IconCheck(props, ref) {
    return (
      <UiIcon ref={ref} {...props}>
        <path d="M4.5 12.5 9 17l10.5-11" />
      </UiIcon>
    );
  },
);

export const IconCross = React.forwardRef<SVGSVGElement, IconProps>(
  function IconCross(props, ref) {
    return (
      <UiIcon ref={ref} {...props}>
        <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
      </UiIcon>
    );
  },
);

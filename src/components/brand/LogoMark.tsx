import s from "./LogoMark.module.css";

/**
 * The app-style brand mark: the pixel logo inside a dark, rounded container.
 * The container stays dark in both light and dark themes so it reads like an
 * app icon. `size` is the container edge in px.
 */
export function LogoMark({
  size = 30,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`${s.mark}${className ? ` ${className}` : ""}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.png" alt="" className={s.img} />
    </span>
  );
}

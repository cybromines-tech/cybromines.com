import { cn } from "@/lib/utils";

/** Brand red. Geometry mirrors public/brand/cybromines-mark.svg. */
export const LOGO_RED = "#E13946";

type SvgSizeProps = {
  className?: string;
  width?: number;
  height?: number;
};

/**
 * The Cybromines mark: three rising red bars and a dot. The dot follows
 * currentColor; pass explicit width/height/dotColor when rendering in OG images.
 */
export function LogoMark({
  className,
  width,
  height,
  dotColor = "currentColor",
}: SvgSizeProps & { dotColor?: string }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 389 222"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <g stroke={LOGO_RED} strokeWidth="56" strokeLinecap="round">
        <path d="M28 193 83 138" />
        <path d="M118 193 195 116" />
        <path d="M208 193 307 94" />
      </g>
      <circle cx="352.5" cy="36.5" r="36" fill={dotColor} />
    </svg>
  );
}

/** "CYBROMINES" wordmark, outlined from Archivo Black so no webfont is needed. */
export function LogoWordmark({
  className,
  width,
  height,
  color = "currentColor",
}: SvgSizeProps & { color?: string }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 855.4 71.2"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <path
        fill={color}
        d="M35.7 0Q51 0 59.9 7.6Q68.8 15.3 68.8 29.5L68.8 29.5L47.7 29.5Q47.7 23.5 44.6 20Q41.4 16.5 35.6 16.5L35.6 16.5Q28.9 16.5 25.8 20.7Q22.6 24.9 22.6 32.4L22.6 32.4L22.6 38.8Q22.6 46.2 25.8 50.5Q28.9 54.7 35.4 54.7L35.4 54.7Q41.8 54.7 45.1 51.4Q48.4 48.1 48.4 42.1L48.4 42.1L68.8 42.1Q68.8 56.2 60.2 63.7Q51.5 71.2 35.7 71.2L35.7 71.2Q18.1 71.2 9.1 62.2Q0 53.2 0 35.6L0 35.6Q0 18 9.1 9Q18.1 0 35.7 0L35.7 0ZM135.4 43.3L135.4 70L113.3 70L113.3 43.3L86 1.2L111.4 1.2L124.6 24.1L125 24.1L138.2 1.2L162.3 1.2L135.4 43.3ZM228.3 1.2Q233.5 1.2 237.8 3.3Q242.2 5.5 244.8 9.4Q247.3 13.3 247.3 18.1L247.3 18.1Q247.3 30.8 235.8 34.1L235.8 34.1L235.8 34.5Q248.9 37.5 248.9 51.7L248.9 51.7Q248.9 57.1 246.3 61.3Q243.6 65.4 239 67.7Q234.4 70 228.9 70L228.9 70L182.5 70L182.5 1.2L228.3 1.2ZM204.6 16.3L204.6 28L219.8 28Q222 28 223.4 26.4Q224.9 24.9 224.9 22.6L224.9 22.6L224.9 21.6Q224.9 19.4 223.4 17.8Q221.9 16.3 219.8 16.3L219.8 16.3L204.6 16.3ZM204.6 42.2L204.6 54L221.4 54Q223.6 54 225.1 52.5Q226.5 50.9 226.5 48.6L226.5 48.6L226.5 47.6Q226.5 45.3 225.1 43.8Q223.6 42.2 221.4 42.2L221.4 42.2L204.6 42.2ZM337.6 22.3Q337.6 28.6 334.2 33.7Q330.8 38.8 324.3 41.2L324.3 41.2L339.6 70L314.8 70L302.6 44.9L294.4 44.9L294.4 70L272.3 70L272.3 1.2L314.4 1.2Q321.8 1.2 327.0 4.0Q332.3 6.9 334.9 11.8Q337.6 16.6 337.6 22.3L337.6 22.3ZM315.1 23.2Q315.1 20.5 313.3 18.7Q311.5 16.9 308.9 16.9L308.9 16.9L294.4 16.9L294.4 29.6L308.9 29.6Q311.5 29.6 313.3 27.8Q315.1 25.9 315.1 23.2L315.1 23.2ZM396.3 0Q414.1 0 423.8 9.1Q433.5 18.2 433.5 35.6L433.5 35.6Q433.5 53 423.8 62.1Q414.1 71.2 396.3 71.2L396.3 71.2Q378.5 71.2 368.8 62.1Q359.2 53.1 359.2 35.6L359.2 35.6Q359.2 18.1 368.8 9.0Q378.5 0 396.3 0L396.3 0ZM396.3 16.5Q389.2 16.5 385.5 20.8Q381.8 25.1 381.8 32.4L381.8 32.4L381.8 38.8Q381.8 46.1 385.5 50.4Q389.2 54.7 396.3 54.7L396.3 54.7Q403.4 54.7 407.1 50.4Q410.9 46.1 410.9 38.8L410.9 38.8L410.9 32.4Q410.9 25.1 407.1 20.8Q403.4 16.5 396.3 16.5L396.3 16.5ZM538.4 70L516.5 70L516.5 45.2Q516.5 40.6 516.9 35.8Q517.2 30.9 517.6 27.6Q518 24.3 518.1 23.4L518.1 23.4L517.7 23.4L505 70L487.7 70L474.9 23.5L474.5 23.5Q474.6 24.4 475.1 27.6Q475.5 30.9 475.9 35.8Q476.3 40.6 476.3 45.2L476.3 45.2L476.3 70L456 70L456 1.2L487.2 1.2L497.6 40.9L498 40.9L508.3 1.2L538.4 1.2L538.4 70ZM586.9 70L564.8 70L564.8 1.2L586.9 1.2L586.9 70ZM683.2 70L663.9 70L635 36.6L635 70L614.7 70L614.7 1.2L634 1.2L662.9 35.1L662.9 1.2L683.2 1.2L683.2 70ZM710.0 70L710.0 1.2L769.5 1.2L769.5 17.7L732.1 17.7L732.1 27.2L764.1 27.2L764.1 43L732.1 43L732.1 53.5L770.2 53.5L770.2 70L710.0 70ZM823.1 0Q836.3 0 844.8 5.3Q853.3 10.7 853.5 21.2L853.5 21.2L853.5 22.4L832.8 22.4L832.8 22Q832.8 19 830.6 17Q828.4 15 823.9 15L823.9 15Q819.5 15 817.1 16.3Q814.8 17.6 814.8 19.5L814.8 19.5Q814.8 22.2 818 23.5Q821.2 24.8 828.3 26.2L828.3 26.2Q836.6 27.9 841.9 29.8Q847.3 31.6 851.3 35.8Q855.3 40 855.4 47.2L855.4 47.2Q855.4 59.4 847.1 65.3Q838.9 71.2 825.1 71.2L825.1 71.2Q809 71.2 800.0 65.8Q791.1 60.4 791.1 46.7L791.1 46.7L812 46.7Q812 51.9 814.7 53.6Q817.4 55.4 823.1 55.4L823.1 55.4Q827.3 55.4 830.0 54.5Q832.8 53.6 832.8 50.8L832.8 50.8Q832.8 48.3 829.8 47.0Q826.7 45.8 819.8 44.4L819.8 44.4Q811.4 42.6 805.9 40.6Q800.4 38.7 796.3 34.2Q792.2 29.7 792.2 22L792.2 22Q792.2 10.7 800.9 5.3Q809.7 0 823.1 0L823.1 0Z"
      />
    </svg>
  );
}

/** Cybromines logo: mark + wordmark, colored by the surrounding text color. */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3 text-foreground", className)}>
      <LogoMark className="h-[22px] w-auto" />
      {showWordmark && (
        <>
          <LogoWordmark className="h-[13px] w-auto" />
          <span className="sr-only">Cybromines</span>
        </>
      )}
    </span>
  );
}

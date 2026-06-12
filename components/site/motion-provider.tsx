"use client";

import { LazyMotion, domAnimation } from "motion/react";

/**
 * Loads only the `domAnimation` feature set of Framer Motion (~15kb vs ~34kb),
 * which covers animations, variants, and the whileInView gesture we use.
 * All animated components use the lightweight `m` primitive.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

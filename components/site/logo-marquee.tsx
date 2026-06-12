import { Container } from "./container";

// Neutral placeholder client wordmarks (no real trademarks).
const clients = [
  "NORTHWIND",
  "Meridian",
  "GULF PROVISIONS",
  "Acacia",
  "BlueHarbor",
  "Levant Group",
  "ORYX",
  "Caspian",
];

function Row() {
  return (
    <ul className="flex shrink-0 items-center gap-14 pr-14" aria-hidden="true">
      {clients.map((name) => (
        <li
          key={name}
          className="whitespace-nowrap font-display text-lg font-medium tracking-tight text-muted-subtle"
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export function LogoMarquee() {
  return (
    <section className="border-b border-border py-12">
      <Container>
        <p className="mb-8 text-center text-sm text-muted-subtle">
          Trusted by enterprises across the GCC
        </p>
      </Container>
      <div className="marquee-paused relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex animate-marquee">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}

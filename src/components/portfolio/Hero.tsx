import { motion } from "framer-motion";
import { ArrowRight, Download, Cog } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      {/* Floating spinning gear accents */}
      <Cog className="pointer-events-none absolute right-[8%] top-[18%] hidden h-40 w-40 text-primary/15 animate-spin-slow md:block" />
      <Cog className="pointer-events-none absolute left-[6%] bottom-[12%] hidden h-24 w-24 text-accent-glow/15 animate-spin-slow md:block" style={{ animationDirection: "reverse" }} />

      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Mechanical Engineering · Chennai Institute of Technology
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Ashwin <span className="text-gradient">B</span>
          </h1>

          <p className="mt-6 font-mono text-sm uppercase tracking-[0.25em] text-primary">
            // Mechanical Design Engineer in the Making
          </p>

          <h2 className="mt-4 max-w-2xl text-2xl text-muted-foreground sm:text-3xl">
            Designing the Future Through{" "}
            <span className="text-foreground">Engineering</span>.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            CAD design enthusiast crafting precision-driven mechanical systems —
            inspired by motorsport, automotive, and tomorrow's mobility.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent-glow px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:bg-surface-elevated"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          {/* Stat strip */}
          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-4">
            {[
              { v: "2nd Yr", l: "B.E. Mechanical" },
              { v: "NPD", l: "IP Rings Intern" },
              { v: "CAD", l: "Design Focus" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl p-4">
                <div className="font-display text-2xl font-bold text-foreground">{s.v}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Building2, CarFront, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";

const internshipLearnings = [
  "Gear designs & applications",
  "Pole Wheel geometry & function",
  "Real-world Manufacturing Processes",
  "Product Development Workflow (NPD)",
];

const teamAjnaLearnings = [
  "Go-Kart Chassis Design",
  "Vehicle Dynamics Fundamentals",
  "Manufacturing & Assembly Techniques",
  "Structural Analysis with ANSYS",
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          Hands-on at the{" "}
          <span className="text-gradient">shop floor</span>.
        </>
      }
      subtitle="Bridging classroom theory with production reality through industrial exposure."
    >
      {/* IP Rings Internship */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass relative overflow-hidden rounded-2xl p-8 sm:p-10"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent-glow text-primary-foreground">
              <Building2 className="h-7 w-7" />
            </div>

            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-primary">
                Internship
              </div>

              <h3 className="mt-1 text-2xl font-bold">IP Rings Ltd.</h3>

              <p className="text-sm text-muted-foreground">
                New Product Development (NPD) Department · 1 Month
              </p>
            </div>
          </div>

          <div className="rounded-full border border-border bg-surface/60 px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Industry · NPD
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {internshipLearnings.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-lg border border-border/60 bg-surface/40 p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Team AJNA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="glass relative overflow-hidden rounded-2xl p-8 sm:p-10 mt-8"
      >
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent-glow text-primary-foreground">
              <CarFront className="h-7 w-7" />
            </div>

            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-primary">
                Student Team
              </div>

              <h3 className="mt-1 text-2xl font-bold">Team AJNA</h3>

              <p className="text-sm text-muted-foreground">
                Official Go-Kart Racing Team · Chennai Institute of Technology
              </p>
            </div>
          </div>

          <div className="rounded-full border border-border bg-surface/60 px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Vehicle Building · Go-Kart
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {teamAjnaLearnings.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-lg border border-border/60 bg-surface/40 p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
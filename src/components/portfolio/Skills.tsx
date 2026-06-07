import { motion } from "framer-motion";
import { Section } from "./Section";

const skills = [
  { name: "AutoCAD", level: 80, tag: "CAD" },
  { name: "SOLIDWORKS", level: 70, tag: "CAD" },
  { name: "GD&T", level: 85, tag: "Mechanical Tolerancing and Design" },
  { name: "Ansys", level: 60, tag: "Simulation" },
  { name: "Manufacturing Fundamentals", level: 75, tag: "Process" },
  { name: "Vehicle Dynamics", level: 70, tag: "Classical Mechanics" },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>Tools of the <span className="text-gradient">trade</span>.</>}
      subtitle="The CAD platforms, drafting standards, and engineering disciplines I'm actively building expertise in."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass group rounded-xl p-5 transition-all hover:border-primary/40"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-base font-semibold">{s.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.tag}
                </div>
              </div>
              <div className="font-mono text-sm text-primary">{s.level}%</div>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.06, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent-glow"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

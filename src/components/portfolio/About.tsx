import { motion } from "framer-motion";
import { GraduationCap, Target, Wrench } from "lucide-react";
import { Section } from "./Section";

const points = [
  {
    icon: GraduationCap,
    title: "Second-Year B.E. Student",
    body: "Studying Mechanical Engineering at Chennai Institute of Technology, building strong fundamentals in design and manufacturing.",
  },
  {
    icon: Wrench,
    title: "Passion for Design",
    body: "Deeply interested in CAD modeling, manufacturing processes, product development, and automotive engineering.",
  },
  {
    icon: Target,
    title: "Career Goal",
    body: "To become a Mechanical Design Engineer building precision-driven products for the mobility and aerospace industries.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Engineer in the <span className="text-gradient">making</span>.</>}
      subtitle="A second-year Mechanical Engineering student turning curiosity into precision — one CAD file at a time."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />
            <p.icon className="h-8 w-8 text-primary" />
            <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

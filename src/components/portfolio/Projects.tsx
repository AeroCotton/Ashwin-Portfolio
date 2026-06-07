import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import kart from "@/assets/Go kart assem.png";
import gear from "@/assets/Pole Wheel.png";
import cad from "@/assets/Industrial arm.png";
import auto from "@/assets/Solar Tracking dual axis.png";

const projects = [
  {
    img: kart,
    tag: "Automotive",
    title: "Go-Kart Design Learning Journey",
    body: "Studying chassis geometry, steering kinematics and braking dynamics — building toward a full SAE-style kart design.",
  },
  {
    img: cad,
    tag: "Automation Machinery",
    title: "Industrial Robotic Arm Assembly",
    body: "Designed and assembled a 3D robotic arm in SOLIDWORKS with multiple joints and a gripper mechanism for automated material handling applications.",
  },
  {
    img: gear,
    tag: "Power Transmission",
    title: "Pole Wheel Design Study",
    body: "Designed and modeled a Pole Wheel using SOLIDWORKS during my internship at IP Rings Ltd., developing practical skills in industrial CAD design and mechanical component modeling.",
  },
  {
    img: auto,
    tag: "Future Work",
    title: "Dual Axis Solar Tracking System",
    body: "Designed and modeled a Dual Axis Solar Tracking System in SOLIDWORKS to optimize solar panel orientation and maximize sunlight exposure for improved energy efficiency.",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Selected <span className="text-gradient">work</span>.</>}
      subtitle="Early-career projects and ongoing studies focused on mechanical design, CAD, and automotive systems."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="glass group relative overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary backdrop-blur">
                {p.tag}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

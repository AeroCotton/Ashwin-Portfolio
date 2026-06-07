import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "./Section";

const certs = [
  { title: "Certified SolidWorks Associate (CSWA)", issuer: "Dassault Systèmes", year: "2025" },
  { title: "AutoCAD 2D & 3D Mechanical", issuer: "Online Coursework", year: "2025" },
  { title: "Certified SolidWorks Professional (CSWP)", issuer: "Dassault Systèmes", year: "2026" },
  { title: "Internship Completion in NPD Department", issuer: "IP Rings Ltd.", year: "2026" },
  { title: "Go Kart Design Challenge - GKDC", issuer: "ISNEE Motorsports", year: "2026" },
  { title: "Formula Karting Racing Championship - FKRC", issuer: "AIMS Academy", year: "2026" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title={<>Certifications & <span className="text-gradient">learning</span>.</>}
      subtitle="Ongoing coursework and recognitions earned along the way."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="glass flex items-center gap-4 rounded-xl p-5 transition-all hover:border-primary/40"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-border bg-surface text-primary">
              <Award className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="text-base font-semibold">{c.title}</div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {c.issuer} · {c.year}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

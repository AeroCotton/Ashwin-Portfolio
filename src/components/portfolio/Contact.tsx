import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const channels = [
  { icon: Mail, label: "Email", value: "ashwin21.krish@gmail.com", href: "mailto:ashwin21.krish@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ashwinb-mech", href: "https://www.linkedin.com/in/ashwinb-mech" },
  { icon: Github, label: "GitHub", value: "github.com/Ashwin-2112", href: "https://github.com/Ashwin-2112" },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build <span className="text-gradient">something</span>.</>}
      subtitle="Open to internships, collaborations, and conversations about mechanical design, CAD, and automotive engineering."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {channels.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass group flex items-center justify-between rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent-glow text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </div>
                <div className="text-sm font-semibold text-foreground">{c.value}</div>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

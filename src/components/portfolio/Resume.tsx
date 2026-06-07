import { motion } from "framer-motion";
import { FileDown, Eye } from "lucide-react";
import { Section } from "./Section";
import resumedownload from "@/assets/Sample.pdf";

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title={<>Get the <span className="text-gradient">full picture</span>.</>}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl p-8 sm:p-10 md:flex-row md:items-center"
      >
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-accent-glow/10 blur-3xl" />
        <div className="max-w-xl">
          <h3 className="text-2xl font-bold sm:text-3xl">Resume — Ashwin B</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            A concise overview of my education, internship at IP Rings (NPD),
            CAD skill set, and design-focused projects — formatted for recruiters
            and design teams.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={resumedownload}
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent-glow px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
          >
            <FileDown className="h-4 w-4" />
            Download PDF
          </a>
          <a
            href="https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-elevated"
          >
            <Eye className="h-4 w-4" />
            Preview Online
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

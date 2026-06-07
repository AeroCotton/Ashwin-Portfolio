import { motion } from "framer-motion";
import { Section } from "./Section";
import kart from "@/assets/Gate valve.png";
import gear from "@/assets/Lofted valve.png";
import cad from "@/assets/Chassis.png";
import auto from "@/assets/Stub-axle.png";
import hero from "@/assets/Pole wheel 1.png";
import housing from "@/assets/Housing part.png";
import rotor from "@/assets/Rotor shaft.png";
import arm from "@/assets/Arm.png";

const items = [
  { img: cad, label: "Gokart Chassis Model", span: "md:col-span-2 md:row-span-2" },
  { img: gear, label: "Plug Valve 3D" },
  { img: kart, label: "Gate Valve Design" },
  { img: auto, label: "Stub axle Model", span: "md:col-span-2" },
  { img: hero, label: "Pole Wheel 3D" },
  { img: housing, label: "Housing Mechanical Part" },
  { img: rotor, label: "Rotor Shaft 3D" },
  { img: arm, label: "Industrial Arm model" },
];

export function Gallery() {
  return (
    <Section
      id="gallery"
      eyebrow="Portfolio"
      title={<>Engineering <span className="text-gradient">gallery</span>.</>}
      subtitle="CAD renderings, technical drawings, and snapshots from the workshop and internship floor."
    >
      <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((it, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`group relative overflow-hidden rounded-xl border border-border ${it.span ?? ""}`}
          >
            <img
              src={it.img}
              alt={it.label}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <figcaption className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-foreground">
              {it.label}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

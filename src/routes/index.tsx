import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Gallery } from "@/components/portfolio/Gallery";
import { Certifications } from "@/components/portfolio/Certifications";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashwin B — Mechanical Design Engineer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Ashwin B, Mechanical Engineering student at Chennai Institute of Technology. CAD design, SOLIDWORKS, AutoCAD, gear design, and automotive engineering projects.",
      },
      { property: "og:title", content: "Ashwin B — Mechanical Design Engineer Portfolio" },
      {
        property: "og:description",
        content:
          "Designing the future through engineering — CAD modeling, mechanical design, and automotive projects by Ashwin B.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Gallery />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}

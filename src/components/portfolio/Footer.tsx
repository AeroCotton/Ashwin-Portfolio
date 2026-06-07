import profile from "@/assets/Ashwin_img.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <img
              src={profile}
              alt="Ashwin B"
              className="h-8 w-8 rounded-full object-cover border-1 border-primary shadow-sm"
          />
          <div className="text-sm">
            <div className="font-semibold">Ashwin B</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Mechanical Engineering · CIT Chennai
            </div>
          </div>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ashwin B · Designed & engineered with precision.
        </p>
      </div>
    </footer>
  );
}

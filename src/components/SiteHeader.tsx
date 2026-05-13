export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 w-full bg-sidebar/95 backdrop-blur border-b border-sidebar-border text-sidebar-foreground">
      <div className="px-6 md:px-10 py-3 md:py-4 flex items-center justify-between pl-16 md:pl-6">
        <div>
          <h1 className="font-display text-xl md:text-2xl tracking-wide text-sidebar-accent leading-none">
            SCULPTURE
          </h1>
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-sidebar-foreground/60 mt-1">
            3 & 4 BHK Duplex Living · Ognaj, Ahmedabad
          </p>
        </div>
        <div className="hidden sm:block text-right pr-12 md:pr-16">
          <p className="text-[10px] uppercase tracking-[0.25em] text-sidebar-foreground/60">By</p>
          <p className="font-display text-sm md:text-base text-sidebar-accent">Vibgyor Reality</p>
        </div>
      </div>
    </header>
  );
}

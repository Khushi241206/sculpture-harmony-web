import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/logo.jpeg";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/amenities", label: "Amenities" },
  { to: "/floor-plan", label: "Floor Plan" },
  { to: "/gallery", label: "Gallery" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const path = useRouterState({ select: (r) => r.location.pathname });

  return (
    <header className="sticky top-0 z-30 w-full bg-sidebar/95 backdrop-blur border-b border-sidebar-border text-sidebar-foreground">
      <div className="px-4 md:px-10 py-3 md:py-4 flex items-center justify-between gap-4 pl-16 md:pl-10">
        {/* Left: logo + wordmark */}
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <div className="bg-background/90 rounded-md p-1 shadow-elegant border border-border shrink-0">
            <img src={logo} alt="Sculpture by Vibgyor Reality" className="h-8 md:h-10 w-auto" />
          </div>
          <div className="min-w-0">
            <h1 className="font-display text-lg md:text-2xl tracking-wide text-sidebar-accent leading-none truncate">
              SCULPTURE
            </h1>
            <p className="hidden sm:block text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-sidebar-foreground/60 mt-1">
              3 & 4 BHK Duplex · Ognaj, Ahmedabad
            </p>
          </div>
        </Link>

        {/* Right: desktop nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((it) => {
            const active = path === it.to;
            return (
              <Link
                key={it.to}
                to={it.to}
                className={`px-3 py-2 rounded-md text-sm tracking-wide transition-all ${
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-elegant"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/20 hover:text-sidebar-accent"
                }`}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

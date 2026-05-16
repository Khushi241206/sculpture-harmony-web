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
    <header className="sticky top-0 z-30 w-full bg-sidebar/95 backdrop-blur-md border-b border-sidebar-border text-sidebar-foreground shadow-elegant">
      <div className="px-4 md:px-8 lg:px-12 py-3 md:py-4 flex items-center gap-4 pl-16 md:pl-8">
        {/* Left: logo + wordmark */}
        <Link to="/" className="flex items-center gap-3 min-w-0 shrink-0">
          <div className="bg-background/90 rounded-md p-1 shadow-elegant border border-border shrink-0">
            <img src={logo} alt="Sculpture by Vibgyor Reality" className="h-8 md:h-9 w-auto" />
          </div>
          <div className="min-w-0 hidden sm:block">
            <h1 className="font-display text-lg md:text-xl lg:text-2xl tracking-wide text-sidebar-accent leading-none truncate">
              SCULPTURE
            </h1>
            <p className="hidden xl:block text-[10px] uppercase tracking-[0.25em] text-sidebar-foreground/60 mt-1">
              3 & 4 BHK Duplex · Ognaj
            </p>
          </div>
        </Link>

        {/* Right: desktop nav, pushed to the end so it never overlaps the logo */}
        <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 ml-auto">
          {navItems.map((it) => {
            const active = path === it.to;
            return (
              <Link
                key={it.to}
                to={it.to}
                className={`px-2.5 lg:px-3 py-2 rounded-md text-[13px] lg:text-sm tracking-wide transition-all whitespace-nowrap ${
                  active
                    ? "text-sidebar-accent font-semibold"
                    : "text-sidebar-foreground/75 hover:text-sidebar-accent"
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

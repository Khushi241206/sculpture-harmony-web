import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Building2, Sparkles, LayoutGrid, Image as ImageIcon, MapPin, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Building2 },
  { to: "/amenities", label: "Amenities", icon: Sparkles },
  { to: "/floor-plan", label: "Floor Plan", icon: LayoutGrid },
  { to: "/gallery", label: "Gallery", icon: ImageIcon },
  { to: "/location", label: "Location", icon: MapPin },
  { to: "/contact", label: "Contact", icon: Phone },
];

export function SiteSidebar() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (r) => r.location.pathname });

  return (
    <>
      {/* Mobile toggle */}
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-40 md:hidden rounded-full bg-sidebar text-sidebar-foreground p-3 shadow-elegant"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-sidebar text-sidebar-foreground flex flex-col border-r border-sidebar-border transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-6 border-b border-sidebar-border">
          <div>
            <h2 className="font-display text-2xl tracking-wide text-sidebar-accent">SCULPTURE</h2>
            <p className="text-[10px] uppercase tracking-[0.2em] text-sidebar-foreground/60 mt-1">3 & 4 BHK Duplex</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-sidebar-foreground"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {items.map((it) => {
            const active = path === it.to;
            return (
              <Link
                key={it.to}
                to={it.to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm transition-all ${
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-elegant"
                    : "hover:bg-sidebar-accent/20 text-sidebar-foreground/80"
                }`}
              >
                <it.icon className="h-4 w-4" />
                <span className="tracking-wide">{it.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-sidebar-border text-xs text-sidebar-foreground/60">
          <p className="mb-1">Vibgyor Reality</p>
          <p>Developed by Team Atul</p>
          <p className="mt-3 text-[10px] leading-relaxed">RERA: PR/GJ/AHMEDABAD/<br/>RAA14582/261224/301229</p>
        </div>
      </aside>
    </>
  );
}

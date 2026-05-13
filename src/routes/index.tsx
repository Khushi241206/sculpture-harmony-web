import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building, Trees, Home as HomeIcon, Calendar } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sculpture — Luxury 3 & 4 BHK Duplex Homes in Ahmedabad" },
      { name: "description", content: "Discover Sculpture by Vibgyor Reality: 154 modern duplex residences across 1.37 acres in Ognaj, Ahmedabad." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/video.mp4"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="relative z-10 h-full flex flex-col justify-end md:justify-center px-6 md:px-16 pb-20 md:pb-0">
          <p className="text-primary-foreground/80 tracking-[0.3em] text-xs md:text-sm uppercase mb-4">Vibgyor Reality presents</p>
          <h1 className="font-display text-5xl md:text-8xl text-white leading-none mb-6">
            Sculpture
          </h1>
          <p className="text-white/90 text-lg md:text-2xl max-w-2xl mb-2 font-light">
            3 & 4 BHK Duplex Living & Shops
          </p>
          <p className="text-white/70 text-sm md:text-base max-w-xl mb-8">
            Modern bungalow-style homes on S.P. Ring Road, Ognaj, Ahmedabad
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/about" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition shadow-elegant">
              Explore Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white px-6 py-3 rounded-md hover:bg-white/20 transition">
              Contact Developer
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="py-20 px-6 md:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { icon: Building, label: "Total Units", val: "154" },
              { icon: HomeIcon, label: "Buildings", val: "6" },
              { icon: Trees, label: "Open Space", val: "40%" },
              { icon: Calendar, label: "Possession", val: "Oct 2027" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left p-6 rounded-lg bg-card border border-border shadow-elegant">
                <s.icon className="h-6 w-6 text-primary mx-auto md:mx-0 mb-3" />
                <div className="font-display text-3xl md:text-4xl text-gradient-copper">{s.val}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 px-6 md:px-16 bg-secondary/40">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Why Sculpture</p>
          <h2 className="font-display text-4xl md:text-5xl mb-12 max-w-2xl">When imagination shapes a home.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Within 7.5 km of Science City", "Connected, central, convenient."],
              ["40% Open Green Space", "Breathable layouts across 1.37 acres."],
              ["Mini Theatre & Games Area", "Indoor recreation, every day."],
              ["Artistic Water Cascade", "A signature centerpiece."],
              ["Lift Access in Duplex", "Effortless vertical living."],
              ["Eco-Friendly Practices", "Solar, RO, sensor-operated systems."],
            ].map(([t, d]) => (
              <div key={t} className="bg-card p-6 rounded-lg border border-border hover:border-primary/40 transition">
                <h3 className="text-lg font-semibold mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto bg-gradient-copper rounded-2xl p-10 md:p-16 text-primary-foreground shadow-elegant">
          <p className="text-xs tracking-[0.3em] uppercase opacity-80 mb-3">Starting at</p>
          <div className="font-display text-5xl md:text-7xl mb-2">₹1.65 Cr*</div>
          <p className="opacity-90 mb-6">All inclusive · 324 sq.yd · 3 BHK Duplex</p>
          <p className="text-sm opacity-80 mb-8">EMI starts at ₹81.92K/month · Avg ₹40.13K/sq.yd</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-md hover:bg-background/90 transition">
            Request Brochure <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

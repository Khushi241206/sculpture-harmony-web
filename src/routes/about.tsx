import { createFileRoute } from "@tanstack/react-router";
import aboutHero from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sculpture — Vibgyor Reality" },
      { name: "description", content: "About Sculpture: residential project by Vibgyor Reality, developed by Team Atul, in Ognaj, Ahmedabad." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen pb-20 bg-background">
      {/* Hero */}
      <div className="relative h-[40vh] md:h-[55vh] overflow-hidden">
        <img src={aboutHero} alt="Sculpture project exterior" className="absolute inset-0 w-full h-full object-cover" width={1536} height={768} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="relative h-full flex flex-col justify-end px-6 md:px-16 pb-10 max-w-6xl mx-auto">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">About the Project</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground">A Magnum Opus of Modern Living.</h1>
          <p className="text-muted-foreground max-w-2xl mt-4">
            A residential masterpiece by Vibgyor Reality on 1.37 acres in Ognaj, Ahmedabad — duplex homes,
            premium retail, and 21 curated amenities.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-16 max-w-5xl mx-auto mt-12">

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-2xl mb-6 text-primary">Project Identity</h2>
            <dl className="space-y-3 text-sm">
              {[
                ["Developer", "Vibgyor Reality (Team Atul)"],
                ["Type", "Residential Apartment Complex"],
                ["Status", "Under Construction"],
                ["Configuration", "3 & 4 BHK Duplex + Shops"],
                ["Total Units", "154"],
                ["Buildings", "6"],
                ["Project Area", "1.37 Acres"],
                ["Open Space", "40%"],
                ["Launch", "September 2024"],
                ["Possession", "October 2027"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-border/60 pb-2">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-2xl mb-6 text-primary">Pricing</h2>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider">3 BHK Apartment</div>
                <div className="font-display text-3xl text-gradient-copper">₹1.65 Cr*</div>
                <div className="text-xs text-muted-foreground">All inclusive · 324 sq.yd</div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <div className="text-muted-foreground text-xs">Avg. Price</div>
                  <div className="font-medium">₹40.13K/sq.yd</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">EMI from</div>
                  <div className="font-medium">₹81.92K/mo</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Appreciation (1Y)</div>
                  <div className="font-medium text-primary">+12.94%</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Avg Rate</div>
                  <div className="font-medium">₹5.6K/sq.ft</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary/40 rounded-lg p-8 mb-12">
          <h2 className="font-display text-2xl mb-4 text-primary">Specifications</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            {[
              ["Living / Dining", "Vitrified Tiles"],
              ["Master Bedroom", "Vitrified Tiles"],
              ["Other Bedrooms", "Vitrified Floor Tiles"],
              ["Kitchen", "Vitrified Tiles"],
            ].map(([a, m]) => (
              <div key={a} className="flex justify-between bg-card p-4 rounded">
                <span className="text-muted-foreground">{a}</span>
                <span className="font-medium">{m}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          RERA ID: PR/GJ/AHMEDABAD/AHMEDABAD CITY/Ahmedabad Municipal Corporation/RAA14582/261224/301229
        </p>
      </div>
    </div>
  );
}

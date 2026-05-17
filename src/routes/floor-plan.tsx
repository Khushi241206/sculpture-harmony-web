import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import floorPlan from "@/assets/floor-plan.jpeg";
import floorPlan4BHK from "@/assets/floor-plan-4bhk.jpeg";
import floorplanHero from "@/assets/floorplan-hero.jpg";

export const Route = createFileRoute("/floor-plan")({
  head: () => ({
    meta: [
      { title: "Floor Plan — Sculpture 3 & 4 BHK Duplex" },
      { name: "description", content: "Detailed 3 BHK and 4 BHK lower & upper level floor plans at Sculpture, Ahmedabad." },
    ],
  }),
  component: FloorPlan,
});

const plans = {
  "3bhk": {
    label: "3 BHK Duplex",
    title: "3 BHK Duplex — Lower & Upper Level",
    subtitle: "324 sq.yd · Spacious, light-filled, and thoughtfully zoned across two levels.",
    image: floorPlan,
    price: "₹1.65 Cr",
    emi: "₹81.92K",
    rooms: [
      ["Bedroom 1 (Lower)", "11'0\" × 12'0\""],
      ["Bedroom 2 (Upper)", "11'0\" × 17'0\""],
      ["Bedroom 3 (Upper)", "11'0\" × 16'0\""],
      ["Kitchen-Dining", "10'9\" × 18'0\""],
      ["Drawing", "11'0\" × 10'0\""],
      ["Verandah", "16'5\" × 7'0\""],
      ["Foyer (Lower)", "10'0\" × 24'0\""],
      ["Balcony", "11'0\" × 6'5\""],
    ],
  },
  "4bhk": {
    label: "4 BHK Duplex",
    title: "4 BHK Duplex — Lower & Upper Level",
    subtitle: "Expansive duplex layout with grand foyer, four bedrooms, and twin balconies.",
    image: floorPlan4BHK,
    price: "₹2.10 Cr*",
    emi: "₹1.04 L",
    rooms: [
      ["Foyer (Lower)", "23'9\" × 12'6\""],
      ["Kitchen", "9'6\" × 11'0\""],
      ["Dining", "12'9\" × 10'9\""],
      ["Drawing", "11'9\" × 18'3\""],
      ["Bedroom 1 (Lower)", "10'9\" × 14'3\""],
      ["Bedroom 2 (Upper)", "10'9\" × 17'3\""],
      ["Bedroom 3 (Upper)", "11'9\" × 16'9\""],
      ["Bedroom 4 (Upper)", "10'9\" × 11'0\""],
      ["Verandah", "10'9\" × 7'0\""],
      ["Balcony", "10'0\" × 3'9\""],
    ],
  },
} as const;

type PlanKey = keyof typeof plans;

function FloorPlan() {
  const [active, setActive] = useState<PlanKey>("3bhk");
  const plan = plans[active];

  return (
    <div className="min-h-screen pb-20 bg-background">
      {/* Hero */}
      <div className="relative h-[40vh] md:h-[55vh] overflow-hidden">
        <img src={floorplanHero} alt="Sculpture floor plans" className="absolute inset-0 w-full h-full object-cover" width={1536} height={768} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="relative h-full flex flex-col justify-end px-6 md:px-16 pb-10 max-w-6xl mx-auto">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Floor Plan</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground">Duplex Residences.</h1>
          <p className="text-muted-foreground max-w-2xl mt-4">
            Explore the 3 BHK and 4 BHK duplex unit plans — crafted for premium living across two levels.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-16 max-w-6xl mx-auto mt-12">
        {/* Tabs */}
        <div className="inline-flex bg-card border border-border rounded-full p-1 mb-8 shadow-elegant">
          {(Object.keys(plans) as PlanKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition ${
                active === key
                  ? "bg-gradient-copper text-primary-foreground shadow-elegant"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {plans[key].label}
            </button>
          ))}
        </div>

        <h2 className="font-display text-3xl md:text-4xl mb-2">{plan.title}</h2>
        <p className="text-muted-foreground mb-8">{plan.subtitle}</p>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-card border border-border rounded-2xl overflow-hidden p-4 md:p-6 shadow-elegant">
            <img
              src={plan.image}
              alt={`Sculpture ${plan.label} floor plan — lower and upper levels`}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display text-2xl mb-4 text-primary">Room Dimensions</h3>
              <table className="w-full text-sm">
                <tbody>
                  {plan.rooms.map(([r, d]) => (
                    <tr key={r} className="border-b border-border last:border-0">
                      <td className="py-3 text-muted-foreground">{r}</td>
                      <td className="py-3 text-right font-medium">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-secondary/40 rounded-2xl p-6">
              <h3 className="font-display text-xl mb-3 text-primary">Pricing Snapshot</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground text-xs">Total Price</div>
                  <div className="font-display text-2xl text-gradient-copper">{plan.price}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">EMI from</div>
                  <div className="font-display text-2xl text-gradient-copper">{plan.emi}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

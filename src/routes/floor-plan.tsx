import { createFileRoute } from "@tanstack/react-router";
import floorPlan from "@/assets/floor-plan.jpeg";

export const Route = createFileRoute("/floor-plan")({
  head: () => ({
    meta: [
      { title: "Floor Plan — Sculpture 3 BHK Duplex" },
      { name: "description", content: "Detailed 3 BHK lower & upper level floor plan at Sculpture, Ahmedabad." },
    ],
  }),
  component: FloorPlan,
});

const rooms = [
  ["Bedroom 1 (Lower)", "11'0\" × 12'0\""],
  ["Bedroom 2 (Upper)", "11'0\" × 17'0\""],
  ["Bedroom 3 (Upper)", "11'0\" × 16'0\""],
  ["Kitchen-Dining", "10'9\" × 18'0\""],
  ["Drawing", "11'0\" × 10'0\""],
  ["Verandah", "16'5\" × 7'0\""],
  ["Foyer (Lower)", "10'0\" × 24'0\""],
  ["Balcony", "11'0\" × 6'5\""],
];

function FloorPlan() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Floor Plan</p>
        <h1 className="font-display text-5xl md:text-6xl mb-4">3 BHK Duplex — Lower & Upper Level</h1>
        <p className="text-muted-foreground mb-12">324 sq.yd · Spacious, light-filled, and thoughtfully zoned across two levels.</p>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-card border border-border rounded-2xl overflow-hidden p-4 md:p-6 shadow-elegant">
            <img
              src={floorPlan}
              alt="Sculpture 3 BHK Duplex floor plan — lower and upper levels"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="font-display text-2xl mb-4 text-primary">Room Dimensions</h2>
              <table className="w-full text-sm">
                <tbody>
                  {rooms.map(([r, d]) => (
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
                  <div className="font-display text-2xl text-gradient-copper">₹1.65 Cr</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">EMI from</div>
                  <div className="font-display text-2xl text-gradient-copper">₹81.92K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

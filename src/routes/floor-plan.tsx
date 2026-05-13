import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/floor-plan")({
  head: () => ({
    meta: [
      { title: "Floor Plan — Sculpture 3 BHK Duplex" },
      { name: "description", content: "Detailed 3 BHK upper floor plan at Sculpture, Ahmedabad." },
    ],
  }),
  component: FloorPlan,
});

const rooms = [
  ["Bedroom 1", "11'0\" × 16'0\""],
  ["Bedroom 2", "11'0\" × 17'6\""],
  ["Bathroom 1", "10'0\" × 5'0\""],
  ["Bathroom 2", "5'0\" × 10'6\""],
  ["Entrance Foyer", "16'3\" × 4'9\""],
  ["Balcony", "16'0\" × 7'0\""],
];

function FloorPlan() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20 px-6 md:px-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Floor Plan</p>
        <h1 className="font-display text-5xl md:text-6xl mb-4">3 BHK Duplex — Upper Floor</h1>
        <p className="text-muted-foreground mb-12">324 sq.yd · Spacious, light-filled, and thoughtfully zoned.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="aspect-[4/5] bg-secondary flex items-center justify-center p-12">
              {/* Stylized floor plan */}
              <svg viewBox="0 0 400 500" className="w-full h-full">
                <rect x="20" y="20" width="360" height="460" fill="none" stroke="var(--primary)" strokeWidth="3"/>
                <rect x="20" y="20" width="180" height="200" fill="var(--secondary)" stroke="var(--primary)" strokeWidth="2"/>
                <text x="110" y="125" textAnchor="middle" fill="var(--foreground)" fontSize="14" fontWeight="600">Bedroom 1</text>
                <text x="110" y="145" textAnchor="middle" fill="var(--muted-foreground)" fontSize="11">11'×16'</text>

                <rect x="200" y="20" width="180" height="220" fill="var(--secondary)" stroke="var(--primary)" strokeWidth="2"/>
                <text x="290" y="135" textAnchor="middle" fill="var(--foreground)" fontSize="14" fontWeight="600">Bedroom 2</text>
                <text x="290" y="155" textAnchor="middle" fill="var(--muted-foreground)" fontSize="11">11'×17'6"</text>

                <rect x="20" y="220" width="120" height="100" fill="var(--card)" stroke="var(--primary)" strokeWidth="2"/>
                <text x="80" y="270" textAnchor="middle" fill="var(--foreground)" fontSize="12" fontWeight="600">Bath 1</text>

                <rect x="140" y="220" width="60" height="160" fill="var(--card)" stroke="var(--primary)" strokeWidth="2"/>
                <text x="170" y="305" textAnchor="middle" fill="var(--foreground)" fontSize="11" fontWeight="600" transform="rotate(-90 170 305)">Foyer</text>

                <rect x="200" y="240" width="180" height="100" fill="var(--card)" stroke="var(--primary)" strokeWidth="2"/>
                <text x="290" y="295" textAnchor="middle" fill="var(--foreground)" fontSize="12" fontWeight="600">Bath 2</text>

                <rect x="20" y="320" width="360" height="160" fill="var(--accent)" opacity="0.3" stroke="var(--primary)" strokeWidth="2"/>
                <text x="200" y="405" textAnchor="middle" fill="var(--foreground)" fontSize="14" fontWeight="600">Balcony</text>
                <text x="200" y="425" textAnchor="middle" fill="var(--muted-foreground)" fontSize="11">16'×7'</text>
              </svg>
            </div>
          </div>

          <div>
            <div className="bg-card border border-border rounded-lg p-6">
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

            <div className="mt-6 bg-secondary/40 rounded-lg p-6">
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

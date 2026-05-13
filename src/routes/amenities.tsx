import { createFileRoute } from "@tanstack/react-router";
import { Dumbbell, Baby, Film, Gamepad2, ArrowUpDown, Trees, Droplets, Sun, ScanLine, Flame, Waves, Sparkles } from "lucide-react";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities — Sculpture by Vibgyor Reality" },
      { name: "description", content: "21 amazing amenities at Sculpture: gym, mini theatre, water cascade, solar power, and more." },
    ],
  }),
  component: Amenities,
});

const amenities = [
  { icon: Dumbbell, label: "Gymnasium" },
  { icon: Baby, label: "Children's Play Area" },
  { icon: Film, label: "Mini Theatre" },
  { icon: Gamepad2, label: "Board Games" },
  { icon: ArrowUpDown, label: "Lift(s)" },
  { icon: Trees, label: "Landscaping & Tree Planting" },
  { icon: Droplets, label: "RO Water System" },
  { icon: Sun, label: "Solar Power System" },
  { icon: ScanLine, label: "Sensor Operated Doors & Lifts" },
  { icon: Flame, label: "Fire Fighting System" },
  { icon: Waves, label: "24×7 Water Supply" },
  { icon: Sparkles, label: "Artistic Water Cascade" },
];

function Amenities() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Amenities</p>
        <h1 className="font-display text-5xl md:text-6xl mb-4">21 Amazing Amenities.</h1>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Curated for everyday delight — from wellness and recreation to sustainable living systems.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities.map((a) => (
            <div key={a.label} className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-elegant">
              <a.icon className="h-8 w-8 text-primary mb-4" />
              <p className="text-sm font-medium">{a.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-copper text-primary-foreground rounded-2xl p-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-3">A Distinct Lifestyle</h2>
          <p className="opacity-90 max-w-2xl mx-auto">
            Avant-garde clubhouse, library, café, dedicated kids zone, and a signature water cascade —
            crafted to make every day feel curated.
          </p>
        </div>
      </div>
    </div>
  );
}

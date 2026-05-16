import { createFileRoute } from "@tanstack/react-router";
import { Dumbbell, Baby, Film, Gamepad2, ArrowUpDown, Trees, Droplets, Sun, ScanLine, Flame, Waves, Sparkles, BookOpen, Coffee, Shield, Car, Wifi, Music, Users, Wind, Camera } from "lucide-react";
import amenitiesHero from "@/assets/amenities-hero.jpg";

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
  { icon: Dumbbell, label: "Gymnasium", desc: "Fully-equipped fitness studio" },
  { icon: Baby, label: "Kids Play Area", desc: "Safe, joyful spaces" },
  { icon: Film, label: "Mini Theatre", desc: "Private screenings" },
  { icon: Gamepad2, label: "Board Games", desc: "Indoor recreation lounge" },
  { icon: ArrowUpDown, label: "High-speed Lifts", desc: "Sensor-operated" },
  { icon: Trees, label: "Landscaping", desc: "40% open green space" },
  { icon: Droplets, label: "RO Water System", desc: "Pure drinking water" },
  { icon: Sun, label: "Solar Power", desc: "Sustainable common areas" },
  { icon: ScanLine, label: "Sensor Doors", desc: "Touchless entry" },
  { icon: Flame, label: "Fire Safety", desc: "Modern fire-fighting system" },
  { icon: Waves, label: "24×7 Water Supply", desc: "Always available" },
  { icon: Sparkles, label: "Water Cascade", desc: "Signature artistic feature" },
  { icon: BookOpen, label: "Library", desc: "Curated reading lounge" },
  { icon: Coffee, label: "Café", desc: "On-site refreshments" },
  { icon: Shield, label: "24×7 Security", desc: "CCTV-monitored" },
  { icon: Car, label: "Covered Parking", desc: "Dedicated bays" },
  { icon: Wifi, label: "Hi-Speed Wi-Fi", desc: "In common zones" },
  { icon: Music, label: "Banquet Hall", desc: "Celebrate in style" },
  { icon: Users, label: "Clubhouse", desc: "Avant-garde community space" },
  { icon: Wind, label: "Cross Ventilation", desc: "Natural airflow design" },
  { icon: Camera, label: "Smart Surveillance", desc: "AI-assisted CCTV" },
];

function Amenities() {
  return (
    <div className="min-h-screen pb-20 bg-background">
      {/* Hero */}
      <div className="relative h-[40vh] md:h-[55vh] overflow-hidden">
        <img src={amenitiesHero} alt="Sculpture amenities" className="absolute inset-0 w-full h-full object-cover" width={1536} height={768} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="relative h-full flex flex-col justify-end px-6 md:px-16 pb-10 max-w-6xl mx-auto">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Amenities</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground">21 Amazing Amenities.</h1>
          <p className="text-muted-foreground max-w-2xl mt-4">
            Curated for everyday delight — wellness, recreation, and sustainable living.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-16 max-w-6xl mx-auto mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities.map((a, i) => (
            <div
              key={a.label}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-elegant overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-copper opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-copper text-primary-foreground mb-4 shadow-elegant">
                  <a.icon className="h-6 w-6" />
                </div>
                <p className="font-medium text-sm">{a.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
                <span className="absolute top-0 right-0 text-[10px] text-muted-foreground/60 font-display">{String(i + 1).padStart(2, "0")}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-copper text-primary-foreground rounded-2xl p-10 text-center shadow-elegant">
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

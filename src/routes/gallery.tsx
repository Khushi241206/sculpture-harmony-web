import { createFileRoute } from "@tanstack/react-router";
import collage from "@/assets/collage.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sculpture Residences" },
      { name: "description", content: "Renders, interiors, amenities and exteriors of Sculpture by Vibgyor Reality." },
    ],
  }),
  component: Gallery,
});

const captions = [
  "Magnum Opus — Exterior",
  "Aesthetic Landscaping",
  "Avant-Garde Lounge",
  "When Imagination Lives",
  "Waterbody & Pool Deck",
  "Gazebo Night View",
  "A Distinct Café",
  "Authentic Greens",
];

function Gallery() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Gallery</p>
        <h1 className="font-display text-5xl md:text-6xl mb-4">A visual brochure.</h1>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Renders and impressions from Sculpture — exteriors, interiors, amenity spaces, and landscape design.
        </p>

        {/* Featured collage */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-elegant border border-border">
          <img src={collage} alt="Sculpture project collage" className="w-full h-auto" />
        </div>

        {/* Caption tiles using cropped portions of the collage via background-position */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {captions.map((c, i) => (
            <div key={c} className="group relative aspect-square overflow-hidden rounded-lg shadow-elegant border border-border">
              <div
                className="absolute inset-0 bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${collage})`,
                  backgroundSize: "400% 400%",
                  backgroundPosition: `${(i % 4) * 33}% ${Math.floor(i / 4) * 33}%`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-xs uppercase tracking-widest opacity-80">0{i + 1}</p>
                <p className="text-white text-sm font-medium">{c}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

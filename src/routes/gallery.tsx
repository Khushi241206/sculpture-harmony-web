import { createFileRoute } from "@tanstack/react-router";
import g1 from "@/assets/gallery-1.jpeg";
import g2 from "@/assets/gallery-2.jpeg";
import g3 from "@/assets/gallery-3.jpeg";
import g4 from "@/assets/gallery-4.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sculpture Residences" },
      { name: "description", content: "Renders, interiors, amenities and exteriors of Sculpture by Vibgyor Reality." },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: g1, caption: "Magnum Opus — Tower Exterior" },
  { src: g2, caption: "Central Lawn & Kids' Play Area" },
  { src: g3, caption: "Library & Indoor Games Lounge" },
  { src: g4, caption: "Aerial View — Landscape Courtyard" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <figure
              key={it.caption}
              className="group relative overflow-hidden rounded-2xl shadow-elegant border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={it.src}
                  alt={it.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white/70 text-[10px] uppercase tracking-[0.3em]">0{i + 1}</p>
                <p className="text-white text-base md:text-lg font-medium">{it.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

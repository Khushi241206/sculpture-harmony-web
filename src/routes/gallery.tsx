import { createFileRoute } from "@tanstack/react-router";
import g1 from "@/assets/gallery-1.jpeg";
import g2 from "@/assets/gallery-2.jpeg";
import g3 from "@/assets/gallery-3.jpeg";
import g4 from "@/assets/gallery-4.jpeg";
import galleryHero from "@/assets/gallery-hero.jpg";

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
    <div className="min-h-screen pb-20 bg-background">
      {/* Hero */}
      <div className="relative h-[40vh] md:h-[55vh] overflow-hidden">
        <img src={galleryHero} alt="Sculpture interiors" className="absolute inset-0 w-full h-full object-cover" width={1536} height={768} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="relative h-full flex flex-col justify-end px-6 md:px-16 pb-10 max-w-7xl mx-auto">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Gallery</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground">A visual brochure.</h1>
          <p className="text-muted-foreground max-w-2xl mt-4">
            Renders and impressions from Sculpture — exteriors, interiors, amenity spaces, and landscape design.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-16 max-w-7xl mx-auto mt-12">

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

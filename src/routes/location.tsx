import { createFileRoute } from "@tanstack/react-router";
import { MapPin, GraduationCap, Bus, Hospital, ShoppingBag, Utensils, Plane, TrainFront } from "lucide-react";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location — Sculpture, Ognaj, Ahmedabad" },
      { name: "description", content: "Sculpture is at S.P. Ring Road, Ognaj Circle, Ahmedabad. Close to Science City, top schools, and major highways." },
    ],
  }),
  component: Location,
});

const landmarks = [
  { icon: GraduationCap, cat: "School", name: "SGVP International School" },
  { icon: Bus, cat: "Bus Stand", name: "Rakanpur Char Rasta Bus Stop" },
  { icon: Hospital, cat: "Hospital", name: "KD Hospital" },
  { icon: ShoppingBag, cat: "Mall", name: "Sonalben Khakhrawala" },
  { icon: Utensils, cat: "Restaurant", name: "Ociant Pizza" },
  { icon: TrainFront, cat: "Railway", name: "Khodiyar Railway Station" },
  { icon: Plane, cat: "Airport", name: "Ahmedabad International Airport" },
];

function Location() {
  // Map embed for Ognaj Circle, Ahmedabad
  const mapSrc = "https://www.google.com/maps?q=Ognaj+Circle,+S.P.+Ring+Road,+Ahmedabad,+Gujarat&output=embed";

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Location</p>
        <h1 className="font-display text-5xl md:text-6xl mb-4">Ognaj — On The Rise.</h1>
        <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          Opp. Sampriya Flat, B/h Stonac, B/h IOC Petrol Pump · S.P Ring Road, Ognaj Circle,
          North West, Ahmedabad. A fast-developing corridor on Sardar Patel Ring Road, connected via
          Sarkhej-Gandhinagar Highway and Gujarat SH-41.
        </p>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-border shadow-elegant mb-12">
          <iframe
            title="Sculpture project location"
            src={mapSrc}
            className="w-full h-[420px] md:h-[500px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl text-primary">Nearby Landmarks</h2>
            </div>
            <div className="space-y-4">
              {landmarks.map((l) => (
                <div key={l.name} className="flex items-start gap-3 pb-3 border-b border-border last:border-0">
                  <l.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{l.cat}</div>
                    <div className="font-medium">{l.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gradient-copper text-primary-foreground rounded-lg p-8 mb-6">
              <h2 className="font-display text-2xl mb-4">Locality Snapshot</h2>
              <ul className="space-y-3 text-sm opacity-95">
                <li>· Within 7.5 km of Science City</li>
                <li>· Hourly GSRTC bus service on ring road</li>
                <li>· 60 Societies, 48 Apartments, 16 Owner Properties</li>
                <li>· Rapid infra growth on SP Ring Road</li>
              </ul>
            </div>
            <div className="bg-secondary/40 rounded-lg p-8">
              <h3 className="font-display text-xl mb-4 text-primary">Price Trends</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Sculpture Appreciation (1Y)</span><span className="font-medium text-primary">+12.94%</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Sculpture Avg. Rate</span><span className="font-medium">₹5.6K/sq.ft</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Ognaj Locality Avg.</span><span className="font-medium">₹5.3K/sq.ft</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

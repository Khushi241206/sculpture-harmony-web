import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground border-t border-sidebar-border mt-20">
      <div className="px-6 md:px-10 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl tracking-wide text-sidebar-accent mb-2">SCULPTURE</h3>
          <p className="text-sm text-sidebar-foreground/70 leading-relaxed max-w-md">
            Luxurious 3 & 4 BHK duplex residences by Vibgyor Reality. 154 units across 1.37 acres
            with 21 amenities and 40% open green space.
          </p>
          <p className="mt-4 text-[10px] leading-relaxed text-sidebar-foreground/50">
            RERA: PR/GJ/AHMEDABAD/RAA14582/261224/301229
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-sidebar-accent mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-sidebar-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-sidebar-accent" />
              <a href="tel:+919998877665" className="hover:text-sidebar-accent">+91 99988 77665</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-sidebar-accent" />
              <a href="mailto:sales@vibgyorreality.com" className="hover:text-sidebar-accent">sales@vibgyorreality.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-sidebar-accent" />
              <span>Ognaj Circle, S.P. Ring Road,<br/>Ahmedabad, Gujarat</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-sidebar-accent mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-sidebar-foreground/80">
            <li><Link to="/about" className="hover:text-sidebar-accent">About Project</Link></li>
            <li><Link to="/amenities" className="hover:text-sidebar-accent">Amenities</Link></li>
            <li><Link to="/floor-plan" className="hover:text-sidebar-accent">Floor Plan</Link></li>
            <li><Link to="/gallery" className="hover:text-sidebar-accent">Gallery</Link></li>
            <li><Link to="/location" className="hover:text-sidebar-accent">Location</Link></li>
            <li><Link to="/contact" className="hover:text-sidebar-accent">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sidebar-border px-6 md:px-10 py-5 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs text-sidebar-foreground/50">
        <p>© {new Date().getFullYear()} Vibgyor Reality · Developed by Team Atul</p>
        <p>Possession Oct 2027 · Starting ₹1.65 Cr*</p>
      </div>
    </footer>
  );
}

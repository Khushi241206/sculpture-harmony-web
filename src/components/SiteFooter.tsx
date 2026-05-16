import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Download } from "lucide-react";

const PHONE = "+919998877665";
const PHONE_DISPLAY = "+91 99988 77665";
const EMAIL = "sales@vibgyorreality.com";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi, I'm interested in the Sculpture project at Ognaj. Please share details."
);

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

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${PHONE.replace("+", "")}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition shadow-elegant"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-sidebar-accent text-sidebar-accent-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition shadow-elegant"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Enquiry%20-%20Sculpture%20Project`}
              className="inline-flex items-center gap-2 border border-sidebar-border text-sidebar-foreground px-4 py-2 rounded-md text-sm font-medium hover:border-sidebar-accent hover:text-sidebar-accent transition"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="/Sculpture_Brochure.pdf"
              download="Sculpture_Brochure.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-sidebar-border text-sidebar-foreground px-4 py-2 rounded-md text-sm font-medium hover:border-sidebar-accent hover:text-sidebar-accent transition"
            >
              <Download className="h-4 w-4" /> Brochure
            </a>
          </div>

          <p className="mt-6 text-[10px] leading-relaxed text-sidebar-foreground/50">
            RERA: PR/GJ/AHMEDABAD/RAA14582/261224/301229
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-sidebar-accent mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-sidebar-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-sidebar-accent" />
              <a href={`tel:${PHONE}`} className="hover:text-sidebar-accent">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-sidebar-accent" />
              <a href={`mailto:${EMAIL}`} className="hover:text-sidebar-accent break-all">{EMAIL}</a>
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

      {/* Floating WhatsApp action */}
      <a
        href={`https://wa.me/${PHONE.replace("+", "")}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-elegant flex items-center justify-center hover:scale-105 transition"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </footer>
  );
}

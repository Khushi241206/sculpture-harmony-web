import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Download, Calculator } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sculpture by Vibgyor Reality" },
      { name: "description", content: "Get in touch with Vibgyor Reality. Request brochure, EMI calculator, site visit." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  // EMI calculator
  const [price, setPrice] = useState(16500000);
  const [down, setDown] = useState(3300000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const principal = Math.max(price - down, 0);
  const r = rate / 12 / 100;
  const n = years * 12;
  const emi = r > 0 ? (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : principal / n;

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Contact</p>
        <h1 className="font-display text-5xl md:text-6xl mb-4">Let's build your story.</h1>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Reach out to schedule a site visit, request a brochure, or speak with a Vibgyor Reality advisor.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-2xl mb-6 text-primary">Enquire Now</h2>
            {sent ? (
              <div className="bg-primary/10 text-primary p-6 rounded-md text-center">
                Thank you! Our team will contact you shortly.
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-4"
              >
                <input required placeholder="Full Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 rounded-md bg-background border border-input focus:border-primary outline-none" />
                <input required type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 rounded-md bg-background border border-input focus:border-primary outline-none" />
                <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-md bg-background border border-input focus:border-primary outline-none" />
                <textarea placeholder="Message" rows={4} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 rounded-md bg-background border border-input focus:border-primary outline-none resize-none" />
                <button type="submit" className="w-full bg-gradient-copper text-primary-foreground py-3 rounded-md font-medium hover:opacity-90 transition shadow-elegant">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Info + CTAs */}
          <div className="space-y-6">
            <div className="bg-gradient-copper text-primary-foreground rounded-lg p-8">
              <h2 className="font-display text-2xl mb-6">Vibgyor Reality</h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3"><MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" /><span>Opp. Sampriya Flat, B/h Stonac, S.P Ring Road, Ognaj Circle, Ahmedabad</span></div>
                <div className="flex items-center gap-3"><Phone className="h-5 w-5" /><span>+91 — Contact Sales</span></div>
                <div className="flex items-center gap-3"><Mail className="h-5 w-5" /><span>sales@vibgyorreality.in</span></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-card border border-border rounded-lg p-6 hover:border-primary transition text-left">
                <Download className="h-6 w-6 text-primary mb-3" />
                <div className="font-medium">Download Brochure</div>
                <div className="text-xs text-muted-foreground mt-1">Full project PDF</div>
              </button>
              <button className="bg-card border border-border rounded-lg p-6 hover:border-primary transition text-left">
                <Calculator className="h-6 w-6 text-primary mb-3" />
                <div className="font-medium">Eligibility Check</div>
                <div className="text-xs text-muted-foreground mt-1">Quick prequalify</div>
              </button>
            </div>
          </div>
        </div>

        {/* EMI Calculator */}
        <div className="bg-card border border-border rounded-lg p-8 shadow-elegant">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl text-primary">EMI Calculator</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <Range label="Property Price" value={price} min={5000000} max={30000000} step={100000} onChange={setPrice} format={(v) => `₹${(v/10000000).toFixed(2)} Cr`} />
              <Range label="Down Payment" value={down} min={0} max={price} step={50000} onChange={setDown} format={(v) => `₹${(v/100000).toFixed(1)} L`} />
              <Range label="Interest Rate (%)" value={rate} min={6} max={15} step={0.1} onChange={setRate} format={(v) => `${v.toFixed(1)}%`} />
              <Range label="Tenure (years)" value={years} min={5} max={30} step={1} onChange={setYears} format={(v) => `${v} yrs`} />
            </div>
            <div className="bg-gradient-copper text-primary-foreground rounded-lg p-8 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest opacity-80 mb-2">Monthly EMI</p>
              <div className="font-display text-5xl mb-6">₹{Math.round(emi).toLocaleString("en-IN")}</div>
              <div className="space-y-2 text-sm opacity-95 border-t border-white/20 pt-4">
                <div className="flex justify-between"><span>Loan Amount</span><span>₹{(principal/100000).toFixed(1)} L</span></div>
                <div className="flex justify-between"><span>Total Payable</span><span>₹{(emi*n/100000).toFixed(1)} L</span></div>
                <div className="flex justify-between"><span>Interest Payable</span><span>₹{((emi*n - principal)/100000).toFixed(1)} L</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Range({ label, value, min, max, step, onChange, format }: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; format: (v: number) => string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <label className="text-sm text-muted-foreground">{label}</label>
        <span className="text-sm font-semibold text-primary">{format(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-[var(--primary)]" />
    </div>
  );
}

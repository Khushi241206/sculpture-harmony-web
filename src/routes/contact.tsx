import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Download, Calculator, MessageCircle, CheckCircle2, XCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sculpture by Vibgyor Reality" },
      { name: "description", content: "Get in touch with Vibgyor Reality. Request brochure, EMI calculator, site visit." },
    ],
  }),
  component: Contact,
});

const PHONE = "+919998877665";
const PHONE_DISPLAY = "+91 99988 77665";
const EMAIL = "sales@vibgyorreality.com";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi, I'm interested in the Sculpture project at Ognaj. Please share details."
);
const WHATSAPP_URL = `https://wa.me/${PHONE.replace("+", "")}?text=${WHATSAPP_MSG}`;

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

  // Eligibility
  const [showElig, setShowElig] = useState(false);
  const [income, setIncome] = useState(150000);
  const [obligations, setObligations] = useState(10000);
  const [eligRate, setEligRate] = useState(8.5);
  const [eligYears, setEligYears] = useState(20);

  // 50% of net income can go to EMI (standard bank rule), minus existing EMIs
  const maxEmi = Math.max(income * 0.5 - obligations, 0);
  const er = eligRate / 12 / 100;
  const en = eligYears * 12;
  const eligibleLoan = er > 0 ? (maxEmi * (Math.pow(1 + er, en) - 1)) / (er * Math.pow(1 + er, en)) : maxEmi * en;
  const qualifies = eligibleLoan >= 5000000;

  function submitEnquiry(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    // Forward enquiry via mailto fallback so it actually reaches sales
    const subject = encodeURIComponent("New Enquiry — Sculpture Project");
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen pt-12 md:pt-16 pb-20 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Contact</p>
        <h1 className="font-display text-5xl md:text-6xl mb-4">Let's build your story.</h1>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Reach out to schedule a site visit, request a brochure, or speak with a Vibgyor Reality advisor.
        </p>

        {/* Quick action bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-md font-medium hover:opacity-90 transition shadow-elegant">
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
          <a href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-2 bg-gradient-copper text-primary-foreground px-4 py-3 rounded-md font-medium hover:opacity-90 transition shadow-elegant">
            <Phone className="h-5 w-5" /> Call Now
          </a>
          <a href={`mailto:${EMAIL}?subject=Enquiry%20-%20Sculpture%20Project`}
            className="flex items-center justify-center gap-2 bg-card border border-border px-4 py-3 rounded-md font-medium hover:border-primary transition">
            <Mail className="h-5 w-5 text-primary" /> Email Us
          </a>
          <a href="/Sculpture_Brochure.pdf" download="Sculpture_Brochure.pdf" target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-card border border-border px-4 py-3 rounded-md font-medium hover:border-primary transition">
            <Download className="h-5 w-5 text-primary" /> Brochure
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Form */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-elegant">
            <h2 className="font-display text-2xl mb-6 text-primary">Enquire Now</h2>
            {sent ? (
              <div className="bg-primary/10 text-primary p-6 rounded-md text-center">
                Thank you! Your mail client has opened — send to complete the enquiry. Our team will respond shortly.
              </div>
            ) : (
              <form onSubmit={submitEnquiry} className="space-y-4">
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
            <div className="bg-gradient-copper text-primary-foreground rounded-lg p-8 shadow-elegant">
              <h2 className="font-display text-2xl mb-6">Vibgyor Reality</h2>
              <div className="space-y-4 text-sm">
                <a href="https://maps.google.com/?q=Ognaj+Circle+Ahmedabad" target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:opacity-90">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Opp. Sampriya Flat, B/h Stonac, S.P Ring Road, Ognaj Circle, Ahmedabad</span>
                </a>
                <a href={`tel:${PHONE}`} className="flex items-center gap-3 hover:opacity-90">
                  <Phone className="h-5 w-5" /><span>{PHONE_DISPLAY}</span>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:opacity-90 break-all">
                  <Mail className="h-5 w-5" /><span>{EMAIL}</span>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-90">
                  <MessageCircle className="h-5 w-5" /><span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a href="/Sculpture_Brochure.pdf" download className="bg-card border border-border rounded-lg p-6 hover:border-primary transition text-left block">
                <Download className="h-6 w-6 text-primary mb-3" />
                <div className="font-medium">Download Brochure</div>
                <div className="text-xs text-muted-foreground mt-1">Full project PDF</div>
              </a>
              <button onClick={() => setShowElig((v) => !v)} className="bg-card border border-border rounded-lg p-6 hover:border-primary transition text-left">
                <Calculator className="h-6 w-6 text-primary mb-3" />
                <div className="font-medium">Eligibility Check</div>
                <div className="text-xs text-muted-foreground mt-1">{showElig ? "Hide calculator" : "Quick prequalify"}</div>
              </button>
            </div>
          </div>
        </div>

        {/* Eligibility Calculator */}
        {showElig && (
          <div className="bg-card border border-border rounded-lg p-8 shadow-elegant mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl text-primary">Home Loan Eligibility</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-5">
                <Range label="Monthly Net Income" value={income} min={30000} max={1000000} step={5000} onChange={setIncome} format={(v) => `₹${v.toLocaleString("en-IN")}`} />
                <Range label="Existing EMIs / Obligations" value={obligations} min={0} max={200000} step={1000} onChange={setObligations} format={(v) => `₹${v.toLocaleString("en-IN")}`} />
                <Range label="Interest Rate (%)" value={eligRate} min={6} max={15} step={0.1} onChange={setEligRate} format={(v) => `${v.toFixed(1)}%`} />
                <Range label="Tenure (years)" value={eligYears} min={5} max={30} step={1} onChange={setEligYears} format={(v) => `${v} yrs`} />
              </div>
              <div className={`rounded-lg p-8 flex flex-col justify-center shadow-elegant ${qualifies ? "bg-gradient-copper text-primary-foreground" : "bg-muted text-foreground"}`}>
                <div className="flex items-center gap-2 mb-2 opacity-90">
                  {qualifies ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                  <p className="text-xs uppercase tracking-widest">{qualifies ? "You may qualify" : "Limited eligibility"}</p>
                </div>
                <p className="text-xs uppercase tracking-widest opacity-80 mb-2">Estimated Eligible Loan</p>
                <div className="font-display text-4xl md:text-5xl mb-6">₹{(eligibleLoan / 100000).toFixed(1)} L</div>
                <div className="space-y-2 text-sm opacity-95 border-t border-white/20 pt-4">
                  <div className="flex justify-between"><span>Max Affordable EMI</span><span>₹{Math.round(maxEmi).toLocaleString("en-IN")}</span></div>
                  <div className="flex justify-between"><span>Tenure</span><span>{eligYears} years</span></div>
                  <div className="flex justify-between"><span>Rate</span><span>{eligRate.toFixed(1)}%</span></div>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur px-4 py-2 rounded-md text-sm font-medium transition">
                  <MessageCircle className="h-4 w-4" /> Discuss with Sales
                </a>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Indicative only. Based on 50% FOIR (income-to-EMI ratio). Final eligibility is subject to lender assessment.
            </p>
          </div>
        )}

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
            <div className="bg-gradient-copper text-primary-foreground rounded-lg p-8 flex flex-col justify-center shadow-elegant">
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

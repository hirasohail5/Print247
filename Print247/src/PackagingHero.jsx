import { useState } from "react";

// ---- Real assets from Figma export (place the /assets folder next to this file, inside src/) ----
import logo from "./assets/logo_b.png";
import callIcon from "./assets/call.svg";
import trustpilotIcon from "./assets/group-6127.png";
import ratingStars from "./assets/image-13.png";
import slideImg1 from "./assets/rectangle-31039.png";
import slideImg2 from "./assets/rectangle-31040.png";

// next-1.png / next-2.png in the export are only 8x8px, so they blur badly
// when scaled up. Crisp inline SVG chevrons are used instead — same look,
// sharp at any size.
function ChevronIcon({ direction = "left" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      style={{ transform: direction === "right" ? "rotate(180deg)" : undefined }}
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

import brandLogo1 from "./assets/brands/logo1.webp";
import brandLogo2 from "./assets/brands/logo2.webp";
import brandLogo3 from "./assets/brands/logo3.webp";
import brandLogo4 from "./assets/brands/logo4.webp";
import brandLogo5 from "./assets/brands/logo5.webp";
import brandLogo7 from "./assets/brands/logo7.webp";
import brandLogo8 from "./assets/brands/logo8.webp";
import brandLogo9 from "./assets/brands/logo9.webp";



const brandLogos = [
  brandLogo1,
  brandLogo2,
  brandLogo3,
  brandLogo4,
  brandLogo5,
  brandLogo7,
  brandLogo8,
  brandLogo9,
];

const slides = [slideImg1, slideImg2];

export default function PackagingHero() {
  const [slide, setSlide] = useState(0);

  const prevSlide = () => setSlide((s) => (s === 0 ? slides.length - 1 : s - 1));
  const nextSlide = () => setSlide((s) => (s === slides.length - 1 ? 0 : s + 1));

  return (
    <section id="hero-section" className="w-full bg-[#f4f2ef]">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
        {/* ---------- Header ---------- */}
        <header className="mb-10 flex items-center justify-between sm:mb-14">
          <img src={logo} alt="Print247" className="h-9 w-auto sm:h-11" />

          <div className="flex items-center gap-3">
            <button
              aria-label="Call us"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-white transition hover:opacity-90"
            >
              <img src={callIcon} alt="" className="h-4 w-4" />
            </button>
            <a
              href="tel:+18328073429"
              className="hidden rounded-full border border-[#171717]/20 px-5 py-2.5 text-sm font-medium text-[#171717] transition hover:border-[#171717]/40 sm:inline-block"
            >
              +1 (832) 807-3429
            </a>
          </div>
        </header>

        {/* ---------- Main content: copy+carousel  |  form ---------- */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Left column */}
          <div>
            <h1 className="max-w-xl text-[2rem] font-bold leading-[1.15] text-[#171717] sm:text-[2.6rem]">
              <span className="font-black">Custom Packaging</span> That Wins On
              Every Shelf, Doorstep &amp; Unboxing.
            </h1>

            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#4a4a4a]">
              Boxes, Mailers, Pouches &amp; Bags Engineered For Any Industry —
              Designed Free, Printed In The US, Delivered In 10–15 Days. Low
              Minimums. No Setup Fees.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#4a4a4a]">
              <span className="font-medium">5,000+ Brands Packaged Since 2014</span>
              <span className="flex items-center gap-1.5">
                <img src={ratingStars} alt="4.5 out of 5 stars" className="h-3.5 w-auto" />
                <span>4.5/5 Review</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <img src={trustpilotIcon} alt="Trustpilot" className="h-3.5 w-auto" />
              </span>
            </div>

            {/* Carousel */}
            <div className="relative mt-7 h-56 w-full max-w-xl overflow-hidden rounded-xl bg-[#e9e4de] sm:h-64">
              <img
                src={slides[slide]}
                alt={`Packaging example ${slide + 1}`}
                className="h-full w-full object-cover transition-opacity duration-300"
              />

              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#171717] shadow-md transition hover:opacity-90"
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#171717] shadow-md transition hover:opacity-90"
              >
                <ChevronIcon direction="right" />
              </button>

              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {slides.map((s, i) => (
                  <span
                    key={s}
                    className={`h-1.5 rounded-full transition-all ${
                      i === slide ? "w-5 bg-[#171717]" : "w-1.5 bg-[#171717]/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right column: quote form */}
          <QuoteForm />
        </div>

        {/* ---------- Brand strip ---------- */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 border-t border-[#171717]/10 pt-8 sm:justify-between sm:gap-x-6">
          {brandLogos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Brand logo ${i + 1}`}
              className="h-8 w-auto object-contain opacity-90 sm:h-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Accepts digits with optional +, spaces, dashes, parentheses — needs at least 7 digits total.
const PHONE_PATTERN = /^[\d+()\s-]{7,}$/;

function validateForm(form) {
  const errors = {};

  if (!form.product.trim()) {
    errors.product = "Product name is required";
  }

  if (!form.company.trim()) {
    errors.company = "Company name is required";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!form.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!PHONE_PATTERN.test(form.phone.trim())) {
    errors.phone = "Enter a valid phone number";
  }

  return errors;
}

function QuoteForm() {
  const [form, setForm] = useState({
    product: "",
    company: "",
    note: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (field) => (e) => {
    const { value } = e.target;
    setForm((f) => ({ ...f, [field]: value }));
    // Clear that field's error as soon as the user starts fixing it.
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Wire this up to your quote-request endpoint / CRM.
    // For now, show the submitted info in a confirmation popup.
    setSubmittedData(form);
  };

  const closePopup = () => {
    setSubmittedData(null);
    setForm({ product: "", company: "", note: "", email: "", phone: "" });
    setErrors({});
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full rounded-2xl bg-white p-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)] sm:p-8"
      >
        <h2 className="text-xl font-bold text-[#171717] sm:text-2xl">
          Tell Us What You're Packaging
        </h2>
        <p className="mt-1 text-xs text-[#8a8a8a]">
          Free Design Mockup + Sample Within 24 Hrs.
        </p>

        <div className="mt-5 space-y-4">
          <Field
            label="Product Name"
            placeholder="Enter Product Name"
            value={form.product}
            onChange={handleChange("product")}
            error={errors.product}
          />
          <Field
            label="Company Name"
            placeholder="Enter Company Name"
            value={form.company}
            onChange={handleChange("company")}
            error={errors.company}
          />
          <Field
            label="Any Special Requirement"
            placeholder="Add Your Note here"
            value={form.note}
            onChange={handleChange("note")}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Email"
              type="email"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={handleChange("email")}
              error={errors.email}
            />
            <Field
              label="Phone Number"
              type="tel"
              placeholder="+1 xxx-xxx-xxxx"
              value={form.phone}
              onChange={handleChange("phone")}
              error={errors.phone}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-[#171717] py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Get a Qoute
        </button>
      </form>

      {submittedData && (
        <QuoteSummaryPopup data={submittedData} onClose={closePopup} />
      )}
    </>
  );
}

function QuoteSummaryPopup({ data, onClose }) {
  const rows = [
    { label: "Product Name", value: data.product },
    { label: "Company Name", value: data.company },
    { label: "Special Requirement", value: data.note || "—" },
    { label: "Email", value: data.email },
    { label: "Phone Number", value: data.phone },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold text-[#171717] sm:text-xl">
          Quote Request Received
        </h3>
        <p className="mt-1 text-xs text-[#8a8a8a]">
          Here's what you submitted. Our team will reach out shortly.
        </p>

        <dl className="mt-5 space-y-3">
          {rows.map((row) => (
            <div key={row.label} className="flex flex-col gap-0.5 border-b border-[#171717]/10 pb-2">
              <dt className="text-xs font-medium uppercase tracking-wide text-[#8a8a8a]">
                {row.label}
              </dt>
              <dd className="text-sm text-[#171717]">{row.value}</dd>
            </div>
          ))}
        </dl>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-[#171717] py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Field({ label, type = "text", placeholder, value, onChange, error }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[#171717]">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border px-4 py-2.5 text-sm text-[#171717] outline-none transition placeholder:text-[#a3a3a3] focus:ring-2 ${
          error
            ? "border-red-400 focus:border-red-400 focus:ring-red-100"
            : "border-[#171717]/15 focus:border-[#171717]/40 focus:ring-[#171717]/10"
        }`}
      />
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
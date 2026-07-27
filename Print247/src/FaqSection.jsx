import { useState } from "react";

const faqs = [
  {
    question: "What Affects The Price Of Tuck Boxes?",
    answer:
      "Pricing Depends On Size, Quantity, Material, And Printing Style. Bigger Bulk Orders Get Much Lower Per-Unit Costs.",
  },
  {
    question: "Do You Support Variable Data Like Batch Codes, QR, Or Expiry On Bag Faces?",
    answer:
      "Yes — we can print variable data such as batch codes, QR codes, and expiry dates directly on bag faces during production.",
  },
  {
    question: "Can I Add A Product Window And Still Keep Opacity Where Needed?",
    answer:
      "Yes, we can add a clear product window in specific areas while keeping the rest of the packaging fully opaque.",
  },
  {
    question: "What Sealing Temperatures Work Best With Your Films On Band Sealers?",
    answer:
      "This depends on the film type — our team will share the recommended sealing temperature range for your specific material.",
  },
];

function PlusIcon({ open }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-5 w-5 flex-shrink-0 stroke-[#171717] transition-all duration-300 ${
        open ? "rotate-45 stroke-blue-500" : "rotate-0 stroke-[#171717]"
      }`}
      fill="none"
    >
      <line x1="10" y1="3" x2="10" y2="17" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="3" y1="10" x2="17" y2="10" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg
      className="h-12 w-12 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
      />
    </svg>
  );
}

export default function FAQSection() {
  // All FAQs start closed
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  // Scrolls up to the hero/quote-form section (HeroSection.jsx must have id="hero-section" on its outer <section>)
  const scrollToHero = () => {
    document
      .getElementById("hero-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#faf8f6] via-white to-[#faf8f6]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* ---------- Left: heading + CTA ---------- */}
          <div className="w-full lg:w-[32%]">
            {/* Help Icon */}
            <div className="mb-4">
              <HelpIcon />
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#171717] sm:text-4xl">
              Questions?
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                We Are Here To Help
              </span>
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#5a5a5a]">
              Find answers to common questions about our packaging solutions.
              Can't find what you're looking for? Contact our support team.
            </p>

            <button
              onClick={scrollToHero}
              className="group relative mt-8 overflow-hidden rounded-lg bg-[#171717] px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#2563eb] hover:shadow-lg"
            >
              <span className="relative z-10">Get Instant Quote</span>
              {/* Button glow effect */}
              <div className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-blue-500/20 to-purple-500/20 transition-transform duration-500 group-hover:translate-x-0"></div>
            </button>

            {/* Contact info */}
            <div className="mt-6 flex items-center gap-3 text-sm text-[#5a5a5a]">
              <svg
                className="h-5 w-5 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 2.485 2.01 4.5 4.5 4.5h10.5c2.485 0 4.5-2.015 4.5-4.5M2.25 6.75v10.5c0 2.485 2.01 4.5 4.5 4.5h10.5c2.485 0 4.5-2.015 4.5-4.5V6.75M2.25 6.75l7.5 5.25 7.5-5.25"
                />
              </svg>
              <span>support@print247.com</span>
            </div>
          </div>

          {/* ---------- Right: accordion ---------- */}
          <div className="w-full lg:w-[68%]">
            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={`group overflow-hidden rounded-xl border transition-all duration-300 ${
                      isOpen
                        ? "border-blue-200 bg-white shadow-lg"
                        : "border-[#171717]/10 bg-white/50 hover:border-[#171717]/20 hover:bg-white hover:shadow-md"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 hover:bg-[#171717]/5"
                    >
                      <span
                        className={`text-sm font-medium transition-colors duration-300 sm:text-base ${
                          isOpen ? "text-[#2563eb]" : "text-[#171717]"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <PlusIcon open={isOpen} />
                    </button>

                    {/* Answer — only rendered when open */}
                    {isOpen && (
                      <div className="animate-fadeIn px-6 pb-5">
                        <div className="h-px w-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
                        <p className="mt-4 text-sm leading-relaxed text-[#5a5a5a]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
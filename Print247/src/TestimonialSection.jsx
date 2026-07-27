const testimonials = [
  {
    name: "Marcus V",
    rating: 4,
    review:
      "Great quality tuck boxes with sharp printing and strong material. Fast delivery and smooth process. Very happy with the service and will definitely order again soon.",
  },
  {
    name: "Sarah Jenkins",
    rating: 5,
    review:
      "Print247's live support team actually picks up the phone. They rushed my tuck boxes order and hit my launch date easily. The sustainable ink colors perfectly matched my branding.",
  },
  {
    name: "David L.",
    rating: 4,
    review:
      "Really impressed with the tuck boxes we received. Everything matched our design perfectly. Good pricing, quick shipping, and great communication from start to finish.",
  },
  {
    name: "Elena Rodriguez",
    rating: 5,
    review:
      "Very satisfied with my order with Print247. The design came out exactly as expected, and delivery was faster than I thought. Great value for money and friendly service.",
  },
];

// ---- Small inline icon components (no icon library used in this project) ----

function StarIcon({ filled = true }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 transition-all duration-300 ${
        filled ? "fill-[#f5a623]" : "fill-[#e5e2dd]"
      }`}
    >
      <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.77l-5.18 2.67.99-5.77L1.62 7.59l5.79-.84L10 1.5z" />
    </svg>
  );
}

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon key={i} filled={i <= rating} />
      ))}
    </div>
  );
}

function VerifiedIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 fill-[#22c55e]">
      <path d="M10 1.5l2.13 1.2 2.45-.15 1.14 2.16 2.16 1.14-.15 2.45L19 10l-1.2 2.13.15 2.45-2.16 1.14-1.14 2.16-2.45-.15L10 19l-2.13-1.2-2.45.15-1.14-2.16-2.16-1.14.15-2.45L1 10l1.2-2.13-.15-2.45 2.16-1.14 1.14-2.16 2.45.15L10 1.5z" />
      <path
        d="M6.5 10.2l2.2 2.2 4.3-4.8"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      className="h-8 w-8 text-[#171717]/10 transition-all duration-300 group-hover:text-[#171717]/20"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#faf8f6] via-white to-[#faf8f6]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
        {/* ---------- Heading ---------- */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[#171717] sm:text-3xl md:text-4xl">
            3,000+ brands.
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              One packaging partner
            </span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[#5a5a5a] sm:text-base">
            We believe great packaging speaks through the experience it
            delivers and our customers say it best. From product quality to
            reliable service.
          </p>
        </div>

        {/* ---------- Rating row: score + stars + trustpilot/google pill ---------- */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold text-[#171717]">4.5</span>

            <div className="flex flex-col">
              <StarRating rating={5} />
              <span className="mt-1 text-xs text-[#8a8a8a]">
                5000+ Satisfied Customers
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-[#171717]/10 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md">
            <span className="flex items-center gap-1.5 text-sm font-semibold text-[#00b67a]">
              <svg viewBox="0 0 20 20" className="h-4 w-4 fill-[#00b67a]">
                <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.77l-5.18 2.67.99-5.77L1.62 7.59l5.79-.84L10 1.5z" />
              </svg>
              Trustpilot
            </span>

            <span className="h-4 w-px bg-[#171717]/10"></span>

            <span className="flex items-center gap-1.5 text-sm font-medium text-[#171717]">
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google Rating
            </span>
          </div>
        </div>

        {/* ---------- Testimonial cards ---------- */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="group relative overflow-hidden rounded-2xl bg-[#f4f2ef] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-7"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-xl"></div>
              </div>

              {/* Content with relative positioning */}
              <div className="relative z-10">
                {/* Quote icon */}
                <div className="mb-3">
                  <QuoteIcon />
                </div>

                {/* Name with hover effect */}
                <h3 className="text-base font-bold text-[#171717] transition-colors duration-300 group-hover:text-[#2563eb]">
                  {t.name}
                </h3>

                {/* Rating with hover effect */}
                <div className="mt-2 transition-transform duration-300 group-hover:scale-105">
                  <StarRating rating={t.rating} />
                </div>

                {/* Review with hover effect */}
                <p className="mt-3 text-sm leading-relaxed text-[#5a5a5a] transition-colors duration-300 group-hover:text-[#4a4a4a]">
                  {t.review}
                </p>

                {/* Verified Buyer with hover effect */}
                <div className="mt-4 flex items-center gap-1.5 transition-all duration-300 group-hover:gap-2">
                  <VerifiedIcon />
                  <span className="text-xs font-medium text-[#5a5a5a] transition-colors duration-300 group-hover:text-[#22c55e]">
                    Verified Buyer
                  </span>
                </div>

                {/* Bottom accent line - REMOVED */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
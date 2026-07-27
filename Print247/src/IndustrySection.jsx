import industryHeroImg from "./assets/industry-hero.jpg";

const categories = [
  {
    tag: "Food & Beverage",
    title: "Packaging that travels well.",
    description:
      "From food-truck mailer boxes to retail-shelf cartons, soft-touch coffee pouches and tamper-evident seals — built food-safe and ready for cold chains.",
  },
  {
    tag: "Cosmetics & Beauty",
    title: "Unboxings that go viral.",
    description:
      "Skincare bottles, lipstick sleeves, magnetic gift boxes — finished with spot UV, hot foil stamping, and soft-touch lamination to make them hero shelves and TikToks alike.",
  },
  {
    tag: "Apparel & Fashion",
    title: "Built for the unboxing reel.",
    description:
      "Apparel mailers with tear strips, tissue paper, woven labels and ribbon-tied gift presentations — the kind of detail that earns shares.",
  },
  {
    tag: "E-commerce & Mailers",
    title: "Ships safely. Looks expensive.",
    description:
      "Corrugated mailers, dim-weight-optimized shipper boxes, custom void fill and crash-locked bases — engineered for parcel totes and damage-free arrivals.",
  },
];

const alsoServing = [
  "Retail",
  "Pet care",
  "Electronics",
  "Health supplements",
  "Tobacco & Vape",
  "Toys & Hobby",
  "Industrial",
];

const stats = [
  { value: "3,000+", label: "BRANDS PACKAGED", sub: "Across 24 industries" },
  { value: "7", label: "YEARS IN BUSINESS", sub: "Since 2019, US-based" },
  { value: "10–15", label: "DAY TURNAROUND", sub: "Concept to delivery" },
  { value: "4.9 ★", label: "CUSTOMER RATING", sub: "5000+ reviews" },
];

export default function IndustrySection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-2xl border border-[#171717]/10">
          {/* ---------- Hero: text overlaid on top of image, top-center ---------- */}
          <div className="relative h-[380px] overflow-hidden bg-[#2c3d2a] sm:h-[460px] lg:h-[520px]">
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src={industryHeroImg}
                alt="Custom packaging by industry"
                className="h-full w-full object-cover object-center"
              />
              {/* Light overlay — just enough for text contrast, not to dim the whole photo */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-transparent"></div>
            </div>

            {/* Text — top center, on top of the image */}
            <div className="relative z-10 flex h-full items-start justify-center px-6 pt-10 text-center sm:px-10 sm:pt-12">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                  Built for your industry not
                  <br />
                  just any industry.
                </h2>

                <p className="mx-auto mt-3 max-w-lg text-xs text-white/90 sm:mt-4 sm:text-sm md:text-base">
                  {/* Pick yours. Every category below ships with the right
                  materials, finishing, and compliance baked in — so you
                  don't have to be the packaging expert. */}
                </p>
              </div>
            </div>
          </div>

          {/* ---------- Category columns with STYLISH HOVER EFFECTS ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <div
                key={cat.tag}
                className={`group relative bg-white p-6 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl sm:p-7 ${
                  i !== 0
                    ? "border-t border-[#171717]/10 sm:border-t-0 sm:border-l"
                    : ""
                }`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl"></div>
                </div>

                {/* Content with relative positioning */}
                <div className="relative z-10">
                  <span className="text-xs font-medium uppercase tracking-wide text-[#8a8a8a] transition-all duration-300 group-hover:text-blue-600">
                    {cat.tag}
                  </span>

                  <h3 className="mt-2 text-base font-bold text-[#171717] transition-all duration-300 group-hover:text-[#2563eb] sm:text-lg">
                    {cat.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#5a5a5a] transition-all duration-300 group-hover:text-[#4a4a4a]">
                    {cat.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* ---------- Also serving ---------- */}
          <div className="flex flex-col gap-3 border-t border-[#171717]/10 px-6 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-7">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#8a8a8a]">
              Also Serving
            </span>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#171717]/80">
              {alsoServing.map((item) => (
                <span key={item} className="transition-all duration-300 hover:text-[#2563eb] hover:scale-105 cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Stats grid with STYLISH HOVER ---------- */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl bg-[#f4f2ef] px-7 py-6 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50"></div>
              </div>

              <div className="relative z-10">
                <div className="text-3xl font-bold text-[#171717] transition-all duration-300 group-hover:text-[#2563eb] sm:text-4xl">
                  {stat.value}
                </div>

                <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#171717] transition-all duration-300 group-hover:text-[#2563eb]">
                  {stat.label}
                </div>

                <div className="text-xs text-[#8a8a8a] transition-all duration-300 group-hover:text-[#5a5a5a]">
                  {stat.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
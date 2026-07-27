import productsImg from "./assets/products.jpg";

const reasons = [
  {
    number: "01",
    title: "Made In USA",
    description:
      "Printed And Assembled At Our Texas Facility — No Overseas Wait, No Surprise Tariffs.",
  },
  {
    number: "02",
    title: "24/7 Customer Support",
    description:
      "A Real Packaging Specialist Within 30 Minutes — Chat, Email, Or Phone, Your Choice.",
  },
  {
    number: "03",
    title: "Free Design Support",
    description:
      "A Dedicated Structural + Graphic Designer On Every Order. Unlimited Mockup Revisions.",
  },
  {
    number: "04",
    title: "10–15 Day Turnaround",
    description:
      "Production To Your Dock In Under 3 Weeks — Including International Air Freight.",
  },
  {
    number: "05",
    title: "Eco-Friendly Materials",
    description:
      "100% Recyclable Kraft, FSC-Certified Boards, Soy-Based Inks. Sustainability Without Compromise.",
  },
  {
    number: "06",
    title: "24/7 Customer Support",
    description:
      "Direct-From-Factory Rates. Tiered Discounts Kick In At 500, 1,000 And 5,000 Units.",
  },
];

export default function PackagingPartnerSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        {/* Flex container with equal height */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
          {/* ---------- Left: heading + description + BIG IMAGE ---------- */}
          <div className="flex w-full flex-col lg:w-[35%]">
            <h2 className="text-2xl font-bold leading-snug text-[#171717] sm:text-3xl">
              The packaging partner
              <br />
              that handles everything.
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#5a5a5a]">
              From the first sketch to the final pallet — six reasons brands
              switch to Print247 and stay.
            </p>

            {/* BIG IMAGE - Full height available */}
            <div className="group relative mt-6 flex-1 overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl">
              {/* Image with full height */}
              <img
                src={productsImg}
                alt="Print247 custom packaged boxes"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0 transition-all duration-500 group-hover:from-black/30 group-hover:via-black/10 group-hover:to-black/0"></div>
              
              {/* Image border glow effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-blue-400/50"></div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-700 group-hover:w-full"></div>

              {/* Image badge */}
              <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#171717] backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-white">
                📦 Premium Quality
              </div>
            </div>
          </div>

          {/* ---------- Right: 2-column grid of numbered reasons ---------- */}
          <div className="flex w-full flex-col lg:w-[65%]">
            <div className="grid flex-1 grid-cols-1 sm:grid-cols-2">
              {reasons.map((reason, i) => (
                <div
                  key={reason.number}
                  className={`group relative flex flex-col px-0 py-6 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl sm:px-8 ${
                    i % 2 !== 0 ? "sm:border-l sm:border-[#171717]/10" : ""
                  } ${
                    i >= 2 ? "border-t border-[#171717]/10" : ""
                  }`}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-xl"></div>
                  </div>

                  {/* Content with relative positioning */}
                  <div className="relative z-10 flex flex-1 flex-col">
                    {/* Number with hover effect */}
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#171717]/20 text-xs font-semibold text-[#171717] transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-lg">
                      {reason.number}
                    </span>

                    {/* Title with hover effect */}
                    <h3 className="mt-4 text-base font-bold text-[#171717] transition-all duration-300 group-hover:text-[#2563eb] sm:text-lg">
                      {reason.title}
                    </h3>

                    {/* Description with hover effect - flex-1 to push bottom line down */}
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5a5a5a] transition-all duration-300 group-hover:text-[#4a4a4a]">
                      {reason.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-700 group-hover:w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
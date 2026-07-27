// ----------------

import mailerBoxesImg from "./assets/mailer-boxes.png";
import customBoxesImg from "./assets/custom-boxes.png";
import mylarPouchesImg from "./assets/mylar-pouches.png";
import flatBoxesImg from "./assets/flat-boxes.png";

const solutions = [
  {
    title: "Custom Mailer Boxes",
    description: "Secure Packaging For Modern Shipping",
    image: mailerBoxesImg,
  },
  {
    title: "Custom Boxes",
    description: "Tailored Packaging For Every Brand",
    image: customBoxesImg,
  },
  {
    title: "Stand-Up Mylar Pouches",
    description: "Freshness Sealed In Premium Pouches",
    image: mylarPouchesImg,
  },
  {
    title: "Flat Boxes",
    description: "Stable Packaging For Every Shipment",
    image: flatBoxesImg,
  },
];

export default function SolutionsSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        {/* ---------- Heading ---------- */}
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-[#171717] sm:text-3xl">
            Explore Custom Packaging Solutions
          </h2>
          <p className="mt-3 text-sm text-[#5a5a5a] sm:text-base">
            Discover Packaging Styles Designed To Match Your Product, Brand,
            And Customer Experience.
          </p>
        </div>

        {/* ---------- Horizontally scrolling cards ---------- */}
        <div
          className="mt-8 flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {solutions.map((item) => (
            <div
              key={item.title}
              className="group relative flex h-[380px] w-[260px] flex-shrink-0 flex-col overflow-hidden rounded-2xl bg-[#f4f2ef] transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl sm:h-[420px] sm:w-[280px]"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>
              </div>

              {/* Content wrapper with relative positioning to stay above glow */}
              <div className="relative z-10 flex h-full flex-col">
                <div className="h-[76px] px-5 pt-5 transition-transform duration-300 group-hover:translate-y-[-2px] sm:h-[84px]">
                  <h3 className="text-sm font-bold text-[#171717] transition-colors duration-300 group-hover:text-[#2563eb] sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#8a8a8a] transition-colors duration-300 group-hover:text-[#4a4a4a] sm:text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="relative mx-4 mb-4 mt-4 flex-1 overflow-hidden rounded-xl bg-[#e3ddd4] transition-all duration-500 group-hover:shadow-xl">
                  {/* Image zoom effect */}
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  )}
                  {/* Overlay gradient on image hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0 transition-all duration-500 group-hover:from-black/10 group-hover:via-black/5 group-hover:to-black/0"></div>
                </div>

                {/* Bottom border accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
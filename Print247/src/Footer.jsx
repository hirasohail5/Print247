import logoImg from "./assets/logo_w.png";
import facebookIcon from "./assets/Frame 6553.png";
import instagramIcon from "./assets/Frame 6554.png";
import pinterestIcon from "./assets/Frame 6555.png";
import linkedinIcon from "./assets/Frame 6556.png";

import certPrintingUnited from "./assets/6.png";
import certFPA from "./assets/4.png";
import certPIA from "./assets/1.png";
import certCentralFortBend from "./assets/5.png";
import certSFA from "./assets/Design-Homepage.png";
import certNCA from "./assets/nca-logo-vector-onlynca.png";

import paymentBadge from "./assets/3.png";

const contactInfo = [
  {
    label: "PHONE",
    lines: ["+1 (832) 807-3429"],
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "EMAIL",
    lines: ["support@print247.us"],
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "ADDRESS",
    lines: ["1631 Cottonwood School Rd", "Rosenberg, TX 77471, USA"],
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const socialLinks = [
  { icon: facebookIcon, label: "Facebook", href: "#" },
  { icon: instagramIcon, label: "Instagram", href: "#" },
  { icon: pinterestIcon, label: "Pinterest", href: "#" },
  { icon: linkedinIcon, label: "LinkedIn", href: "#" },
];

const certifications = [
  { src: certPIA, alt: "Services for Graphic Communications" },
  { src: certFPA, alt: "Flexible Packaging Association" },
  { src: certCentralFortBend, alt: "Central Fort Bend Chamber of Commerce" },
  { src: certPrintingUnited, alt: "Printing United Alliance Member" },
  { src: certSFA, alt: "SFA" },
  { src: certNCA, alt: "NCA" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
        {/* ---------- Logo ---------- */}
        <div className="flex justify-center">
          <img
            src={logoImg}
            alt="Print247"
            className="h-14 w-auto transition-all duration-500 hover:scale-105 hover:brightness-110 sm:h-16"
          />
        </div>

        {/* ---------- Contact info (dashed border box) ---------- */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-white/25 px-6 py-6 transition-all duration-500 hover:border-white/40 hover:shadow-xl sm:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">
            {contactInfo.map((item, i) => (
              <div
                key={item.label}
                className={`group text-center transition-all duration-300 sm:text-left ${
                  i !== 0 ? "sm:border-l sm:border-white/15 sm:pl-4" : ""
                }`}
              >
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                  <span className="text-white/40 transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-white/60 transition-all duration-300 group-hover:text-white/80">
                    {item.label}
                  </span>
                </div>
                {item.lines.map((line, idx) => (
                  <div
                    key={line}
                    className={`mt-1 text-sm text-white transition-all duration-300 hover:text-blue-400 hover:translate-x-1 ${
                      idx === 0 ? "font-medium" : ""
                    }`}
                  >
                    {item.label === "EMAIL" ? (
                      <a
                        href={`mailto:${line}`}
                        className="relative inline-block transition-all duration-300 hover:text-blue-400"
                      >
                        {line}
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ) : item.label === "PHONE" ? (
                      <a
                        href={`tel:${line.replace(/\s/g, "")}`}
                        className="relative inline-block transition-all duration-300 hover:text-blue-400"
                      >
                        {line}
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ) : (
                      <span className="relative inline-block transition-all duration-300 hover:text-blue-400">
                        {line}
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Social icons ---------- */}
        <div className="mt-10 flex justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <img
                src={social.icon}
                alt=""
                className="h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125"
              />
              {/* Tooltip on hover */}
              <span className="absolute -top-8 whitespace-nowrap rounded bg-black/80 px-2 py-1 text-[10px] text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                {social.label}
              </span>
            </a>
          ))}
        </div>

        {/* ---------- Certified by ---------- */}
        <div className="mt-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-white/50 transition-all duration-300 hover:text-white/80">
            Certified By
          </span>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {certifications.map((cert) => (
              <img
                key={cert.alt}
                src={cert.src}
                alt={cert.alt}
                className="h-10 w-auto object-contain opacity-70 transition-all duration-500 hover:scale-110 hover:opacity-100 hover:brightness-125 sm:h-12"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-5 text-sm text-white/60 sm:flex-row sm:justify-between sm:px-8 lg:px-10">
          <span className="transition-all duration-300 hover:text-white">
            Print247.us © 2025. All Rights Reserved.
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="transition-all duration-300 hover:text-white">
              We accept all major credit cards
            </span>
            <img
              src={paymentBadge}
              alt="Wire Transfer, ACH, Zelle"
              className="h-5 w-auto transition-all duration-300 hover:scale-110 hover:brightness-125"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
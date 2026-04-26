import AnchorLink from "@/shared/AnchorLink";
import { SelectedPage } from "@/shared/types";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const BRAND_MARK = "EVOGYM";

/** Demo-only socials — point at example.com so nothing “real” is implied */
const SOCIALS = [
  {
    label: "Instagram",
    href: "https://example.com/evogym/instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4H7.6m1.6 1.8h6c1.8 0 3.2 1.4 3.2 3.2v6c0 1.8-1.4 3.2-3.2 3.2h-6A3.2 3.2 0 0 1 6 15v-6C6 7.2 7.4 5.8 9.2 5.8M12 8.4A3.6 3.6 0 0 0 8.4 12 3.6 3.6 0 0 0 12 15.6 3.6 3.6 0 0 0 15.6 12 3.6 3.6 0 0 0 12 8.4m4.8-.2a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://example.com/evogym/facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2v-2.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v7.95c4.56-.93 8-4.96 8-9.95Z"
        />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://example.com/evogym/x",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://example.com/evogym/youtube",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5.8 31 31 0 0 0-.5-5.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z"
        />
      </svg>
    ),
  },
] as const;

const FOOTER_LINKS = [
  { label: "Home", page: SelectedPage.Home },
  { label: "Benefits", page: SelectedPage.Benefits },
  { label: "Our Classes", page: SelectedPage.OurClasses },
  { label: "Contact", page: SelectedPage.ContactUs },
] as const;

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-gradient-to-b from-primary-100/90 via-gray-20 to-primary-100/70">
      <div className="mx-auto min-w-0 max-w-6xl px-4 py-14 sm:px-8 sm:py-16 md:py-20">
        <div className="grid gap-12 sm:gap-14 md:grid-cols-12 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <AnchorLink
              href={`#${SelectedPage.Home}`}
              aria-label={`${BRAND_MARK}, go to home`}
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-20"
            >
              <span className="font-montserrat text-2xl font-bold tracking-tight text-gray-500 sm:text-3xl">
                {BRAND_MARK}
              </span>
            </AnchorLink>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-500/90 sm:text-base">
              EVOGYM is a training floor for people who like a plan, a coach within
              reach, and a community that shows up on Tuesdays like it matters.
              Strength, classes, and open gym — one membership, zero attitude.
            </p>
            <ul
              className="mt-6 flex flex-wrap gap-2"
              aria-label="Social media (demo links)"
            >
              {SOCIALS.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (demo)`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-gray-20/90 text-gray-500 shadow-sm ring-1 ring-primary-100/50 transition hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-100/80 hover:text-primary-500"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs font-medium text-gray-500/75 sm:text-sm">
              © {new Date().getFullYear()} EVOGYM. All rights reserved.
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <p className="font-montserrat text-xs font-bold uppercase tracking-[0.18em] text-primary-500">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.map(({ label, page }) => (
                <li key={page}>
                  <AnchorLink
                    href={`#${page}`}
                    className="text-sm font-medium text-gray-500 underline-offset-[6px] transition hover:text-primary-500 hover:underline"
                  >
                    {label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="font-montserrat text-xs font-bold uppercase tracking-[0.18em] text-primary-500">
              Contact
            </p>
            <ul className="mt-4 space-y-4 text-sm text-gray-500/90">
              <li className="flex gap-3">
                <MapPinIcon
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary-500"
                  aria-hidden
                />
                <span>
                  123 Training Ave, Suite 100
                  <span className="mt-0.5 block text-gray-500/75">
                    Metro City, ST 00000
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon
                  className="h-5 w-5 shrink-0 text-primary-500"
                  aria-hidden
                />
                <a
                  href="tel:+13334256825"
                  className="font-medium transition hover:text-primary-500"
                >
                  (333) 425-6825
                </a>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeIcon
                  className="h-5 w-5 shrink-0 text-primary-500"
                  aria-hidden
                />
                <a
                  href="mailto:hello@evogym.demo"
                  className="font-medium transition hover:text-primary-500"
                >
                  hello@evogym.demo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

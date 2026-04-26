import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

import AnchorLink from "@/shared/AnchorLink";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import mobileNavTrainingBg from "@/assets/image4.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTheme } from "@/theme/ThemeProvider";

const BRAND_MARK = "EVOGYM";
const BRAND_FULL_NAME = "Power Zone Gym Studio";

const mobileLinkClass =
  "block w-full rounded-xl border border-transparent px-4 py-3.5 text-left font-inter text-lg font-semibold tracking-tight hover:border-gray-100 hover:bg-gray-20/90 active:scale-[0.99] dark:hover:border-charcoal-700 dark:hover:bg-charcoal-800/90";

type NavbarProps = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: NavbarProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();
  const navbarBackground = isTopOfPage
    ? "dark:border-b dark:border-charcoal-800/80 dark:bg-charcoal-950/88 dark:shadow-[inset_0_-1px_0_0_rgb(255_107_102/0.08)] dark:backdrop-blur-md"
    : "bg-primary-100 drop-shadow dark:border-b dark:border-charcoal-800 dark:bg-charcoal-900/95 dark:shadow-[0_8px_30px_-12px_rgb(0_0_0/0.45)] dark:backdrop-blur-md";
  const isAbove1060 = useMediaQuery("(min-width: 1060px)");

  const closeMenu = () => setIsMenuToggled(false);

  useEffect(() => {
    if (isAbove1060) setIsMenuToggled(false);
  }, [isAbove1060]);

  useEffect(() => {
    if (isAbove1060 || !isMenuToggled) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuToggled, isAbove1060]);

  return (
    <nav>
      <div
        className={`${navbarBackground} fixed top-0 z-30 flex w-full items-center justify-center py-6 transition-[background-color,box-shadow,border-color] duration-200`}
      >
        <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-3 items-center gap-3 px-4 sm:gap-4 sm:px-6 md:px-8">
          <div className="min-w-0 justify-self-start">
            <AnchorLink
              href={`#${SelectedPage.Home}`}
              onClick={() => setSelectedPage(SelectedPage.Home)}
              aria-label={`${BRAND_MARK}, go to home`}
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-20 dark:focus-visible:ring-offset-charcoal-900"
            >
              <span className="font-bebas-neue text-3xl font-normal uppercase tracking-wider text-gray-500 drop-shadow-[0_1px_0_rgb(94_0_0/0.15)] dark:text-rose-text dark:drop-shadow-[0_1px_4px_rgb(0_0_0/0.45)] md:text-4xl">
                {BRAND_MARK}
              </span>
            </AnchorLink>
          </div>

          {isAbove1060 ? (
            <nav
              className="flex items-center justify-center gap-6 text-sm font-medium md:gap-8 dark:text-rose-text/90"
              aria-label="Main navigation"
            >
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </nav>
          ) : (
            <div className="min-w-0" aria-hidden="true" />
          )}

          <div className="flex min-w-0 items-center justify-end gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-pressed={theme === "dark"}
              aria-label={
                theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
              }
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-gray-20/80 text-gray-500 shadow-sm transition hover:border-primary-300 hover:text-primary-500 dark:border-charcoal-700 dark:bg-charcoal-800 dark:text-rose-text dark:hover:border-primary-500/50 dark:hover:text-primary-500 touch-manipulation sm:h-12 sm:w-12"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" aria-hidden />
              ) : (
                <MoonIcon className="h-5 w-5" aria-hidden />
              )}
            </button>
            {!isAbove1060 && (
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-transparent bg-secondary-500 text-white shadow-sm transition hover:bg-primary-500 touch-manipulation dark:border-charcoal-600 dark:bg-charcoal-800 dark:text-primary-500 dark:shadow-none dark:hover:border-primary-500/40 dark:hover:bg-charcoal-750 dark:hover:text-primary-400 sm:h-12 sm:w-12"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                aria-expanded={isMenuToggled}
                aria-label="Open menu"
              >
                <Bars3Icon className="h-6 w-6" aria-hidden />
              </button>
            )}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {!isAbove1060 && isMenuToggled && (
          <motion.div
            key="mobile-nav"
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-gray-500/35 backdrop-blur-sm dark:bg-charcoal-950/65"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="absolute right-0 top-0 flex h-full w-[min(100%,340px)] max-w-full flex-col overflow-hidden border-l border-gray-100 bg-gray-20 shadow-[-12px_0_40px_-8px_rgba(94,0,0,0.12)] dark:border-charcoal-700 dark:bg-charcoal-950 dark:shadow-[-12px_0_40px_-8px_rgb(0_0_0/0.35)]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 360 }}
            >
              <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
                <img
                  src={mobileNavTrainingBg}
                  alt=""
                  className="h-full w-full object-cover object-[center_22%] opacity-[0.14] saturate-[0.92] dark:opacity-[0.1] dark:saturate-75"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary-100/92 via-primary-100/88 to-gray-20/94 dark:from-charcoal-900/93 dark:via-charcoal-850/90 dark:to-charcoal-950/95" />
              </div>

              <div className="relative z-10 flex min-h-0 flex-1 flex-col">
              <div className="flex items-center justify-between gap-4 border-b border-gray-100 px-5 py-5 dark:border-charcoal-700">
                <div className="min-w-0">
                  <p className="font-bebas-neue text-4xl font-normal uppercase tracking-wider text-gray-500 drop-shadow-[0_1px_0_rgb(94_0_0/0.12)] dark:text-rose-text dark:drop-shadow-[0_1px_4px_rgb(0_0_0/0.45)] min-[380px]:text-5xl">
                    {BRAND_MARK}
                  </p>
                  <p className="mt-0.5 truncate text-xs font-medium leading-snug text-gray-500/80 dark:text-rose-text-muted">
                    {BRAND_FULL_NAME}
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-gray-500 touch-manipulation transition hover:bg-gray-20 hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:text-rose-text dark:hover:bg-charcoal-800 dark:hover:text-primary-500"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <nav
                className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 pb-6 pt-4"
                aria-label="Mobile navigation"
              >
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  className={mobileLinkClass}
                  onAfterNavigate={closeMenu}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  className={mobileLinkClass}
                  onAfterNavigate={closeMenu}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  className={mobileLinkClass}
                  onAfterNavigate={closeMenu}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  className={mobileLinkClass}
                  onAfterNavigate={closeMenu}
                />
              </nav>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import AnchorLink from "@/shared/AnchorLink";
import Link from "./Link";
import ActionButton from "@/components/actionButton";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

const BRAND_MARK = "EVOGYM";
const BRAND_FULL_NAME = "Power Zone Gym Studio";

const mobileLinkClass =
  "block w-full rounded-xl border border-transparent px-4 py-3.5 text-left font-montserrat text-lg font-semibold tracking-tight hover:border-gray-100 hover:bg-gray-20/90 active:scale-[0.99]";

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
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
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
        className={`${navbarBackground} fixed top-0 z-30 flex w-full items-center justify-center py-6`}
      >
        <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-3 items-center gap-3 px-4 sm:gap-4 sm:px-6 md:px-8">
          <div className="min-w-0 justify-self-start">
            <AnchorLink
              href={`#${SelectedPage.Home}`}
              onClick={() => setSelectedPage(SelectedPage.Home)}
              aria-label={`${BRAND_MARK}, go to home`}
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-20"
            >
              <span className="font-montserrat text-xl font-bold tracking-tight text-gray-500 md:text-2xl">
                {BRAND_MARK}
              </span>
            </AnchorLink>
          </div>

          {isAbove1060 ? (
            <nav
              className="flex items-center justify-center gap-6 text-sm md:gap-8"
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

          <div className="min-w-0 justify-self-end">
            {isAbove1060 ? (
              <ActionButton setSelectedPage={setSelectedPage}>
                Join EVOGYM
              </ActionButton>
            ) : (
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary-500 touch-manipulation sm:h-12 sm:w-12"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                aria-expanded={isMenuToggled}
                aria-label="Open menu"
              >
                <Bars3Icon className="h-6 w-6 text-white" />
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
              className="absolute inset-0 bg-gray-500/35 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="absolute right-0 top-0 flex h-full w-[min(100%,340px)] max-w-full flex-col border-l border-gray-100 bg-gradient-to-b from-primary-100 via-primary-100 to-gray-20 shadow-[-12px_0_40px_-8px_rgba(94,0,0,0.12)]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 360 }}
            >
              <div className="flex items-center justify-between gap-4 border-b border-gray-100 px-5 py-5">
                <div className="min-w-0">
                  <p className="font-montserrat text-lg font-bold tracking-tight text-gray-500">
                    {BRAND_MARK}
                  </p>
                  <p className="mt-0.5 truncate text-xs font-medium leading-snug text-gray-500/80">
                    {BRAND_FULL_NAME}
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-gray-500 touch-manipulation transition hover:bg-gray-20 hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
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

              <div className="border-t border-gray-100 bg-gray-20/50 px-5 py-5">
                <p className="mb-3 text-center text-xs text-gray-500/80">
                  Ready to train?
                </p>
                <div className="flex justify-center">
                  <ActionButton
                    className="w-full max-w-sm"
                    setSelectedPage={setSelectedPage}
                  >
                    Join EVOGYM
                  </ActionButton>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

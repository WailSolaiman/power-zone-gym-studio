import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

import ActionButton from "@/components/actionButton";
import AnchorLink from "@/shared/AnchorLink";
import { SelectedPage } from "@/shared/types";
import { cn } from "@/lib/utils";

const CAROUSEL_CARD_W = 300;
const CAROUSEL_GAP = 24;

export interface PowerZoneProgramCard {
  image: string;
  category: string;
  title: string;
  onClick?: () => void;
}

export interface PowerZoneHeroProps {
  setSelectedPage: (value: SelectedPage) => void;
  /** Fires when hero scrolls into view (e.g. sync navbar active section). */
  onViewportEnter?: () => void;
  title: string;
  subtitle: string;
  /** Shown next to primary CTA (e.g. tour / pricing). */
  secondaryLabel?: string;
  /** Anchor href for secondary (default #benefits). */
  secondaryHref?: string;
  secondaryPage?: SelectedPage;
  disclaimer?: string;
  socialProof?: {
    avatars: string[];
    text: string;
  };
  programs?: PowerZoneProgramCard[];
  className?: string;
  children?: ReactNode;
  /** Root element id for in-page anchors (default `home`). */
  sectionId?: string;
}

export function PowerZoneHero({
  setSelectedPage,
  onViewportEnter,
  title,
  subtitle,
  secondaryLabel = "See benefits",
  secondaryHref = `#${SelectedPage.Benefits}`,
  secondaryPage = SelectedPage.Benefits,
  disclaimer,
  socialProof,
  programs = [],
  className,
  children,
  sectionId = "home",
}: PowerZoneHeroProps) {
  const loopWidth = programs.length * (CAROUSEL_CARD_W + CAROUSEL_GAP);

  return (
    <motion.section
      id={sectionId}
      role="banner"
      aria-label="Hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      onViewportEnter={onViewportEnter}
      viewport={{ once: true, amount: 0.35 }}
      className={cn(
        "relative flex min-h-[min(100dvh,920px)] w-full flex-col overflow-hidden bg-gradient-to-b from-gray-20 via-primary-100/35 to-gray-20 pt-24 pb-12 md:pt-28 md:pb-16",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -15%, rgb(255 225 224), transparent 55%)",
        }}
      />

      {children ? (
        <div className="relative z-10 flex flex-1 items-center justify-center px-4">
          {children}
        </div>
      ) : (
        <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-4xl flex-1 flex-col items-center justify-center px-4 text-center sm:px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="flex w-full min-w-0 max-w-3xl flex-col items-center gap-6 sm:gap-8"
          >
            <h1 className="text-balance font-montserrat text-3xl font-bold leading-[1.1] tracking-tight text-gray-500 min-[400px]:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-gray-500/85 md:text-lg">
              {subtitle}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex w-full min-w-0 max-w-md flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
            >
              <ActionButton
                className="w-full sm:w-auto"
                setSelectedPage={setSelectedPage}
              >
                <span className="inline-flex items-center gap-2">
                  Join EVOGYM
                  <ArrowRightIcon className="h-5 w-5" aria-hidden />
                </span>
              </ActionButton>
              <AnchorLink
                className="inline-flex min-h-[44px] w-full items-center justify-center text-sm font-semibold text-primary-500 underline decoration-primary-300 underline-offset-4 transition hover:text-secondary-500 hover:decoration-secondary-400 sm:inline-flex sm:min-h-0 sm:w-auto sm:py-2"
                href={secondaryHref}
                onClick={() => setSelectedPage(secondaryPage)}
              >
                {secondaryLabel}
              </AnchorLink>
            </motion.div>

            {disclaimer && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.45 }}
                className="text-xs italic text-gray-500/75"
              >
                {disclaimer}
              </motion.p>
            )}

            {socialProof && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex w-full min-w-0 flex-row flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:justify-start"
              >
                <div className="flex shrink-0 -space-x-2">
                  {socialProof.avatars.map((src, index) => (
                    <img
                      key={`${src}-${index}`}
                      src={src}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full border-2 border-gray-20 object-cover ring-1 ring-gray-100"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span className="min-w-0 max-w-[18rem] text-center text-sm font-medium leading-snug text-gray-500 sm:max-w-none sm:text-left">
                  {socialProof.text}
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}

      {programs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
          className="relative z-10 mt-10 w-full overflow-hidden pb-6 pt-8 md:mt-14 md:pb-8 md:pt-10"
        >
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-gray-20 to-transparent md:w-28"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-gray-20 to-transparent md:w-28"
            aria-hidden
          />

          <motion.div
            className="flex items-stretch pl-4 md:pl-6"
            style={{ gap: CAROUSEL_GAP }}
            animate={
              programs.length > 0
                ? { x: [0, -loopWidth] }
                : undefined
            }
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: Math.max(programs.length * 3, 14),
                ease: "linear",
              },
            }}
          >
            {[...programs, ...programs].map((program, index) => (
              <motion.button
                type="button"
                key={`${program.title}-${index}`}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ duration: 0.25 }}
                onClick={program.onClick}
                className="relative h-[400px] shrink-0 cursor-pointer overflow-hidden rounded-3xl text-left shadow-xl shadow-primary-500/10 ring-1 ring-gray-100 md:h-[440px]"
                style={{ width: CAROUSEL_CARD_W }}
              >
                <img
                  src={program.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-gray-500/90 via-gray-500/20 to-transparent"
                  aria-hidden
                />
                <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-1 p-5 md:p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary-400">
                    {program.category}
                  </span>
                  <h3 className="font-montserrat text-xl font-bold leading-snug tracking-tight text-gray-20 md:text-2xl">
                    {program.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}

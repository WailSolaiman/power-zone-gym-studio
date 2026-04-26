import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  ClockIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import { BenefitType, SelectedPage } from "@/shared/types";
import ActionButton from "@/components/actionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-7 w-7" />,
    title: "Room to train your way",
    description:
      "Platforms, racks, cardio, and open floor space laid out so you’re not fighting for a spot. Wipe-down stations, good lighting, and gear that’s maintained like people actually use it.",
  },
  {
    icon: <UserGroupIcon className="h-7 w-7" />,
    title: "Classes that fit real life",
    description:
      "Strength blocks, sweat sessions, yoga, and core finishers on a weekly rhythm — not random one-offs. Jump in when you’re fresh, decompress when you’re fried.",
  },
  {
    icon: <AcademicCapIcon className="h-7 w-7" />,
    title: "Coaches who teach, not shout",
    description:
      "EVOGYM coaches meet you at your level: demos, form checks, and progressions that make sense. Ask questions — that’s what the team is there for.",
  },
  {
    icon: <ClockIcon className="h-7 w-7" />,
    title: "Hours that respect your calendar",
    description:
      "Early blocks, lunch-hour classes, and evening sessions so training doesn’t require a lifestyle overhaul. Check the desk for current open-gym windows.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type BenefitsProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: BenefitsProps) => {
  return (
    <section
      id="benefits"
      className="overflow-x-hidden border-t border-gray-100 bg-gradient-to-b from-gray-20 via-primary-100/25 to-gray-20"
    >
      <div className="mx-auto min-h-full w-full min-w-0 max-w-6xl px-4 py-14 sm:px-8 sm:py-20 md:py-24">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
          {/* HEADER */}
          <motion.div
            className="max-w-3xl md:my-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-primary-500">
              Why EVOGYM
            </p>
            <h1 className="mt-3 font-montserrat text-3xl font-bold leading-tight tracking-tight text-gray-500 sm:text-4xl">
              MORE THAN A MEMBERSHIP CARD.
            </h1>
            <p className="mt-5 max-w-prose text-sm leading-relaxed text-gray-500/90 sm:text-base">
              EVOGYM is built for people who want a plan, a coach in earshot, and
              a floor that feels alive — not a maze of machines and mystery
              programming. Show up, follow the board, ask for a spot, and leave
              knowing what you trained today.
            </p>
          </motion.div>

          {/* BENEFITS */}
          <motion.div
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:mt-12 xl:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            {benefits.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </motion.div>

          {/* Member story: headline + image */}
          <div className="relative mt-16 md:mt-24">
            <div
              className="pointer-events-none absolute inset-x-4 -top-8 bottom-0 -z-10 rounded-[2rem] bg-primary-100/40 blur-2xl sm:inset-x-8"
              aria-hidden
            />
            <div className="min-w-0 overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-20 via-primary-100/25 to-gray-20 p-4 shadow-lg shadow-primary-500/10 ring-1 ring-primary-100/50 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              <div className="flex min-w-0 flex-col gap-8 sm:gap-10 lg:gap-12">
                {/* Headline + stats — full width */}
                <div className="relative">
                  <div className="before:pointer-events-none before:absolute before:-top-12 before:-left-4 before:z-0 before:h-28 before:w-28 before:opacity-75 sm:before:-left-6 sm:before:-top-16 md:before:content-abstractwaves">
                    <motion.div
                      className="relative z-10"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.45 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <p className="font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-primary-500">
                        The EVOGYM floor
                      </p>
                      <h2 className="mt-3 max-w-4xl text-balance font-montserrat text-2xl font-bold leading-[1.12] tracking-tight text-gray-500 min-[400px]:text-3xl sm:text-4xl lg:text-[2.35rem] lg:leading-[1.1] xl:text-5xl">
                        <span className="block sm:inline">EVOGYM IS FOR </span>
                        <span className="block sm:inline">
                          EVERY{" "}
                          <span className="bg-gradient-yellowred bg-clip-text text-transparent">
                            BODY
                          </span>
                          .
                        </span>
                      </h2>
                      <div
                        className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                        aria-hidden
                      />
                      <ul className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                        <li className="rounded-full border border-gray-100 bg-primary-100/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-4">
                          Open gym + classes
                        </li>
                        <li className="rounded-full border border-gray-100 bg-primary-100/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-4">
                          Mornings, lunch, nights
                        </li>
                        <li className="rounded-full border border-gray-100 bg-primary-100/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-4">
                          Coaches who answer questions
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </div>

                {/* Image first, then body copy; CTA below */}
                <div className="flex min-w-0 flex-col gap-8 sm:gap-10">
                  <div className="flex min-w-0 flex-row items-start gap-3 min-[380px]:gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-14">
                    <motion.div
                      className="w-[5.5rem] shrink-0 min-[380px]:w-28 sm:w-32 md:w-36 lg:w-[11.25rem] xl:w-[12.5rem]"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.55 }}
                    >
                      <div className="relative pt-0.5 lg:pt-1">
                        <div className="pointer-events-none absolute -inset-1 rounded-[1.15rem] bg-gradient-to-br from-primary-300/50 via-transparent to-secondary-400/30 opacity-80" />
                        <div className="relative aspect-[3/4] max-h-[11rem] overflow-hidden rounded-2xl shadow-xl shadow-primary-500/15 ring-1 ring-gray-100 min-[380px]:max-h-[13rem] sm:max-h-[15rem] md:max-h-[16.25rem] lg:max-h-[17.5rem]">
                          <img
                            className="h-full w-full object-cover object-center"
                            alt="Members training together at EVOGYM"
                            src={BenefitsPageGraphic}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="min-w-0 flex-1"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.45 }}
                      transition={{ delay: 0.12, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, y: 16 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className="relative border-l-2 border-primary-300/80 pl-3 sm:pl-5 md:pl-6 lg:py-1">
                        <p className="max-w-prose text-sm leading-relaxed text-gray-500/95 sm:text-base">
                          Whether you’re brand new or back after a long break,
                          EVOGYM is the kind of place where you learn the room: where
                          racks open up, how class sign-ups work, and which coach
                          loves teaching deadlift day. No side-eye for asking how a
                          machine works.
                        </p>
                        <p className="mt-4 max-w-prose text-sm leading-relaxed text-gray-500/90 sm:text-base">
                          Bring a friend, come solo, or slip in on a lunch break —
                          the floor stays steady because people treat it like their
                          training home. That’s the EVOGYM deal: consistency over
                          hype, coaching over guessing, and progress you can feel
                          before you see it on a scale.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="relative border-t border-gray-100/80 pt-8 md:pt-9"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: 0.08, duration: 0.45 }}
                  >
                    <div className="before:pointer-events-none before:absolute before:-bottom-12 before:right-2 before:z-0 before:opacity-80 before:content-sparkles sm:before:-bottom-16 sm:before:right-8 md:before:right-12">
                      <ActionButton
                        className="w-full sm:w-auto"
                        setSelectedPage={setSelectedPage}
                      >
                        Join EVOGYM
                      </ActionButton>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;

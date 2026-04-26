import { motion } from "framer-motion";

import { SelectedPage, ClassType } from "@/shared/types";
import Class from "./Class";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";

const classes: Array<ClassType> = [
  {
    name: "Weight floor & strength blocks",
    description:
      "Barbell work, accessory circuits, and coach-led warm-ups so you’re never guessing what “leg day” means at EVOGYM. Racks, plates, and space to breathe between sets.",
    image: image1,
  },
  {
    name: "Yoga & mobility",
    image: image2,
  },
  {
    name: "Core & conditioning",
    description:
      "Short, focused rounds that build trunk strength and engine without running you into the ground. Great paired with strength days or as a lunch-hour reset.",
    image: image3,
  },
  {
    name: "Outdoor & team sessions",
    description:
      "Weather-friendly outings and small-group challenges when we take the work outside. Think teamwork, fresh air, and coaches who keep the pace honest.",
    image: image4,
  },
  {
    name: "Metabolic & cardio mix",
    image: image5,
  },
  {
    name: "Small-group training",
    description:
      "Extra eyes on form, shared energy, and programming you can repeat during open gym. Ideal if you like accountability without a spotlight on you.",
    image: image6,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

type OurClassesProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: OurClassesProps) => {
  return (
    <section
      id="ourclasses"
      className="overflow-x-hidden border-t border-gray-100 bg-gradient-to-b from-primary-100/90 via-gray-20 to-primary-100/70 dark:border-charcoal-800 dark:from-charcoal-900 dark:via-charcoal-950 dark:to-charcoal-900"
    >
      <div className="mx-auto min-w-0 max-w-6xl px-4 py-16 sm:px-8 sm:py-20 md:py-24">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
              EVOGYM classes
            </p>
            <h2 className="mt-3 font-bebas-neue text-5xl font-normal uppercase leading-[0.92] tracking-wider text-gray-500 drop-shadow-[0_2px_0_rgb(94_0_0/0.12)] dark:text-rose-text dark:drop-shadow-[0_2px_8px_rgb(0_0_0/0.55)] min-[400px]:text-6xl md:text-7xl lg:text-8xl">
              OUR CLASSES
            </h2>
            <div
              className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
              aria-hidden
            />
            <p className="mt-6 max-w-prose text-sm leading-relaxed text-gray-500/90 dark:text-rose-text/90 sm:text-base">
              Pick a lane — heavy, sweaty, slow, or restorative — and we’ll help
              you line it up with the rest of your week at EVOGYM. Schedules shift
              seasonally; the desk always has the current lineup.
            </p>
          </motion.div>

          <motion.ul
            className="mt-10 grid list-none grid-cols-1 gap-6 xs:grid-cols-2 md:mt-14 md:grid-cols-3 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={container}
          >
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default OurClasses;

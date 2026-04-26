import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

type BenefitProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Benefit = ({ icon, title, description }: BenefitProps) => {
  return (
    <motion.div
      variants={childVariant}
      className="flex h-full flex-col rounded-2xl border border-gray-100 bg-gray-20/70 px-5 py-10 text-center shadow-sm shadow-primary-500/5 ring-1 ring-primary-100/40 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary-500/10 dark:border-charcoal-700 dark:bg-charcoal-900/70 dark:ring-charcoal-700 sm:px-6 sm:py-12"
    >
      <div className="mb-5 flex justify-center">
        <div className="rounded-2xl border border-gray-100 bg-primary-100 p-4 text-primary-500 shadow-inner dark:border-charcoal-700 dark:bg-charcoal-800 dark:text-primary-500">
          {icon}
        </div>
      </div>

      <h3 className="break-words font-bebas-neue text-2xl font-normal uppercase leading-snug tracking-wider text-gray-500 drop-shadow-[0_1px_0_rgb(94_0_0/0.1)] dark:text-rose-text dark:drop-shadow-[0_1px_4px_rgb(0_0_0/0.4)] md:text-3xl lg:text-4xl">
        {title}
      </h3>
      <p className="mt-4 flex-1 break-words text-sm leading-relaxed text-gray-500/90 dark:text-rose-text/90">
        {description}
      </p>
    </motion.div>
  );
};

export default Benefit;

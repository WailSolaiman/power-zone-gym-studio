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
      className="flex h-full flex-col rounded-2xl border border-gray-100 bg-gray-20/70 px-5 py-10 text-center shadow-sm shadow-primary-500/5 ring-1 ring-primary-100/40 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary-500/10 sm:px-6 sm:py-12"
    >
      <div className="mb-5 flex justify-center">
        <div className="rounded-2xl border border-gray-100 bg-primary-100 p-4 text-primary-500 shadow-inner">
          {icon}
        </div>
      </div>

      <h3 className="break-words font-montserrat text-lg font-bold leading-snug tracking-tight text-gray-500">
        {title}
      </h3>
      <p className="mt-4 flex-1 break-words text-sm leading-relaxed text-gray-500/90">
        {description}
      </p>
    </motion.div>
  );
};

export default Benefit;

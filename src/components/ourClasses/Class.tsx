import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

type ClassProps = {
  name: string;
  description?: string;
  image: string;
};

const descriptionClass =
  "line-clamp-4 text-sm font-normal leading-relaxed text-gray-500/90 sm:text-base";

const Class = ({ name, description, image }: ClassProps) => {
  return (
    <motion.li
      variants={item}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-gray-20/80 shadow-md shadow-primary-500/5 ring-1 ring-primary-100/50 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/10"
    >
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
        <img
          alt={name}
          src={image}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-500/95 via-gray-500/35 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="font-montserrat text-lg font-bold leading-snug tracking-tight text-gray-20 sm:text-xl">
            {name}
          </p>
        </div>
      </div>

      <div className="flex min-h-[5.5rem] flex-1 flex-col justify-center border-t border-gray-100/90 bg-gray-20/95 px-4 py-4 sm:px-5 sm:py-5">
        <p className={descriptionClass}>
          {description ??
            "Times and coaches rotate — ask the EVOGYM front desk for this week’s schedule or grab a flyer by the smoothie bar."}
        </p>
      </div>
    </motion.li>
  );
};

export default Class;

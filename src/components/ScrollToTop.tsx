import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

import { cn } from "@/lib/utils";

const SHOW_AFTER_PX = 400;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 right-4 z-20 flex h-12 w-12 touch-manipulation items-center justify-center rounded-full border border-gray-100 bg-primary-500 text-white shadow-lg shadow-primary-500/30 transition-[opacity,transform,box-shadow] duration-300 hover:bg-primary-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-20 dark:border-charcoal-700 dark:bg-primary-500 dark:shadow-primary-500/20 dark:focus-visible:ring-offset-charcoal-950 sm:bottom-8 sm:right-6 md:right-10",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUpIcon className="h-6 w-6" aria-hidden />
    </button>
  );
}

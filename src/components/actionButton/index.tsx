import { ReactNode } from "react";
import AnchorLink from "@/shared/AnchorLink";
import { cn } from "@/lib/utils";

import { SelectedPage } from "@/shared/types";

type ActionButtonProps = {
  children: ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  className?: string;
};

const ActionButton = ({
  children,
  setSelectedPage,
  className,
}: ActionButtonProps) => {
  return (
    <AnchorLink
      className={cn(
        "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md bg-secondary-500 px-6 py-2.5 text-center text-sm font-semibold transition-colors hover:bg-primary-500 hover:text-white sm:min-h-0 sm:min-w-0 sm:px-10 sm:py-2 sm:text-base",
        className
      )}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;

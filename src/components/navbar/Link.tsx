import AnchorLink from "@/shared/AnchorLink";
import { cn } from "@/lib/utils";

import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  /** Extra classes (e.g. mobile drawer row styling). */
  className?: string;
  /** Runs after the page is selected (e.g. close mobile menu). */
  onAfterNavigate?: () => void;
};

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  className,
  onAfterNavigate,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const isActive = selectedPage === lowerCasePage;

  return (
    <AnchorLink
      className={cn(
        "transition hover:text-primary-300",
        isActive ? "text-primary-500" : "text-gray-500",
        className
      )}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        onAfterNavigate?.();
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;

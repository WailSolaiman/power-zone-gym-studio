import { PowerZoneHero } from "@/components/ui/PowerZoneHero";

import { SelectedPage } from "@/shared/types";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";

type HomeProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const scrollToOurClasses = () => {
  document
    .getElementById(SelectedPage.OurClasses)
    ?.scrollIntoView({ behavior: "smooth" });
};

const sponsors = [
  { src: SponsorRedBull, alt: "Red Bull" },
  { src: SponsorForbes, alt: "Forbes" },
  { src: SponsorFortune, alt: "Fortune" },
] as const;

const Home = ({ setSelectedPage }: HomeProps) => {
  const programs = [
    {
      image: image1,
      category: "Strength",
      title: "Platforms & racks",
      onClick: () => {
        setSelectedPage(SelectedPage.OurClasses);
        scrollToOurClasses();
      },
    },
    {
      image: image2,
      category: "Mind & body",
      title: "Yoga & recovery",
      onClick: () => {
        setSelectedPage(SelectedPage.OurClasses);
        scrollToOurClasses();
      },
    },
    {
      image: image3,
      category: "Core",
      title: "Core & conditioning",
      onClick: () => {
        setSelectedPage(SelectedPage.OurClasses);
        scrollToOurClasses();
      },
    },
    {
      image: image4,
      category: "Outdoor",
      title: "Outdoor & team days",
      onClick: () => {
        setSelectedPage(SelectedPage.OurClasses);
        scrollToOurClasses();
      },
    },
    {
      image: image5,
      category: "All levels",
      title: "Small-group sessions",
      onClick: () => {
        setSelectedPage(SelectedPage.OurClasses);
        scrollToOurClasses();
      },
    },
  ];

  return (
    <div className="min-w-0 overflow-x-hidden bg-gray-20 dark:bg-charcoal-950">
      <PowerZoneHero
        setSelectedPage={setSelectedPage}
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        title="EVOGYM."
        tagline="Where You Evolve"
        subtitle="Strength, classes, and coaching that meet you where you are — whether it’s your first week back or your next PR. Clear programming, friendly coaches, and a floor that stays busy because people actually show up."
        secondaryLabel="Why EVOGYM"
        secondaryHref={`#${SelectedPage.Benefits}`}
        secondaryPage={SelectedPage.Benefits}
        disclaimer="*Ask the front desk about a complimentary first session."
        socialProof={{
          avatars: [
            "https://i.pravatar.cc/96?img=12",
            "https://i.pravatar.cc/96?img=32",
            "https://i.pravatar.cc/96?img=45",
            "https://i.pravatar.cc/96?img=68",
          ],
          text: "Same faces on the floor — week after week at EVOGYM",
        }}
        programs={programs}
      />

      <section
        aria-label="Brand partners"
        className="border-t border-gray-100 bg-gradient-to-b from-primary-100/90 via-gray-20 to-primary-100/60 dark:border-charcoal-800 dark:from-charcoal-900 dark:via-charcoal-950 dark:to-charcoal-900"
      >
        <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-12 md:py-14">
          <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.22em] text-primary-500">
              Partners & press
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-500/90 dark:text-rose-text/90">
              EVOGYM sits alongside names people know from sport and business —
              a nod to how we train, not who you have to be before you walk in.
            </p>
          </div>

          <ul className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14 md:flex-nowrap md:justify-between md:gap-x-8 lg:max-w-4xl">
            {sponsors.map(({ src, alt }) => (
              <li
                key={alt}
                className="flex h-11 w-[7.5rem] items-center justify-center sm:h-12 sm:w-32 md:h-14 md:w-40"
              >
                <img
                  src={src}
                  alt={`${alt} — partner logo`}
                  className="max-h-full max-w-[85%] object-contain opacity-[0.82] grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;

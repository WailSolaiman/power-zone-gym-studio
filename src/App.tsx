import { useEffect, useState } from "react";

import { SelectedPage } from "@/shared/types";
import Navbar from "@/components/navbar";
import Home from "@/components/home";
import Benefits from "@/components/benefits";
import OurClasses from "@/components/ourClasses";
import ContactUs from "@/components/contactUs";
import Footer from "./components/footer";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App min-h-full min-w-0 overflow-x-hidden bg-gray-20 transition-colors duration-200 dark:bg-charcoal-950">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

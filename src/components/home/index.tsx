import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/components/actionButton";
import HomePageText from "@/assets/HomePageText.png";

type HomeProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: HomeProps) => {
  return <div>Home</div>;
};

export default Home;

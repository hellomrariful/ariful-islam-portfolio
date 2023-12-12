import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Skill from "../Skill/Skill";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
};

export default Home;

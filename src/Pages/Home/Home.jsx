import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";
import Statistic from "../Statistic/Statistic";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Statistic></Statistic>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;

import Hero from "./Hero";
import ResumeUpload from "./ResumeUpload";
import FeatureCards from "../Pages/FeatureCards";
const Home = () => {
  return (
    <div className="mb-10">
      <Hero />
      <ResumeUpload />
      <FeatureCards />
    </div>
  );
};

export default Home;

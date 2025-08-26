import NabBar from "../components/NavBar";
import StarBackground from "../components/StarBackground";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* background  effect  */}
      <StarBackground />
      {/* nav bar  */}
      <NabBar />
      {/* main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
      </main>
      {/* Footer */}
    </div>
  );
};

export default Home;

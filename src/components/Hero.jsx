import { ArrowDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center "
    >
      <div className="container max-w-4xl mx-auto z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold ">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="opacity-0 animate-fade-in-delay-1 text-primary">
              {" "}
              Abdullah
            </span>
            <span className="opacity-0 animate-fade-in-delay-2 text-glow ml-2">
              {" "}
              Montasser
            </span>
          </h1>
          <p className="text-lg md:text-xl mx-auto opacity-0 animate-fade-in-delay-3">
            AI student and software engineer focused on designing and developing
            high-quality applications that deliver seamless user experiences and
            real-world impact.{" "}
          </p>{" "}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 flex flex-col -translate-x-1/2 animate-bounce items-center">
        <span>scroll</span>
        <ArrowDown className="size-5" />
      </div>
    </section>
  );
}

export default Hero;

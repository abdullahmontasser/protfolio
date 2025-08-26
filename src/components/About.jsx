import { Bot, Brain, Code, Code2, CodeSquare, Laptop, Laptop2, Layers } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto  max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 ">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            <h3 className="text-2xl">AI Engineer & Software Engineer</h3>
            <p className="text-foreground text-lg">
              I'm an AI student and software engineer passionate about building
              smart, scalable applications.
            </p>
            <p className="text-foreground text-lg">
              I started with machine learning, but my journey led me to
              full-stack development.{" "}
            </p>

            <p className="text-foreground text-lg">
              My goal is to bridge AI and software engineering to create
              products that make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
               <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors
                duration-300 font-medium"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1  gap-6">
            <div className=" gradient-border card-hover p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Laptop2 className="w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Modern Web Apps</h4>
                  <p className="text-muted-foreground">
                    Developing responsive and scalable applications using React
                    and Next.js.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card card-hover p-6 rounded-2xl">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bot className="size-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI-Powered Solutions</h4>
                  <p className="text-muted-foreground">
                    Building and Integrating machine learning and AI models into real-world
                    products.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card card-hover p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layers className="size-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">End-to-End Development</h4>
                  <p className="text-muted-foreground">
                    Designing, building, and deploying full-stack solutions with
                    modern web tech.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

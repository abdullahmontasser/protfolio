import { useState } from "react";
import cn from "clsx";
export const skills = [
  // Frontend & Backend
  { name: "HTML", category: "Frontend", level: 95 },
  { name: "CSS", category: "Frontend", level: 90 },
  { name: "JavaScript", category: "Frontend", level: 90 },
  { name: "React", category: "Frontend", level: 80 },
  { name: "Next.js", category: "Frontend", level: 80 },
  { name: "Tailwind CSS", category: "Frontend", level: 85 },

  // Backend
  { name: "Node.js", category: "Backend", level: 75 },
  { name: "Express", category: "Backend", level: 75 },
  { name: "FastAPI", category: "Backend", level: 70 },
  { name: "RESTful APIs", category: "Backend", level: 80 },
  // AI & Machine Learning
  { name: "Python", category: "AI & Machine Learning", level: 95 },
  { name: "Machine Learning", category: "AI & Machine Learning", level: 80 },
  { name: "Deep Learning", category: "AI & Machine Learning", level: 75 },
  { name: "Computer Vision", category: "AI & Machine Learning", level: 70 },
  { name: "Data Analysis", category: "AI & Machine Learning", level: 80 },
  // Tools & Others
  { name: "Git & GitHub", category: "Tools & Others", level: 85 },
  { name: "Docker", category: "Tools & Others", level: 50 },
  { name: "Postman", category: "Tools & Others", level: 80 },
  { name: "MongoDB", category: "Tools & Others", level: 75 },
  { name: "SQL", category: "Tools & Others", level: 75 },
  { name: "Linux", category: "Tools & Others", level: 70 },
];
const Categories = [
  "All",
  "Frontend",
  "Backend",
  "AI & Machine Learning",
  "Tools & Others",
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredCategories = skills.filter(
    (skill) => activeCategory === "All" || activeCategory === skill.category
  );
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-5xl ">
        <h2 className="text-3xl text-glow font-bold md:text-4xl mb-12">
          My<span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2",
                activeCategory === category
                  ? "bg-primary/80 rounded-2xl "
                  : "bg-primary/15 rounded-2xl hover:bg-primary/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((skill, key) => (
            <div
              key={key}
              className="card-hover bg-card p-6 rounded-lg shadow-xs"
            >
              <h3 className="text-lg text-left font-semibold ">{skill.name}</h3>
              <div className="w-full flex items-center gap-2 justify-between">
                <div
                  className=" bg-primary rounded-full  h-2 "
                  style={{ width: skill.level + "%" }}
                />

                <div className="text-right text-foreground/95 text-sm">
                  <span>{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

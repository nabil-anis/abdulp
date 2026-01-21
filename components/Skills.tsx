
import React from 'react';

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Vue", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  {
    name: "Design & Tools",
    skills: ["Figma", "Docker", "Git", "Vercel", "AWS"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="glass-card rounded-[40px] p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-blue-500/20 text-9xl font-black select-none pointer-events-none">
          CODE
        </div>
        
        <h2 className="text-4xl font-bold mb-12 relative z-10">
          My <span className="gradient-text">Toolkit</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          {skillCategories.map((cat, idx) => (
            <div key={idx}>
              <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-6">{cat.name}</h4>
              <ul className="space-y-4">
                {cat.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:w-4 transition-all"></div>
                    <span className="text-gray-300 font-medium group-hover:text-white">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: "React", color: "border-xiaomi-blue text-xiaomi-blue" },
    { name: "Next.js", color: "border-white dark:border-white text-black dark:text-white" },
    { name: "Tailwind", color: "border-xiaomi-blue text-xiaomi-blue" },
    { name: "TypeScript", color: "border-xiaomi-blue text-xiaomi-blue" },
    { name: "Figma", color: "border-xiaomi-pink text-xiaomi-pink" },
    { name: "Node.js", color: "border-xiaomi-green text-xiaomi-green" },
    { name: "Python", color: "border-xiaomi-orange text-xiaomi-orange" },
    { name: "Docker", color: "border-xiaomi-blue text-xiaomi-blue" },
    { name: "GraphQL", color: "border-xiaomi-pink text-xiaomi-pink" },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="glass-card rounded-[3rem] p-12 lg:p-20">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-black mb-12">
            The <span className="text-xiaomi-purple">Powerhouse</span> behind the scenes.
          </h2>
          
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className={`px-8 py-4 rounded-2xl border-2 font-black text-xl transition-all hover:bg-current hover:text-white cursor-default ${skill.color}`}
              >
                {skill.name}
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xiaomi-orange font-black text-4xl">99%</h4>
              <p className="text-xs font-bold dark:text-gray-500 text-gray-400 uppercase mt-2">Optimization</p>
            </div>
            <div>
              <h4 className="text-xiaomi-blue font-black text-4xl">40+</h4>
              <p className="text-xs font-bold dark:text-gray-500 text-gray-400 uppercase mt-2">Successes</p>
            </div>
            <div>
              <h4 className="text-xiaomi-green font-black text-4xl">0ms</h4>
              <p className="text-xs font-bold dark:text-gray-500 text-gray-400 uppercase mt-2">Latency</p>
            </div>
            <div>
              <h4 className="text-xiaomi-pink font-black text-4xl">∞</h4>
              <p className="text-xs font-bold dark:text-gray-500 text-gray-400 uppercase mt-2">Creativity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';

const projects = [
  {
    title: "Hyper OS UI",
    description: "System design exploration for next-gen mobile interfaces.",
    image: "https://picsum.photos/seed/hyper/800/600",
    color: "bg-xiaomi-orange",
    tag: "Design"
  },
  {
    title: "Eco Flow",
    description: "Sustainability tracking app with glassmorphic visuals.",
    image: "https://picsum.photos/seed/flow/800/600",
    color: "bg-xiaomi-green",
    tag: "Mobile"
  },
  {
    title: "Neon Pulse",
    description: "Music platform using real-time frequency visualization.",
    image: "https://picsum.photos/seed/pulse/800/600",
    color: "bg-xiaomi-purple",
    tag: "Web App"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-5xl font-black mb-4">Latest <span className="text-xiaomi-blue">Drops</span></h2>
          <p className="dark:text-gray-400 text-gray-500 font-medium">A collection of things I'm proud of.</p>
        </div>
        <div className="text-xiaomi-orange font-black text-8xl opacity-10 hidden lg:block">WORK</div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <div key={i} className="group relative">
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 relative z-10 shadow-xl transition-all group-hover:-translate-y-2">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black">
                  <i className="fa-solid fa-arrow-up-right-from-square text-xl"></i>
                </div>
              </div>
            </div>
            
            <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-4 ${p.color}`}>
              {p.tag}
            </span>
            <h3 className="text-2xl font-black mb-2 group-hover:text-xiaomi-orange transition-colors">{p.title}</h3>
            <p className="dark:text-gray-400 text-gray-500 text-sm leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

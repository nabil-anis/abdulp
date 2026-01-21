
import React from 'react';

const projects = [
  {
    title: "E-Commerce Reimagined",
    description: "A luxury shopping experience built with Next.js and Stripe integration.",
    image: "https://picsum.photos/seed/shop/600/400",
    tags: ["React", "Tailwind", "Node.js"]
  },
  {
    title: "AI Dashboard",
    description: "Real-time analytics platform leveraging GPT for data insights.",
    image: "https://picsum.photos/seed/ai/600/400",
    tags: ["TypeScript", "D3.js", "Gemini API"]
  },
  {
    title: "Social Sphere",
    description: "A secure, privacy-focused social network for remote teams.",
    image: "https://picsum.photos/seed/social/600/400",
    tags: ["React Native", "Firebase", "WebRTC"]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Selected <span className="gradient-text">Works</span></h2>
        <p className="text-gray-400">Handpicked projects that showcase my skills and passion.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="glass-card rounded-3xl overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className="h-56 overflow-hidden">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex gap-2 mb-4 flex-wrap">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-blue-500/10 text-blue-400 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {p.description}
              </p>
              <button className="text-sm font-bold flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                View Project <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

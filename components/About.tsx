
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
            <img 
              src="https://picsum.photos/seed/abdullah/800/800" 
              alt="Abdullah" 
              className="w-full h-full object-cover rounded-2xl opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl border-blue-500/20">
            <span className="text-4xl font-bold gradient-text">4+</span>
            <p className="text-sm text-gray-400 mt-1 font-medium">Years of Experience</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">About <span className="gradient-text">Me</span></h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            I am a passionate software engineer with a keen eye for design and performance. 
            My journey began when I built my first website at 16, and since then, I've 
            fallen in love with the intersection of code and aesthetics.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            I specialize in React, Node.js, and modern UI/UX principles. I believe that 
            software should not only work perfectly but also feel intuitive and delightful to use.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-xl">
              <i className="fa-solid fa-bolt text-blue-400 mb-2"></i>
              <h4 className="font-bold text-sm">Fast Learner</h4>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <i className="fa-solid fa-code text-purple-400 mb-2"></i>
              <h4 className="font-bold text-sm">Clean Code</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

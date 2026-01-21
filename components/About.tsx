
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-xiaomi-green/20 blur-3xl rounded-full"></div>
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden glass-card p-3 rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://picsum.photos/seed/abdullah_creative/800/1000" 
              alt="Abdullah Profile" 
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-[2rem] border-xiaomi-pink/20 shadow-xl">
            <span className="text-5xl font-black text-xiaomi-pink">Hi!</span>
            <p className="text-xs font-bold dark:text-gray-400 text-gray-500 mt-2 tracking-widest uppercase">From Abdullah</p>
          </div>
        </div>

        <div>
          <h2 className="text-5xl font-black mb-8 leading-tight">
            I don't just write code, <br />
            <span className="text-xiaomi-green">I write experiences.</span>
          </h2>
          <div className="space-y-6 dark:text-gray-300 text-gray-600 text-lg leading-relaxed">
            <p>
              Hey there! I'm Abdullah, a digital architect based in the future. I specialize in building interfaces that are not only functional but visually striking. 
            </p>
            <p>
              Inspired by minimalist tech like Xiaomi, I believe in clean lines, vibrant colors, and performance that feels like butter.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-12">
            {[
              { label: 'Ideas', color: 'bg-xiaomi-orange' },
              { label: 'Code', color: 'bg-xiaomi-blue' },
              { label: 'Launch', color: 'bg-xiaomi-green' }
            ].map(item => (
              <div key={item.label} className="text-center">
                <div className={`w-full h-2 rounded-full ${item.color} mb-3`}></div>
                <span className="text-xs font-black uppercase tracking-widest dark:text-gray-400 text-gray-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

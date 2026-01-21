
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <h2 className="text-6xl font-black mb-8 leading-none">
            Let's make <br />
            <span className="text-xiaomi-orange">History.</span>
          </h2>
          <p className="dark:text-gray-400 text-gray-600 text-lg mb-12">
            Ready to start your next big project with Abdullah? Reach out and let's discuss how we can build something incredible.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-xiaomi-blue flex items-center justify-center text-white text-xl transition-transform group-hover:rotate-12">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email me</p>
                <p className="text-xl font-bold dark:text-white text-black">hello@abdullah.dev</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 glass-card p-10 rounded-[3rem]">
          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-xiaomi-orange">Nickname</label>
              <input 
                type="text" 
                placeholder="Tony Stark"
                className="w-full bg-black/5 dark:bg-white/5 border-2 border-transparent focus:border-xiaomi-orange rounded-2xl px-6 py-4 outline-none transition-all dark:text-white text-black"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-xiaomi-blue">Digital Address</label>
              <input 
                type="email" 
                placeholder="tony@stark.com"
                className="w-full bg-black/5 dark:bg-white/5 border-2 border-transparent focus:border-xiaomi-blue rounded-2xl px-6 py-4 outline-none transition-all dark:text-white text-black"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-xiaomi-green">The Vision</label>
              <textarea 
                rows={4} 
                placeholder="Tell me everything..."
                className="w-full bg-black/5 dark:bg-white/5 border-2 border-transparent focus:border-xiaomi-green rounded-2xl px-6 py-4 outline-none transition-all dark:text-white text-black resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-black dark:bg-white text-white dark:text-black font-black py-5 rounded-2xl transition-all hover:bg-xiaomi-orange hover:text-white">
              Push to Start
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto glass-card rounded-3xl p-10 md:p-16 border-blue-500/20 shadow-2xl shadow-blue-900/10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 tracking-tight">Let's <span className="gradient-text">Talk.</span></h2>
          <p className="text-gray-400">Have a vision? Let's make it a reality. Drop me a line below.</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-400 uppercase">Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-400 uppercase">Email</label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-400 uppercase">Message</label>
            <textarea 
              rows={4} 
              placeholder="How can I help you?" 
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-blue-500 transition-colors resize-none"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-900/40">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

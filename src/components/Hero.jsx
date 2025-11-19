import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur"> 
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Conversion-first SEO
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Rank higher. Convert better. Grow faster.
          </h1>
          <p className="mt-5 text-slate-300 text-lg md:text-xl leading-relaxed">
            Strategic SEO focused on revenue: technical audits, on-page excellence, high-authority link-building, and analytics that tie traffic to ROI.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 transition">Get a Free Audit</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/15 text-white hover:bg-white/10 px-6 py-3 transition">Explore Services</a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/70">
            {[
              'Keyword Strategy',
              'Site Audits',
              'Link Building',
              'Local SEO'
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-sm backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950" />
    </section>
  );
};

export default Hero;

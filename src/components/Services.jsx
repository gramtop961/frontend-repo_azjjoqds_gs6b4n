import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'On-Page SEO',
    desc: 'Metadata, content structure, internal linking, and UX optimizations that improve relevance and engagement.',
    points: ['Keyword mapping', 'Content briefs', 'Schema markup', 'Core Web Vitals'],
  },
  {
    title: 'Off-Page SEO',
    desc: 'Authority-building through ethical link acquisition, digital PR, and brand mentions that move rankings.',
    points: ['Link prospecting', 'Outreach campaigns', 'HARO & PR', 'Competitor gap'],
  },
  {
    title: 'Technical SEO',
    desc: 'Crawlability, indexation, site architecture, and performance to ensure search engines love your site.',
    points: ['Site audits', 'Log-file analysis', 'JS SEO', 'Internationalization'],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Services</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">Everything you need to capture intent and convert it into revenue.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
              <h3 className="text-white text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {s.points.map(p => (
                  <li key={p} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    logo: 'SaaS Platform',
    result: '+312% organic signups',
    detail: 'Scaled non-branded traffic with content clusters and technical fixes.',
  },
  {
    logo: 'Ecommerce',
    result: '+188% revenue from SEO',
    detail: 'Solved crawl budget issues, built authority links, improved PDPs.',
  },
  {
    logo: 'Local Services',
    result: '#1 in 9 local packs',
    detail: 'Location pages, reviews strategy, and local citation cleanup.',
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Case Studies</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">Real results from growth-focused SEO engagements.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <motion.div key={c.logo} initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-white text-lg font-semibold">{c.logo}</div>
              <div className="mt-2 text-emerald-400 font-semibold">{c.result}</div>
              <p className="mt-2 text-slate-300 text-sm">{c.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: '$1,500/mo',
    features: ['Keyword research', 'On-page optimization', 'Monthly reporting'],
  },
  {
    name: 'Growth',
    price: '$3,500/mo',
    features: ['Technical audit', 'Content strategy', 'Link outreach', 'Bi-weekly calls'],
  },
  {
    name: 'Scale',
    price: 'Custom',
    features: ['Enterprise audits', 'Digital PR', 'International SEO', 'Dedicated strategist'],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Pricing</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">Flexible packages that align with your growth stage.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-white text-xl font-semibold">{t.name}</div>
              <div className="mt-2 text-emerald-400 text-2xl font-bold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {f}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2 transition">Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

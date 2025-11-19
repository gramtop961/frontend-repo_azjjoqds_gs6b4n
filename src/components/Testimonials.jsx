import React from 'react';

const testimonials = [
  {
    name: 'Maya K.',
    role: 'CMO, SaaS',
    quote: 'The only SEO partner who ties strategy to pipeline. We saw measurable growth in weeks.'
  },
  {
    name: 'Alex P.',
    role: 'Founder, DTC',
    quote: 'Fixed long-standing technical issues and built authority. Rankings and revenue followed.'
  },
  {
    name: 'Jordan R.',
    role: 'VP Growth, Marketplace',
    quote: 'Clear priorities, clean reporting, and a focus on business outcomes. Highly recommend.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">What clients say</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">Trust built through outcomes and transparency.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-slate-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-white/80">{t.name} · {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

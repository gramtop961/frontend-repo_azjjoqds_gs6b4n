import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      (e.currentTarget).reset();
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Request a free SEO audit</h2>
          <p className="mt-3 text-slate-300">Tell us about your site and goals. We’ll respond within one business day.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" required placeholder="Your name" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50" />
          <input type="email" name="email" required placeholder="Email" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50" />
          <input name="phone" placeholder="Phone" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50" />
          <input name="company" placeholder="Company" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50" />
          <input name="website" placeholder="Website URL" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 md:col-span-2" />
          <select name="service_interest" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 md:col-span-1">
            <option value="" className="text-slate-900">Service Interest</option>
            <option value="on-page" className="text-slate-900">On-Page SEO</option>
            <option value="off-page" className="text-slate-900">Off-Page SEO</option>
            <option value="technical" className="text-slate-900">Technical SEO</option>
            <option value="local" className="text-slate-900">Local SEO</option>
          </select>
          <select name="budget" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 md:col-span-1">
            <option value="" className="text-slate-900">Budget</option>
            <option value="<1500" className="text-slate-900">Under $1,500</option>
            <option value="1500-3500" className="text-slate-900">$1,500 - $3,500</option>
            <option value=">3500" className="text-slate-900">$3,500+</option>
          </select>
          <textarea name="message" rows={5} placeholder="What are your goals?" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 md:col-span-2" />
          <button type="submit" disabled={status==='sending'} className="md:col-span-2 inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 transition">
            {status==='sending' ? 'Sending...' : 'Request Audit'}
          </button>
          {status==='success' && <p className="md:col-span-2 text-emerald-400">Thanks! We’ll be in touch shortly.</p>}
          {status==='error' && <p className="md:col-span-2 text-rose-400">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="text-white font-semibold tracking-tight">SEO Expert</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Case Studies</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#contact" className="rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-3 py-1.5">Free Audit</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

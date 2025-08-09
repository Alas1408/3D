import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = "px-3 py-2 rounded-md hover:text-brand-500 hover:bg-slate-100/60 dark:hover:bg-slate-800/50";

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition ${scrolled ? "backdrop-blur bg-white/70 dark:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800/60" : ""}`}>
      <nav className="container-tight flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-brand-600"></div>
          <span className="font-semibold">YourName • 3D Artist</span>
        </a>
        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded hover:bg-slate-100/60 dark:hover:bg-slate-800/50" aria-label="Меню">
          <svg width="24" height="24" fill="currentColor"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
        <div className={`md:flex items-center gap-1 ${open ? "block" : "hidden"} md:block`}>
          <a href="#work" className={link}>Работы</a>
          <a href="#viewer" className={link}>3D‑Просмотр</a>
          <a href="#about" className={link}>Обо мне</a>
          <a href="#contact" className={`${link} btn ml-2 md:ml-4`}>Связаться</a>
        </div>
      </nav>
    </header>
  );
}

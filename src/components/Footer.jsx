import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} YourName. Все права защищены.</p>
        <div className="flex gap-3">
          <a className="badge" href="#work">Работы</a>
          <a className="badge" href="#about">Обо мне</a>
          <a className="badge" href="#contact">Контакты</a>
        </div>
      </div>
    </footer>
  );
}

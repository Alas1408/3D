import React from "react";

export default function About() {
  const stats = [
    { label: "Коммерческие проекты", value: "35+" },
    { label: "Игровые ассеты", value: "120+" },
    { label: "Годы опыта", value: "6" },
    { label: "Сроки сдачи вовремя", value: "98%" }
  ];
  return (
    <section id="about" className="section">
      <div className="container-tight grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="h2">Обо мне</h2>
          <p className="p mt-3">
            Я делаю модели, которые выдерживают увеличенное внимание: чистая топология, продуманные UV, физически корректные материалы. 
            Люблю hard‑surface и окружения, но с интересом берусь за характерных персонажей.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["PBR","UDIM","LOD","Rig‑Ready","Game‑Ready","Optimization"].map(t => <span key={t} className="badge">{t}</span>)}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map(s => (
            <div key={s.label} className="card p-5 text-center">
              <div className="text-3xl font-semibold">{s.value}</div>
              <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Hero() {
  return (
    <section className="section pt-28 md:pt-36">
      <div className="container-tight grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="h1">3D‑моделлер, который превращает идеи в формы</h1>
          <p className="p mt-4">
            Hard‑surface, окружения, игровые ассеты. Чистая сетка, бережный бюджет полигонов, готовность к продакшену.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#work" className="btn">Смотреть работы</a>
            <a href="#contact" className="btn-outline">Обсудить проект</a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Blender","ZBrush","Substance","Marmoset","Maya","Unreal"].map(t=><span key={t} className="badge">{t}</span>)}
          </div>
        </div>
        <div className="card p-4 md:p-6">
          <div className="aspect-[16/10] w-full rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
            <svg width="120" height="120" viewBox="0 0 24 24" className="text-brand-600">
              <path fill="currentColor" d="M12 2l9 5v10l-9 5-9-5V7l9-5zm0 2.2L5 7v10l7 3.8L19 17V7l-7-2.8z"/>
            </svg>
          </div>
          <p className="p mt-3">Интерактив ниже: можно крутить, приближать, включать анимации.</p>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function PortfolioGrid({ items, onOpen }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <article key={item.id} className="card overflow-hidden group">
          <button onClick={() => onOpen(item)} className="text-left w-full">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={item.thumb} alt={item.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition" loading="lazy" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.year} • {item.tags.join(" / ")}</p>
              <p className="p mt-2">{item.description}</p>
            </div>
          </button>
        </article>
      ))}
    </div>
  );
}

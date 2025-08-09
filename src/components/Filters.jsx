import React from "react";
import { TAGS } from "../data/models";

export default function Filters({ active, setActive }) {
  return (
    <div className="flex flex-wrap gap-2">
      <button onClick={() => setActive(null)} className={`badge ${active===null ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900" : ""}`}>Все</button>
      {TAGS.map(tag => (
        <button key={tag} onClick={() => setActive(tag)} className={`badge ${active===tag ? "bg-brand-600 text-white border-brand-600" : ""}`}>
          {tag}
        </button>
      ))}
    </div>
  );
}

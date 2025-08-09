import React, { useEffect } from "react";

export default function ModelViewerModal({ open, onClose, item }) {
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [open, onClose]);

  if (!open || !item) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="card w-full max-w-5xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/60 dark:border-slate-800/60">
            <div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.year} • {item.tags.join(" / ")}</p>
            </div>
            <button onClick={onClose} className="p-2 rounded hover:bg-slate-100/60 dark:hover:bg-slate-800/50" aria-label="Закрыть">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3 5.7L5.7 18.3M5.7 5.7l12.6 12.6"/></svg>
            </button>
          </div>
          <div className="p-3 md:p-4">
            <model-viewer
              src={item.modelUrl}
              poster={item.poster || ""}
              alt={item.title}
              camera-controls
              auto-rotate
              ar
              exposure="1"
              shadow-intensity="0.6"
              camera-orbit="45deg 65deg 2.5m"
              style={{ width: "100%", height: "60vh", background: "linear-gradient(180deg, rgba(2,6,23,.8), rgba(2,6,23,.6))" }}
            >
              <div slot="progress-bar" className="relative w-full h-1 bg-slate-700/30">
                <div className="absolute inset-y-0 left-0 bg-brand-600" id="progress"></div>
              </div>
            </model-viewer>
            <p className="p mt-3">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

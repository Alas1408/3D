import React from "react";

export default function ViewerSection({ item }) {
  if (!item) return null;
  return (
    <section id="viewer" className="section">
      <div className="container-tight">
        <h2 className="h2">Интерактивный просмотр</h2>
        <p className="p mt-2">Покрути модель мышкой или пальцем, увеличивай колесом. Внизу — кнопки управления.</p>
        <div className="card p-3 md:p-4 mt-6">
          <model-viewer
            src={item.modelUrl}
            poster={item.poster || ""}
            alt={item.title}
            camera-controls
            auto-rotate
            exposure="1"
            shadow-intensity="0.6"
            interaction-prompt="auto"
            style={{ width: "100%", height: "70vh", background: "radial-gradient(60% 60% at 50% 50%, rgba(76,104,255,.15), transparent 70%)" }}
          >
            <button slot="ar-button" className="btn absolute top-3 right-3">AR</button>
            <div className="absolute bottom-3 left-3 right-3 flex gap-2">
              <button className="btn-outline">Reset</button>
              <button className="btn-outline">Pause</button>
            </div>
          </model-viewer>
        </div>
      </div>
    </section>
  );
}

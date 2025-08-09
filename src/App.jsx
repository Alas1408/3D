import React, { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Filters from "./components/Filters.jsx";
import PortfolioGrid from "./components/PortfolioGrid.jsx";
import ViewerSection from "./components/ViewerSection.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ModelViewerModal from "./components/ModelViewerModal.jsx";
import { MODELS } from "./data/models.js";


export default function App() {
  const [activeTag, setActiveTag] = useState(null);
  const [modalItem, setModalItem] = useState(null);

  const filtered = useMemo(() => {
    if (!activeTag) return MODELS;
    return MODELS.filter(m => m.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="work" className="section">
          <div className="container-tight">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="h2">Работы</h2>
              <Filters active={activeTag} setActive={setActiveTag} />
            </div>
            <PortfolioGrid items={filtered} onOpen={setModalItem} />
            <p className="p mt-6">Клик по карточке — откроется 3D‑просмотр в модальном окне.</p>
          </div>
        </section>

        <ViewerSection item={MODELS[0]} />
        <About />
        <Contact />
      </main>

      <Footer />
      <ModelViewerModal open={!!modalItem} item={modalItem} onClose={() => setModalItem(null)} />
    </>
  );
}

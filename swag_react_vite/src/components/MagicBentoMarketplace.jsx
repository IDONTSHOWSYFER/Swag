// src/components/MagicBentoMarketplace.jsx
import { useRef } from "react";
import ModelViewer from "./ModelViewer";

export default function MagicBentoMarketplace({ items, onSelect }) {
  // On stocke une ref par card pour récupérer sa position
  const cardRefs = useRef({});

  const handleClick = (item) => {
    const el = cardRefs.current[item.id];

    let pos = null;

    if (el) {
      const rect = el.getBoundingClientRect();

      // Position : juste en bas à gauche de la card
      pos = {
        top: rect.bottom + window.scrollY + 10,
        left: rect.left + window.scrollX + 10,
      };
    }

    // On passe l'item + la position à Marketplace
    onSelect({
      ...item,
      pos,
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      {items.map((item) => (
        <div
          key={item.id}
          ref={(el) => (cardRefs.current[item.id] = el)}
          onClick={() => handleClick(item)}
          className="
            relative h-[280px] rounded-2xl overflow-hidden cursor-pointer
            border border-[#f20cb5]/40 
            shadow-[0_0_25px_rgba(242,12,181,0.35)]
            hover:shadow-[0_0_35px_rgba(242,12,181,0.55)]
            transition
            bg-black/20 backdrop-blur-xl
          "
        >
          {/* ⚠️ On réutilise exactement la même API que sur la Home */}
          <ModelViewer name={item.model} />

          {/* Titre dans le coin */}
          <div className="absolute bottom-3 left-3 text-lime-400 font-righteous text-xl drop-shadow-lg">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}
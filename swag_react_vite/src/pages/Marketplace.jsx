// src/pages/Marketplace.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import MarketplaceBento from "../components/MagicBentoMarketplace";
import ItemModal from "../components/ItemModal";

// --- LISTE DES ITEMS ---
const ITEMS = [
  {
    id: 1,
    name: "Chunky Dunky",
    model: "chunky_dunky",
    description: "The legendary Ben & Jerry’s x Nike SB collab in full 3D.",
  },
  {
    id: 2,
    name: "Clothes Rack",
    model: "clothes",
    description: "A dynamic set of clothing in studio lighting.",
  },
  {
    id: 3,
    name: "Dior B23",
    model: "dior_b23",
    description: "The iconic Dior B23 luxury sneaker rendered in 3D.",
  },
  {
    id: 4,
    name: "Hachis Clothes",
    model: "hachis_clothes",
    description: "Premium garments modeled with detailed stitching.",
  },
  {
    id: 5,
    name: "Hoodie Base",
    model: "hoodiebasemodel",
    description: "A clean hoodie base model for fashion previews.",
  },
  {
    id: 6,
    name: "Jordan 4 Yellow Thunder",
    model: "j4_yellow_thunder",
    description: "A vibrant AJ4 sneaker with thunder-bright accents.",
  },
  {
    id: 7,
    name: "Leather Suit",
    model: "leather_suit",
    description: "High-end leather suit for futuristic styling.",
  },
  {
    id: 8,
    name: "Nike TN Red",
    model: "nike_tn_red",
    description: "Aggressive, bold TN in a fiery red gradient.",
  },
  {
    id: 9,
    name: "Pandy",
    model: "pandy",
    description: "Cute stylized panda character model.",
  },
];

const ITEMS_PER_PAGE = 6;

export default function Marketplace() {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(null);

  const start = page * ITEMS_PER_PAGE;
  const pageItems = ITEMS.slice(start, start + ITEMS_PER_PAGE);

  const nextPage = () => {
    if (start + ITEMS_PER_PAGE < ITEMS.length) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <Navbar />

      <div className="pt-28 pb-20">
        <h1 className="text-center text-4xl font-righteous text-lime-400 mb-6">
          SWAG Marketplace
        </h1>

        <MarketplaceBento items={pageItems} onSelect={setSelected} />

        <div className="flex justify-center mt-10">
          {start + ITEMS_PER_PAGE < ITEMS.length && (
            <button
              onClick={nextPage}
              className="px-6 py-3 bg-lime-400 text-black rounded-full font-righteous hover:scale-105 transition shadow-[0_0_20px_rgba(172,255,47,0.6)]"
            >
              Next →
            </button>
          )}
        </div>
        <div className="flex justify-center mt-10 gap-6">
  
  {/* Bouton PREVIOUS */}
  {page > 0 && (
    <button
      onClick={() => setPage(page - 1)}
      className="px-6 py-3 bg-[#f20cb5] text-white rounded-full font-righteous hover:scale-105 transition shadow-[0_0_20px_rgba(242,12,181,0.6)]"
    >
      ← Previous
    </button>
  )}

</div>
      </div>

      {selected && (
        <ItemModal
          item={selected}
          center      // ← LA MODAL CENTRÉE
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
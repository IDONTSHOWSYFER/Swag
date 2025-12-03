// src/pages/Marketplace.jsx

import { useState } from "react";
import Navbar from "../components/Navbar";
import MarketplaceBento from "../components/MagicBentoMarketplace";
import ItemModal from "../components/ItemModal";
import FilterBar from "../components/FilterBar";
import Footer from "../components/Footer";

// --- LISTE DES ITEMS ---
const ITEMS = [
  // -------------------
  // 🧦 SNEAKERS
  // -------------------
  {
    id: 1,
    name: "AF1",
    model: "af1",
    type: "shoes",
    price: 120,
    description: "Classic Air Force 1 silhouette redesigned in 3D.",
  },
  {
    id: 2,
    name: "Air Jordan 1",
    model: "air_jordan_1",
    type: "shoes",
    price: 180,
    description: "Iconic AJ1 sneaker, clean 3D model.",
  },
  {
    id: 3,
    name: "Chunky Dunky",
    model: "chunky_dunky",
    type: "shoes",
    price: 350,
    description: "Ben & Jerry’s x Nike SB collaboration, full 3D.",
  },
  {
    id: 4,
    name: "Dior B23",
    model: "dior_b23",
    type: "shoes",
    price: 900,
    description: "The iconic Dior B23 luxury sneaker rendered in 3D.",
  },
  {
    id: 5,
    name: "Jordan 4 Yellow Thunder",
    model: "j4_yellow_thunder",
    type: "shoes",
    price: 280,
    description: "Vibrant AJ4 with thunder-bright yellow accents.",
  },
  {
    id: 6,
    name: "Miles Morales Shoes",
    model: "miles_morales_shoes",
    type: "shoes",
    price: 200,
    description: "Spider-Verse inspired sneakers.",
  },
  {
    id: 7,
    name: "Nike TN Red",
    model: "nike_tn_red",
    type: "shoes",
    price: 220,
    description: "Aggressive red gradient TN model.",
  },
  {
    id: 8,
    name: "Running Shoes 0",
    model: "shoes_0",
    type: "shoes",
    price: 90,
    description: "Lightweight running shoe.",
  },
  {
    id: 9,
    name: "Running Shoes 1",
    model: "shoes_1",
    type: "shoes",
    price: 110,
    description: "Alternate running shoe model.",
  },
  {
    id: 10,
    name: "Used New Balance",
    model: "used_new_balance",
    type: "shoes",
    price: 60,
    description: "Vintage worn-out New Balance sneaker.",
  },

  // -------------------
  // 🧢 ACCESSORIES
  // -------------------
  {
    id: 11,
    name: "NY Baseball Cap",
    model: "baseball_cap_ny",
    type: "accessories",
    price: 45,
    description: "Classic New York baseball cap.",
  },
  {
    id: 12,
    name: "Skengman Beanie",
    model: "skengman_beanie_cap",
    type: "accessories",
    price: 35,
    description: "Dark streetwear beanie for your avatar.",
  },

  // -------------------
  // 👕 OUTFITS
  // -------------------
  {
    id: 13,
    name: "Sweatshirt Hoodie",
    model: "sweatshirt_hoddie",
    type: "clothes",
    price: 70,
    description: "Soft oversized hoodie outfit.",
  },
];

const ITEMS_PER_PAGE = 6;

export default function Marketplace() {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(null);

  // filters
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1000);

  // FILTERING
  const filteredItems = ITEMS.filter((item) => {
    const matchCategory =
      category === "all" ? true : item.type === category;

    const matchPrice = item.price <= maxPrice;

    return matchCategory && matchPrice;
  });

  // PAGINATION
  const start = page * ITEMS_PER_PAGE;
  const pageItems = filteredItems.slice(start, start + ITEMS_PER_PAGE);

  const nextPage = () => {
    if (start + ITEMS_PER_PAGE < filteredItems.length) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="pt-28 pb-20 flex-1">
        <h1 className="text-center text-4xl font-righteous text-lime-400 mb-6">
          SWAG Marketplace
        </h1>

        {/* ✨ FEATURED COLLECTIONS – ULTRA DESIGN SECTION */}
        <section className="w-full my-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-righteous text-white text-center mb-6 drop-shadow-[0_0_10px_rgba(242,12,181,0.7)]">
              Featured Collections 🔥
            </h2>

            <div
              className="
                flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pr-6
                scrollbar-thin scrollbar-thumb-[#f20cb5] scrollbar-track-transparent
              "
            >
              <div className="min-w-[280px] snap-center rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition shadow-[0_0_25px_rgba(242,12,181,0.4)]">
                <img
                  src="https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=600&h=800&q=80"
                  className="rounded-xl mb-3 w-full h-64 object-cover"
                />
                <h3 className="text-white font-righteous text-xl mb-1">Streetwear Essentials</h3>
                <p className="text-white/70 text-sm">Our most timeless & iconic pieces. Curated for real drip lovers.</p>
              </div>

              <div className="min-w-[280px] snap-center rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition shadow-[0_0_25px_rgba(172,255,47,0.45)]">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&h=800&q=80"
                  className="rounded-xl mb-3 w-full h-64 object-cover"
                />
                <h3 className="text-lime-400 font-righteous text-xl mb-1">Top Trending Fits</h3>
                <p className="text-white/70 text-sm">The internet’s most viral silhouettes of the moment.</p>
              </div>

              <div className="min-w-[280px] snap-center rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition shadow-[0_0_25px_rgba(242,12,181,0.45)]">
                <img
                  src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&h=800&q=80"
                  className="rounded-xl mb-3 w-full h-64 object-cover"
                />
                <h3 className="text-pink-500 font-righteous text-xl mb-1">Luxury Heat</h3>
                <p className="text-white/70 text-sm">Dior, LV, Prada — flex like never before.</p>
              </div>

              <div className="min-w-[280px] snap-center rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition shadow-[0_0_25px_rgba(172,255,47,0.45)]">
                <img
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&h=800&q=80"
                  className="rounded-xl mb-3 w-full h-64 object-cover"
                />
                <h3 className="text-white font-righteous text-xl mb-1">Rare Limited Drops</h3>
                <p className="text-white/70 text-sm">The hardest-to-find pieces, curated for collectors.</p>
              </div>
            </div>

            {/* 🔥 STATS BAR */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <p className="text-3xl font-righteous text-lime-400">+12k</p>
                <p className="text-white/70">Active users</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <p className="text-3xl font-righteous text-pink-500">+5k</p>
                <p className="text-white/70">Verified sales</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <p className="text-3xl font-righteous text-lime-400">98%</p>
                <p className="text-white/70">Authenticity rate</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <p className="text-3xl font-righteous text-pink-500">4.9★</p>
                <p className="text-white/70">User rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* ⭐ FILTER BAR */}
        <FilterBar
          category={category}
          setCategory={(c) => {
            setCategory(c);
            setPage(0);
          }}
          maxPrice={maxPrice}
          setMaxPrice={(p) => {
            setMaxPrice(p);
            setPage(0);
          }}
        />

        {/* GRID ITEMS */}
        <MarketplaceBento items={pageItems} onSelect={setSelected} />

        {/* 🔥 TRENDING THIS WEEK */}
        <section className="w-full mt-20 mb-16 px-6">
          <h2 className="text-3xl font-righteous text-white text-center mb-6">
            Trending This Week ⚡
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=600&h=900&q=80",
              "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&h=900&q=80",
              "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&h=900&q=80",
              "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=600&h=900&q=80"
            ].map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg shadow-[0_0_25px_rgba(242,12,181,0.4)] hover:scale-[1.03] transition"
              >
                <img src={img} className="w-full h-80 object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* 💎 ADVANTAGES (WHITE SECTION) */}
        <section className="w-full py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-righteous text-black text-center mb-10">
              Why Buy on SWAG?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "100% Authenticity",
                  text: "Every item is verified by hand & digitally before appearing on SWAG.",
                  icon: "🔍"
                },
                {
                  title: "Ultra Fast Shipping",
                  text: "Our partners ship worldwide within 48 hours.",
                  icon: "⚡"
                },
                {
                  title: "Verified Sellers",
                  text: "Only trusted sellers with strong ratings stay on the platform.",
                  icon: "🏆"
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-[#060010]/80 text-white border border-white/10 shadow-[0_0_25px_rgba(242,12,181,0.2)] backdrop-blur-xl hover:scale-[1.03] transition"
                >
                  <p className="text-4xl mb-3">{card.icon}</p>
                  <h3 className="text-xl font-righteous mb-2">{card.title}</h3>
                  <p className="text-white/70 text-sm">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🎯 RECOMMENDED FOR YOU */}
        <section className="w-full mt-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-righteous text-white mb-6 text-center">
              Recommended For You 🧩
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&h=900&q=80",
                "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&h=900&q=80",
                "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&h=900&q=80"
              ].map((img, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(172,255,47,0.4)] hover:scale-[1.03] transition"
                >
                  <img src={img} className="w-full h-80 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ⭐ TESTIMONIALS */}
        <section className="w-full mt-24 mb-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-righteous text-white mb-10">
              Loved by The Community ⭐
            </h2>

            <div className="relative overflow-hidden w-full">
              <div className="flex animate-slider gap-6">
                {[
                  {
                    name: "Luis",
                    text: "Best marketplace for sneakers. Everything is clean & legit.",
                    color: "pink",
                    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=500&q=80"
                  },
                  {
                    name: "Maya",
                    text: "UI is insane, buying feels like a video game.",
                    color: "lime",
                    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80"
                  },
                  {
                    name: "Kenji",
                    text: "Shipping was crazy fast. SWAG is top tier.",
                    color: "pink",
                    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=500&q=80"
                  },
                  {
                    name: "Amina",
                    text: "I’ve never seen a marketplace this beautiful. It makes buying fun.",
                    color: "lime",
                    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
                  },
                  {
                    name: "Jordan",
                    text: "The 3D models are crazy realistic. Helps a lot before buying.",
                    color: "pink",
                    img: "https://images.unsplash.com/photo-1546456073-6712f79251bb?auto=format&fit=crop&w=500&q=80"
                  },
                  {
                    name: "Selena",
                    text: "Customer support answered me in 3 minutes. Unreal.",
                    color: "lime",
                    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=500&q=80"
                  }
                ].map((t, i) => (
                  <div
                    key={i}
                    className="min-w-[300px] p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(242,12,181,0.4)]"
                  >
                    <img src={t.img} className="w-20 h-20 object-cover rounded-full mx-auto mb-3" />
                    <p className="text-white/80 italic text-sm mb-4 text-center">“{t.text}”</p>
                    <p className={`font-righteous text-lg text-center ${t.color === "lime" ? "text-lime-400" : "text-pink-500"}`}>
                      {t.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PAGINATION */}
        <div className="flex justify-center mt-10 gap-6">
          {/* PREVIOUS */}
          {page > 0 && (
            <button
              onClick={prevPage}
              className="px-6 py-3 bg-pink-500 text-white rounded-full font-righteous hover:scale-105 transition shadow-[0_0_20px_rgba(242,12,181,0.6)]"
            >
              ← Previous
            </button>
          )}
        </div>
      </main>

      <Footer />

      {selected && (
        <ItemModal
          item={selected}
          center
          onClose={() => setSelected(null)}
        />
      )}

      <style>{`
        @keyframes slider {
          0% { transform: translateX(0); }
          33% { transform: translateX(-33%); }
          66% { transform: translateX(-66%); }
          100% { transform: translateX(0); }
        }
        .animate-slider {
          animation: slider 12s infinite linear;
        }
      `}</style>
    </div>
  );
}
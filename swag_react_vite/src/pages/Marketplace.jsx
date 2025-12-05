// src/pages/Marketplace.jsx
import { useState } from "react";
import MarketplaceBento from "../components/MagicBentoMarketplace";
import ItemModal from "../components/ItemModal";
import FilterBar from "../components/FilterBar";
import { ITEMS } from "../data/items";

const ITEMS_PER_PAGE = 6;

export default function Marketplace() {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(null);

  // Filters
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1000);

  // Convert object → array
  const itemsArray = Object.values(ITEMS);

  // FILTERING
  const filteredItems = itemsArray.filter((item) => {
    const matchCategory = category === "all" ? true : item.type === category;
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

      <main className="pt-28 pb-20 flex-1">
        <h1 className="text-center text-4xl font-righteous text-lime-400 mb-6">
          SWAG Marketplace
        </h1>

        {/* ✨ FEATURED COLLECTIONS */}
        <section className="w-full my-12 px-6">
          <div className="max-w-6xl mx-auto px-2 sm:px-4">
            <h2 className="text-3xl font-righteous text-white text-center mb-6 drop-shadow-[0_0_10px_rgba(242,12,181,0.7)]">
              Featured Collections 🔥
            </h2>

            <div
              className="
                flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pr-6
                scrollbar-thin scrollbar-thumb-[#f20cb5] scrollbar-track-transparent
              "
            >
              {[
                {
                  title: "Streetwear Essentials",
                  img: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=600&h=800&q=80",
                  color: "white"
                },
                {
                  title: "Top Trending Fits",
                  img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&h=800&q=80",
                  color: "lime"
                },
                {
                  title: "Luxury Heat",
                  img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&h=800&q=80",
                  color: "pink"
                },
                {
                  title: "Rare Limited Drops",
                  img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&h=800&q=80",
                  color: "white"
                }
              ].map((card, i) => (
                <div
                  key={i}
                  className="min-w-[280px] snap-center rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition shadow-[0_0_25px_rgba(242,12,181,0.4)]"
                >
                  <img
                    src={card.img}
                    className="rounded-xl mb-3 w-full h-64 object-cover"
                  />
                  <h3
                    className={`font-righteous text-xl mb-1 ${
                      card.color === "lime"
                        ? "text-lime-400"
                        : card.color === "pink"
                        ? "text-pink-500"
                        : "text-white"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    Explore the collection carefully curated for style lovers.
                  </p>
                </div>
              ))}
            </div>

            {/* 🔥 STATS BAR */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                ["+12k", "Active users", "lime"],
                ["+5k", "Verified sales", "pink"],
                ["98%", "Authenticity rate", "lime"],
                ["4.9★", "User rating", "pink"]
              ].map(([num, label, color], i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl"
                >
                  <p
                    className={`text-3xl font-righteous ${
                      color === "pink" ? "text-pink-500" : "text-lime-400"
                    }`}
                  >
                    {num}
                  </p>
                  <p className="text-white/70">{label}</p>
                </div>
              ))}
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

        {/* 💎 ADVANTAGES */}
        <section className="w-full py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-righteous text-black text-center mb-10">
              Why Buy on SWAG?
            </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                ["🔍", "100% Authenticity", "Every item is hand-verified before being listed."],
                ["⚡", "Ultra Fast Shipping", "Worldwide shipments under 48h."],
                ["🏆", "Verified Sellers", "Only trusted partners stay on the platform."]
              ].map(([icon, title, text], i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-[#060010]/80 text-white border border-white/10 shadow-[0_0_25px_rgba(242,12,181,0.2)] backdrop-blur-xl hover:scale-[1.03] transition"
                >
                  <p className="text-4xl mb-3">{icon}</p>
                  <h3 className="text-xl font-righteous mb-2">{title}</h3>
                  <p className="text-white/70 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🎯 RECOMMENDED */}
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
                  }
                ].map((t, i) => (
                  <div
                    key={i}
                    className="min-w-[300px] p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(242,12,181,0.4)]"
                  >
                    <img src={t.img} className="w-20 h-20 object-cover rounded-full mx-auto mb-3" />
                    <p className="text-white/80 italic text-sm mb-4 text-center">“{t.text}”</p>
                    <p
                      className={`font-righteous text-lg text-center ${
                        t.color === "lime" ? "text-lime-400" : "text-pink-500"
                      }`}
                    >
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
          {page > 0 && (
            <button
              onClick={prevPage}
              className="px-6 py-3 bg-pink-500 text-white rounded-full font-righteous hover:scale-105 transition shadow-[0_0_20px_rgba(242,12,181,0.6)]"
            >
              ← Previous
            </button>
          )}

          {start + ITEMS_PER_PAGE < filteredItems.length && (
            <button
              onClick={nextPage}
              className="px-6 py-3 bg-lime-400 text-black rounded-full font-righteous hover:scale-105 transition shadow-[0_0_20px_rgba(172,255,47,0.6)]"
            >
              Next →
            </button>
          )}
        </div>
      </main>

      {selected && (
        <ItemModal item={selected} center onClose={() => setSelected(null)} />
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
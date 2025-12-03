// src/pages/News.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const ARTICLES = [
  {
    id: 1,
    title: "The Triple Black Trend Is Back 🔥",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1200",
    excerpt: "Full black fits reviennent en force — cargos oversize, tech jackets, Air Force 1 black… Le drip sombre fait un retour massif en 2025.",
  },
  {
    id: 2,
    title: "Sneakers of the Month: Neon Heat ⚡️",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200",
    excerpt: "Le néon domine le game : vert acide, rose flashy, semelles translucides...",
  },
  {
    id: 3,
    title: "Top Streetwear Fits of the Week 👟",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200",
    excerpt: "Lookbooks SPICY du moment : layering, techwear, baggy denim et sneakers statement.",
  },
  {
    id: 4,
    title: "Retro Jerseys Are Trending Again 🏀",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200",
    excerpt: "Les maillots oversized NBA/NFL style années 90 reviennent partout.",
  },
  {
    id: 5,
    title: "The Return of Baggy Jeans 🌀",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200",
    excerpt: "Les silhouettes 2000s explosent à nouveau : denim XXL, cargos larges et coupes loose.",
  },
  {
    id: 6,
    title: "Most Hyped Sneakers of January 2025 👑",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200",
    excerpt: "Les paires qui font chavirer le marché du resale ce mois-ci...",
  },
  {
    id: 7,
    title: "Techwear Still Rules the Streets 🌐",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200",
    excerpt: "Gore‑Tex, straps, poches géantes... Le futurisme utilitaire est toujours en tête.",
  },
  {
    id: 8,
    title: "The Comeback of Leather Jackets 🧥",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200",
    excerpt: "Perfecto, bomber, cuir patiné : le cuir revient fort dans le drip 2025.",
  },
  {
    id: 9,
    title: "Street Goth Is Rising Again 🕷️",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200",
    excerpt: "Darkwear, noir profond, colliers chunky… un revival goth moderne.",
  },
  {
    id: 10,
    title: "Minimalist Drip Is Killing the Hype 🤍",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200",
    excerpt: "Teintes neutres, silhouettes propres, sneakers blanches… le calme après la tempête.",
  },
  {
    id: 11,
    title: "Capsule Wardrobes Are Trending 🧩",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
    excerpt: "Moins de pièces, plus de style : le mouvement capsule prend de l’ampleur.",
  },
  {
    id: 12,
    title: "The Pink Aesthetic Craze 💖",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1200",
    excerpt: "Le rose flashy domine les feeds : hoodies, sneakers et accessoires saturés.",
  },
];

export default function News() {
  const [page, setPage] = useState(0);
  const ARTICLES_PER_PAGE = 6;
  const start = page * ARTICLES_PER_PAGE;
  const visible = ARTICLES.slice(start, start + ARTICLES_PER_PAGE);

  return (
    <>
      <Navbar />

      <div className="pt-28 pb-20 max-w-6xl mx-auto px-4">
        <h1 className="text-center text-4xl font-righteous text-lime-400 mb-12">
        News
        </h1>

        {/* MOST VIEWED • NEW MODERN INTERACTIVE SECTION */}
        <div className="relative mb-20">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#ccff3340] via-transparent to-transparent blur-3xl opacity-60 pointer-events-none"></div>

          <div className="relative bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl px-8 py-10 shadow-[0_0_30px_rgba(242,12,181,0.15)]">
            <h2 className="text-3xl font-righteous text-center text-lime-400 drop-shadow mb-8">
              🔥 Most Viewed This Week
            </h2>

            {/* Horizontal Carousel */}
            <div className="flex gap-8 overflow-x-auto no-scrollbar py-4 px-2 snap-x snap-mandatory">
              {ARTICLES.slice(0, 8).map((a) => (
                <div
                  key={a.id}
                  className="
                    snap-start min-w-[280px] max-w-[280px]
                    bg-[#0c0c0c] border border-[#f20cb544]
                    rounded-2xl overflow-hidden shadow-xl
                    hover:shadow-[0_0_30px_rgba(204,255,51,0.4)]
                    hover:scale-[1.06] transition-all duration-300
                    cursor-pointer relative group
                  "
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={a.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Pink gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f20cb560] to-transparent opacity-40"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col gap-3">
                    <h3 className="font-righteous text-xl text-lime-400 group-hover:text-pink-400 transition">
                      {a.title}
                    </h3>

                    <p className="text-xs text-white/80 leading-relaxed">
                      {a.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-2 mt-2">
                      <span className="text-[10px] px-2 py-1 rounded-full bg-[#f20cb5] text-white font-bold">
                        Trending
                      </span>
                      <span className="text-[10px] px-2 py-1 rounded-full bg-[#ccff33] text-black font-bold">
                        Top Picks
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">
              <div className="px-4 py-3 bg-white/5 border border-white/20 rounded-xl backdrop-blur-sm">
                <p className="text-3xl font-righteous text-lime-400">+12k</p>
                <p className="text-xs text-white/70">Daily Readers</p>
              </div>

              <div className="px-4 py-3 bg-white/5 border border-white/20 rounded-xl backdrop-blur-sm">
                <p className="text-3xl font-righteous text-pink-400">87%</p>
                <p className="text-xs text-white/70">Returning Visitors</p>
              </div>

              <div className="px-4 py-3 bg-white/5 border border-white/20 rounded-xl backdrop-blur-sm">
                <p className="text-3xl font-righteous text-lime-400">312</p>
                <p className="text-xs text-white/70">Articles Published</p>
              </div>

              <div className="px-4 py-3 bg-white/5 border border-white/20 rounded-xl backdrop-blur-sm">
                <p className="text-3xl font-righteous text-pink-400">4.9★</p>
                <p className="text-xs text-white/70">Community Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURED WHITE SECTION — CLEAN SPORT INSPIRED */}
        <div className="w-full mt-24 mb-20">
          <div className="max-w-6xl mx-auto bg-white text-black rounded-3xl shadow-xl overflow-hidden">
            
            {/* Header */}
            <div className="px-10 py-12 border-b border-black/10">
              <h2 className="text-4xl font-righteous text-center mb-4">Elite Sportswear Highlights</h2>
              <p className="text-center text-black/60 max-w-xl mx-auto font-geologica">
                Performance meets streetwear: discover the pieces shaping the athletic aesthetic revolution.
              </p>
            </div>

            {/* 3‑Card Layout */}
            <div className="grid md:grid-cols-3 gap-10 px-10 py-14">

              <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-all cursor-pointer bg-white">
                <img
                  src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=800&q=80"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-righteous text-xl mb-2">Pro Training Gear</h3>
                  <p className="text-black/70 text-sm font-geologica">
                    Compression tops, agility shorts and breathable layers built for athletes & style icons.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-all cursor-pointer bg-white">
                <img
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-righteous text-xl mb-2">Urban Running Essentials</h3>
                  <p className="text-black/70 text-sm font-geologica">
                    Lightweight sneakers, neon accents & aerodynamic fits made for urban flow.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-all cursor-pointer bg-white">
                <img
                  src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-righteous text-xl mb-2">Next‑Gen Performance Wear</h3>
                  <p className="text-black/70 text-sm font-geologica">
                    Tech‑infused fabrics merging comfort, durability & futuristic aesthetics.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="w-full mt-24 mb-20">
    <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-[0_0_40px_rgba(242,12,181,0.15)]">
      <h2 className="text-3xl font-righteous text-center text-lime-400 mb-6">
        📰 This Week in Street Culture
      </h2>
      <p className="text-center text-white/70 max-w-2xl mx-auto mb-10 font-geologica">
        A curated digest mixing culture, sneakers, fashion drops, music releases and global streetwear movements shaping 2025.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-[#0c0c0c] rounded-2xl p-6 border border-white/10 hover:scale-[1.03] transition cursor-pointer">
          <h3 className="font-righteous text-xl text-lime-400 mb-3">🎧 Music Influence</h3>
          <p className="text-white/70 text-sm">
            The rise of underground UK rap and electronic fusion is pushing new aesthetics in outfits and visual identity.
          </p>
        </div>

        <div className="bg-[#0c0c0c] rounded-2xl p-6 border border-white/10 hover:scale-[1.03] transition cursor-pointer">
          <h3 className="font-righteous text-xl text-pink-400 mb-3">🌍 Global Street Trends</h3>
          <p className="text-white/70 text-sm">
            Tokyo techwear, Seoul minimal drip and NYC luxury street merging into a powerful global fashion movement.
          </p>
        </div>

        <div className="bg-[#0c0c0c] rounded-2xl p-6 border border-white/10 hover:scale-[1.03] transition cursor-pointer">
          <h3 className="font-righteous text-xl text-lime-400 mb-3">🔥 Drop Radar</h3>
          <p className="text-white/70 text-sm">
            All upcoming drops from limited sneakers to exclusive collabs — stay ahead of the resale game.
          </p>
        </div>
      </div>
    </div>
  </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((a) => (
            <div
              key={a.id}
              className="
                bg-[#060010] border border-[#f20cb544] rounded-xl 
                overflow-hidden shadow-lg hover:scale-[1.02]
                hover:shadow-[0_0_25px_rgba(242,12,181,0.4)]
                transition-all duration-300 cursor-pointer
              "
            >
              <img src={a.image} className="w-full h-56 object-cover" />

              <div className="p-5 text-white flex flex-col gap-3">
                <h2 className="text-2xl font-righteous text-lime-400">{a.title}</h2>

                <p className="text-sm opacity-80 font-geologica">
                  {a.excerpt}
                </p>

                <Link
                  to="#"
                  className="
                    mt-auto text-pink-400 font-righteous text-sm
                    hover:text-lime-400 transition
                  "
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-10">
          {page > 0 && (
            <button
              onClick={() => setPage(page - 1)}
              className="px-6 py-3 bg-[#f20cb5] text-white rounded-full font-righteous hover:scale-105 transition shadow-[0_0_20px_rgba(242,12,181,0.6)]"
            >
              ← Previous
            </button>
          )}
          {start + ARTICLES_PER_PAGE < ARTICLES.length && (
            <button
              onClick={() => setPage(page + 1)}
              className="px-6 py-3 bg-[#ccff33] text-black rounded-full font-righteous hover:scale-105 transition shadow-[0_0_20px_rgba(204,255,51,0.6)]"
            >
              Next →
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
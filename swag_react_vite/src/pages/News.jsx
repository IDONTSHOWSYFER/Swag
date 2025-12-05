// src/pages/News.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { ARTICLES } from "../data/articles";

export default function News() {
  const [page, setPage] = useState(0);
  const ARTICLES_PER_PAGE = 6;
  const start = page * ARTICLES_PER_PAGE;
  const visible = ARTICLES.slice(start, start + ARTICLES_PER_PAGE);

  return (
    <>

      <div className="pt-28 pb-20 max-w-6xl mx-auto px-4">
        <h1 className="text-center text-4xl font-righteous text-lime-400 mb-12">
          News
        </h1>

        {/* MOST VIEWED */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ccff3340] via-transparent to-transparent blur-3xl opacity-60"></div>

          <div className="relative bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl px-8 py-10 shadow-[0_0_30px_rgba(242,12,181,0.15)]">
            <h2 className="text-3xl font-righteous text-center text-lime-400 drop-shadow mb-8">
              🔥 Most Viewed This Week
            </h2>

            <div className="flex gap-8 overflow-x-auto no-scrollbar py-4 px-2 snap-x snap-mandatory">
              {ARTICLES.slice(0, 8).map((a) => (
                <Link
                  key={a.id}
                  to={`/news/${a.id}`}
                  className="
                    snap-start min-w-[280px] max-w-[280px]
                    bg-[#0c0c0c] border border-[#f20cb544]
                    rounded-2xl overflow-hidden shadow-xl
                    hover:shadow-[0_0_30px_rgba(204,255,51,0.4)]
                    hover:scale-[1.06] transition-all duration-300
                    cursor-pointer group
                  "
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={a.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f20cb560] to-transparent opacity-40"></div>
                  </div>

                  <div className="p-4 flex flex-col gap-3">
                    <h3 className="font-righteous text-xl text-lime-400 group-hover:text-pink-400 transition">
                      {a.title}
                    </h3>

                    <p className="text-xs text-white/80">{a.excerpt}</p>

                    <div className="flex gap-2 mt-2">
                      <span className="text-[10px] px-2 py-1 rounded-full bg-[#f20cb5] text-white font-bold">
                        Trending
                      </span>
                      <span className="text-[10px] px-2 py-1 rounded-full bg-[#ccff33] text-black font-bold">
                        Top Picks
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
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
                transition-all duration-300
              "
            >
              <img src={a.image} className="w-full h-56 object-cover" />

              <div className="p-5 text-white flex flex-col gap-3">
                <h2 className="text-2xl font-righteous text-lime-400">{a.title}</h2>
                <p className="text-sm opacity-80 font-geologica">{a.excerpt}</p>

                {/* READ MORE → */}
                <Link
                  to={`/news/${a.id}`}
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

        {/* PAGINATION */}
        <div className="flex justify-center gap-6 mt-10">
          {page > 0 && (
            <button
              onClick={() => setPage(page - 1)}
              className="px-6 py-3 bg-pink-500 text-white rounded-full font-righteous hover:scale-105 transition shadow-lg"
            >
              ← Previous
            </button>
          )}

          {start + ARTICLES_PER_PAGE < ARTICLES.length && (
            <button
              onClick={() => setPage(page + 1)}
              className="px-6 py-3 bg-lime-400 text-black rounded-full font-righteous hover:scale-105 transition shadow-lg"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </>
  );
}
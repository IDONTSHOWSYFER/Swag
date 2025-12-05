import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ARTICLES } from "../data/articles";

export default function Article() {
  const { id } = useParams();
  const article = ARTICLES.find((a) => a.id === Number(id));

  // Article not found
  if (!article) {
    return (
      <>
        <Navbar />
        <div className="pt-28 pb-20 text-center text-white">
          <h1 className="text-3xl font-righteous mb-4">Article not found.</h1>
          <Link to="/news" className="text-pink-400 underline">← Back to News</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 text-white">
        {/* IMAGE */}
        <img
          src={article.image}
          className="w-full rounded-3xl shadow-xl mb-10"
        />

        {/* TITLE */}
        <h1 className="text-4xl font-righteous text-lime-400 mb-6">
          {article.title}
        </h1>

        {/* EXCERPT */}
        <p className="text-white/80 text-lg font-geologica leading-relaxed mb-14">
          {article.excerpt}
        </p>

        {/* BACK BUTTON */}
        <Link
          to="/news"
          className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-righteous hover:scale-105 transition"
        >
          ← Back to News
        </Link>

        {/* MORE ARTICLES */}
        <h2 className="text-3xl font-righteous text-lime-400 mt-16 mb-6">
          Explore More Articles
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {ARTICLES.filter((a) => a.id !== article.id)
            .slice(0, 4)
            .map((a) => (
              <Link
                key={a.id}
                to={`/news/${a.id}`}
                className="bg-white/5 border border-white/10 p-4 rounded-xl hover:scale-[1.03] transition shadow-lg"
              >
                <img
                  src={a.image}
                  className="h-40 w-full object-cover rounded-lg mb-3"
                />
                <h3 className="font-righteous text-lime-400">{a.title}</h3>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
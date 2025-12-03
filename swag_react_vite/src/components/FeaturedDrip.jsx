export default function FeaturedDrip() {
    const items = [
        {
            title: "Urban Ice Fits",
            img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&h=800&q=80",
            text: "Minimal cold-season layers trending worldwide.",
            shadow: "shadow-[0_0_20px_rgba(242,12,181,0.3)]",
        },
        {
            title: "Luxury Street Drop",
            img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&h=800&q=80",
            text: "High-end mixed with raw street creativity. Elite.",
            shadow: "shadow-[0_0_20px_rgba(172,255,47,0.3)]",
        },
        {
            title: "Sneaker Heatwave",
            img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&h=800&q=80",
            text: "The freshest kicks rotating in the culture right now.",
            shadow: "shadow-[0_0_20px_rgba(242,12,181,0.3)]",
        },
    ];

    return (
        <section className="w-full py-20 px-6 bg-white/5 backdrop-blur-xl border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-righteous text-center text-lime-400 drop-shadow-[0_0_10px_#ccff33] mb-10">
                    This Week’s Most Wanted 🔥
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <div key={i} className={`p-5 rounded-2xl bg-white/10 border border-white/20 hover:scale-[1.03] transition ${item.shadow}`}>
                            <img src={item.img} className="rounded-xl mb-4 w-full h-64 object-cover" />
                            <h3 className="text-2xl text-white font-righteous">{item.title}</h3>
                            <p className="text-white/70 mt-2 text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
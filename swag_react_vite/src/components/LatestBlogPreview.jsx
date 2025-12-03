null;export default function LatestBlogPreview() {
    const blogs = [
        {
            img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&h=800&q=80",
            title: "How to Build a Fire Fit",
            text: "The essentials to elevate your drip instantly.",
        },
        {
            img: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=600&h=800&q=80",
            title: "Best Sneakers to Invest In",
            text: "Resell-proof heat guaranteed to rise in value.",
        },
        {
            img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&h=800&q=80",
            title: "The Future of Digital Fashion",
            text: "Avatars, virtual fits & 3D culture evolution.",
        },
    ];

    return (
        <section className="w-full py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-righteous text-black text-center mb-10">Latest From The Blog 📝</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {blogs.map((b, i) => (
                        <div key={i} className="bg-black rounded-2xl shadow-lg p-5">
                            <img src={b.img} className="rounded-xl mb-4 w-full h-64 object-cover" />
                            <h3 className="text-xl text-lime-400 font-righteous">{b.title}</h3>
                            <p className="text-white/70 text-sm mt-2">{b.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
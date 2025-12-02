export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 md:px-12 py-12 relative z-[9999]">

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr_0.8fr] gap-10 md:gap-16 items-start">

                {/* LEFT COLUMN – LOGO + DESC + SOCIALS */}
                <div>
                    <h2 className="font-[Righteous] text-[1.8rem] text-pink-500 mb-3">
                        SWAG
                    </h2>

                    <p className="text-sm opacity-70 leading-relaxed mb-4">
                        Your next-gen resell marketplace.<br />
                        Own the Culture.
                    </p>

                    <div className="flex gap-4 mt-4">
                        <a href="#" className="transition-transform hover:scale-110">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                                alt="Instagram"
                            />
                        </a>

                        <a href="#" className="transition-transform hover:scale-110">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/5968/5968852.png"
                                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                                alt="TikTok"
                            />
                        </a>

                        <a href="#" className="transition-transform hover:scale-110">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                                alt="X"
                            />
                        </a>
                    </div>
                </div>

                {/* MIDDLE COLUMN – LEGAL LINKS */}
                <div>
                    <h3 className="font-[Righteous] text-lime-400 text-lg mb-3">Legal</h3>

                    <ul className="flex flex-col gap-2 mt-2">
                        {[
                            "Privacy Policy",
                            "Terms & Conditions",
                            "Cookies",
                            "Buyer Protection",
                            "Seller Guidelines",
                            "FAQ",
                            "Support"
                        ].map((item, i) => (
                            <li key={i}>
                                <a
                                    href="#"
                                    className="text-white opacity-70 text-sm hover:opacity-100 hover:text-pink-500 transition"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT COLUMN – CONTACT FORM */}
                <div>
                    <h3 className="font-[Righteous] text-lg mb-3">Contact</h3>

                    <form className="flex text-black flex-col gap-3">

                        <input
                            type="text"
                            placeholder="Your name"
                            className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 text-sm"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 text-sm"
                            required
                        />

                        <textarea
                            placeholder="Message"
                            className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 text-sm h-[70px]"
                            required
                        />

                        {/* BUTTON GLOW ANIMÉ */}
                        <button
                            type="submit"
                            className="
                relative overflow-hidden rounded-xl
                px-4 py-3 text-sm font-semibold text-white cursor-pointer
                bg-gradient-to-br from-pink-500 to-pink-300
                shadow-[0_4px_12px_rgba(242,12,181,0.25)]
                transition-transform duration-200
                active:scale-95
                hover:scale-105 hover:shadow-[0_6px_18px_rgba(242,12,181,0.35)]
              "
                        >
                            <span className="relative z-10">Send Message</span>

                            {/* Glow Animation */}
                            <span
                                className="
                absolute inset-0 -left-full w-[200%] h-full
                bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)]
                animate-none
                hover:animate-slide-glow
              "
                            ></span>
                        </button>
                    </form>
                </div>

            </div>

            {/* COPYRIGHT */}
            <p className="text-center mt-10 opacity-50 text-sm">
                © 2025 SWAG — All rights reserved.
            </p>

            {/* GLOW ANIMATION KEYFRAME */}
            <style>
                {`
          @keyframes slide-glow {
            0% { left: -100%; }
            100% { left: 100%; }
          }
          .hover\\:animate-slide-glow:hover {
            animation: slide-glow 0.6s linear forwards;
          }
        `}
            </style>
        </footer>
    );
}
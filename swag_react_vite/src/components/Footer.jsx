export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 md:px-12 py-12 relative z-[9999]">

            {/* GRID */}
            <div className="w-full h-[1px] bg-gradient-to-r from-pink-500 via-lime-400 to-pink-500 opacity-40 mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr_0.8fr] gap-10 md:gap-16 items-start">

                {/* LEFT COLUMN – LOGO + DESC + SOCIALS */}
                <div>
                    <h2 className="font-[Righteous] text-[1.8rem] text-pink-500 mb-3 transition hover:drop-shadow-[0_0_12px_#f20cb5] hover:scale-105">
                        SWAG
                    </h2>

                    <p className="text-sm opacity-70 leading-relaxed mb-4">
                        Your next-gen resell marketplace.<br />
                        Own the Culture.
                    </p>

                    <div className="flex gap-4 mt-4">
                        <a href="#" className="transition-transform hover:scale-110 icon-float">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                                alt="Instagram"
                            />
                        </a>

                        <a href="#" className="transition-transform hover:scale-110 icon-float">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/5968/5968852.png"
                                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                                alt="TikTok"
                            />
                        </a>

                        <a href="#" className="transition-transform hover:scale-110 icon-float">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                                alt="X"
                            />
                        </a>

                        {/* Facebook */}
                        <a href="#" className="transition-transform hover:scale-110 icon-float">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                                alt="Facebook"
                            />
                        </a>

                        {/* GitHub */}
                        <a href="#" className="transition-transform hover:scale-110 icon-float">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                                alt="GitHub"
                            />
                        </a>

                        <a href="#" className="transition-transform hover:scale-110 drop-shadow-[0_0_6px_#ccff33] icon-float">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3670/3670241.png"
                                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                                alt="Snapchat"
                            />
                        </a>

                        <a href="#" className="transition-transform hover:scale-110 drop-shadow-[0_0_6px_#f20cb5] icon-float">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                                alt="Pinterest"
                            />
                        </a>

                        <a href="#" className="transition-transform hover:scale-110 drop-shadow-[0_0_6px_#7289DA] icon-float">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3670/3670157.png"
                                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                                alt="Discord"
                            />
                        </a>

                        <a href="#" className="transition-transform hover:scale-110 drop-shadow-[0_0_6px_red] icon-float">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png"
                                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                                alt="YouTube"
                            />
                        </a>
                    </div>
                    <div className="mt-6">
                        <p className="text-white/70 mb-3 tracking-wide">Be part of the Culture.</p>
                        <a href="/register"
                           className="px-6 py-3 rounded-full bg-lime-400 text-black font-bold hover:bg-[#eaff66]
                           transition shadow-[0_0_18px_#ccff33]">
                           Join SWAG Now
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
                    <h3 className="font-[Righteous] text-lg text-pink-500 mt-8 mb-3">Explore</h3>
                    <ul className="flex flex-col gap-2">
                        <li><a className="opacity-70 hover:opacity-100 hover:text-lime-400" href="/marketplace">Marketplace</a></li>
                        <li><a className="opacity-70 hover:opacity-100 hover:text-lime-400" href="/news">News</a></li>
                        <li><a className="opacity-70 hover:opacity-100 hover:text-lime-400" href="/support">Support</a></li>
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

            <div className="flex justify-center gap-6 mt-12 opacity-60">
                <img src="/brands/nike.svg" className="h-6" />
                <img src="/brands/adidas.svg" className="h-6" />
                <img src="/brands/newbalance.svg" className="h-6" />
                <img src="/brands/supreme.svg" className="h-6" />
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
            <style>
                {`
@keyframes float-slow {
  0% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0); }
}
.icon-float:hover {
  animation: float-slow 1.5s ease-in-out infinite;
}
`}
            </style>
        </footer>
    );
}
import FooterForm from "./FooterForm";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-16 relative z-[9999]">

      {/* GRID */}
      <div className="w-full h-[1px] bg-gradient-to-r from-pink-500 via-lime-400 to-pink-500 opacity-40 mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1fr_0.9fr] gap-12 md:gap-20 items-start">

        {/* LEFT COLUMN – LOGO + DESC + SOCIALS */}
        <div>
          <h2 className="font-[Righteous] text-[1.9rem] text-pink-500 mb-4 transition hover:drop-shadow-[0_0_12px_#f20cb5] hover:scale-105">
            SWAG
          </h2>

          <p className="text-sm opacity-70 leading-relaxed mb-6">
            Your next-gen resell marketplace.<br />
            Own the Culture.
          </p>

          <div className="flex gap-5 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="transition-transform hover:scale-110 icon-float"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                alt=""
                aria-hidden="true"
              />
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="TikTok"
              className="transition-transform hover:scale-110 icon-float"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                alt=""
                aria-hidden="true"
              />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="YouTube"
              className="transition-transform hover:scale-110 drop-shadow-[0_0_6px_red] icon-float"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png"
                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                alt=""
                aria-hidden="true"
              />
            </a>

            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Discord"
              className="transition-transform hover:scale-110 drop-shadow-[0_0_6px_#7289DA] icon-float"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3670/3670157.png"
                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                alt=""
                aria-hidden="true"
              />
            </a>
          </div>

          <div className="mt-8">
            <p className="text-white/70 mb-3 tracking-wide">Be part of the Culture.</p>
            <a
              href="/register"
              className="inline-block px-6 py-3 rounded-full bg-lime-400 text-black font-bold hover:bg-[#eaff66] transition shadow-[0_0_18px_#ccff33]"
            >
              Join SWAG Now
            </a>
          </div>
        </div>

        {/* MIDDLE COLUMN – LEGAL + EXPLORE SIDE BY SIDE */}
        <div className="grid grid-cols-2 gap-12">
          {/* LEGAL */}
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
                    className="text-white opacity-70 text-sm hover:opacity-100 hover:text-pink-500 transition ease-in-out duration-150"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="font-[Righteous] text-lg text-pink-500 mb-3">Explore</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  className="opacity-70 hover:opacity-100 hover:text-lime-400 transition ease-in-out duration-150"
                  href="/marketplace"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  className="opacity-70 hover:opacity-100 hover:text-lime-400 transition ease-in-out duration-150"
                  href="/news"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  className="opacity-70 hover:opacity-100 hover:text-lime-400 transition ease-in-out duration-150"
                  href="/support"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN – CONTACT FORM */}
        <FooterForm />

      </div>

      {/* COPYRIGHT */}
      <p className="text-center mt-12 opacity-50 text-sm">
        © 2025 SWAG — All rights reserved.
      </p>

      {/* GLOW AND FLOAT ANIMATION KEYFRAMES */}
      <style>
        {`
          @keyframes slide-glow {
            0% { left: -100%; }
            100% { left: 100%; }
          }
          @keyframes float-slow {
            0% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
            100% { transform: translateY(0); }
          }
          .hover\\:animate-slide-glow:hover {
            animation: slide-glow 0.6s linear forwards;
          }
          .icon-float:hover {
            animation: float-slow 1.5s ease-in-out infinite;
          }
        `}
      </style>
    </footer>
  );
}
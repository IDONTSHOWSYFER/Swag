import useScoolDirection from "../hooks/useScoolDirection";
import ElectricBorder from "../components/ElectricBorder";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { useCart } from "../context/useCart";
import { useState, useEffect } from "react";

export default function Navbar() {
    const direction = useScoolDirection();
    const { user, logout } = useAuth() || {};
    const { cart } = useCart() || { cart: [] };
    const [menuOpen, setMenuOpen] = useState(false);

    // close profile menu when clicking outside
    const handleClickOutside = (e) => {
        if (
            !e.target.closest(".profile-menu") &&
            !e.target.closest(".profile-button")
        ) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const cartCount = cart?.length || 0;

    return (
        <>
            <nav
                className={`
                    fixed top-4 left-1/2 -translate-x-1/2 w-[90%]
                    bg-[#0c0c0c6a] backdrop-blur-[20px] shadow-lg rounded-full 
                    z-50 px-6 py-3 border-1 border-[#f1f1f126] font-righteous
                    transition-all duration-500
                    ${direction === "up"
                        ? "opacity-0 -translate-y-10"
                        : "opacity-100 translate-y-0"}
                `}
            >
                <div className="flex items-center justify-between">

                    {/* LOGO */}
                    <Link to="/" className="flex items-center">
                        <svg
                            className="w-10 h-10 transition-transform duration-300 hover:scale-[1.07] hover:saturate-[7500%] hover:drop-shadow-[0_0_12px_rgba(242,12,181,1)]"
                            viewBox="0 0 258 587"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g transform="matrix(1,0,0,1,-358.569275,-4.239223)">
                                <g transform="matrix(3,0,0,1,0,0)">
                                    <g transform="matrix(0.333333,0,0,1,107.541717,0.528138)">
                                        <g transform="matrix(1,0,0,1,-10.536654,0)">
                                            <path
                                                fill="#f20cb5cc"
                                                d="M154.962,158.5C155.042,151.988 155.035,152.03 155.049,151.467C155.102,149.349 157.065,125.301 178.962,113.963C181.233,112.787 168.68,121.958 177.766,129.97C180.009,131.947 184.32,133.855 184.311,139.501C184.281,157.5 184.311,169.5 184.312,187.5C184.312,235.046 182.552,238.081 186.481,237.366C189.293,236.854 237.188,212.829 241.567,210.633C256.323,203.232 259.731,202.648 260.02,199.483C260.157,197.982 259.967,139.696 259.95,134.497C259.941,131.488 259.196,131.64 203.104,37.74C183.545,4.997 181.873,4.224 183.56,3.711C184.335,3.476 295.673,115.624 298.363,119.586C299.848,121.772 310.276,216.079 299.56,240.511C274.122,298.507 299.153,242.158 242.556,269.615C227.229,277.05 223.19,277.415 226.912,281.104C241.769,295.833 242.275,295.164 257.15,309.867C285.951,338.334 298.475,348.781 299.491,351.503C300.334,353.761 299.079,468.026 298.914,472.551C298.88,473.503 299.054,473.924 292.561,480.56C194.281,580.987 193.594,580.3 185.311,589.281C183.451,591.297 182.484,589.67 183.258,588.431C204.102,555.037 204.147,555.137 224.158,521.291C257.566,464.787 231.069,474.444 231.033,470.499C230.596,421.935 260.64,352.31 259.4,350.566C258.639,349.496 219.526,310.526 215.962,307.031C211.076,302.24 158.405,250.589 155.61,246.428C154.875,245.334 154.962,245.186 154.962,158.5Z"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p className="transition text-3xl ml-2">SWAG</p>
                    </Link>

                    {/* LINKS */}
                    <div className="flex gap-8 opacity-85 items-center">
                        <Link to="/" className="hover:text-lime-400 transition">Home</Link>
                        <Link to="/marketplace" className="hover:text-lime-400 transition">Marketplace</Link>
                        <Link to="/support" className="hover:text-lime-400 transition">Support</Link>
                        <Link to="/news" className="hover:text-lime-400 transition">News</Link>
                    </div>

                    {/* AUTH BUTTONS */}
                    <div className="flex gap-4 text-sm items-center">
                        {!user ? (
                            <>
                                <ElectricBorder color="#f20cb5" speed={1.5} chaos={0.6} thickness={2} style={{ borderRadius: 9999 }}>
                                    <Link to="/login" className="px-4 py-2 bg-[#f20cb5] rounded-full block text-center text-white">
                                        Log in
                                    </Link>
                                </ElectricBorder>

                                <ElectricBorder color="#ccff33" speed={1.4} chaos={0.55} thickness={2} style={{ borderRadius: 9999 }}>
                                    <Link to="/register" className="px-4 py-2 bg-lime-400 text-black rounded-full block text-center">
                                        Register
                                    </Link>
                                </ElectricBorder>
                            </>
                        ) : (
                            <div className="flex items-center gap-4">
                                {/* NEW CART ICON NEXT TO PROFILE */}
                                <Link
                                    to="/cart"
                                    className="
                                        relative bg-black/40 border border-lime-400 rounded-full
                                        w-10 h-10 flex items-center justify-center text-lime-400
                                        hover:bg-lime-400 hover:text-black transition shadow-[0_0_12px_#ccff33]
                                    "
                                >
                                    🛒
                                    {cartCount > 0 && (
                                        <span className="
                                            absolute -top-2 -right-2 bg-lime-400 text-black
                                            text-xs font-bold px-2 py-0.5 rounded-full shadow-lg
                                        ">
                                            {cartCount}
                                        </span>
                                    )}
                                </Link>

                                <div className="relative">
                                    <div
                                        className="
                                            profile-button
                                            w-10 h-10 rounded-full bg-lime-400 text-black
                                            flex items-center justify-center font-bold cursor-pointer
                                            shadow-[0_0_15px_#ccff33]
                                        "
                                        onClick={() => setMenuOpen(!menuOpen)}
                                    >
                                        {user?.name?.charAt(0)?.toUpperCase() || "?"}
                                    </div>

                                    <div
                                        className={`
                                            profile-menu
                                            absolute right-0 mt-3 w-40 rounded-xl overflow-hidden
                                            bg-white/10 backdrop-blur-xl border border-white/20
                                            transition-all duration-200
                                            ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                                        `}
                                    >
                                        <div className="px-4 py-3 text-white/80 text-sm border-b border-white/10">
                                            Signed in as<br />
                                            <span className="text-white font-semibold">
                                                {typeof user?.email === "string" ? user.email : "unknown"}
                                            </span>
                                        </div>

                                        <Link to="/profile" className="block px-4 py-2 text-white hover:bg-white/10">
                                            Profile
                                        </Link>

                                        <button
                                            className="block text-left w-full px-4 py-2 text-red-400 hover:bg-white/10"
                                            onClick={logout}
                                        >
                                            Log out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </nav>
        </>
    );
}
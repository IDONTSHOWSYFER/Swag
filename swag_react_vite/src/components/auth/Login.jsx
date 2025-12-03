import { useState } from "react";
import ElectricBorder from "../ElectricBorder";
import { useAuth } from "../../context/useAuth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const isValid = form.email.length > 3 && form.password.length > 3;

    const handleSubmit = () => {
        if (!isValid) return;
        const res = login(form.email, form.password);
        if (!res.success) {
            setError(res.message || "Login failed. Please try again.");
        } else {
            navigate("/");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-center text-3xl font-righteous text-[#f20cb5] mb-6">
                Log in to SWAG
            </h2>

            {/* Email */}
            <label className="text-white/80 text-sm mb-1 block">Email Address</label>
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="
                    w-full p-3 rounded-lg bg-white/10 border border-white/20 
                    text-white focus:outline-none focus:border-lime-400 mb-4
                "
                value={form.email}
                onChange={handleChange}
            />

            {/* Password */}
            <label className="text-white/80 text-sm mb-1 block">Password</label>
            <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="
                    w-full p-3 rounded-lg bg-white/10 border border-white/20 
                    text-white focus:outline-none focus:border-lime-400 mb-6
                "
                value={form.password}
                onChange={handleChange}
            />

            <ElectricBorder
                color="#f20cb5"
                chaos={0.45}
                speed={1.2}
                thickness={2}
                style={{ borderRadius: 9999 }}
            >
                <button
                    type="button"
                    disabled={!isValid}
                    onClick={handleSubmit}
                    className={`
                        w-full py-3 rounded-full font-bold text-lg transition
                        ${isValid 
                            ? "bg-[#f20cb5] hover:bg-[#ff4ecf] text-black shadow-[0_0_25px_#f20cb5]"
                            : "bg-[#f20cb5] opacity-50 cursor-not-allowed text-black"
                        }
                    `}
                >
                    Log in
                </button>
            </ElectricBorder>

            {error && <p className="text-red-400 text-center mt-3">{error}</p>}

            <p className="text-center mt-4 text-white/50 text-sm">
                Don't have an account? <Link to="/register" className="text-lime-400 hover:underline">Register</Link>
            </p>
        </div>
    );
}
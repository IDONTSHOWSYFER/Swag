import { useState } from "react";
import ElectricBorder from "../ElectricBorder";
import { registerUser } from "../utils/AuthMock";

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirm: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValid =
        form.name.length > 2 &&
        emailRegex.test(form.email) &&
        form.password.length > 5 &&
        form.password === form.confirm;

    // Dynamic missing-field feedback
    const missingMessages = [];
    if (form.name.length <= 2) missingMessages.push("Name must be at least 3 characters.");
    if (!emailRegex.test(form.email)) missingMessages.push("Email must be valid (example: name@example.com).");
    if (form.password.length <= 5) missingMessages.push("Password must be at least 6 characters.");
    if (form.confirm.length > 0 && form.password !== form.confirm) missingMessages.push("Passwords do not match.");

    return (
        <div className="w-full max-w-md mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl">

            <h2 className="text-center text-3xl font-righteous text-lime-400 mb-6">
                Create your SWAG account
            </h2>

            {/* Name */}
            <label className="text-white/80 text-sm mb-1 block">Your Name</label>
            <input
                name="name"
                placeholder="Enter your name"
                className="
                    w-full p-3 rounded-lg bg-white/10 border border-white/20 
                    text-white focus:outline-none focus:border-lime-400 mb-4
                "
                onChange={handleChange}
            />

            {/* Email */}
            <label className="text-white/80 text-sm mb-1 block">Email Address</label>
            <input
                name="email"
                placeholder="Enter your email"
                className="
                    w-full p-3 rounded-lg bg-white/10 border border-white/20 
                    text-white focus:outline-none focus:border-lime-400 mb-4
                "
                onChange={handleChange}
            />

            {/* Password */}
            <label className="text-white/80 text-sm mb-1 block">Password</label>
            <input
                type="password"
                name="password"
                placeholder="Create a password"
                className="
                    w-full p-3 rounded-lg bg-white/10 border border-white/20 
                    text-white focus:outline-none focus:border-lime-400 mb-4
                "
                onChange={handleChange}
            />

            {/* Confirm Password */}
            <label className="text-white/80 text-sm mb-1 block">Confirm Password</label>
            <input
                type="password"
                name="confirm"
                placeholder="Confirm your password"
                className="
                    w-full p-3 rounded-lg bg-white/10 border border-white/20 
                    text-white focus:outline-none focus:border-lime-400 mb-6
                "
                onChange={handleChange}
            />

            {/* BUTTON */}
            <ElectricBorder
                color="#ccff33"
                chaos={0.45}
                speed={1.2}
                thickness={2}
                style={{ borderRadius: 9999 }}
            >
                <button
                    disabled={!isValid}
                    onClick={() => {
                        const res = registerUser({
    name: form.name,
    email: form.email,
    password: form.password
});
                        if (!res.success) {
                            setError(res.message);
                            setSuccess("");
                        } else {
                            setError("");
                            setSuccess("Your SWAG account has been created successfully! 🎉");
                            setTimeout(() => {
                                window.location.href = "/login";
                            }, 1500);
                        }
                    }}
                    className={`
                        w-full py-3 rounded-full font-bold text-lg transition
                        ${isValid 
                            ? "bg-[#ccff33] hover:bg-[#e6ff66] text-black shadow-[0_0_25px_#ccff33]"
                            : "bg-[#ccff33] opacity-50 cursor-not-allowed text-black"
                        }
                    `}
                >
                    Create account
                </button>
            </ElectricBorder>

            {error && <p className="text-red-400 text-center mt-3">{error}</p>}
            {success && <p className="text-lime-400 text-center mt-3">{success}</p>}

            <p className="text-center mt-4 text-white/50 text-sm">
                Already have an account? <a href="/login" className="text-lime-400 hover:underline">Log in</a>
            </p>

            {/* Dynamic validation live messages */}
            {!isValid && missingMessages.length > 0 && (
                <ul className="mt-4 text-sm text-red-400 space-y-1">
                    {missingMessages.map((msg, i) => (
                        <li key={i}>• {msg}</li>
                    ))}
                </ul>
            )}

        </div>
    );
}
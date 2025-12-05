import { useState, useEffect } from "react";
import { useAuth } from "../context/useAuth";
import Navbar from "../components/Navbar";
import { updateUser } from "../components/utils/AuthMock";

export default function Profile() {
    const { user } = useAuth() || {};
    const [form, setForm] = useState({ name: "", email: "", avatar: "" });
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (user) {
            setForm({
                name: user.name || "",
                email: user.email || "",
                avatar: user.avatar || "",
            });
        }
    }, [user]);

    if (!user) {
        return (
            <div className="text-white text-center mt-40 text-2xl font-righteous">
                You must be logged in to access your profile.
            </div>
        );
    }

    const handleSave = () => {
        updateUser(form);
        setSaved(true);
        setTimeout(() => setSaved(false), 1500);
    };

    return (
        <>
            <Navbar />

            <div className="pt-32 pb-20 min-h-screen bg-[#060010] text-white flex justify-center">
                <div className="w-[90%] md:w-[60%] lg:w-[40%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl">

                    <h1 className="text-4xl font-righteous text-center text-lime-400 mb-6">
                        Your Profile
                    </h1>

                    {/* AVATAR */}
                    <div className="flex flex-col items-center mb-6">
                        <div className="
                            w-24 h-24 rounded-full bg-lime-400 text-black flex items-center justify-center 
                            shadow-[0_0_20px_#ccff33] text-4xl font-bold mb-3
                        ">
                            {form.avatar ? (
                                <img
                                    src={form.avatar}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            ) : (
                                (form.name?.charAt(0)?.toUpperCase() || "U")
                            )}
                        </div>

                        <input
                            type="text"
                            placeholder="Avatar image URL (optional)"
                            className="w-full px-4 py-2 mt-2 bg-black/40 border border-white/20 rounded-xl text-white"
                            value={form.avatar}
                            onChange={(e) => setForm({ ...form, avatar: e.target.value })}
                        />
                    </div>

                    {/* NAME */}
                    <label className="block mb-2 text-lime-400 font-righteous">Display Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 bg-black/40 border border-white/20 rounded-xl text-white mb-5"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />

                    {/* EMAIL */}
                    <label className="block mb-2 text-lime-400 font-righteous">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 bg-black/40 border border-white/20 rounded-xl text-white mb-5"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />

                    {/* SAVE BUTTON */}
                    <button
                        onClick={handleSave}
                        className="
                            w-full py-3 rounded-full mt-3 font-righteous text-black 
                            bg-lime-400 hover:bg-[#eaff66] transition shadow-[0_0_25px_#ccff33]
                        "
                    >
                        Save Changes
                    </button>

                    {saved && (
                        <p className="text-center mt-4 text-lime-400 font-righteous animate-pulse">
                            ✔ Saved!
                        </p>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}
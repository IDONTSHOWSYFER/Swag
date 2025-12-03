import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import validator from "validator";
import Footer from "../components/Footer";

export default function Support() {
    const navigate = useNavigate();
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nomValid, setNomValid] = useState(null);
    const [emailValid, setEmailValid] = useState(null);
    const [messageValid, setMessageValid] = useState(null);

    const validateNom = (value) => {
        setNom(value);
        setNomValid(value.trim() !== "");
    };

    const validateEmail = (value) => {
        setEmail(value);
        setEmailValid(validator.isEmail(value));
    };

    const validateMessage = (value) => {
        setMessage(value);
        setMessageValid(value.trim().length > 20);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/confirmation", { state: { nom, email, message } });
    };

    const isFormValid = nomValid && emailValid && messageValid;

    const getBorderColor = (valid) => {
        if (valid === null) return "border-[#f1f1f126]";
        return valid ? "border-green-500" : "border-red-500";
    };

return (
        <div className="min-h-screen max-h-none text-white font-righteous px-4">
            <Navbar />
            <h1 className="pt-15 text-center text-4xl mt-12 mb-8 text-[#f20cb5]">
                Page Contact
            </h1>
            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto bg-[#0c0c0c6a] backdrop-blur-[20px] p-8 rounded-3xl shadow-lg flex flex-col gap-6 border border-[#f1f1f126]"
            >
                <label className="flex flex-col text-lg">
                    Nom :
                    <input
                        value={nom}
                        onChange={(e) => validateNom(e.target.value)}
                        placeholder="Enter your full name"
                        className={`w-full px-4 py-3 rounded-full bg-[#0c0c0c80] border ${getBorderColor(
                            nomValid
                        )} text-white outline-none transition mt-2`}
                    />
                </label>

                <label className="flex flex-col text-lg">
                    Email :
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => validateEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className={`w-full px-4 py-3 rounded-full bg-[#0c0c0c80] border ${getBorderColor(
                            emailValid
                        )} text-white outline-none transition mt-2`}
                    />
                </label>

                <label className="flex flex-col text-lg">
                    Message :
                    <textarea
                        value={message}
                        onChange={(e) => validateMessage(e.target.value)}
                        placeholder="Write your message (minimum 20 characters)"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#0c0c0c80] resize-none border ${getBorderColor(
                            messageValid
                        )} text-white  outline-none transition mt-2 min-h-[120px] resize-vertical`}
                    />
                </label>

<button
    type="submit"
    disabled={!isFormValid}
    className={`px-6 py-3 w-[30%] m-auto rounded-full font-bold text-lg transition transform
        ${isFormValid
            ? "bg-[#ccff33] hover:bg-[#eaff66] text-black shadow-[0_0_25px_#ccff33]"
            : "bg-[#ccff33] text-black cursor-not-allowed saturate-50"
        }`}
>
    Envoyer
</button>
            </form>

            {/* EXTRA SUPPORT CONTENT – MODERN & INTERACTIVE */}
            <div className="max-w-4xl mx-auto mt-16 mb-16 p-10 px-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_0_35px_rgba(242,12,181,0.15)]">

              {/* TITLE */}
              <h2 className="text-center text-3xl font-righteous text-lime-400 mb-8 drop-shadow">
                Need Help Faster?
              </h2>

              {/* 3 CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* CARD 1 */}
                <div className="group p-6 rounded-2xl bg-[#0c0c0c] border border-[#f20cb533] hover:border-lime-400 hover:scale-[1.04] transition-all shadow-lg cursor-pointer">
                  <h3 className="text-xl font-righteous text-lime-400 mb-3 group-hover:text-pink-400 transition">
                    💬 Live Chat
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Talk instantly with one of our SWAG specialists. Available every day,
                    9am–11pm.
                  </p>
                </div>

                {/* CARD 2 */}
                <div className="group p-6 rounded-2xl bg-[#0c0c0c] border border-[#f20cb533] hover:border-lime-400 hover:scale-[1.04] transition-all shadow-lg cursor-pointer">
                  <h3 className="text-xl font-righteous text-lime-400 mb-3 group-hover:text-pink-400 transition">
                    📚 FAQ Center
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Find answers to your most common questions and step‑by‑step guides.
                  </p>
                </div>

                {/* CARD 3 */}
                <div className="group p-6 rounded-2xl bg-[#0c0c0c] border border-[#f20cb533] hover:border-lime-400 hover:scale-[1.04] transition-all shadow-lg cursor-pointer">
                  <h3 className="text-xl font-righteous text-lime-400 mb-3 group-hover:text-pink-400 transition">
                    🛠️ Technical Support
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Issue with your account or a marketplace glitch? Our tech team has you covered.
                  </p>
                </div>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
                
                <div className="px-4 py-3 bg-white/5 border border-white/20 rounded-xl backdrop-blur-sm">
                    <p className="text-3xl font-righteous text-lime-400">98%</p>
                    <p className="text-xs text-white/70">Resolution Rate</p>
                </div>

                <div className="px-4 py-3 bg-white/5 border border-white/20 rounded-xl backdrop-blur-sm">
                    <p className="text-3xl font-righteous text-pink-400">1–2h</p>
                    <p className="text-xs text-white/70">Avg. Response Time</p>
                </div>

                <div className="px-4 py-3 bg-white/5 border border-white/20 rounded-xl backdrop-blur-sm">
                    <p className="text-3xl font-righteous text-lime-400">24/7</p>
                    <p className="text-xs text-white/70">Support Availability</p>
                </div>

                <div className="px-4 py-3 bg-white/5 border border-white/20 rounded-xl backdrop-blur-sm">
                    <p className="text-3xl font-righteous text-pink-400">4.9★</p>
                    <p className="text-xs text-white/70">User Satisfaction</p>
                </div>

              </div>

              {/* CONTACT SHORTCUTS */}
              <div className="mt-12 flex flex-col gap-4 items-center">
                <p className="text-white/80 text-sm">Prefer a direct link?</p>

                <div className="flex gap-4 flex-wrap justify-center">
                  <a className="px-5 py-3 bg-[#ccff33] text-black font-bold rounded-full shadow-[0_0_20px_#ccff33] hover:bg-[#eaff66] transition">
                    Email Support
                  </a>

                  <a className="px-5 py-3 bg-[#f20cb5] text-white font-bold rounded-full shadow-[0_0_20px_#f20cb5] hover:bg-[#ff4dcd] transition">
                    Open a Ticket
                  </a>

                  <a className="px-5 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition">
                    Join Discord
                  </a>
                </div>
              </div>

            </div>

            {/* NEW — PREMIUM SWAG SUPPORT ADD‑ONS */}
            <div className="mt-20 mb-20 max-w-6xl mx-auto px-4">

              {/* SECTION TITLE */}
              <h2 className="text-center text-4xl font-righteous text-pink-400 drop-shadow-[0_0_12px_#f20cb5] mb-10">
                Explore More Help Options
              </h2>

              {/* 2-COLUMN LAYOUT */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* LEFT — ACCORDION FAQ */}
                <div className="bg-[#0c0c0c] p-8 rounded-3xl border border-[#f20cb533] shadow-lg backdrop-blur-xl">
                  <h3 className="text-2xl font-righteous text-lime-400 mb-6">FAQ Quick Access</h3>

                  <details className="group mb-4 bg-white/5 p-4 rounded-xl border border-white/10 cursor-pointer">
                    <summary className="text-white font-righteous text-lg group-hover:text-lime-400 transition">
                      How long does support take to answer?
                    </summary>
                    <p className="text-white/70 text-sm mt-2">
                      Our team replies within 1–2 hours on average. Peak times may vary.
                    </p>
                  </details>

                  <details className="group mb-4 bg-white/5 p-4 rounded-xl border border-white/10 cursor-pointer">
                    <summary className="text-white font-righteous text-lg group-hover:text-lime-400 transition">
                      Can I edit my support request later?
                    </summary>
                    <p className="text-white/70 text-sm mt-2">
                      Yes — log into your SWAG account and access the Tickets panel.
                    </p>
                  </details>

                  <details className="group bg-white/5 p-4 rounded-xl border border-white/10 cursor-pointer">
                    <summary className="text-white font-righteous text-lg group-hover:text-lime-400 transition">
                      What should I include for faster assistance?
                    </summary>
                    <p className="text-white/70 text-sm mt-2">
                      Screenshots, model names, timestamps and detailed descriptions help drastically.
                    </p>
                  </details>
                </div>

                {/* RIGHT — SWAG EMERGENCY CARD */}
                <div className="p-10 rounded-3xl bg-gradient-to-br from-[#0c0c0c] via-[#1a0024] to-[#0c0c0c] border border-[#f20cb533] shadow-[0_0_40px_rgba(242,12,181,0.25)]">
                  <h3 className="text-2xl font-righteous text-pink-400 mb-4">
                    🚨 Instant Emergency Assistance
                  </h3>
                  <p className="text-white/80 mb-6 text-sm leading-relaxed">
                    Account locked? Payment bug? Marketplace model not loading?
                    Activate the SWAG Emergency Protocol and our priority team will assist you ASAP.
                  </p>

                  <div className="flex gap-4 flex-wrap">
                    <a className="px-6 py-3 bg-pink-500 text-white font-bold rounded-full shadow-[0_0_20px_#f20cb5] hover:bg-pink-400 transition">
                      Priority Ticket
                    </a>

                    <a className="px-6 py-3 bg-lime-400 text-black font-bold rounded-full shadow-[0_0_20px_#ccff33] hover:bg-[#eaff66] transition">
                      Call Me Back
                    </a>

                    <a className="px-6 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition">
                      Report an Issue
                    </a>
                  </div>
                </div>

              </div>

              {/* BOTTOM BANNER */}
              <div className="mt-16 bg-white/10 py-10 px-6 rounded-3xl border border-white/20 text-center backdrop-blur-lg shadow-[0_0_35px_rgba(204,255,51,0.2)] mx-auto max-w-4xl">
                <h3 className="text-2xl font-righteous text-lime-400 mb-3">
                  SWAG Support Never Sleeps
                </h3>
                <p className="text-white/70 text-sm max-w-xl mx-auto">
                  Our teams are distributed worldwide to make sure your marketplace experience stays smooth,
                  secure, and enjoyable — anytime.
                </p>
              </div>

            </div>


            {/* NEW WHITE OVERVIEW SECTION */}
            <div className="max-w-5xl mx-auto my-20 p-12 rounded-3xl bg-white text-black shadow-[0_0_45px_rgba(0,0,0,0.15)]">
              <h2 className="text-3xl font-righteous mb-6 text-center">
                Need a Clearer Overview?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto mb-8">
                Here’s a quick breakdown of how SWAG Support works and what you can expect from our team.
                Simple, transparent, and always here for you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="p-6 rounded-2xl bg-[#f7f7f7] border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-pink-500">Fast Response</h3>
                  <p className="text-gray-700 text-sm">
                    Our agents reply quickly thanks to our global support network.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#f7f7f7] border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-lime-500">Verified Experts</h3>
                  <p className="text-gray-700 text-sm">
                    Every SWAG specialist is trained to help with complex marketplace issues.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#f7f7f7] border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-pink-500">Clear Guidance</h3>
                  <p className="text-gray-700 text-sm">
                    From tips to troubleshooting—get clean, actionable instructions every time.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12"></div>

        <Footer />
        </div>
    );
}
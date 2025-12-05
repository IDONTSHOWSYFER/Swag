import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";

export default function FooterForm() {

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

    return (
        <div>
            <h3 className="font-[Righteous] text-lg mb-3">Contact</h3>

            <form className="flex text-black flex-col gap-4" aria-label="Contact form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={nom}
                    onChange={(e) => validateNom(e.target.value)}
                    placeholder="Your name"
                    aria-label="Your name"
                    className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 text-sm"
                    required
                />

                <input
                    type="email"
                    value={email}
                    onChange={(e) => validateEmail(e.target.value)}
                    placeholder="Email address"
                    aria-label="Email address"
                    className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 text-sm"
                    required
                />

                <textarea
                    value={message}
                    onChange={(e) => validateMessage(e.target.value)}
                    placeholder="Message"
                    aria-label="Message"
                    className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 text-sm h-[70px]"
                    required
                />

                {/* BUTTON GLOW ANIMÉ */}
                <button
                    type="submit"
                    className={`
                relative overflow-hidden rounded-xl
                px-4 py-3 text-sm font-semibold text-white cursor-pointer
                bg-gradient-to-br from-pink-500 to-pink-300
                shadow-[0_4px_12px_rgba(242,12,181,0.25)]
                transition-transform duration-200
                active:scale-95
                hover:scale-105 hover:shadow-[0_6px_18px_rgba(242,12,181,0.35)]
                `}
                    disabled={!isFormValid}
                    aria-label="Send message"
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
    )
}
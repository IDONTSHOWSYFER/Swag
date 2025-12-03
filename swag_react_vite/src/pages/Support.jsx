import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import validator from "validator";

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
        <div className="min-h-screen max-h-none text-white font-righteous">
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
                        className={`w-full px-4 py-3 rounded-2xl bg-[#0c0c0c80] resize-none border ${getBorderColor(
                            messageValid
                        )} text-white  outline-none transition mt-2 min-h-[120px] resize-vertical`}
                    />
                </label>

                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`px-6 py-3 w-[30%] m-auto rounded-full text-black font-bold text-lg transition transform ${
                        isFormValid
                            ? "bg-[#f20cb5] hover:bg-[#ff00bb] "
                            : "opacity-50 cursor-not-allowed"
                    }`}
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
}
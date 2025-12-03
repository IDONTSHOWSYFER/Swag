import { useLocation } from "react-router-dom";

export default function Confirmation() {
    const location = useLocation();
    const { nom, email, message } = location.state || {};

    return (
        <div className="min-h-screen text-white font-righteous flex justify-center items-center px-4">
            <div className="bg-[#0c0c0c6a] backdrop-blur-[20px] p-8 rounded-3xl shadow-lg border border-[#f1f1f126] max-w-xl w-full">
                <p className="text-xl mb-6 text-center text-[#f20cb5]">
                    Votre message a bien été envoyé.
                </p>

                {nom && (
                    <p className="mb-3">
                        <strong className="text-[#f20cb5]">Nom :</strong> {nom}
                    </p>
                )}

                {email && (
                    <p className="mb-3">
                        <strong className="text-[#f20cb5]">Email :</strong> {email}
                    </p>
                )}

                {message && (
                    <p className="mb-3">
                        <strong className="text-[#f20cb5]">Message :</strong> {message}
                    </p>
                )}
            </div>
        </div>
    );
}
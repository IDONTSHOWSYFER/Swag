import { checkIfUserIsLogged } from "../components/utils/AuthMock";


export default function CTAJoin() {
    return (
        <section className="w-full py-20 text-center bg-gradient-to-r from-[#f20cb5] to-[#ccff33] rounded-xl mx-auto mt-16 mb-16 max-w-6xl shadow-[0_0_40px_rgba(242,12,181,0.4)] flex flex-col items-center justify-center gap-3">
            <h2 className="text-4xl font-righteous text-black mb-4">Join the Swag Movement ⚡</h2>
            <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
                Get exclusive drops, early access, secret releases & insider fashion intel every week.
            </p>
            {!checkIfUserIsLogged() &&
                <button className="px-8 py-4 bg-black text-white font-bold text-xl rounded-full hover:scale-105 transition shadow-[0_0_25px_rgba(0,0,0,0.5)]">
                    Sign Up Now
                </button>
            }
        </section>
    );
}
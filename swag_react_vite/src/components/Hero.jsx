import { useEffect } from "react";
import { useHero } from "../context/useHero";

export default function Hero() {

    const { step, setStep, locked, setLocked } = useHero();

    // 1. Blocage CSS COMPLET
    useEffect(() => {
        const overflowValue = locked ? "hidden" : "auto";

        document.documentElement.style.overflow = overflowValue;
        document.body.style.overflow = overflowValue;

    }, [locked]);

    // 2. Gestion des scrolls onboarding
    useEffect(() => {
        if (!locked) return;

        const block = (e) => {
            e.preventDefault();
            e.stopPropagation();
        };

        const next = () => {
            setStep(prev => {
                const n = Math.min(prev + 1, 3);

                if (n === 3) {
                    setLocked(false);
                }
                return n;
            });
        };

        const onWheel = (e) => {
            block(e);
            next();
        };

        const onTouch = (e) => {
            block(e);
            next();
        };

        document.addEventListener("wheel", onWheel, { passive: false });
        document.addEventListener("touchmove", onTouch, { passive: false });
        document.addEventListener("scroll", block, { passive: false });

        return () => {
            document.removeEventListener("wheel", onWheel);
            document.removeEventListener("touchmove", onTouch);
            document.removeEventListener("scroll", block);
        };

    }, [locked, setStep, setLocked]);


    return (
        <div className="relative items-center flex justify-center min-h-screen font-righteous">

            <video autoPlay loop muted className="h-full w-full absolute object-cover">
                <source src="/swag_animation.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 backdrop-blur-[4px] bg-black/25 bg-gradient-to-r from-[#f20cb560] via-transparent to-[#f20cb560]"></div>

            <div className="flex text-white flex-col justify-center items-center relative z-10">
                <h1 className="text-8xl mb-3">SWAG</h1>

                <div className="text-lime-400 text-3xl gap-4 flex">

                    <h2 className={`${step >= 1 ? "opacity-100" : "opacity-0"} transition-all duration-700`}>
                        Discover
                    </h2>

                    <h2 className={`${step >= 2 ? "opacity-100" : "opacity-0"} transition-all duration-700`}>
                        Collect
                    </h2>

                    <h2 className={`${step >= 3 ? "opacity-100" : "opacity-0"} transition-all duration-700`}>
                        Flex
                    </h2>

                </div>
            </div>

        </div>
    );
}
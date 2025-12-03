import { useState, useMemo, useEffect } from "react";
import { HeroContext } from "./HeroContext";
import { useLocation } from "react-router-dom";

export function HeroProvider({ children }) {
    const [step, setStep] = useState(0);
    const [locked, setLocked] = useState(true);
    const location = useLocation();

    const isComplete = step >= 3;

    // 👉 Skip onboarding sur toutes les pages sauf Home
    useEffect(() => {
        if (location.pathname !== "/") {
            document.documentElement.style.overflow = "auto";
            document.body.style.overflow = "auto";
        }
    }, [location.pathname]);

    const value = useMemo(() => ({
        step,
        setStep,
        locked,
        setLocked,
        isComplete
    }), [step, locked, isComplete]);

    return (
        <HeroContext.Provider value={value}>
            {children}
        </HeroContext.Provider>
    );
}
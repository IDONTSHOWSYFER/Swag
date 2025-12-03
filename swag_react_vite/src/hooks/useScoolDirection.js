import { useState, useEffect, useRef } from "react";

export default function useScoolDirection() {
    const [direction, setDirection] = useState("down");
    const lastY = useRef(0); // valeur par défaut sécurisée

    useEffect(() => {
        // initialisation une fois que le DOM existe
        lastY.current = window.scrollY;

        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY > lastY.current) {
                setDirection("down");
            } else if (currentY < lastY.current) {
                setDirection("up");
            }

            lastY.current = currentY;
        };

        const handleWheel = (e) => {
            if (e.deltaY > 0) setDirection("down");
            else if (e.deltaY < 0) setDirection("up");
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("wheel", handleWheel);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return direction;
}
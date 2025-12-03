import { useEffect } from "react";

export default function useScroolLock(locked) {
    useEffect(() => {
        document.body.style.overflow = locked ? "hidden" : "auto";
    }, [locked]);
}
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MagicBento from "../components/MagicBento";
import Footer from "../components/Footer";

import { HeroProvider } from "../context/HeroProvider";

export default function Home() {
    return (
        <HeroProvider>
            <Hero />
            <MagicBento />
            <Footer />
        </HeroProvider>
    );
}
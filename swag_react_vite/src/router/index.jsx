import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Marketplace from "../pages/Marketplace";
import Support from "../pages/Support"
import Confirmation from "../pages/Confirmation";

export default function AppRouter() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/support" element={<Support />} />
            <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
    );
}
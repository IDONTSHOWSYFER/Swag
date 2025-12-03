import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Marketplace from "../pages/Marketplace";

export default function AppRouter() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
    );
}
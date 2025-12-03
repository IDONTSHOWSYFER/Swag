import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Marketplace from "../pages/Marketplace";
import Support from "../pages/Support"
import Confirmation from "../pages/Confirmation";
import News from "../pages/News";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

export default function AppRouter() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/support" element={<Support />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}
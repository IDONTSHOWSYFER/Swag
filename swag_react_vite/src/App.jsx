import ElectricCursor from "./components/ElectricCursor";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import { Routes, Route } from "react-router-dom";

export default function App() {
  
  return (
    <>
      {/* CURSEUR ÉLECTRIQUE */}
      <ElectricCursor
        color="#ccff33"
        size={20}
        haloSize={120}
        intensity={50}
        speed={0.18}
      />

      {/* ROUTES DE L’APP */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </>
  );
}
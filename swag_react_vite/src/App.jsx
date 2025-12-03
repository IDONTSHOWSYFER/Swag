import ElectricCursor from "./components/ElectricCursor";
import Navbar from "./components/Navbar";
import AppRouter from "./router";

export default function App() {

  return (
    <>
      <ElectricCursor
        color="#ccff33"
        size={20}
        haloSize={120}
        intensity={50}
        speed={0.18}
      />
      <Navbar />
      <AppRouter />
    </>
  );
}
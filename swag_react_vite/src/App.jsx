import ElectricCursor from "./components/ElectricCursor";
import Navbar from "./components/Navbar";
import AppRouter from "./router";
import Footer from "./components/Footer";


export default function App() {

  return (
    <>
      <Navbar />
      <ElectricCursor
        color="#ccff33"
        size={20}
        haloSize={120}
        intensity={50}
        speed={0.18}
      />
      <AppRouter />
      <Footer />
    </>
  );
}
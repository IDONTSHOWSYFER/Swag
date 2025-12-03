import Navbar from "../components/Navbar";
import Register from "../components/auth/Register";
import Footer from "../components/Footer";

export default function RegisterPage() {
    return (
        <>
            <Navbar />

            <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
                <Register />
            </div>

            <Footer />
        </>
    );
}
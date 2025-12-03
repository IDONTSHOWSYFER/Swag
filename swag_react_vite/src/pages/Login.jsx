import Navbar from "../components/Navbar";
import Login from "../components/auth/Login";
import Footer from "../components/Footer";

export default function LoginPage() {
    return (
        <>
            <Navbar />

            <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
                <Login />
            </div>

            <Footer />
        </>
    );
}
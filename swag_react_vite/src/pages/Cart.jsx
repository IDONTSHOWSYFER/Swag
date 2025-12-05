// src/pages/Cart.jsx
import { useCart } from "../context/useCart";
import ElectricBorder from "../components/ElectricBorder";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cart, removeFromCart, clearCart, totalPrice } = useCart();

    return (
        <div className="min-h-screen flex flex-col bg-[#060010]">

            <main className="flex-1 pt-32 pb-20 px-6">
                <h1 className="text-center text-4xl font-righteous text-lime-400 mb-10">
                    Your Cart 🛒
                </h1>

                {cart.length === 0 ? (
                    <div className="text-center text-white/70 text-xl mt-20">
                        Your cart is empty.
                        <br />
                        <Link
                            to="/marketplace"
                            className="text-lime-400 underline hover:text-lime-200"
                        >
                            Browse Marketplace
                        </Link>
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto space-y-6">

                        {/* ITEMS LIST */}
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="
                                    flex items-center justify-between 
                                    bg-white/10 backdrop-blur-xl border border-white/20 
                                    rounded-2xl p-4 shadow-[0_0_25px_rgba(204,255,51,.2)]
                                "
                            >
                                {/* LEFT: IMAGE + NAME */}
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 bg-black/30 rounded-xl overflow-hidden">
                                        <img
                                            src={`https://raw.githubusercontent.com/IDONTSHOWSYFER/Swag/main/models/${item.model}.jpg`}
                                            className="w-full h-full object-cover"
                                            onError={(e) =>
                                                (e.target.src =
                                                    "https://via.placeholder.com/100x100?text=SWAG")
                                            }
                                        />
                                    </div>
                                    <div>
                                        <p className="text-white font-righteous text-xl">{item.name}</p>
                                        <p className="text-lime-400 font-bold">${item.price}</p>
                                    </div>
                                </div>

                                {/* REMOVE BUTTON */}
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="
                                      text-pink-400 hover:text-pink-200 
                                      font-bold text-lg transition
                                    "
                                >
                                    ✕
                                </button>
                            </div>
                        ))}

                        {/* TOTAL + CHECKOUT */}
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
                            <div className="flex justify-between text-white text-xl font-righteous mb-6">
                                <span>Total</span>
                                <span className="text-lime-400">${totalPrice}</span>
                            </div>

                            <ElectricBorder
                                color="#ccff33"
                                chaos={0.45}
                                speed={1.2}
                                thickness={2}
                                style={{ borderRadius: 9999 }}
                            >
                                <button
                                    className="
                                        w-full py-3 bg-lime-400 text-black rounded-full 
                                        font-bold text-lg shadow-[0_0_25px_#ccff33] 
                                        hover:bg-[#e6ff66] transition
                                    "
                                >
                                    Checkout
                                </button>
                            </ElectricBorder>

                            <button
                                onClick={clearCart}
                                className="mt-4 w-full text-center text-red-400 hover:text-red-300"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
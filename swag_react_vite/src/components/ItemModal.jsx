// src/components/ItemModal.jsx
import ModelViewer from "./ModelViewer";

export default function ItemModal({ item, pos, onClose, center = false }) {
    if (!item) return null;

    const baseStyle = center
        ? {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }
        : {
            position: "absolute",
            top: pos?.top,
            left: pos?.left,
        };

    return (
        <div
            className="bg-[#0c0c0c] border border-[#f20cb5] rounded-xl p-4 w-[320px]
                       shadow-xl backdrop-blur-xl z-[999999]"
            style={baseStyle}
        >
            <button
                onClick={onClose}
                className="absolute top-2 right-2 bg-[#f20cb5] text-white px-3 py-1 rounded-full hover:scale-110 active:scale-95 transition"
            >
                ✕
            </button>

            <h2 className="text-xl font-righteous text-lime-400 mb-3">
                {item.name}
            </h2>

            <div className="h-[200px] rounded-lg overflow-hidden border border-[#f20cb5]/60 mb-3">
                <ModelViewer name={item.model} />
            </div>

            <p className="text-white text-sm opacity-90 font-geologica">
                {item.description}
            </p>
        </div>
    );
}
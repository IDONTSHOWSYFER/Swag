// src/components/ModelViewer.jsx
import "@google/model-viewer";
import React, { useState } from "react";

export default function ModelViewer({ model, desc }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative h-full w-full"
            onClick={() => setOpen(!open)}
        >
            <model-viewer
                src={`/models/${model}.glb`}
                auto-rotate
                camera-controls
                interaction-prompt="auto"
                interaction-prompt-style="wiggle"
                disable-tap
                touch-action="none"
                style={{
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    pointerEvents: "auto",
                }}
            ></model-viewer>

            {/* DESCRIPTION BOX */}
            <div
                className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] 
                    bg-black/60 backdrop-blur-xl border border-white/20 
                    rounded-xl p-3 text-white text-sm 
                    transition-all duration-300 
                    ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
            >
                {desc}
            </div>
        </div>
    );
}
import "@google/model-viewer";

export default function Viewer({name}) {
    return (
        <model-viewer
            src={`/models/${name}.glb`}
            auto-rotate
            camera-controls
            className="w-full h-full"
        ></model-viewer>
    )
}

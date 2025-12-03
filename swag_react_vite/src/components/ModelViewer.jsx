// src/components/ModelViewer.jsx
import "@google/model-viewer";

export default function ModelViewer({ name }) {
  return (
    <model-viewer
      src={`/models/${name}.glb`}
      auto-rotate
      camera-controls
      style={{ width: "100%", height: "100%", background: "transparent" }}
    ></model-viewer>
  );
}
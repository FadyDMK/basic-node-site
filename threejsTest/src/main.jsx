import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Box from "./App.jsx";
import { Canvas } from "@react-three/fiber";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  </StrictMode>
);

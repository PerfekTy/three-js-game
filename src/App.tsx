import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Game } from "./components/Game";

import "./App.css";

function App() {
  const keyboardMap = [
    { name: "right", keys: ["ArrowRight", "KeyD"] },
    { name: "left", keys: ["ArrowLeft", "KeyA"] },
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "down", keys: ["ArrowDown", "KeyS"] },
    { name: "jump", keys: ["Space"] },
  ];

  return (
    <main style={{ width: "100%", height: "100vh", background: "#777" }}>
      <KeyboardControls map={keyboardMap}>
        <Canvas
          camera={{
            near: 0.1,
            far: 1000,
            position: [-10, 5, 0],
          }}
          shadows
        >
          <Suspense fallback={"Loading..."}>
            <ambientLight intensity={0.3} />
            <directionalLight intensity={0.34} />
            <Physics>
              <Game />
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </main>
  );
}

export default App;

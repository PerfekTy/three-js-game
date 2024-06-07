import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Game } from "./components/Game";

import "./App.css";
import { Sky } from "@react-three/drei";

function App() {
  return (
    <main style={{ width: "100%", height: "100vh" }}>
      <Canvas
        camera={{
          near: 0.1,
          far: 1000,
          position: [-10, 5, 0],
        }}
        shadows
      >
        <Suspense fallback={"Loading..."}>
          <ambientLight intensity={0.7} />
          <directionalLight intensity={0.6} position={[0, 5, 0]} />
          <Physics>
            <Game />
          </Physics>
          <Sky />
        </Suspense>
      </Canvas>
    </main>
  );
}

export default App;

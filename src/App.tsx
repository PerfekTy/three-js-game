import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Game } from "./components/Game";

import { Sky } from "@react-three/drei";
import "./App.css";

export const App = () => {
  const [playerOne, setPlayerOne] = useState({
    name: "Player 1",
    score: 0,
    hasMove: true,
    hasMoved: false,
    bills: [],
  });
  const [playerTwo, setPlayerTwo] = useState({
    name: "Player 2",
    score: 0,
    hasMove: false,
    hasMoved: true,
    bills: [],
  });

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
          <ambientLight intensity={0.7} castShadow />
          <directionalLight
            intensity={1}
            position={[0, 18, 0]}
            castShadow
            shadow-mapSize-width={4096}
            shadow-mapSize-height={4096}
            shadow-camera-left={-35}
            shadow-camera-right={35}
            shadow-camera-top={35}
            shadow-camera-bottom={-35}
          />
          <Physics>
            <Game playerOne={playerOne} playerTwo={playerTwo} />
          </Physics>
          <Sky />
        </Suspense>
      </Canvas>
    </main>
  );
};

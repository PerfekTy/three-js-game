import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Game } from "./components/Game";
import { Html, Sky } from "@react-three/drei";
import "./App.css";
import { GamepadIcon, Settings, User } from "lucide-react";

export type GameState = "conf" | "playing" | "end" | "settings";

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
  const [gameState, setGameState] = useState<GameState>("conf");

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
          <Html>
            {gameState === "conf" && (
              <div className="conf">
                <h1>8 Pool Game</h1>
                <button
                  className="button"
                  onClick={() => setGameState("playing")}
                >
                  Start Game <GamepadIcon />
                </button>
                <button
                  className="button settings"
                  onClick={() => setGameState("settings")}
                >
                  Settings <Settings />
                </button>
              </div>
            )}
            {gameState === "end" && (
              <div className="conf">
                <h1>Game Over</h1>
                <button className="button" onClick={() => setGameState("conf")}>
                  Restart
                </button>
              </div>
            )}
            {gameState === "settings" && (
              <div className="conf">
                <h1>
                  Settings <Settings />
                </h1>
                <p>Set your nicknames:</p>
                <div>
                  <div className="form_fieldset">
                    <label>
                      <User />
                    </label>
                    <input
                      className="input"
                      type="text"
                      value={playerOne.name}
                      placeholder="Player 1"
                      onChange={(e) =>
                        setPlayerOne({ ...playerOne, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form_fieldset">
                    <label>
                      <User />
                    </label>
                    <input
                      className="input"
                      type="text"
                      value={playerTwo.name}
                      placeholder="Player 2"
                      onChange={(e) =>
                        setPlayerTwo({ ...playerTwo, name: e.target.value })
                      }
                    />
                  </div>
                </div>
                <button className="button" onClick={() => setGameState("conf")}>
                  Back
                </button>
              </div>
            )}
          </Html>

          <Physics paused={gameState !== "playing"}>
            <Game
              playerOne={playerOne}
              playerTwo={playerTwo}
              gameState={gameState}
            />
          </Physics>
          <Sky sunPosition={[100, 0, 100]} />
        </Suspense>
      </Canvas>
    </main>
  );
};

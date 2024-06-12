import { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { GameState } from "../App";

import { Bilard } from "../models/Bilard";
import { YellowBall } from "../models/normal/Yellow";
import { Red } from "../models/normal/Red";
import { Purple } from "../models/normal/Purple";
import { Green } from "../models/normal/Green";
import { Brown } from "../models/normal/Brown";
import { Blue } from "../models/normal/Blue";
import { Black } from "../models/normal/Black";
import { SemiYellow } from "../models/semi/SemiYellow";
import { SemiRed } from "../models/semi/SemiRed";
import { SemiPurple } from "../models/semi/SemiPurple";
import { SemiOrange } from "../models/semi/SemiOrange";
import { SemiGreen } from "../models/semi/SemiGreen";
import { SemiBrown } from "../models/semi/SemiBrown";
import { SemiBlue } from "../models/semi/SemiBlue";
import { Orange } from "../models/normal/Orange";
import { BilardColliders } from "./BilardColliders";
import { Player } from "./Player";
import { biles } from "../biles";

export type Player = {
  name: string;
  score: number;
  hasMove: boolean;
  hasMoved: boolean;
  bills: string[];
};

interface GameProps {
  playerOne: Player;
  playerTwo: Player;
  gameState: GameState;
}

export const Game = ({ playerOne, playerTwo, gameState }: GameProps) => {
  const [currentPlayer, setCurrentPlayer] = useState(playerTwo);
  const [balls, setBalls] = useState<string[]>([]);
  const [isInHole, setIsInHole] = useState<boolean>(false);
  const [canMove, setCanMove] = useState(true);
  const [ballStopped, setBallStopped] = useState<boolean | null>(null);
  const [returnBallPosition, setReturnBallPosition] = useState(false);
  const [returnBlackBallPosition, setReturnBlackBallPosition] = useState(false);

  const addBall = (ball: string) =>
    setBalls((prevBalls: string[]) => [...prevBalls, ball]);

  const switchPlayer = () =>
    setCurrentPlayer((prevPlayer) =>
      prevPlayer.name === playerOne.name ? playerTwo : playerOne
    );

  useEffect(() => {
    if (ballStopped) {
      switchPlayer();
    }
  }, [ballStopped]);

  return (
    <>
      {/* Player & table */}
      <Player
        returnBallPosition={returnBallPosition}
        gameState={gameState}
        canMove={canMove}
        setCanMove={setCanMove}
        setBallStopped={setBallStopped}
      />
      <Bilard />

      <Html position={[0, 0, 0]} transform rotation={[-Math.PI / 2, 0, 0]}>
        {gameState === "playing" && (
          <div className="game-ui">
            <h2>Current Player: {currentPlayer.name}</h2>
            <div>
              <h3>Scores</h3>
              <p>
                {playerOne.name}: {playerOne.score}
              </p>
              <p>
                {playerTwo.name}: {playerTwo.score}
              </p>

              <h1> {balls.length > 0 && "Potted biles:"}</h1>
              {balls.map((ball, index) => {
                const { name, image, width, height } = biles[ball];

                return (
                  <img
                    className="ball-image"
                    key={index}
                    src={image}
                    alt={name}
                    width={width}
                    height={height}
                  />
                );
              })}
            </div>
          </div>
        )}
      </Html>

      {/* Normal balls */}
      <YellowBall />
      <Red />
      <Purple />
      <Green />
      <Brown />
      <Blue />
      <Orange />

      {/* Black ball */}
      <Black returnBlackBallPosition={returnBlackBallPosition} />

      {/* Semi balls */}
      <SemiYellow />
      <SemiRed />
      <SemiPurple />
      <SemiOrange />
      <SemiGreen />
      <SemiBrown />
      <SemiBlue />

      {/* Floor */}
      <BilardColliders
        balls={balls}
        ballStopped={ballStopped}
        addBall={addBall}
        setIsInHole={setIsInHole}
        currentPlayer={currentPlayer}
        setReturnBallPosition={setReturnBallPosition}
        setReturnBlackBallPosition={setReturnBlackBallPosition}
      />
    </>
  );
};

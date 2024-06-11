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
import { useEffect, useState } from "react";
import { Player } from "./Player";
import { useFrame } from "@react-three/fiber";

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
}

export const Game = ({ playerOne, playerTwo }: GameProps) => {
  const [currentPlayer, setCurrentPlayer] = useState(playerOne);
  const [balls, setBalls] = useState<string[]>([]);
  const [isInHole, setIsInHole] = useState<boolean>(false);
  const [canMove, setCanMove] = useState(true);
  const [ballStopped, setBallStopped] = useState<boolean | null>(null);

  const addBall = (ball: string) =>
    setBalls((prevBalls: string[]) => [...prevBalls, ball]);

  const switchPlayer = () =>
    setCurrentPlayer((prevPlayer) =>
      prevPlayer.name === playerOne.name ? playerTwo : playerOne
    );

  console.log(currentPlayer);
  console.log("ballStopped", ballStopped);

  return (
    <>
      {/* Player & table */}
      <Player
        canMove={canMove}
        setCanMove={setCanMove}
        setBallStopped={setBallStopped}
      />
      <Bilard />

      {/* Normal balls */}
      <YellowBall />
      <Red />
      <Purple />
      <Green />
      <Brown />
      <Blue />
      <Orange />

      {/* Black ball */}
      <Black />

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
        addBall={addBall}
        setIsInHole={setIsInHole}
        currentPlayer={currentPlayer}
      />
    </>
  );
};

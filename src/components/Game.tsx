import { Player } from "./Player";
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
import { useState } from "react";

export const Game = () => {
  const [balls, setBalls] = useState<string[]>([]);

  console.log(balls);

  return (
    <>
      {/* Player & table */}
      <Player />
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
      <BilardColliders balls={balls} setBalls={setBalls} />
    </>
  );
};

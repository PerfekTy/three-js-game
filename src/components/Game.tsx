import { Box, Plane } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

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

export const Game = () => {
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
      <RigidBody type="fixed" name="floor" key={0}>
        <Box position={[0, -26, 0]} args={[70, 0.1, 50]}>
          <meshStandardMaterial color="#222" />
        </Box>
        <Box position={[0, -0.55, 0]} args={[64, 1, 30]}>
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Box>
        {/* SIDES */}
        <Plane position={[-16, -0.5, -15.1]} args={[28, 5]}>
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        <Plane position={[16, -0.5, -15.1]} args={[28, 5]}>
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        <Plane position={[16, -0.5, 15.1]} args={[28, 5]}>
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        <Plane position={[-16, -0.5, 15.1]} args={[28, 5]}>
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        <Plane
          position={[-32, -0.5, 0.3]}
          args={[26, 5, 5]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        <Plane
          position={[32, -0.5, -0.3]}
          args={[26, 5, 5]}
          rotation={[0, Math.PI / -2, 0]}
        >
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        {/* WHOLES SIDES */}
        {/* Center up hole sides */}
        <Plane
          position={[-1.8, -0.5, 16]}
          args={[2, 5, 5]}
          rotation={[0, Math.PI / -2.5, 0]}
        >
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        <Plane
          position={[1.8, -0.5, 16]}
          args={[2, 5, 5]}
          rotation={[0, Math.PI / 2.5, 0]}
        >
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        {/* Center down hole sides */}
        <Plane
          position={[-1.8, -0.5, -16]}
          args={[2, 5, 5]}
          rotation={[0, Math.PI / 2.5, 0]}
        >
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        <Plane
          position={[1.8, -0.5, -16]}
          args={[2, 5, 5]}
          rotation={[0, Math.PI / -2.5, 0]}
        >
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        {/* Right up corner hole sides */}
        <Plane
          position={[30.9, -0.5, -16]}
          args={[2, 5, 5]}
          rotation={[0, Math.PI / 4, 0]}
        >
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        <Plane
          position={[32.8, -0.5, -14]}
          args={[2, 5, 5]}
          rotation={[0, Math.PI / 4, 0]}
        >
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        {/* Right down corner hole sides */}
        <Plane
          position={[30.9, -0.5, 16]}
          args={[2, 5, 5]}
          rotation={[0, Math.PI / -4, 0]}
        >
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        <Plane
          position={[32.8, -0.5, 14]}
          args={[2, 5, 5]}
          rotation={[0, Math.PI / -4, 0]}
        >
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        {/* Left down corner hole sides */}
        <Plane
          position={[-30.9, -0.5, 16]}
          args={[2, 5, 5]}
          rotation={[0, Math.PI / 4, 0]}
        >
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        <Plane
          position={[-32.8, -0.5, 14]}
          args={[2, 5, 5]}
          rotation={[0, Math.PI / 4, 0]}
        >
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        {/* Left up corner hole sides */}
        <Plane
          position={[-30.9, -0.5, -16]}
          args={[2, 5, 5]}
          rotation={[0, Math.PI / -4, 0]}
        >
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
        <Plane
          position={[-32.8, -0.5, -14]}
          args={[2, 5, 5]}
          rotation={[0, Math.PI / -4, 0]}
        >
          <meshStandardMaterial color="#fff" opacity={0} transparent />
        </Plane>
      </RigidBody>
    </>
  );
};

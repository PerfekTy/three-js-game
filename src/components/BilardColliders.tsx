import { Box, Plane } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";

import React from "react";

interface BilardCollidersProps {
  balls: string[];
  setBalls: React.Dispatch<React.SetStateAction<string[]>>;
}

export const BilardColliders = ({ setBalls, balls }: BilardCollidersProps) => {
  const addBall = (ball: string) => {
    setBalls((prevBalls: string[]) => [...prevBalls, ball]);
  };

  const handleCollisionEnter = (other: any) => {
    if (other.rigidBodyObject) {
      const ballName = other.rigidBodyObject.name;
      if (!balls.includes(ballName)) {
        addBall(ballName);
      }
    }
  };

  return (
    <RigidBody type="fixed" name="floor" key={0}>
      <Box position={[0, -27, 0]} args={[100, 1, 100]}>
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

      {/* Center holes */}

      <Plane position={[0, -0.5, 18]} args={[2, 5, 5]}>
        <meshStandardMaterial color="#fff" opacity={0} transparent />
      </Plane>

      <Plane position={[0, -0.5, -18]} args={[2, 5, 5]}>
        <meshStandardMaterial color="#fff" opacity={0} transparent />
      </Plane>

      {/* Right up corner hole */}

      <Plane
        position={[34, -0.5, -17]}
        rotation={[0, Math.PI / -4, 0]}
        args={[2, 5, 5]}
      >
        <meshStandardMaterial color="#fff" opacity={0} transparent />
      </Plane>

      {/* Right down corner hole */}

      <Plane
        position={[34, -0.5, 17]}
        rotation={[0, Math.PI / 4, 0]}
        args={[2, 5, 5]}
      >
        <meshStandardMaterial color="#fff" opacity={0} transparent />
      </Plane>

      {/* Left down corner hole */}

      <Plane
        position={[-34, -0.5, 17]}
        rotation={[0, Math.PI / -4, 0]}
        args={[2, 5, 5]}
      >
        <meshStandardMaterial color="#fff" opacity={0} transparent />
      </Plane>

      {/* Left up corner hole */}

      <Plane
        position={[-34, -0.5, -17]}
        rotation={[0, Math.PI / 4, 0]}
        args={[2, 5, 5]}
      >
        <meshStandardMaterial color="#fff" opacity={0} transparent />
      </Plane>

      {/* Holes */}
      {/* Center down hole */}
      <CylinderCollider
        args={[0.5, 2]}
        position={[0, -10, 16.5]}
        key={0}
        onCollisionEnter={({ other }) => handleCollisionEnter(other)}
      />

      {/* Center up hole */}
      <CylinderCollider
        args={[0.5, 2]}
        position={[0, -10, -16.5]}
        key={1}
        onCollisionEnter={({ other }) => handleCollisionEnter(other)}
      />

      {/* Right up corner hole */}
      <CylinderCollider
        args={[0.5, 2]}
        position={[32.5, -10, -16.5]}
        key={2}
        onCollisionEnter={({ other }) => handleCollisionEnter(other)}
      />

      {/* Right down corner hole */}
      <CylinderCollider
        args={[0.5, 2]}
        position={[32.5, -10, 16.5]}
        key={3}
        onCollisionEnter={({ other }) => handleCollisionEnter(other)}
      />

      {/* Left down corner hole */}
      <CylinderCollider
        args={[0.5, 2]}
        position={[-32.5, -10, 16.5]}
        key={4}
        onCollisionEnter={({ other }) => handleCollisionEnter(other)}
      />

      {/* Left up corner hole */}
      <CylinderCollider
        args={[0.5, 2]}
        position={[-32.5, -10, -16.5]}
        key={5}
        onCollisionEnter={({ other }) => handleCollisionEnter(other)}
      />
    </RigidBody>
  );
};

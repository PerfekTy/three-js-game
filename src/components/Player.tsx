import * as THREE from "three";
import { useState, useEffect, useCallback, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { BallCollider, RigidBody } from "@react-three/rapier";
import { Html } from "@react-three/drei";
import { WhiteBall } from "../models/normal/White";

export const Player = () => {
  const player = useRef<any>(null!);
  const { camera } = useThree();

  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState<THREE.Vector2 | null>(
    null
  );
  const [currentPosition, setCurrentPosition] = useState<THREE.Vector2 | null>(
    null
  );
  const [stretchPower, setStretchPower] = useState(0);

  const handleMouseDown = useCallback((event: MouseEvent) => {
    setIsDragging(true);
    setStartPosition(new THREE.Vector2(event.clientX, event.clientY));
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isDragging && startPosition) {
        const currentPos = new THREE.Vector2(event.clientX, event.clientY);
        setCurrentPosition(currentPos);

        const direction = new THREE.Vector2().subVectors(
          startPosition,
          currentPos
        );
        const power = direction.length() * 1;
        setStretchPower(power);
      }
    },
    [isDragging, startPosition]
  );

  const handleMouseUp = useCallback(() => {
    if (isDragging && startPosition && currentPosition) {
      const direction = new THREE.Vector2().subVectors(
        startPosition,
        currentPosition
      );
      const forceMagnitude = direction.length() * 0.2;
      const forceDirection = new THREE.Vector3(
        direction.x,
        0,
        direction.y
      ).normalize();

      player.current.applyImpulse({
        x: forceDirection.x * forceMagnitude,
        y: 0,
        z: forceDirection.z * forceMagnitude,
      });
    }
    setIsDragging(false);
    setStartPosition(null);
    setCurrentPosition(null);
    setStretchPower(0);
  }, [isDragging, startPosition, currentPosition, player]);

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp]);

  useFrame(() => {
    const maxSpeed = 130;
    const dampingFactor = 0.99;
    const velocity = player?.current?.linvel();

    const speed = Math.sqrt(velocity.x ** 2 + velocity.z ** 2);

    if (speed > maxSpeed) {
      const scale = maxSpeed / speed;
      player.current.setLinvel({
        x: velocity.x * scale,
        y: 0,
        z: velocity.z * scale,
      });
    } else {
      player.current.setLinvel({
        x: velocity.x * dampingFactor,
        y: 0,
        z: velocity.z * dampingFactor,
      });
    }

    const playerPosition = player.current.translation();

    const desiredCameraPosition = new THREE.Vector3(
      playerPosition.x,
      playerPosition.y + 30,
      playerPosition.z + 20
    );

    camera.position.copy(desiredCameraPosition);

    camera.lookAt(playerPosition.x, playerPosition.y, playerPosition.z);
  });

  return (
    <>
      {isDragging && (
        <Html
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            color: "white",
            fontSize: "20px",
          }}
        >
          Power: {stretchPower.toFixed(2)}
        </Html>
      )}
      <RigidBody
        position={[20, 2, 0]}
        rotation={[0, Math.PI / 4, 0]}
        colliders={false}
        restitution={0.6}
        friction={0.3}
        linearDamping={0.2}
        angularDamping={0.4}
        ref={player}
      >
        <BallCollider args={[1]} />
        <WhiteBall />
      </RigidBody>
    </>
  );
};

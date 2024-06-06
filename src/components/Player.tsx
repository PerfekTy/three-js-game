import { useFrame, useThree } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { BallCollider, RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { SphereModel } from "../models/Sphere";

interface PlayerProps {
  player: React.MutableRefObject<any>;
  pathLength: React.MutableRefObject<number>;
  addPathSection: () => void;
}

export const Player = ({ addPathSection, pathLength, player }: PlayerProps) => {
  const { camera } = useThree();

  const right = useKeyboardControls((state) => state["right"]);
  const left = useKeyboardControls((state) => state["left"]);
  const forward = useKeyboardControls((state) => state["forward"]);

  useFrame(() => {
    const impulse = { x: 0, y: 0, z: 0 };
    const maxSpeed = 14;

    const impulseValue = 0.5;

    if (right) {
      impulse.z += impulseValue;
    }

    if (left) {
      impulse.z -= impulseValue;
    }

    if (forward) {
      impulse.x += impulseValue;
    }

    player?.current?.applyImpulse(impulse);

    const velocity = player?.current?.linvel();

    const speed = Math.sqrt(velocity.x ** 2 + velocity.z ** 2);

    if (speed > maxSpeed) {
      const scale = maxSpeed / speed;
      player.current.setLinvel({
        x: velocity.x * scale,
        y: velocity.y * scale,
        z: velocity.z * scale,
      });
    }

    const playerPosition = player.current.translation();

    const desiredCameraPosition = new THREE.Vector3(
      playerPosition.x - 7,
      playerPosition.y + 3,
      playerPosition.z
    );

    camera.position.copy(desiredCameraPosition);

    camera.lookAt(playerPosition.x, playerPosition.y, playerPosition.z);

    if (playerPosition.x > pathLength.current * 10 - 20) {
      addPathSection();
    }
  });

  return (
    <RigidBody position={[-2.5, 2, 0]} ref={player} colliders={false}>
      <BallCollider args={[1]} />
      <directionalLight position={[0, 5, 0]} intensity={1} />
      <SphereModel />
    </RigidBody>
  );
};

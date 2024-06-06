import { useRef } from "react";
import { useFrame, Vector3 } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

interface EnemyProps {
  position: Vector3;
  geometry: JSX.Element;
}

export const Enemy = ({ position, geometry }: EnemyProps) => {
  const enemyRef = useRef<any>(null);

  useFrame(() => {
    if (enemyRef.current) {
      const enemyPosition = enemyRef.current.translation();
      enemyRef.current.setTranslation({
        x: enemyPosition.x - 0.05,
        y: enemyPosition.y,
        z: enemyPosition.z,
      });
    }
  });

  return (
    <RigidBody
      ref={enemyRef}
      position={position}
      scale={Math.random() * 1 + 0.5}
    >
      {geometry}
    </RigidBody>
  );
};

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { BallCollider, RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball13_04_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["04_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function SemiOrange(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/semi_orange.glb") as GLTFResult;
  return (
    <RigidBody colliders={false} restitution={1} position={[-22.41, 1, -2]}>
      <BallCollider args={[1]} />
      <group {...props} dispose={null} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ball13_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          rotation={[
            Math.random() * 10,
            Math.random() * 10,
            Math.random() * 10,
          ]}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/semi_orange.glb");

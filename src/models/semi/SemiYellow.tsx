import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { BallCollider, RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball9_15_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["15_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function SemiYellow(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/semi_yellow.glb") as GLTFResult;
  return (
    <RigidBody colliders={false} restitution={1} position={[-17, 1, -0.9]}>
      <BallCollider args={[1]} />
      <group {...props} dispose={null} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ball9_15_-_Default_0"].geometry}
          material={materials["15_-_Default"]}
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

useGLTF.preload("/semi_yellow.glb");
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { BallCollider, RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball4_07_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["07_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function Purple(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/purple.glb") as GLTFResult;
  return (
    <RigidBody colliders={false} restitution={1} position={[-20.6, 1, 3]}>
      <BallCollider args={[1]} />
      <group {...props} dispose={null} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ball4_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
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

useGLTF.preload("/purple.glb");

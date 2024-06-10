import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { BallCollider, RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball6_09_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["09_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function Green(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/green.glb") as GLTFResult;
  return (
    <RigidBody colliders={false} restitution={1} position={[9, 1, 0]}>
      <BallCollider args={[1]} />
      <group {...props} dispose={null} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ball6_09_-_Default_0"].geometry}
          material={materials["09_-_Default"]}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/green.glb");

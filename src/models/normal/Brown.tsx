import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { BallCollider, RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball7_13_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["13_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function Brown(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/brown.glb") as GLTFResult;
  return (
    <RigidBody colliders={false} restitution={1} position={[5, 1, -2]}>
      <BallCollider args={[1]} />
      <group {...props} dispose={null} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ball7_13_-_Default_0"].geometry}
          material={materials["13_-_Default"]}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/brown.glb");

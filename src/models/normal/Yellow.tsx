import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { BallCollider, RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball1_01_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["01_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function YellowBall(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/yellow.glb") as GLTFResult;
  return (
    <RigidBody colliders={false} restitution={1} position={[5, 1, 0]}>
      <BallCollider args={[1]} />
      <group {...props} dispose={null} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ball1_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/yellow.glb");

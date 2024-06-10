import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { BallCollider, RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball10_19_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["19_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function SemiBlue(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/semi_blue.glb") as GLTFResult;
  return (
    <RigidBody colliders={false} restitution={1} position={[-5, 1, 4]}>
      <BallCollider args={[1]} />
      <group {...props} dispose={null} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ball10_19_-_Default_0"].geometry}
          material={materials["19_-_Default"]}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/semi_blue.glb");

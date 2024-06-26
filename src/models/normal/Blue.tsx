import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { BallCollider, RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball2_02_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["02_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function Blue(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/blue.glb") as GLTFResult;
  return (
    <RigidBody
      name="blue"
      colliders={false}
      restitution={0.6}
      friction={0.3}
      linearDamping={0.2}
      angularDamping={0.4}
      position={[-17, 1, 0.9]}
    >
      <BallCollider args={[1]} />
      <group {...props} dispose={null} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ball2_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          rotation={[0, 0, 0]}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/blue.glb");

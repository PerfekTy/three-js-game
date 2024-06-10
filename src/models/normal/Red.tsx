import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { BallCollider, RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball3_03_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["03_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function Red(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/red.glb") as GLTFResult;
  return (
    <RigidBody
      colliders={false}
      restitution={0.6}
      friction={0.3}
      linearDamping={0.2}
      angularDamping={0.4}
      position={[-18.85, 1, 2]}
    >
      <BallCollider args={[1]} />
      <group {...props} dispose={null} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ball3_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
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

useGLTF.preload("/red.glb");

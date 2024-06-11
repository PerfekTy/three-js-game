import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { BallCollider, RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball8_14_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["14_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function Black(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/black.glb") as GLTFResult;
  return (
    <RigidBody
      name="black"
      colliders={false}
      restitution={0.6}
      friction={0.3}
      linearDamping={0.2}
      angularDamping={0.4}
      position={[-18.8, 1, 0]}
    >
      <BallCollider args={[1]} />
      <group {...props} dispose={null} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ball8_14_-_Default_0"].geometry}
          material={materials["14_-_Default"]}
          rotation={[0, 0, 0]}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/black.glb");

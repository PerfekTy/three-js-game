import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { BallCollider, RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball5_08_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["08_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function Orange(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/orange.glb") as GLTFResult;
  return (
    <RigidBody
      name="orange"
      colliders={false}
      restitution={0.6}
      friction={0.3}
      linearDamping={0.2}
      angularDamping={0.4}
      position={[-22.41, 1, -4]}
    >
      <BallCollider args={[1]} />
      <group {...props} dispose={null} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ball5_08_-_Default_0"].geometry}
          material={materials["08_-_Default"]}
          rotation={[0, 0, 0]}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/orange.glb");

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { BallCollider, RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball11_20_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["20_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function SemiRed(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/semi_red.glb") as GLTFResult;
  return (
    <RigidBody
      name="semi_red"
      colliders={false}
      restitution={0.6}
      friction={0.3}
      linearDamping={0.2}
      angularDamping={0.4}
      position={[-20.6, 1, -3]}
    >
      <BallCollider args={[1]} />
      <group {...props} dispose={null} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ball11_20_-_Default_0"].geometry}
          material={materials["20_-_Default"]}
          rotation={[0, 0, 0]}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/semi_red.glb");

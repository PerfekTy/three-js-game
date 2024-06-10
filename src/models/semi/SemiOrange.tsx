import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball13_04_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["04_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function SemiOrange(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/semi_orange.glb") as GLTFResult;
  return (
    <group {...props} dispose={null} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Ball13_04_-_Default_0"].geometry}
        material={materials["04_-_Default"]}
        position={[-0.002, 0, -136.782]}
        rotation={[-2.094, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/semi_orange.glb");

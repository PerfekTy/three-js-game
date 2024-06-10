import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball15_06_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["06_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function SemiBrown(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/semi_brown.glb") as GLTFResult;
  return (
    <group {...props} dispose={null} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Ball15_06_-_Default_0"].geometry}
        material={materials["06_-_Default"]}
        position={[-76.005, 0, -136.782]}
        rotation={[-2.094, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/semi_brown.glb");

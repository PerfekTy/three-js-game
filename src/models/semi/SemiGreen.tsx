import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball14_05_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["05_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function SemiGreen(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/semi_green.glb") as GLTFResult;
  return (
    <group {...props} dispose={null} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Ball14_05_-_Default_0"].geometry}
        material={materials["05_-_Default"]}
        position={[-38.003, 0, -136.782]}
        rotation={[-2.094, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/semi_green.glb");

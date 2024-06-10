import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball9_15_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["15_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function SemiYellow(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/semi_yellow.glb") as GLTFResult;
  return (
    <group {...props} dispose={null} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Ball9_15_-_Default_0"].geometry}
        material={materials["15_-_Default"]}
        position={[-19.724, 0, -101.742]}
        rotation={[-2.094, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/semi_yellow.glb");

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

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
    <group {...props} dispose={null} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Ball8_14_-_Default_0"].geometry}
        material={materials["14_-_Default"]}
        position={[-0.002, 0, -68.332]}
        rotation={[-2.094, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/black.glb");

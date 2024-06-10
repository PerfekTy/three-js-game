import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

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
    <group {...props} dispose={null} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Ball3_03_-_Default_0"].geometry}
        material={materials["03_-_Default"]}
        position={[-19.14, 0, -33.842]}
        rotation={[-2.094, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/red.glb");

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball4_07_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["07_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function Purple(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/purple.glb") as GLTFResult;
  return (
    <group {...props} dispose={null} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Ball4_07_-_Default_0"].geometry}
        material={materials["07_-_Default"]}
        position={[39.998, 0, -68.332]}
        rotation={[-2.094, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/purple.glb");

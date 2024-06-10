import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball6_09_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["09_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function Green(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/green.glb") as GLTFResult;
  return (
    <group {...props} dispose={null} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Ball6_09_-_Default_0"].geometry}
        material={materials["09_-_Default"]}
        position={[57.996, 0, -101.742]}
        rotation={[-2.094, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/green.glb");

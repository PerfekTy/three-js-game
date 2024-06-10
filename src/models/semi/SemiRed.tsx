import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

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
    <group {...props} dispose={null} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Ball11_20_-_Default_0"].geometry}
        material={materials["20_-_Default"]}
        position={[76.282, 0, -136.782]}
        rotation={[-2.094, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/semi_red.glb");

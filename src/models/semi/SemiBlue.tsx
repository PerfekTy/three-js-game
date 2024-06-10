import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball10_19_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["19_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function SemiBlue(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/semi_blue.glb") as GLTFResult;
  return (
    <group {...props} dispose={null} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Ball10_19_-_Default_0"].geometry}
        material={materials["19_-_Default"]}
        position={[-58, 0, -101.742]}
        rotation={[-2.094, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/semi_blue.glb");

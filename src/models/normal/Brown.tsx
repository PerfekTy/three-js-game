import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball7_13_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["13_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function Brown(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/brown.glb") as GLTFResult;
  return (
    <group {...props} dispose={null} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Ball7_13_-_Default_0"].geometry}
        material={materials["13_-_Default"]}
        position={[19.72, 0, -101.742]}
        rotation={[-2.094, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/brown.glb");

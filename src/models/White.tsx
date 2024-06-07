import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Ball_Clube_10_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["10_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function WhiteBall(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/white_ball.glb") as GLTFResult;
  return (
    <group {...props} dispose={null} scale={0.05}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Ball_Clube_10_-_Default_0"].geometry}
        material={materials["10_-_Default"]}
      />
    </group>
  );
}

useGLTF.preload("/white_ball.glb");

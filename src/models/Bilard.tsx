import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube017_Pool_Table_0: THREE.Mesh;
    Cube018_Pool_Table_0: THREE.Mesh;
    Cube024_Pool_Table_0: THREE.Mesh;
    Cube025_Pool_Table_0: THREE.Mesh;
    Cube026_Pool_Table_0: THREE.Mesh;
    Cube028_Pool_Table_0: THREE.Mesh;
    Cylinder033_Pool_Table_0: THREE.Mesh;
    Cylinder036_Pool_Table_0: THREE.Mesh;
    Cylinder037_Pool_Table_0: THREE.Mesh;
    Cylinder039_Pool_Table_0: THREE.Mesh;
    Cylinder040_Pool_Table_0: THREE.Mesh;
    Cylinder041_Pool_Table_0: THREE.Mesh;
    Cylinder042_Pool_Table_0: THREE.Mesh;
    Cylinder043_Pool_Table_0: THREE.Mesh;
    Cylinder044_Pool_Table_0: THREE.Mesh;
    Cylinder045_Pool_Table_0: THREE.Mesh;
    Cylinder046_Pool_Table_0: THREE.Mesh;
    Cylinder047_Pool_Table_0: THREE.Mesh;
    Plane029_Pool_Table_0: THREE.Mesh;
    Plane030_Pool_Table_0: THREE.Mesh;
    Plane031_Pool_Table_0: THREE.Mesh;
    Plane032_Pool_Table_0: THREE.Mesh;
    Plane033_Pool_Table_0: THREE.Mesh;
    Plane034_Pool_Table_0: THREE.Mesh;
    Plane035_Pool_Table_0: THREE.Mesh;
    Plane036_Pool_Table_0: THREE.Mesh;
    Plane037_Pool_Table_0: THREE.Mesh;
    Plane038_Pool_Table_0: THREE.Mesh;
    Plane039_Pool_Table_0: THREE.Mesh;
    Plane040_Pool_Table_0: THREE.Mesh;
    Plane041_Pool_Table_0: THREE.Mesh;
    Plane042_Pool_Table_0: THREE.Mesh;
  };
  materials: {
    Pool_Table: THREE.MeshStandardMaterial;
  };
};

export function Bilard(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/bilard.glb") as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group scale={0.3} position={[0, -25, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_Pool_Table_0.geometry}
          material={materials.Pool_Table}
          position={[0, 177.151, -0.35]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_Pool_Table_0.geometry}
          material={materials.Pool_Table}
          position={[-51.194, 274.24, -0.522]}
          rotation={[1.192, -1.403, -0.374]}
          scale={0.141}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_Pool_Table_0.geometry}
          material={materials.Pool_Table}
          position={[0, 185.604, -0.359]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_Pool_Table_0.geometry}
          material={materials.Pool_Table}
          position={[50.342, 274.404, -0.677]}
          rotation={[1.969, 1.411, 2.748]}
          scale={0.141}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder033_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder036_Pool_Table_0.geometry}
          material={materials.Pool_Table}
          position={[0, 181.615, -5.375]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder037_Pool_Table_0.geometry}
          material={materials.Pool_Table}
          position={[0, 181.615, -0.324]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder039_Pool_Table_0.geometry}
          material={materials.Pool_Table}
          position={[-48.611, 181.676, -0.332]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder040_Pool_Table_0.geometry}
          material={materials.Pool_Table}
          position={[0, 199.525, -0.471]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder041_Pool_Table_0.geometry}
          material={materials.Pool_Table}
          position={[0, 83.087, 0]}
          scale={[0.71, 0.355, 0.71]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042_Pool_Table_0.geometry}
          material={materials.Pool_Table}
          position={[-48.611, 181.676, -5.371]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder043_Pool_Table_0.geometry}
          material={materials.Pool_Table}
          position={[48.608, 181.676, -5.371]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044_Pool_Table_0.geometry}
          material={materials.Pool_Table}
          position={[48.608, 181.676, -0.337]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder045_Pool_Table_0.geometry}
          material={materials.Pool_Table}
          position={[0, 181.615, 5.258]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046_Pool_Table_0.geometry}
          material={materials.Pool_Table}
          position={[-48.611, 181.676, 5.249]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder047_Pool_Table_0.geometry}
          material={materials.Pool_Table}
          position={[48.608, 181.676, 5.245]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane029_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane031_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane034_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane035_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane036_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane037_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane039_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane040_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane041_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane042_Pool_Table_0.geometry}
          material={materials.Pool_Table}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/bilard.glb");

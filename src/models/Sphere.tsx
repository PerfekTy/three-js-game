import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_10: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    material_0: THREE.MeshStandardMaterial;
    emission: THREE.MeshStandardMaterial;
  };
};

export function SphereModel(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF(
    "/geometrynodes_scifi_sphere.glb"
  ) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null} scale={1}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Plane_1">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Material}
                />
                <group name="Plane001_0" scale={0.974}>
                  <mesh
                    name="Object_6"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.material_0}
                  />
                </group>
              </group>
              <group
                name="Plane002_2"
                rotation={[0.927, -0.497, 0.252]}
                scale={0.704}
              >
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="Icosphere_3" scale={0.587}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.emission}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/geometrynodes_scifi_sphere.glb");

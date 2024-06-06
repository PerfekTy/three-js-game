import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Straight_lambert1_0: THREE.Mesh;
  };
  materials: {
    lambert1: THREE.MeshStandardMaterial;
  };
};

export function Tunnel(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF("/trippy_tunnel_v2.glb") as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group
            name="6525d0406c064b13a36f21722a4bc4eafbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="group2" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="group1" position={[0, -6366.196, 0]}>
                    <group
                      name="Straight"
                      position={[0, 6366.196, 0]}
                      rotation={[0, 0, -Math.PI / 2]}
                    >
                      <mesh
                        name="Straight_lambert1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Straight_lambert1_0.geometry}
                        material={materials.lambert1}
                      />
                    </group>
                    <group
                      name="bend1Handle"
                      position={[0, 6366.196, 0]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={20000}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/trippy_tunnel_v2.glb");

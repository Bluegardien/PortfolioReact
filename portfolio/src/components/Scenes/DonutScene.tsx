import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useEffect, type JSX } from 'react';
import * as THREE from 'three';
import { MESH_COLOR } from './constants/meshColor';

function Model(props: JSX.IntrinsicElements['mesh']) {
  const { scene } = useGLTF('/testdonut.glb');
  // Parcours tous les meshes et applique une couleur
  scene.traverse((child: THREE.Object3D) => {
    if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
      ((child as THREE.Mesh).material as THREE.MeshStandardMaterial).color = new THREE.Color(MESH_COLOR); // couleur orange
      ((child as THREE.Mesh).material as THREE.MeshStandardMaterial).needsUpdate = true;
    }
  });
  return <primitive object={scene} {...props} />;
}

function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    // Par exemple, la caméra regarde vers le point (0, 0, 0)
    camera.position.set(1*0.9, 3*0.8, 2*0.8);
    camera.lookAt(new THREE.Vector3(0, 2.5, 0));
  }, [camera]);

  return null; // pas besoin de rien rendre
}

export default function DonutScene() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ alpha: true }}
      style={{ background: 'transparent' }}
      >
        <CameraController />
        <ambientLight />
        <pointLight position={[1, 2.5, 2]} intensity={10} />
        <pointLight position={[0, 2.5, 0]} intensity={1.5} />
        {/* <Box position={[0,2,0]}/> */}
        <Model position={[0, 0, 0]} scale={[2,2,2]} rotation={[0, 0, 0]}/>
    </Canvas>
  );
}

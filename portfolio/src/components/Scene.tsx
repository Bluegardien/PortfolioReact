import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import { useEffect, useRef, type JSX } from 'react';
import * as THREE from 'three';

function Box(props: JSX.IntrinsicElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!);

  return (
    <mesh {...props} ref={meshRef} rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>

  );
}

function Model(props: JSX.IntrinsicElements['mesh']) {
  const { scene } = useGLTF('/testdonut.glb');
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

export default function Scene() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ alpha: true }}
      style={{ background: 'transparent' }}
      >
        <CameraController />
        <ambientLight />
        <pointLight position={[1, 2.5, 2]} intensity={10} />
        <pointLight position={[0, 2.5, 0]} intensity={1} />
        {/* <Box position={[0,2,0]}/> */}
        <Model position={[0, 0, 0]} scale={[2,2,2]} rotation={[0, 0, 0]}/>
        
    </Canvas>
  );
}

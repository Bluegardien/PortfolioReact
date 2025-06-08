import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, type JSX } from 'react';
import * as THREE from 'three';
import { MESH_COLOR } from './constants/meshColor';

function Model(props: JSX.IntrinsicElements['mesh']) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF('/computeranimated.glb')
  scene.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
        ((child as THREE.Mesh).material as THREE.MeshStandardMaterial).color = new THREE.Color(MESH_COLOR); // couleur orange
        ((child as THREE.Mesh).material as THREE.MeshStandardMaterial).needsUpdate = true;
      }
    });
  console.log("Model loaded")
  console.log(animations.length)
  const mixer = useRef<THREE.AnimationMixer | null>(null)

  useEffect(() => {
    if (animations && animations.length && group.current) {
      mixer.current = new THREE.AnimationMixer(group.current)
      const action = mixer.current.clipAction(animations[0])
      action.setLoop(THREE.LoopRepeat, Infinity) // <-- boucle infinie
      action.play()
      return () => animations.forEach(() => mixer.current?.stopAllAction())
    }
  }, [animations])

  useFrame((_state, delta) => {
    mixer.current?.update(delta)
  })

  return <primitive ref={group} object={scene} {...props} />
}

function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    // Par exemple, la caméra regarde vers le point (0, 0, 0)
    camera.position.set(2, 1.75, -1.5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  }, [camera]);

  return null; // pas besoin de rien rendre
}

export default function ComputerScene() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ alpha: true }}
      style={{ background: 'transparent' }}
      >
        <CameraController />
        <ambientLight />
        <pointLight position={[0, 1.7, 1]} intensity={5} />
        {/* <Box position={[0,1.7,1]} scale={[0.3,0.3,0.3]}/> */}
        <Model position={[0, 0, 0]} scale={[2,2,2]} rotation={[0, 0, 0]}/>
        
    </Canvas>
  );
}

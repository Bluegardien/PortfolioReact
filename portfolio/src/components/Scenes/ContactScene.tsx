import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, type JSX } from 'react';
import * as THREE from 'three';
import { MESH_COLOR } from './constants/meshColor';


function Model(props: JSX.IntrinsicElements['mesh']) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF('/Contact.glb')
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
    camera.position.set(2*0.8, 1.5*0.8, 1.5*0.8);
    camera.lookAt(new THREE.Vector3(-1, 1, 0));
  }, [camera]);

  return null; // pas besoin de rien rendre
}

export default function ContactScene() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ alpha: true }}
      style={{ background: 'transparent' }}
      className='w-full h-full'
      >
        <CameraController />
        <ambientLight />
        <pointLight position={[1.5, 2, 2]} intensity={10} />
        {/* <Box position={[0,2,0]}/> */}
        <Model position={[0, 0, 0]} scale={[2,2,2]} rotation={[0, 0, 0]}/>
    </Canvas>
  );
}

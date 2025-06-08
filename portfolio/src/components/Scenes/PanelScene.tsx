import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, type JSX } from 'react';
import * as THREE from 'three';

function SceneImage({ url, ...props }: { url: string } & JSX.IntrinsicElements['mesh']) {
  const texture = useLoader(TextureLoader, url);
  return (
    <mesh {...props}>
      <planeGeometry args={[20, 12]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

function Model(props: JSX.IntrinsicElements['mesh']) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF('/panel3.glb')
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
    camera.position.set(3, 2, 15);
    camera.lookAt(new THREE.Vector3(1, 0, 0));
  }, [camera]);

  return null; // pas besoin de rien rendre
}

export default function PanelScene({ imageUrl }: { imageUrl: string }) {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ alpha: true }}
      style={{ background: 'transparent' }}
      >
        <CameraController />
        <ambientLight />
        <pointLight position={[-10, 4, 10]} intensity={100} />
        <pointLight position={[15, 1, 4]} intensity={60} />
        {/* <Box position={[0,1.7,1]} scale={[0.3,0.3,0.3]}/> */}
        <Model position={[0, 0, 0]} scale={[2,2,2]} rotation={[0, 0, 0]}/>
        <SceneImage position={[0, 0, 1.5]} url={imageUrl}/>
        
    </Canvas>
  );
}

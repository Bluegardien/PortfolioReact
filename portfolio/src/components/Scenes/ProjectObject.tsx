import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useGLTF } from '@react-three/drei';
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
function SceneImage({ url, ...props }: { url: string } & JSX.IntrinsicElements['mesh']) {
  const texture = useLoader(TextureLoader, url);
  return (
    <mesh {...props}>
      <planeGeometry args={[20, 12]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

function Model({ objName, ...props }: { objName: string } & JSX.IntrinsicElements['mesh']) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF(`/${objName}.glb`)
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

  useFrame((state, delta) => {
    mixer.current?.update(delta)
  })

  return <primitive ref={group} object={scene} {...props} />
}

function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    // Par exemple, la caméra regarde vers le point (0, 0, 0)
    camera.position.set(0, 3, 5);
    camera.lookAt(new THREE.Vector3(0, 2, 0));
  }, [camera]);

  return null; // pas besoin de rien rendre
}

export default function ProjectObject({ objName }: { objName: string }) {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ alpha: true }}
      style={{ background: 'transparent' }}
      >
        <CameraController/>
        <ambientLight/>
        <pointLight position={[0, 4, 0]} intensity={20}/>
         <pointLight position={[0, 2, 3]} intensity={20}/>
        {/* <Box position={[0,1.7,1]} scale={[0.3,0.3,0.3]}/> */}
        <Model position={[0, 0, 0]} scale={[2,2,2]} rotation={[0, 0, 0]} objName={objName}/>
        
    </Canvas>
  );
}

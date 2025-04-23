import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Float,
  OrbitControls,
  Preload,
  useGLTF
} from '@react-three/drei'
import CanvasLoader from '../Loader'

const Guitar = ({ isMobile }) => {
  const { scene } = useGLTF('/guitar/ImageToStl.com_redguitar3d.stl.glb')

  return (
    <Float
      speed={1.75}            // how fast the rotation runs
      rotationIntensity={1}   // how strong that spin is
      floatIntensity={0}      // ZERO vertical bobbing
    >
      {/* your lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />

      {/* the model */}
      <primitive
        object={scene}
        scale={isMobile ? 1 : 1.5}
        position={[0, -1, 0]}
        rotation={[0, 0, 0]}
      />
    </Float>
  )
}

const GuitarCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 500px)')
    setIsMobile(mq.matches)
    mq.addEventListener('change', (e) => setIsMobile(e.matches))
    return () => mq.removeEventListener('change', () => {})
  }, [])

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [5, 2, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Guitar isMobile={isMobile} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          // no polar limits → full 360° drag
        />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default GuitarCanvas

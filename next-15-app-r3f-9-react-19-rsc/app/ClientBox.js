'use client'

import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as TSL from 'three/tsl'

export function ClientBox(props) {
  const meshRef = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const { gl } = useThree()

  useFrame((state, delta) => (meshRef.current.rotation.x += delta))

  console.log(gl)
  console.log(TSL.sqrt(2))

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

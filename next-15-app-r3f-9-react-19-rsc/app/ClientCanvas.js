'use client'

import { Canvas } from '@react-three/fiber'
import { WebGPURenderer } from 'three/webgpu'

export function ClientCanvas({ children }) {
  return (
    <Canvas
      style={{ height: '100vh' }}
      gl={canvas => {
        const renderer = new WebGPURenderer({ canvas })
        renderer.xr = { addEventListener: () => {} }
        return renderer
      }}
    >
      {children}
    </Canvas>
  )
}

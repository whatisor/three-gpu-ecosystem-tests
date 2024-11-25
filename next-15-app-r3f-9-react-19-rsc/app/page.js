import React from 'react'

import Box from './Box'
import { ClientCanvas } from './ClientCanvas'

export default function IndexPage() {
  return (
    <ClientCanvas>
      {/* <OrbitControls /> */}
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </ClientCanvas>
  )
}

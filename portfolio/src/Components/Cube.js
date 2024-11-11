// Cube.js
import React, { Component } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

class Cube extends Component {
  render() {
    return (
      <Canvas style={{ width: '100%', height: '100vh' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <mesh rotation={[10, 10, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="royalblue" />
        </mesh>
        <OrbitControls />
      </Canvas>
    );
  }
}

export default Cube;
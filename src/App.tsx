import { OrbitControls, softShadows } from '@react-three/drei'
import { Canvas, RootState } from '@react-three/fiber'
import { Suspense } from 'react'
import './App.css'
import Grave from './components/Grave/Index'
import House from './components/House/Index'
import Plane from './components/Plane/Index'
import { Model } from './components/Tree'
import Trees from './components/Trees'
import * as THREE from 'three'
import Fence from './components/Fence/Index'
import GhostAwaken from './components/Ghost/Index'


function App() {

softShadows()


  return (
    <Suspense fallback={<div style={{
      height: '100vh',
      display: 'grid',
      placeItems: 'center',
      color: 'whitesmoke',
      backgroundColor: 'black'
    }}>Loading...please wait</div>}>
      <Canvas 
      onCreated={(state: RootState) => {
        state.gl.setClearColor('#455A64')
        state.scene.fog = new THREE.Fog('#455A64', 1, 20)
      }}
      id='webgl'
      camera={{
        position: [0, 9, -18]
      }}
      shadows
      > 
      <OrbitControls />
      <Plane />
      <House />
      {
        Array.apply(null, Array(50)).map((_, index) => {
          const angle = Math.random() * Math.PI * 2
          const radius = 4 + Math.random() * 5

          return (
            <Grave key={index} position={[Math.cos(angle) * radius, 0.7 / 2,   Math.sin(angle) * radius]}  rotation={[0, Math.random() - 0.5 , 0]}/>
          )
        })
      }
      {/* <Model scale={0.017} position={[6, 0, 0]} /> */}
      {/* <Trees scale={0.015} position={[0, 0, 9]} /> */}
      <Fence />
      <ambientLight  intensity={0.15} color={'#1E88E5'}/>
      <directionalLight intensity={0.3} color={'#1E88E5'} position={[4, 1, 0]}/>
      <GhostAwaken />
      </Canvas>
    </Suspense>
  )
}

export default App

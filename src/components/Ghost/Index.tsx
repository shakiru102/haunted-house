
import { RootState, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group } from 'three'
import Scary from '../Scary'
import GhostPointLight from './components/GhostPointLight'

const GhostAwaken = () => {

const ghostRef =  useRef<Group>(null)
const ghostRef2 =  useRef<Group>(null)
const ghostRef3 =  useRef<Group>(null)
const ghostRef4 =  useRef<Group>(null)

    useFrame((state: RootState) => {
        if(ghostRef.current && ghostRef2.current && ghostRef3.current && ghostRef4.current ) {
            const elapsetime = state.clock.getElapsedTime() 
            const radius = Math.random() * 10
            ghostRef.current.position.y = Math.sin(elapsetime * 2) * 0.25 + 0.2
            ghostRef.current.position.z = Math.sin(- elapsetime * 0.1) * 5
            ghostRef.current.position.x = Math.cos(- elapsetime * 0.1) * 5
            ghostRef.current.rotation.y = Math.sin( elapsetime * 0.1 ) * - Math.PI  

            ghostRef2.current.position.y = - Math.sin(elapsetime * 2) * 0.25 + 0.2
            ghostRef2.current.position.z = - Math.sin(elapsetime * 0.1) * 7
            ghostRef2.current.position.x = - Math.cos(elapsetime * 0.1) * 7
            ghostRef2.current.rotation.y = - Math.sin(- elapsetime * 0.1 ) *  Math.PI * 0.25 

            ghostRef3.current.position.y = - Math.sin(elapsetime * 2) * 0.25 + 0.2
            ghostRef3.current.position.z =  Math.sin(elapsetime * 0.1) * 9
            ghostRef3.current.position.x =  Math.cos(elapsetime * 0.1) * 9
            ghostRef3.current.rotation.y = - Math.sin(- elapsetime * 0.1 ) *  Math.PI * 0.5 

            ghostRef4.current.position.y = - Math.sin(elapsetime * 2) * 0.25 + 0.2
            ghostRef4.current.position.z =  Math.sin(elapsetime * 0.1) * 8
            ghostRef4.current.position.x = - Math.cos(elapsetime * 0.1) * 8
            ghostRef4.current.rotation.y =  Math.sin(- elapsetime * 0.05 ) *  Math.PI * 2 
            
        }
        

    })
   


  return (
   <>
    <group ref={ghostRef}>
      <Scary  scale={0.002}   position={[0, 0.4, 4]} />
      <GhostPointLight color='green' />
    </group>
    <group ref={ghostRef2}>
      <Scary  scale={0.002}   position={[0, 0.4, 4]} />
      <GhostPointLight color='#AB47BC'/>
    </group>
    <group ref={ghostRef3}>
      <Scary  scale={0.002}   position={[0, 0.4, 4]} />
      <GhostPointLight color='#D32F2F' />
    </group>
    <group ref={ghostRef4}>
      <Scary  scale={0.002}   position={[0, 0.4, 4]} />
      <GhostPointLight  color='#0277BD'/>
    </group>
   </>
  )
}

export default GhostAwaken
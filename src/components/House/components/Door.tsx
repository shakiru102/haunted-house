import DoorBaseColor from '../../../assets/images/Door_Wood_001_SD/Door_Wood_001_basecolor.jpg'
import DoorAmbientOcclusion from '../../../assets/images/Door_Wood_001_SD/Door_Wood_001_ambientOcclusion.jpg'
import DoorDisplacement from '../../../assets/images/Door_Wood_001_SD/Door_Wood_001_height.png'
import DoorMetallic from '../../../assets/images/Door_Wood_001_SD/Door_Wood_001_metallic.jpg'
import DoorNormal from '../../../assets/images/Door_Wood_001_SD/Door_Wood_001_normal.jpg'
import DoorAplha from '../../../assets/images/Door_Wood_001_SD/Door_Wood_001_opacity.jpg'
import DoorRoughness from '../../../assets/images/Door_Wood_001_SD/Door_Wood_001_roughness.jpg'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useLayoutEffect, useRef } from 'react'
import { Mesh } from 'three'

const Door = () => {

    const doorMesh = useRef<Mesh>()

    const [
        BaseColor,
        AmbientOcclusion,
        Displacement,
        Normal,
        Metallic,
        Roughness, 
        Aplha
    ] = useLoader(THREE.TextureLoader, [
     DoorBaseColor,
     DoorAmbientOcclusion,
     DoorDisplacement,
     DoorNormal,
     DoorMetallic,
     DoorRoughness, 
     DoorAplha
    ])

    useLayoutEffect(() => {
        if(doorMesh.current){
            doorMesh.current.geometry.setAttribute(
                'uv2', 
                new THREE.Float32BufferAttribute(doorMesh.current.geometry.attributes.uv.array, 2)
                )
        }
    } ,[doorMesh.current])

  return (
  // @ts-ignore
  <mesh ref={doorMesh} rotation={[0, - Math.PI , 0]} position={[0, 2.5 / 2, -2.5]}>
        <planeGeometry  args={[3, 2.7, 50, 50]}/>
        <meshStandardMaterial 
        map={BaseColor}
        transparent
        alphaMap={Aplha}
        displacementMap={Displacement}
        displacementScale={0.15}
        aoMap={AmbientOcclusion}
        normalMap={Normal}
        metalnessMap={Metallic}
        roughnessMap={Roughness}
        />
    </mesh>
  )
}

export default Door
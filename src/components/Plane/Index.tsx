import * as THREE from 'three'
import GroundBaseColor from '../../assets/images/Grass_005_SD/Grass_005_BaseColor.jpg'
import GroundAmbientOcclusion from '../../assets/images/Grass_005_SD/Grass_005_AmbientOcclusion.jpg'
import GroundHeight from '../../assets/images/Grass_005_SD/Grass_005_Height.png'
import GroundNormal from '../../assets/images/Grass_005_SD/Grass_005_Normal.jpg'
import GroundRoughness from '../../assets/images/Grass_005_SD/Grass_005_Roughness.jpg'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { Mesh } from 'three'
import { useLoader } from '@react-three/fiber'


const Plane = () => {
 
    const groundMesh = useRef<Mesh>()
    const [
        BaseColor,
        AmbientOcclusion,
        Height,
        Normal,
        Roughness
    ] = useLoader(THREE.TextureLoader, [
        GroundBaseColor,
        GroundAmbientOcclusion,
        GroundHeight,
        GroundNormal,
        GroundRoughness
    ])

        BaseColor.repeat.set(8, 8)
        AmbientOcclusion.repeat.set(8, 8)
        Height.repeat.set(8, 8)
        Normal.repeat.set(8, 8)
        Roughness.repeat.set(8, 8)

        BaseColor.wrapS = THREE.RepeatWrapping
        AmbientOcclusion.wrapS = THREE.RepeatWrapping
        Height.wrapS = THREE.RepeatWrapping
        Normal.wrapS = THREE.RepeatWrapping
        Roughness.wrapS = THREE.RepeatWrapping

        BaseColor.wrapT = THREE.RepeatWrapping
        AmbientOcclusion.wrapT = THREE.RepeatWrapping
        Height.wrapT = THREE.RepeatWrapping
        Normal.wrapT = THREE.RepeatWrapping
        Roughness.wrapT = THREE.RepeatWrapping

    useLayoutEffect(() =>  {
      if(groundMesh.current){
        BaseColor.repeat.set(8, 8)
        AmbientOcclusion.repeat.set(8, 8)
        Height.repeat.set(8, 8)
        Normal.repeat.set(8, 8)
        Roughness.repeat.set(8, 8)

        BaseColor.wrapS = THREE.RepeatWrapping
        AmbientOcclusion.wrapS = THREE.RepeatWrapping
        Height.wrapS = THREE.RepeatWrapping
        Normal.wrapS = THREE.RepeatWrapping
        Roughness.wrapS = THREE.RepeatWrapping

        BaseColor.wrapT = THREE.RepeatWrapping
        AmbientOcclusion.wrapT = THREE.RepeatWrapping
        Height.wrapT = THREE.RepeatWrapping
        Normal.wrapT = THREE.RepeatWrapping
        Roughness.wrapT = THREE.RepeatWrapping
        
        groundMesh.current.geometry.setAttribute(
            'uv2',
            new THREE.Float32BufferAttribute(groundMesh.current.geometry.attributes.uv.array, 2)
        )

      }
    },[groundMesh.current])
    
  return (
     <mesh receiveShadow rotation={[- Math.PI * 0.5, 0, 0]}>
        <planeGeometry  args={[25, 25, 50, 50]}/>
        <meshStandardMaterial 
         map={BaseColor}
         aoMap={AmbientOcclusion}
         displacementMap={Height}
         displacementScale={0.15}
         normalMap={Normal}
         roughnessMap={Roughness}
        />
     </mesh>
  )
}

export default Plane
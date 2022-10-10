import RoofBaseColor from '../../../assets/images/Roof_Tiles_Terracotta_007_SD/Roof_Tiles_Terracotta_007_basecolor.jpg'
import RoofAmbientOcclusion from '../../../assets/images/Roof_Tiles_Terracotta_007_SD/Roof_Tiles_Terracotta_007_ambientOcclusion.jpg'
import RoofDisplacement from '../../../assets/images/Roof_Tiles_Terracotta_007_SD/Roof_Tiles_Terracotta_007_height.png'
import RoofNormal from '../../../assets/images/Roof_Tiles_Terracotta_007_SD/Roof_Tiles_Terracotta_007_normal.jpg'
import RoofRoughness from '../../../assets/images/Roof_Tiles_Terracotta_007_SD/Roof_Tiles_Terracotta_007_roughness.jpg'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useLayoutEffect, useRef } from 'react'
import { Mesh } from 'three'

const Roof = () => {
  
    const roofMesh = useRef<Mesh>()
    const [
        BaseColor,
        AmbientOcclusion,
        Displacement,
        Normal,
        Roughness
    ] = useLoader(THREE.TextureLoader, [
        RoofBaseColor,
        RoofAmbientOcclusion,
        RoofDisplacement,
        RoofNormal,
        RoofRoughness
    ])

   useLayoutEffect(() => {
    if(roofMesh.current) {
       roofMesh.current.geometry.setAttribute(
        'uv2',
        new THREE.Float32BufferAttribute(
            roofMesh.current.geometry.attributes.uv.array,
            2
        )
       )
    }
   }, [roofMesh.current])

  return (
  // @ts-ignore
  <mesh ref={roofMesh} rotation={[0, Math.PI * 0.25, 0]} position={[0, 4, 0]}>
        <coneGeometry  args={[4, 2, 4, 10]}/>
        <meshStandardMaterial 
        map={BaseColor}
       aoMap={AmbientOcclusion}
       normalMap={Normal}
       roughnessMap={Roughness}
       displacementMap={Displacement}
       displacementScale={0.1}
        />
    </mesh>
  )
}

export default Roof
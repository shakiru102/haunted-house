import WallBaseColor from '../../../assets/images/Brick_Wall_018_SD/Brick_Wall_018_basecolor.jpg'
import WallAmbientOcclusion from '../../../assets/images/Brick_Wall_018_SD/Brick_Wall_018_ambientOcclusion.jpg'
import WallDisplacement from '../../../assets/images/Brick_Wall_018_SD/Brick_Wall_018_height.png'
import WallNormal from '../../../assets/images/Brick_Wall_018_SD/Brick_Wall_018_normal.jpg'
import WallRoughness from '../../../assets/images/Brick_Wall_018_SD/Brick_Wall_018_roughness.jpg'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useLayoutEffect, useRef } from 'react'
import { Mesh } from 'three'


const Wall = () => {
  
    const wallMesh = useRef<Mesh>()

    const [
        BaseColor,
        AmbientOcclusion,
        Displacement,
        Normal,
        Roughness
    ] = useLoader(THREE.TextureLoader, [
        WallBaseColor,
        WallAmbientOcclusion,
        WallDisplacement,
        WallNormal,
        WallRoughness
    ])

    useLayoutEffect(() => {
        if(wallMesh.current){
            wallMesh.current.geometry.setAttribute(
                'uv2', 
                new THREE.Float32BufferAttribute(wallMesh.current.geometry.attributes.uv.array, 2)
            )
        }
    }, [wallMesh.current])

  return (
    <mesh position={[0, 3 / 2, 0]}>
        <boxGeometry args={[5, 3, 5]}/>
        <meshStandardMaterial 
        map={BaseColor}
        aoMap={AmbientOcclusion}
        displacementMap={Displacement}
        displacementScale={0}
        normalMap={Normal}
        roughnessMap={Roughness}
        />
    </mesh>
  )
}

export default Wall
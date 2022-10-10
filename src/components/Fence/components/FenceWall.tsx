import { Euler, Vector3 } from "@react-three/fiber"
import { FC } from "react";
import FenceBaseColor from '../../../assets/images/Brick_Wall_019_SD/Brick_Wall_019_basecolor.jpg'
import FenceAmbientOcclusion from '../../../assets/images/Brick_Wall_019_SD/Brick_Wall_019_ambientOcclusion.jpg'
import FenceDisplacement from '../../../assets/images/Brick_Wall_019_SD/Brick_Wall_019_height.png'
import FenceNormal from '../../../assets/images/Brick_Wall_019_SD/Brick_Wall_019_normal.jpg'
import FenceRoughness from '../../../assets/images/Brick_Wall_019_SD/Brick_Wall_019_roughness.jpg'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useLayoutEffect, useRef } from 'react'
import { Mesh } from 'three'

interface IFenceWall {
  position?: Vector3;
  rotation?: Euler;
  args?:any
}

const FenceWall: FC<IFenceWall> = ({
    args,
    position,
    rotation
}) => {

  const fenceMesh = useRef<Mesh>()

    const [
        BaseColor,
        AmbientOcclusion,
        Displacement,
        Normal,
        Roughness
    ] = useLoader(THREE.TextureLoader, [
        FenceBaseColor,
        FenceAmbientOcclusion,
        FenceDisplacement,
        FenceNormal,
        FenceRoughness
    ])
   
    


    useLayoutEffect(() => {
      if(fenceMesh.current){
          fenceMesh.current.geometry.setAttribute(
              'uv2', 
              new THREE.Float32BufferAttribute(fenceMesh.current.geometry.attributes.uv.array, 2)
          )
      }
  }, [fenceMesh.current])

  return (
  // @ts-ignore
  <mesh ref={fenceMesh} position={position} rotation={rotation}>
        <boxGeometry args={args} />
        <meshStandardMaterial
        map={BaseColor}
        aoMap={AmbientOcclusion}
        normalMap={Normal}
        roughnessMap={Roughness}
        displacementMap={Displacement}
        displacementScale={0.01}
        />
    </mesh>
  )
}

export default FenceWall
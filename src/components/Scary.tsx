/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Akshat (https://sketchfab.com/shooter24994)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/scary-halloween-ghost-83e1b918dbda4a78a14b0278ab38a089
title: Scary Halloween Ghost
*/

import * as THREE from 'three'
import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Mesh } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder_Material_0: THREE.Mesh
    Cylinder002_Material002_0: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
  }
}


export default function Model(props: JSX.IntrinsicElements['group']) {
  // @ts-ignore
  const { nodes, materials } = useGLTF('/scary.gltf') as GLTFResult

  const ghostMesh = useRef<Mesh>()
  useLayoutEffect(() => {
    if(ghostMesh.current) {
  // @ts-ignore
  ghostMesh.current.material.transparent = true
  // @ts-ignore
  ghostMesh.current.material.opacity = 0.2
    }
  }, [ghostMesh.current])

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
  {/* @ts-ignore */}
            <mesh ref={ghostMesh} geometry={nodes.Cylinder_Material_0.geometry} material={materials.Material} />
          </group>
          <group position={[6.7, 13.03, 0.82]} rotation={[-Math.PI / 2, 0, 0]} scale={87.31}>
            {/* <mesh geometry={nodes.Cylinder002_Material002_0.geometry} material={materials['Material.002']} /> */}
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scary.gltf')

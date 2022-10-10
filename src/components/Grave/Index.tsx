import { Euler, Vector3 } from "@react-three/fiber";
import { FC } from "react"

interface IGrave {
    position: Vector3;
    rotation: Euler;
}

const Grave: FC<IGrave> = ({
    position,
    rotation,
}) => {
  return (
    <mesh castShadow  position={position} rotation={rotation}>
        <boxGeometry args={[0.5, 0.7, 0.1 ]} />
        <meshStandardMaterial color={'#616161'}/>
    </mesh>
  )
}

export default Grave
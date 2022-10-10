import FenceWall from './components/FenceWall'
import Gate from '../Gate'

const Fence = () => {
  return (
    <group>
        <FenceWall position={[0, 1, 12.25]} args={[25, 2, 0.3]} />
        <FenceWall rotation={[0, Math.PI * 0.5, 0]} position={[12.25, 1, 0]} args={[24.7, 2, 0.3]} />
        <FenceWall rotation={[0, Math.PI * 0.5, 0]} position={[-12.25, 1, 0]} args={[24.7, 2, 0.3]} />
        <FenceWall position={[-7.5, 1, -12.25]} args={[9.8, 2, 0.3]} />
        <FenceWall position={[7.5, 1, -12.25]} args={[9.8, 2, 0.3]} />
        <Gate position={[0, 0, -12.25]} />
    </group>
  )
}

export default Fence
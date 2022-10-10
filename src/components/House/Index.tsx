import Door from './components/Door'
import Roof from './components/Roof'
import Wall from './components/Wall'

const House = () => {
  return (
    <group >
        <Wall />
        <Roof />
        <Door />
        <pointLight  castShadow args={['#FDD835', 1, 5]} position={[0.5, 2, -4]} />
    </group>
  )
}

export default House
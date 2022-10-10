import { FC } from "react"

const GhostPointLight: FC<{color: string}> = ({
    color
}) => {
  return (
    <pointLight castShadow args={[color, 1, 3 ]} position={[0, 0.4, 4.5]}/>
  )
}

export default GhostPointLight
import { Plane } from "@react-three/drei";

const Floor = () => {
  return (
    <Plane
      args={[200, 100]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -8.5, 0]}
      receiveShadow
    >
      <meshStandardMaterial
        color="#e5e7eb"
        roughness={1}
        metalness={1}
      />
    </Plane>
  );
};

export default Floor;

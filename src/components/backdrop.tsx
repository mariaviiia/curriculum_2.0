import { Plane } from "@react-three/drei";
import { LayerMaterial, Gradient } from "lamina";

const Backdrop = () => {
  return (
    <Plane
      args={[100, 200]}
      position={[0, 0, -27]}
      rotation={[0, 0, -29.84]}
    >
      <LayerMaterial>
        <Gradient
          colorA="#284379ff"
          colorB="#5378afff"
          axis="y"
          start={36}
          end={-11}
        />
      </LayerMaterial>
    </Plane>
  );
};

export default Backdrop;

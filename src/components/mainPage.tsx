import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import Laptop from "./laptop";
import * as THREE from "three";
import Backdrop from "./backdrop";
import Floor from "./floor";

interface Props {
  onEnter: () => void;
}

const MainPage: React.FC<Props> = ({ onEnter }) => {
  const { camera } = useThree();
  const [zooming, setZooming] = useState(false);
  const zoomProgress = useRef(0);
  const screenCenter = new THREE.Vector3(0, 0.65, -10.3);
  const zoomTarget = new THREE.Vector3(
    screenCenter.x,
    screenCenter.y + 0.4,
    screenCenter.z + 3.5
  );

  useFrame(() => {
    if (!zooming) return;

    camera.position.lerp(zoomTarget, 0.06);
    camera.lookAt(screenCenter);

    zoomProgress.current = Math.min(zoomProgress.current + 0.035, 2);

    if (zoomProgress.current >= 1) {
      onEnter();
    }
  });

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={0.5} castShadow />
      <directionalLight position={[0.5, 2, 1]} intensity={0.6} />
      <directionalLight position={[2, 6, -8]} intensity={0.4} />
      <Backdrop />
      <Floor />
      <Laptop
        onClick={() => setZooming(true)}
        position={[0, -9, -15]}
        zooming={zooming}
        zoomProgress={zoomProgress.current}
      />
    </>
  );
};

export default MainPage;

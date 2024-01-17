import useMedia from "@/hooks/useMedia";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

interface BeanProps {
  z: number;
}

const Beans = ({ z, ...props }: BeanProps) => {
  const ref = useRef<THREE.Mesh>();
  const isMobile = useMedia("(max-width: 400px)");

  const { nodes, materials } = useGLTF(
    "./models/coffee_bean/coffee_bean-transformed.glb"
  );

  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  const [positions] = useState({
    x: THREE?.MathUtils?.randFloatSpread(1),
    y: THREE?.MathUtils?.randFloatSpread(height),
    rx: Math.random() * Math.PI,
    ry: Math.random() * Math.PI,
    rz: Math.random() * Math.PI,
  });

  useFrame((state) => {
    if (ref.current?.position) {
      ref.current.rotation.set(
        (positions.rx += 0.01),
        (positions.ry += 0.04),
        (positions.rz += 0.05)
      );
      ref.current!.position.set(
        positions?.x * width,
        (positions.y += isMobile ? 0.05 : 0.1),
        z
      );
      if (positions.y > height / 1.25) {
        positions.y = -height / 1.25;
      }
    }
  });

  return (
    <mesh
      ref={ref}
      scale={0.8}
      geometry={nodes.Object_2.geometry}
      material={materials.Coffee_DM_01_01}
      rotation={[-Math.PI / 2, 0, 0]}
      material-emissive="#29331b"
    />
  );
};

export default Beans;

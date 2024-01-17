"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";
import Beans from "./Beans";

const HeroCanvas = () => {
  const depth = 60;

  return (
    <div className="w-[100vw] h-[100vh]  relative">
      <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110, fov: 65 }}>
        <color attach="background" args={["#fcf0da"]} />
        <spotLight position={[10, 10, 10]} intensity={1} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          {Array.from({ length: 10 }, (_, i) => (
            <Beans key={i} z={(-(i / 10) * depth) / 2} />
          ))}
          <Environment preset="forest" />
          <EffectComposer>
            <DepthOfField
              target={[0, 0, depth / 2]}
              focalLength={0.8}
              bokehScale={10}
              height={700}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;

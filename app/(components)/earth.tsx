"use client";
import React from "react";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/earth/scene.gltf");
  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive object={gltf.scene} scale={0.03} />
    </>
  );
};

export default function Earth() {
  return (
    <div className="globe">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [10, 0, 2], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Suspense fallback={null}>
          <Model />
          {/* To add environment effect to the model */}
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          autoRotate
          addEventListener={undefined}
          hasEventListener={undefined}
          removeEventListener={undefined}
          dispatchEvent={undefined}
        />
      </Canvas>
    </div>
  );
}

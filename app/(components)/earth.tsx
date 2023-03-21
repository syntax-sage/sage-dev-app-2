"use client";
import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/earth2/scene.gltf");
  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive object={gltf.scene} scale={0.01} />
    </>
  );
};

export default function Earth() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(
    function mount() {
      const updateDimension = () => {
        setScreenSize(getCurrentDimension());
      };
      window.addEventListener("resize", updateDimension);

      return function unmount() {
        window.removeEventListener("resize", updateDimension);
      };
    },
    [screenSize]
  );

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  let FOV = 0;

  if (screenSize.width <= 1024) {
    FOV = 1.5;
  } else {
    FOV = 1;
  }

  return (
    <div className="globe">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 2], fov: FOV }}>
        <ambientLight intensity={0.2} />
        <spotLight
          intensity={0.3}
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
          autoRotateSpeed={0.5}
          addEventListener={undefined}
          hasEventListener={undefined}
          removeEventListener={undefined}
          dispatchEvent={undefined}
        />
      </Canvas>
    </div>
  );
}

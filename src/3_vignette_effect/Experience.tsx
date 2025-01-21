import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { type Mesh } from "three";

import { OrbitControls, Stage } from "@react-three/drei";

import { Perf } from "r3f-perf";

import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

// import { useControls } from "leva";

export function Experience() {
  // const someControls = useControls("_", { test: 1 });

  const cubeRef = useRef<Mesh>(null);
  const sphereRef = useRef<Mesh>(null);

  /* useFrame((state, delta) => {
    // const elapsed: number = state.clock.getElapsedTime();

    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta;
    }
  }); */

  console.log({ sphereRef });

  return (
    <>
      {/* -------------------------------------------- */}
      {/* -------------------------------------------- */}
      <EffectComposer
      // keeping default 8 for multisampling (antialiasing stear look prevention)
      // multisampling={0}
      >
        <Vignette
          offset={0.3}
          darkness={0.9}
          eskil={false}
          // blendFunction={BlendFunction.COLOR_BURN}
          // blendFunction={BlendFunction.PIN_LIGHT}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>
      {/* -------------------------------------------- */}
      {/* -------------------------------------------- */}

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* ---------------------------------- */}
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      {/* ---------------------------------- */}

      {/* CUBE */}

      <mesh position={[2, 0, 0]} ref={cubeRef} scale={1.5} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      {/* SPHERE */}
      <mesh position={[-2, 0, 0]} ref={sphereRef} castShadow>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial args={[{ color: "orange" }]} />
      </mesh>
      {/* FLOOR */}
      <mesh
        receiveShadow
        rotation={[-Math.PI * 0.5, 0, 0]}
        scale={10}
        position-y={-1}
        // visible={false}
      >
        <planeGeometry />
        <meshStandardMaterial args={[{ color: "greenyellow" }]} />
      </mesh>

      {/* ---------------------------------------------------- */}
    </>
  );
}

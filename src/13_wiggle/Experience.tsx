import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";

import { type Mesh } from "three";

import { OrbitControls /* , Stage  */ } from "@react-three/drei";

import { Perf } from "r3f-perf";

import {
  EffectComposer,
  // Vignette,
  // Glitch,
  // Noise,
  // Bloom,
  // DepthOfField,
} from "@react-three/postprocessing";
/* import {
  BlendFunction,
  GlitchMode,
  BlurPass,
  Resizer,
  KernelSize,
  Resolution,
  MipmapBlurPass,
} from "postprocessing"; */

// import { useControls } from "leva";

import { Drunk } from "./drunk_effect/Drunk";
import type { DrunkEffect } from "./drunk_effect/DrunkEffect";

export function Experience() {
  // const someControls = useControls("_", { test: 1 });
  const cubeRef = useRef<Mesh>(null);
  const sphereRef = useRef<Mesh>(null);

  const drunkEffectRef = useRef<DrunkEffect>(null);

  /* useFrame((state, delta) => {
    // const elapsed: number = state.clock.getElapsedTime();

    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta;
    }
  }); */

  console.log({ drunkEffectRef });

  return (
    <>
      {/* -------------------------------------------- */}
      {/* -------------------------------------------- */}
      {/* -------------------------------------------- */}
      <EffectComposer
      // keeping default 8 for multisampling (antialiasing stear look prevention)
      // multisampling={0}
      >
        <Drunk
          //
          ref={drunkEffectRef}
          frequency={2}
          //
          amplitude={0.1}
        />
      </EffectComposer>
      {/* -------------------------------------------- */}
      {/* -------------------------------------------- */}
      {/* -------------------------------------------- */}

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* ---------------------------------- */}
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      {/* ---------------------------------- */}

      {/* CUBE */}

      <mesh position={[2, 0, 0]} ref={cubeRef} scale={1.5}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="mediumpurple"
          // color={[5.8 * 10, 3.2, 2.4 * 10]}
          // toneMapped={false}
        />
      </mesh>
      {/* SPHERE */}
      <mesh position={[-2, 0, 0]} ref={sphereRef}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          // emissive={"orange"}
          // emissiveIntensity={9}
          args={[{ color: "orange" }]}
        />
      </mesh>
      {/* FLOOR */}
      <mesh
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

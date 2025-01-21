import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { type Mesh } from "three";

import { OrbitControls, Stage } from "@react-three/drei";

import { Perf } from "r3f-perf";

import {
  EffectComposer,
  Vignette,
  Glitch,
  Noise,
  Bloom,
} from "@react-three/postprocessing";
import {
  BlendFunction,
  GlitchMode,
  BlurPass,
  Resizer,
  KernelSize,
  Resolution,
  MipmapBlurPass,
} from "postprocessing";

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
        {/* <Vignette
          offset={0.3}
          darkness={0.9}
          eskil={false}
          blendFunction={BlendFunction.NORMAL}
        /> 
        <Glitch
          delay={[0.5, 1]}
          duration={[0.1, 0.3]}
          strength={[0.2, 0.4]}
          mode={GlitchMode.SPORADIC}
          active
          ratio={0.85}
        />
        <Noise
          premultiply
          // blendFunction={BlendFunction.ADD}
          // blendFunction={BlendFunction.SOFT_LIGHT}
          // this looks like an old tv
          blendFunction={BlendFunction.LUMINOSITY}
        />
        */}

        <Bloom
          //
          // test props with darker background
          //
          intensity={0.2} // The bloom intensity.
          mipmapBlur
          //
          // luminanceThreshold={0} // default 0.9
          luminanceThreshold={0.1}
          // there is more props
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

      <mesh position={[2, 0, 0]} ref={cubeRef} scale={1.5}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          // color="mediumpurple"
          // if you want stronger glow you increse these values
          // we multiply some of them bty 10
          color={[5.8 * 10, 3.2, 2.4 * 10]}
          toneMapped={false}
        />
      </mesh>
      {/* SPHERE */}
      <mesh position={[-2, 0, 0]} ref={sphereRef}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          args={[{ color: "orange" }]}
          emissive={"orange"}
          emissiveIntensity={9}
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

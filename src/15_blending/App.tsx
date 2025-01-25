import { Canvas, type RootState } from "@react-three/fiber";
import { Experience } from "./Experience";
import {
  CineonToneMapping,
  Color,
  // ReinhardToneMapping,
  // ACESFilmicToneMapping,
  // SRGBColorSpace,
  // LinearSRGBColorSpace,
} from "three";
import { Leva } from "leva";

export function App() {
  return (
    <>
      <Leva />
      <Canvas
        // onCreated={created}
        // dpr={[1, 2]}
        // flat

        gl={{
          alpha: true,
          //     // antialias: true,
          //     // toneMapping: CineonToneMapping,
          //     // outputColorSpace: SRGBColorSpace,
          //     // toneMappingExposure: 2,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 50,
          // position: [3, 2, 6],
          position: [-4, 3, 6],
          // position: [0, 0, 0],
          // zoom: 100,
        }}
        // orthographic
        // shadows
      >
        {/* <color args={["blanchedalmond"]} attach={"background"} /> */}
        {/* <color args={["#000000"]} attach={"background"} /> */}
        {/* <color args={["#ffffff"]} attach={"background"} /> */}
        {/* <color args={["#ffffff"]} attach={"background"} /> */}
        {/* Only way I was able to set transparent background is this */}
        {/* but this is with some error whe it says that color is in wrong format */}
        {/* other things didn't work for me */}
        {/* I used it at the end */}
        <color args={["#4e20cc00"]} attach={"background"} />

        <Experience />
      </Canvas>
    </>
  );
}

/* function created(state: RootState) {
  console.log("created");

  state.gl.setClearColor(0xff0000, 0.0);

  // state.scene.background = new Color("yellow");
} */

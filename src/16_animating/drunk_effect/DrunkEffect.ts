import { BlendFunction, Effect } from "postprocessing";

import fragmentShader from "./shader.glsl";
import { Uniform, WebGLRenderer } from "three";

export class DrunkEffect extends Effect {
  constructor(
    amplitude: number,
    frequency: number,
    offset: number,
    blendFunction?: BlendFunction
  ) {
    super("DrunkEffect", fragmentShader, {
      uniforms: new Map([
        // ["frequency", { value: frequency }],
        ["frequency", new Uniform(frequency)],

        // ["amplitude", { value: amplitude }],
        ["amplitude", new Uniform(amplitude)],
        ["offset", new Uniform(offset)],
      ]),
      blendFunction: blendFunction,
    });
  }

  // this method will be called on each frame automatically
  // we don't need to call it manually or to use something
  // like useFrame hook

  // but we also need to handle frame rate
  update(renderer: WebGLRenderer, inputBuffer: any, deltaTime: number) {
    console.log("DrunkEffect update");
    const offset = this.uniforms.get("offset");

    if (offset) {
      // offset.value += 0.02;
      offset.value += deltaTime;
    }
  }
}

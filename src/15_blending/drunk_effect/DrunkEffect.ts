import { BlendFunction, Effect } from "postprocessing";

import fragmentShader from "./shader.glsl";
import { Uniform } from "three";

export class DrunkEffect extends Effect {
  constructor(
    amplitude: number,
    frequency: number,
    blendFunction?: BlendFunction
  ) {
    super("DrunkEffect", fragmentShader, {
      uniforms: new Map([
        // ["frequency", { value: frequency }],
        ["frequency", new Uniform(frequency)],

        // ["amplitude", { value: amplitude }],
        ["amplitude", new Uniform(amplitude)],
      ]),
      blendFunction: blendFunction,
    });
  }
}

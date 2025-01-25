import { Effect } from "postprocessing";

import fragmentShader from "./shader.glsl";

export class DrunkEffect extends Effect {
  constructor(amplitude: number, frequency: number) {
    super("DrunkEffect", fragmentShader, {});
  }
}

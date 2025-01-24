import { Effect } from "postprocessing";

import fragmentShader from "./fragment.glsl";

export class DrunkEffect extends Effect {
  constructor() {
    super("DrunkEffect", fragmentShader, {});
  }
}

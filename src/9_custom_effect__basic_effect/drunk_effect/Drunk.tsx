// This is a Ract-postprocessing implementation

import { DrunkEffect } from "./DrunkEffect";

export function Drunk() {
  const effect = new DrunkEffect();

  /* return (
    <mesh>
      <boxGeometry />
    </mesh>
  ); */

  return <primitive object={effect} />;
}

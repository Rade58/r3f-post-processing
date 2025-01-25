// This is a Ract-postprocessing implementation

import { forwardRef, type ReactNode } from "react";
import { DrunkEffect } from "./DrunkEffect";

import { BlendFunction } from "postprocessing";

interface Props {
  children?: ReactNode;
  frequency: number;
  amplitude: number;
  blendFunction?: BlendFunction;
  offset?: number;
}

// Why are we using ref forwarding?
// If some other dev wants to use our Drunk effect and
// he wants to use DrunkEffect instance, we will give them that
// posibility by using ref forwarding

export const Drunk = forwardRef<DrunkEffect, Props>(function (
  {
    amplitude = 0.1,
    frequency = 10,
    blendFunction = BlendFunction.DARKEN,
    offset = 0,
  },
  ref
) {
  // console.log({ amplitude, frequency });

  const effect = new DrunkEffect(amplitude, frequency, offset, blendFunction);
  if (ref) {
    // @ts-expect-error for some reason current is not assignable
    ref.current = effect;
  }

  /* if (blendFunction) {
    effect.blendMode.blendFunction = blendFunction;
  }
 */
  return <primitive object={effect} />;
});

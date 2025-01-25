import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// -----------------------------------------------------------
// import { App } from "./0_setup/App";  // with Stage, no light, no shadows enabled
// import { App } from "./1_setup/App"; // with lights without Stage
// -----------------------------------------------------------
// import { App } from "./2_implementing/App";
// import { App } from "./3_vignette_effect/App";
// import { App } from "./4_glitch_effect/App";
// import { App } from "./5_noise_effect/App";
// import { App } from "./6_bloom_effect/App";
// import { App } from "./7_depth_of_field_effect/App";
// import { App } from "./8_check_performances_with_a_lot_of_effects/App";
// import { App } from "./9_custom_effect__basic_effect/App";
// import { App } from "./10_props_for_custom_effect_n_ref_forward/App";
// With this, you won't see any effect, it's like our
// starting point
// import { App } from "./11_changing_outputColor_to_be_inputColor/App";
//
// import { App } from "./12_changing_output_color/App";

// we will add mainUv function
// we are not going to use uv from mainImage functio
// import { App } from "./13_wiggle/App";
// import { App } from "./14_uniforms/App";
// import { App } from "./15_blending/App";
import { App } from "./16_animating/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

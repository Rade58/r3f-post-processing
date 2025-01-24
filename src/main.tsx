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
import { App } from "./9_custom_effect__basic_effect/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

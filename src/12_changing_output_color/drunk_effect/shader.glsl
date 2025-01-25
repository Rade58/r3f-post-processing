



// We are using the WebGL 2 syntax where we can specify more
// information associated with each parameter

//  const:   the parameter is not writable
//  in:      it's a copy of the actual variable and changing it
//                won't affect the initial variable sent when 
//                calling the mainImage function
// out :     changing this value will change the variable sent
//             when calling the mainImage function


// It prevents us from making mistakes but also gives us a
// hint about what variables we need to change
// - inputColor contains the current color for that pixel
// which is defined by the previous effects
// - uv contains the render coordinates
// - outputColor is what we need to change in order to apply
//  the effect


void mainImage(
  const in vec4 inputColor,
  const in vec2 uv,
  out vec4 outputColor
){


  vec4 color = inputColor;

  // multiplying by some green nuance
  color.rgb *= vec3(0.6, 1.0, 0.5); 

  
  // insteaad of this
  // outputColor = inputColor;
  // we write this
  outputColor = color;

  // outputColor = vec4(uv, 1.0, 1.0);

}




// We are using the WebGL 2 syntax where we can specify more
// information associated with each parameter

//  const:   the parameter is not writable
//  in:      it's a copy of the actual variable and changing it
//                won't affect the initial variable sent when 
//                calling the mainImage function
// out :     changing this value will change the variable sent
//             when calling the mainImage function
void mainImage(
  const in vec4 inputColor,
  const in vec2 uv,
  out vec4 outputColor
){
  // 
}
# R3F Workshops - Post Processing

- Bootstraped with:

```
pnpm create vite
```

- dependancies

```
pnpm add three @react-three/fiber @react-three/drei leva@0.9.34
```

```
pnpm add -D r3f-perf @types/three
```

# Leva @0.9.34

---

---

# Effects

Post Processing library is better for performances because various passes will be merged into the least number of passes

<https://github.com/pmndrs/postprocessing>

r3f implements library above as `@react-three/postprocessing`

**We don't talk about passes anymore, since we are going to add bunch of effects**

# Implement post processing

we are going to install:

<https://github.com/pmndrs/react-postprocessing>

```
pnpm add @react-three/postprocessing
```

Which will also install postprocessing: <https://github.com/pmndrs/postprocessing>

But I had problem so I installed it manually

```
pnpm add postprocessing
```

<https://github.com/pmndrs/postprocessing>

We are going to nest `<EffectComposer />` in our Experience

Developers tend to create new component called `Effect` and they use `EffectComposer` there (In this workshop we are doing everything in Experience component)

In here we don't need to add the first render like we did with normal post processing

We will just nest effects (from react postprocessing package) in EffectComposer, and in some cases we will add some functions (from postprocessing package) as props to the effects (Example of this is blend function from postprocessing)

## `multisampling` attribute

Multi-sampling is used to prevent the aliasing effect
By default, its value is at 8 and we can lower it down to 0 in order to disable it completely with the multisampling attribute

this prevent stear effect on the edges

# How to find effect and implement them

Well, you can find them in docs

Docs for react prostprocessing effects: <https://react-postprocessing.docs.pmnd.rs/effects/autofocus>

Effects for react postprocessing: <https://react-postprocessing.docs.pmnd.rs/effects/autofocus>

Docs for postprocessing: <https://pmndrs.github.io/postprocessing/public/docs/>

Included effects for postprocessing: <https://github.com/pmndrs/postprocessing?tab=readme-ov-file#included-effects>

Live Demo: <https://pmndrs.github.io/postprocessing/public/demo/#antialiasing>

# More about

In case of Viggnet effect among other props we also can set `blendFunction` we import from "postprocessing"

**Set background to something else other than transparent (default) (What I set see in `src/3_vignette_effect/App.tsx`), since in upper corners effect won't be visible, or when you move camera and corners overlap with background**

Blending Works like the blending in image editing softwares and it's how the color of what we are drawing merges with what's behind

In case of GlitchEffect, you will for example import "GlitchMode" and use it for prop `mode`

**Just to remind you if you forgot that you can have multiple effects, for example you can nest Viggnete and Glitch to the EffectComposer and you will have both effects**

## For Noise effect, good values for blend function

![_](/notes/images/Screenshot%20from%202025-01-21%2011-11-42.png)

For me, `LUMINOSITY` looks great. (with premultiply)

# For Bloom effect yo ushould use dark background, but also chance the format of the color on your materials

Here you go, this one is from the docs:

```tsx
<Bloom mipmapBlur luminanceThreshold={1} />

// ❌ will not glow, same as RGB [1,0,0]
<meshStandardMaterial color="red"/>

// ✅ will glow, same as RGB [2,0,0]
<meshStandardMaterial emissive="red" emissiveIntensity={2} toneMapped={false} />

// ❌ will not glow, same as RGB [1,0,0]
<meshBasicMaterial color="red" />

// ❌ will not glow, same as RGB [1,0,0], tone-mapping will clamp colors between 0 and 1
<meshBasicMaterial color={[2,0,0]} />

// ✅ will glow, same as RGB [2,0,0]
<meshBasicMaterial color={[2,0,0]} toneMapped={false} />

```

also don't forget to set prop `mipmapBlur` to true

The mipmap blur will use the same mipmapping used for textures A
Smaller resolutions of the render will be combined into a bloom texture that is then added to the initial render
It looks great with good performance

**Good idea if you want to inmplement this in real project is to keep `luminaceThreshold` very low, 0.1 for example (0 is default), but when you want something to start glowing you would go to the material and increase some of the rgb values for `color` by multiplying them with `10` for example**

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

but be subtele when adding this

## DepthOfField effect

will blur what's closer or further from the set distance

![dof](/notes/images/dof.png)

prop values (docusDistance) are notmalized, they go from 0 to 1 according to camera `near` and `far`

![---](/notes/images/Screenshot%20from%202025-01-21%2013-51-54.png)

so you need to calculate a bit

better use leva to find right values

# Uncomment all effects we did from Viggnete to DepthOfField to check performances

Well, for author of the workshop it was good

But for me it was different in terms of values that are displayed in performance monitor

I didn't notice any drop in performances with my naked eye, but my laptop isn't that bad eather so I could see some drop

In my case CPU values went up to 8, so they wen above 0 which they didn't for workshop author, **I also tested on bigger screen**

I didn't have 60fps, more like 45, and author of the workshop had 60

But also I played around with values more than him

**IN FULL RESOULTION PERFORMANCES WILL DROP**

**BIGGER SCREEN, LIKE TV, YOU WILL HAVE PERFORMANCE DROP, EXACTLY**

**WHAT IS IMPORTANT THAT EFFECTS ARE BEING COMBINED AND OPTIMIZED**

**PERFORMANCES REALLY DEPEND ON YOUR COMPUTER**

# Our custom effect

**This incrementation will be very hard**

We need to create effect for Post Processing and then make it available in r3f (Main issue)

because post processing is merging the effects into one shader we need to follow very specific rules

What we are going to create is Drunk effect, screen should wiggle and show some nuance of green

Effect is very simple but should cover most of the custom effects you would want to build.

# How to build custom effects with postprocessing or react postprocessing

<https://github.com/pmndrs/postprocessing/wiki/Custom-Effects>

<https://react-postprocessing.docs.pmnd.rs/effects/custom-effects>

# Background color

I want to see color from the fragment shader also i nthe background

For some reson my background isn't transparent

ommiting `<color>` tag didn't make it transparent

Tried adding gl.alpha = true in `src/12_changing_output_color/App.tsx`, and in css, I set background to transparent for canvas: `src/index.css`, Which also didn't work

Need to look into this

I added hex color with transparency to the `<color>` tag, **which worked, but I had an error**

What I end up doing is setting hex color with alpha value for `<color>` tag, which worked but like Isaid, it showed an error in the console (I used this to see fragment shader color of my custom effect in the background)

`src/12_changing_output_color/App.tsx`

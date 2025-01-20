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

<https://github.com/pmndrs/postprocessing>

We are going to nest `<EffectComposer />`

Developers tend to create new component called `Effect` and they use `EffectComposer` there (In this workshop we are doing everything in Experience component)

in here we don't need to add the first render like we did with normal post processing

## `multisampling` attribute

Multi-sampling is used to prevent the aliasing effect
By default, its value is at 8 and we can lower it down to 0 in order to disable it completely with the multisampling attribute

this prevent stear effect on the edges

# How to find effect and implement them

Well, you can find them in docs

Docs for react prostprocessing effects: <https://react-postprocessing.docs.pmnd.rs/effects/autofocus>

Docs for postprocessing: <https://pmndrs.github.io/postprocessing/public/docs/>

Included effects for postprocessing: <https://github.com/pmndrs/postprocessing?tab=readme-ov-file#included-effects>

Live Demo: <https://pmndrs.github.io/postprocessing/public/demo/#antialiasing>

Effects for react postprocessing: <https://react-postprocessing.docs.pmnd.rs/effects/autofocus>

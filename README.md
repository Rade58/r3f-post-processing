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

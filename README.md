# Three.js WebGPU Ecosystem Integration Test Suite

This is a collection of tests that incrementally add complexity to the setup. Testing is done with Three.js development versions that are between r170 and r171. All tests use WebGPURenderer.

Testing goes from Vite vanilla JS all the way to TS + React + React Three Fiber + Drei + Next.js (Pages Router for now, no RSCs).

## 8ce69e0 (2024-11-21)

**8ce69e0** is [this commit](https://github.com/mrdoob/three.js/tree/8ce69e0fbf100cd8ab1b72902ca6a180d3d6abf0).

It is the current `dev` branch as of 2024-11-21, before the release of Three.js r171.

### vite-vanilla-js-8ce69e0

Vite, vanilla JS

Dev: ✅ OK | Prod: ✅ OK

### vite-react-js-8ce69e0

Vite, React, JS (not SWC)

Dev: ✅ OK | Prod: ✅ OK

### vite-react-js-swc-8ce69e0

Vite, React, JS, SWC

Dev: ✅ OK | Prod: ✅ OK

### vite-react-ts-swc-8ce69e0

Vite, React, TypeScript, SWC

Dev: ✅ OK | Prod: ✅ OK

### vite-react-js-swc-r3f-8ce69e0

Vite, React, JS, SWC, React Three Fiber, Drei Orbit Controls

Dev: ⚠️ OK with warning | Prod: ⚠️ OK with warning

> ⚠️ THREE.Renderer: .render() called before the backend is initialized. Try using .renderAsync() instead.

Seems like this issue is on R3F?

### next-pages-vanilla-8ce69e0

Next.js, Pages Router, vanilla Three.js

❌ Error: `ReferenceError: self is not defined`

WGSLNodeBuilder.js:

```
// GPUShaderStage is not defined in browsers not supporting WebGPU
const GPUShaderStage = self.GPUShaderStage;
```

### next-pages-vanilla-dynamic-8ce69e0

Next.js, Pages Router, vanilla Three.js – Workaround with a dynamic import

Dev: ✅ OK | Prod: ✅ OK

## PR 29919: WebGPURenderer: Fix global references in Node.js

This [PR](https://github.com/mrdoob/three.js/pull/29919) aims to fix reference errors caused by importing WebGPU in Next.js.

### next-pages-vanilla-pr-29919

Next.js, Pages Router, vanilla Three.js

Dev: ⚠️ OK with warning | Prod: ⚠️ OK with warning

> WARNING: Multiple instances of Three.js being imported.

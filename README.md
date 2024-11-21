# Three.js WebGPU Ecosystem Integration Test Suite

This is a collection of tests that incrementally add complexity to the setup. Testing is done with Three.js development versions that are between r170 and r171. All tests use WebGPURenderer.

Testing goes from Vite vanilla JS all the way to TS + React + Next.js + React Three Fiber + Drei.

## 8ce69e0

**8ce69e0** is Three.js at this commit: https://github.com/mrdoob/three.js/tree/8ce69e0fbf100cd8ab1b72902ca6a180d3d6abf0

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

Dev: ✅ OK | Prod: ✅ OK

> ⚠️ THREE.Renderer: .render() called before the backend is initialized. Try using .renderAsync() instead.

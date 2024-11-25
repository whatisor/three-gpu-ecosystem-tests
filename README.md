# Three.js WebGPU Ecosystem Integration Test Suite

This is a collection of tests that incrementally add complexity to the setup. Testing is done with Three.js development versions that are between r170 and r171. All tests use **WebGPURenderer** and **TSL**.

Testing goes from Vite vanilla JS all the way to TS + React + React Three Fiber + Drei + Next.js (Pages Router for now, no RSCs).

## 4cc2eb5 (2024-11-25)

**4cc2eb5** is [this commit](https://github.com/mrdoob/three.js/commit/4cc2eb5f5cde14e844266521e8b3b1daf6767ae9).

It is the current `dev` branch as of 2024-11-25, before the release of Three.js r171.

### Vite, vanilla JS

Dev: ✅ | Prod: ✅

### Vite, React, JS

Dev: ✅ | Prod: ✅

### Vite, React, TS, SWC

Dev: ✅ | Prod: ✅

### Vite, React, JS, SWC, R3F, Drei

Dev: ⚠️ | Prod: ⚠️

> ⚠️ THREE.Renderer: .render() called before the backend is initialized. Try using .renderAsync() instead.

Seems like this issue is on R3F?

### Next.js, Pages Router, vanilla Three.js

Dev: ✅ | Prod: ✅

# Three.js Testing November 21st 2024

This is a collection of tests that incrementally adds complexity to the setup. Testing is done with Three.js development versions that are between r170 and r171. All tests use WebGPURenderer.

Testing goes from vanilla JS all the way to TS + React + Next.js + React Three Fiber, and also Vite with and without SWC.

## 8ce69e0

**8ce69e0** is Three.js at this commit: https://github.com/mrdoob/three.js/tree/8ce69e0fbf100cd8ab1b72902ca6a180d3d6abf0

It is packed with `pnpm pack` and placed in `node_modules`.

### vite-vanilla-js-8ce69e0

Vite, vanilla JS

Dev: ✅ OK
Prod: ✅ OK

(with a white background instead of the black one of the WebGL renderer)

### vite-react-js-8ce69e0

Vite, React, JS (not SWC)

Dev: ✅ OK
Prod: ✅ OK

### vite-react-js-swc-8ce69e0

Vite, React, JS, SWC

Dev: ✅ OK
Prod: ✅ OK

### vite-react-ts-swc-8ce69e0

Vite, React, TypeScript, SWC

Dev: ✅ OK
Prod: ✅ OK

<script lang="ts">
  import { Canvas } from "@threlte/core";
  import Scene from "./Scene.svelte";
</script>

<div class="canvas-container">
  <Canvas>
    <Scene />
  </Canvas>
</div>

<style>
  .canvas-container {
    display: block;
    height: 40vh;
  }
</style>

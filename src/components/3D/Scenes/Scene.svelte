<script>
  import { T, useFrame } from "@threlte/core";
  import Terminal from "../Models/Terminal.svelte";
  import Synth from "../Models/Synth.svelte";
  import { interactivity } from "@threlte/extras";
  import { useCursor } from "@threlte/extras";
  import { spring } from "svelte/motion";
  import { navigate } from "astro/virtual-modules/transitions-router.js";
  let rotation = 0;

  useFrame((_, delta) => {
    rotation += delta;
  });

  interactivity();
  const scale = spring(4);
  const terminalScale = spring(1.5);
  const { onPointerEnter, onPointerLeave } = useCursor("pointer", "auto");
</script>

<T.PerspectiveCamera
  makeDefault
  position={[7, 5, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0);
  }}
/>

<T.DirectionalLight position={[0, 5, 30]} castShadow />

<Synth
  scale={$scale}
  on:pointerenter={() => scale.set(5)}
  on:pointerenter={onPointerEnter}
  on:pointerleave={onPointerLeave}
  on:pointerleave={() => scale.set(4)}
  on:click={() => {
    navigate("/posts");
  }}
  rotation.z={-Math.PI / 2}
  rotation.y={-Math.PI / 4}
  rotation.x={Math.sin(rotation) * 0.4}
  position.z={Math.sin(rotation) * 0.5}
  position.x={-4 + Math.cos(rotation) * 0.5}
  position.y={Math.cos(rotation * 4) * 0.2}
  receiveShadow={true}
/>

<Terminal
  scale={$terminalScale}
  on:pointerenter={onPointerEnter}
  on:pointerleave={onPointerLeave}
  on:pointerenter={() => terminalScale.set(2)}
  on:pointerleave={() => terminalScale.set(1.5)}
  on:click={() => {
    navigate("/posts");
  }}
  rotation.y={Math.sin(rotation) * 0.5}
  position.z={-Math.sin(rotation * 2) * 0.2}
  position.y={-Math.cos(rotation * 3) * 0.2}
  position.x={3 + Math.sin(rotation * 2) * 0.2}
  receiveShadow={true}
/>

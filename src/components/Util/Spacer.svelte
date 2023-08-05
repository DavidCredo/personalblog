<script lang="ts">
  export let size: number;
  export let axis = undefined;

  const width = axis === "vertical" ? 1 : size;
  const height = axis === "horizontal" ? 1 : size;
</script>

<span
  style:width={width + "px"}
  style:min-width={width + "px"}
  style:height={height + "px"}
  style:min-height={height + "px"}
/>

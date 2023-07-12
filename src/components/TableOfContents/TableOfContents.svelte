<script lang="ts">
  import type { MarkdownHeading } from "astro";
  import TocItem from "./TOCItem.svelte";

  export let headings: MarkdownHeading[];
</script>

<nav>
  <div class="flex-wrapper">
    <h2>Table of Contents</h2>
    {#each headings as heading}
      <TocItem {heading} />
    {/each}
  </div>
</nav>

<style>
  .flex-wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
</style>

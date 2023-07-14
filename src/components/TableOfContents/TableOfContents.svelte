<script lang="ts">
  import type { MarkdownHeading } from "astro";
  import TocItem from "./TOCItem.svelte";

  export let headings: MarkdownHeading[];
</script>

<nav class="toc">
  <div class="flex-wrapper">
    <h2>Table of Contents</h2>
    {#each headings as heading}
      <TocItem {heading} />
    {/each}
  </div>
</nav>

<style>
  h2 {
    font-size: var(--font-size-large);
    margin-block-end: 0.4rem;
    border-bottom: var(--color-primary) 2px solid;
  }
  .flex-wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  nav {
    padding: 1rem;
  }
</style>

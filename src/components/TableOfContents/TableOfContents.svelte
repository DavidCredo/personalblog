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
    border-bottom: var(--color-primary) 2px solid;
    margin: 0 0 0.4rem;
  }
  .flex-wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  nav {
    padding-inline: 1rem;
  }
</style>

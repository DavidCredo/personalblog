<script lang="ts">
  import type { MarkdownHeading } from "astro";

  export let heading: MarkdownHeading;
</script>

<a href={"#" + heading.slug}>{heading.text}</a>

<style>
  a {
    color: var(--color-neutral-800);
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-regular);
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--color-primary);
  }
</style>

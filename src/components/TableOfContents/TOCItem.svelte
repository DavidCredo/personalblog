<script lang="ts">
  import type { MarkdownHeading } from "astro";

  export let heading: MarkdownHeading;
</script>

<a href={"#" + heading.slug}>{heading.text}</a>

<style>
  a {
    padding-left: 1rem;
    text-decoration: none;
    color: var(--color-text-light);
    font-size: var(--font-size-medium);
    transition: color 0.2s ease, font-weight 0.2s ease;
  }

  a:hover {
    color: var(--color-primary);
    font-weight: bold;
  }
</style>

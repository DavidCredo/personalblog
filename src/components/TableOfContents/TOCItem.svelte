<script lang="ts">
  import type { MarkdownHeading } from "astro";

  export let heading: MarkdownHeading;
</script>

<a href={"#" + heading.slug}>{heading.text}</a>

<style>
  a {
    margin-left: 1rem;
    text-decoration: none;
    color: var(--color-text-light);
  }
</style>

<script lang="ts">
  export let color: "tip" | "warning" | "danger" = "tip";
</script>

<article
  class="aside"
  class:tip={color === "tip"}
  class:warning={color === "warning"}
  class:danger={color === "danger"}
>
  <slot></slot>
</article>

<style>
  .aside {
    margin: 0 0 1.5rem 0;
    padding: 1rem;
    max-width: 65ch;
  }

  .tip {
    border: 1px solid var(--color-aside-tip-border);
    border-radius: 0.5rem;
    background-color: var(--color-aside-tip-bg);
    color: var(--color-aside-tip-text);
  }

  .warning {
    border: 1px solid var(--color-aside-warning-border);
    border-radius: 0.5rem;
    background-color: var(--color-aside-warning-bg);
    color: var(--color-aside-warning-text);
  }

  .danger {
    border: 1px solid var(--color-aside-error-border);
    border-radius: 0.5rem;
    background-color: var(--color-aside-error-bg);
    color: var(--color-aside-error-text);
  }
</style>

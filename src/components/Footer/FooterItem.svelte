<script>
  export let url;
  export let label;
</script>

<li><a href={url}>{label}</a></li>

<style>
  a {
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-small);
  }

  @media screen and (max-width: 500px) {
    a {
      font-size: var(--font-size-regular);
    }
  }
  a:hover {
    color: var(--color-primary);
  }
</style>

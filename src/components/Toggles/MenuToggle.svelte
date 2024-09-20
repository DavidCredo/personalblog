<script>
  import { Hamburger } from "svelte-hamburgers";
  export let isOpen = false;

  function toggleOpen() {
    isOpen = !isOpen;
  }
</script>

<Hamburger type="elastic" --color="var(--color-text)" --hover-opacity="1" />

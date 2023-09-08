<script>
  export let description;
</script>

<button title={description}><slot /></button>

<style>
    button {
        border: none;
        background-color: transparent;
    }
</style>

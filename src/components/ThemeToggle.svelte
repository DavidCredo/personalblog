<script>
  import { onDestroy, onMount } from "svelte";
  import { colorSchemeStore, setColorScheme } from "../utils/store";
  import { getInitialColorTheme } from "../utils/colorTheme";

  onMount(() => {
    setColorScheme(getInitialColorTheme());

    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDarkTheme.addEventListener("change", (event) => {
      const newTheme = event.matches ? "dark" : "light";
      setColorScheme(newTheme);
    });
  });

  onDestroy(() => {
    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDarkTheme.removeEventListener("change", handleThemeChange);
  });
</script>

<label for="scheme-toggle">{$colorSchemeStore} </label>
<button
  id="scheme-toggle"
  on:click={() => {
    const newColorScheme = $colorSchemeStore == "light" ? "dark" : "light";
    setColorScheme(newColorScheme);
  }}>{$colorSchemeStore}</button
>

<style>
  button {
    cursor: pointer;
  }
</style>

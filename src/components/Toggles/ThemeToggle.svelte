<script>
  import { onDestroy, onMount } from "svelte";
  import { colorSchemeStore, setColorScheme } from "../../utils/store";
  import { getInitialColorTheme } from "../../utils/colorTheme";

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

<label hidden for="scheme-toggle">{$colorSchemeStore} </label>
<button
  id="scheme-toggle"
  title="Toggles theme between light and dark mode"
  on:click={() => {
    const newColorScheme = $colorSchemeStore == "light" ? "dark" : "light";
    setColorScheme(newColorScheme);
  }}>{$colorSchemeStore}</button
>

<style>
  button {
    cursor: pointer;
    --size: 2rem;

    background: none;
    border: none;
    padding: 0;
    inline-size: var(--size);
    block-size: var(--size);
    aspect-ratio: 1;
    border-radius: 50%;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    outline-offset: 5px;

    @media (hover: none) {
      --size: 48px;
    }
  }
</style>

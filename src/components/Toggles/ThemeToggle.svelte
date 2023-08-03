<script>
  import { onDestroy, onMount } from "svelte";
  import { colorSchemeStore, setColorScheme } from "../../utils/store";
  import { getInitialColorTheme } from "../../utils/colorTheme";
  import { SunIcon, MoonIcon } from "lucide-svelte";

  function handleThemeChange(e) {
    const newTheme = e.matches ? "dark" : "light";
    setColorScheme(newTheme);
  }
  onMount(() => {
    setColorScheme(getInitialColorTheme());

    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDarkTheme.addEventListener("change", handleThemeChange);
  });

  onDestroy(() => {
    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDarkTheme.removeEventListener("change", handleThemeChange);
  });
</script>

<label hidden for="scheme-toggle">{$colorSchemeStore} </label>
<button
  id="scheme-toggle"
  class={$colorSchemeStore == "light" ? "enabled" : ""}
  title="Toggles theme between light and dark mode"
  on:click={() => {
    const newColorScheme = $colorSchemeStore == "light" ? "dark" : "light";
    setColorScheme(newColorScheme);
  }}
>
  <div class="icon-wrapper">
    <SunIcon fill="var(--color-text)" color="var(--color-text)" />
    <MoonIcon fill="var(--color-text)" color="var(--color-text)" />
  </div>
</button>

<style>
  button {
    cursor: pointer;
    background: none;
    border: none;
    border-radius: 40px;
    width: 80px;
    height: 40px;
    margin: auto;
    position: relative;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    background-color: var(--color-neutral-200);

    @media (hover: none) {
      --size: 48px;
    }
  }

  button::before {
    content: "";
    display: block;
    height: 66%;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--color-text);
    z-index: 2;
    transform: translate(0);
    transition: transform 0.4s ease;
  }

  button.enabled::before {
    transform: translateX(40px);
  }

  .icon-wrapper {
    position: absolute;
    width: 70px;
    display: flex;
    top: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
    margin: 0 5px;
    height: 100%;
  }

  :global(.icon-wrapper > svg) {
    width: 20px;
    z-index: 0;
    padding: 0 1px;
    margin: 0 4px;
  }
</style>

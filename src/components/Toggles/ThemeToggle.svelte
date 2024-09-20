<script>
  import { onDestroy, onMount } from "svelte";
  import { colorSchemeStore, setColorScheme } from "../../utils/store";
  import { getInitialColorTheme } from "../../utils/colorTheme";
  import { SunIcon, MoonIcon } from "lucide-svelte";

  function handleThemeChange(e) {
    const newTheme = e.matches ? "dark" : "light";
    if (newTheme == "dark") {
      document.documentElement.classList.add('cc--darkmode');
    } else {
      document.documentElement.classList.remove('cc--darkmode');
    }
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
    if (newColorScheme == "dark") {
      document.documentElement.classList.add('cc--darkmode');
    } else {
      document.documentElement.classList.remove('cc--darkmode');
    }
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
    padding: 2px 6px 3px;
    border: none;
    border-radius: 40px;
    width: 70px;
    height: 40px;
    position: relative;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    background-color: var(--color-neutral-200);
  }

  button::before {
    content: "";
    display: block;
    position: relative;
    height: 25px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--color-text);
    z-index: 2;
    transition: transform 0.4s ease;
    padding: 0;
  }

  button.enabled::before {
    transform: translateX(30px);
  }

  .icon-wrapper {
    position: absolute;
    width: 60px;
    display: flex;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    justify-content: space-between;
    align-items: center;
    margin: 0 4px;
  }

  :global(.icon-wrapper > svg) {
    width: 50px;
    z-index: 0;
    padding: 0 4px;
  }
</style>

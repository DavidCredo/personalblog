import { writable } from "svelte/store";
import { getInitialColorTheme } from "./colorTheme";

export const colorSchemeStore = writable(getInitialColorTheme());

export const setColorScheme = (value: string) => {
    colorSchemeStore.set(value);

    document.documentElement.setAttribute("data-theme", value);
    window.localStorage.setItem("color-mode", value);
}


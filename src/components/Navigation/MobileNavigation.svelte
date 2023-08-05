<script lang="ts">
  import { fade } from "svelte/transition";
  import MenuToggle from "../Toggles/MenuToggle.svelte";
  import ThemeToggle from "../Toggles/ThemeToggle.svelte";
  import Spacer from "../Util/Spacer.svelte";

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<div class="menu-toggle-wrapper">
  <button
    on:click={() => {
      toggleMenu();
    }}
  >
    <MenuToggle {isOpen} />
  </button>
</div>
{#if isOpen}
  <nav aria-label="mobile-navigation" transition:fade={{ duration: 200 }}>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/posts">Posts</a>
      </li>
    </ul>
    <Spacer size={32} />
    <ThemeToggle />
  </nav>
{/if}

<style>
  nav {
    background-color: var(--color-bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    overflow: hidden;
    width: 100%;
    z-index: 100;
  }
  @media (min-width: 600px) {
    nav {
      display: none;
    }
    .menu-toggle-wrapper {
      display: none;
    }
  }
  ul {
    padding: 0;
    list-style-type: none;
    text-align: center;
  }

  li {
    font-weight: var(--font-weight-bold);
  }
  a {
    font-size: var(--font-size-xlarge);
    padding: 0.5rem;
    margin-block: 0.4rem;
    color: var(--color-text);
    text-decoration: none;
  }
  button {
    position: sticky;
    border: none;
    cursor: pointer;
    z-index: 101;
  }
</style>

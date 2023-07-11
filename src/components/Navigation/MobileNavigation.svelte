<script lang="ts">
  import { fade, slide } from "svelte/transition";

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<button
  on:click={() => {
    toggleMenu();
  }}
>
  {isOpen == true ? "close" : "open"}
</button>
{#if isOpen}
  <nav aria-label="mobile-navigation" transition:fade={{ duration: 200 }}>
    <ul>
      <li
        in:slide={{ axis: "x", delay: 200 }}
        out:slide={{ axis: "x", duration: 200 }}
      >
        <a href="/">Home</a>
      </li>
      <li
        in:slide={{ axis: "x", delay: 300 }}
        out:slide={{ axis: "x", duration: 400 }}
      >
        <a href="/about">About</a>
      </li>
      <li
        in:slide={{ axis: "x", delay: 400 }}
        out:slide={{ axis: "x", duration: 600 }}
      >
        <a href="/posts">Posts</a>
      </li>
    </ul>
  </nav>
{/if}

<style>
  nav {
    background-color: var(--color-bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: hidden;
    transition: left 0.3s ease;
    width: 100%;
    z-index: 100;
  }
  @media (min-width: 600px) {
    nav {
      display: none;
    }
    button {
      display: none;
    }
  }
  ul {
    padding: 0;
    list-style-type: none;
  }

  li {
    font-weight: var(--font-weight-bold);
    font-size: xx-large;
  }
  a {
    padding: 1rem;
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

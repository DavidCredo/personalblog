<script>
  import ThemeToggle from "../Toggles/ThemeToggle.svelte";
</script>

<nav aria-label="desktop navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/posts">Posts</a></li>
  </ul>

    <ThemeToggle />
</nav>

<style>
  nav {
    padding: 1rem;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding: 0;
  }
  a {
    text-decoration: none;
    padding: 12px;
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-bold);
    color: var(--color-text);
  }

  @media (max-width: 600px) {
    nav {
      display: none;
    }
  }
</style>

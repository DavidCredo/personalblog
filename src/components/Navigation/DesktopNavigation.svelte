<script>
  import ThemeToggle from "../Toggles/ThemeToggle.svelte";
  import Spacer from "../Util/Spacer.svelte";
</script>

<nav aria-label="desktop navigation">
  <ul>
    <li><a href="/about">About</a></li>
    <li><a href="/posts">Posts</a></li>
  </ul>
  <Spacer axis="horizontal" size="16" />
  <ThemeToggle />
</nav>

<style>
  nav {
    padding: 1rem;
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

  @media screen and (max-width: 600px) {
    nav {
      display: none;
    }
  }
</style>

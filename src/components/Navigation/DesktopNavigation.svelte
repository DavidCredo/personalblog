<script>
</script>

<nav aria-label="desktop navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/posts">Posts</a></li>
  </ul>
</nav>

<style>
  nav {
    padding: 24px;
    margin: 0;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0;
  }
  a {
    text-decoration: none;
    position: relative;
    padding: 12px;
    font-size: var(--font-size-medium);
    color: var(--color-text);
  }

  @media (max-width: 600px) {
    nav {
      display: none;
    }
  }
</style>

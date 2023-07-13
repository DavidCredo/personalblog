<script lang="ts">
  export let title: string;
  export let description: string;
  export let slug: string;
</script>

<article>
  <a class="card-link" href={"/blog/" + slug}>
    <h2>{title}</h2>
    <p>{description}</p>
    <div class="link-cta">Read more</div>
  </a>
</article>

<style>
  article {
    max-width: 25rem;
    border-radius: 8px;
    transition: background-color 0.4s ease;
  }

  h2 {
    color: var(--color-text);
    transition: color 0.2s ease;
  }

  p {
    color: var(--color-text-light);
    padding-block: 1rem;
  }

  a {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    text-decoration: none;
    padding: 1.4rem;
  }

  article:hover {
    background-color: var(--color-bg-elevated);
  }

  .link-cta {
    text-decoration: none;
    width: fit-content;
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
  }
</style>

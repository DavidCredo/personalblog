<script lang="ts">
  export let title: string;
  export let description: string;
  export let slug: string;
</script>

<article>
  <a class="card-link" href={"/blog/" + slug}>
    <h3>{title}</h3>
    <p>{description}</p>
    <div class="link-cta">Read more</div>
  </a>
</article>

<style>
  article {
    max-width: 700px;
    transition: background-color 0.4s ease;
  }

  p {
    color: var(--color-text-light);
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    text-decoration: none;
    padding: 1rem;
  }

  .link-cta {
    text-decoration: none;
    width: fit-content;
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
  }

  a:hover > h3 {
    color: var(--color-primary)
  }
</style>

<script lang="ts">
  import { convertDateToPublishDate } from "../../utils/time";

  export let title: string;
  export let description: string;
  export let pubDate: Date;
  export let slug: string;
</script>

<article>
  <a class="card-link" href={"/blog/" + slug}>
    <h3>{title}</h3>
    <p class="publish-info">
      Published on: {convertDateToPublishDate(pubDate)}
    </p>
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
    color: var(--color-neutral-900);
  }

  .publish-info {
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-light);
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
    width: fit-content;
    font-weight: var(--font-weight-bold);
  }

  a:hover > h3,
  a:hover > .link-cta {
    color: var(--color-primary);
  }
</style>

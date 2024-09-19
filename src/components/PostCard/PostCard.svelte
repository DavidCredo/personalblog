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
    <p class="description">{description}</p>
    <div class="link-cta">Read more</div>
  </a>
</article>

<style>
  article {
    width: 600px;
    transition: background-color 0.4s ease;
    border-radius: 0.5rem;
    background-color: var(--color-neutral-100);

    @media (max-width: 600px) {
      width: 100%; /* Full width on small screens */
    }
  }

  h3 {
    padding-block-end: 0.4rem;
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
    padding: var(--font-size-medium);
  }

  .description {
    padding-block: var(--font-size-small);
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

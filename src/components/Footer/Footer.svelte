<script lang="ts">
  import { Rss } from "lucide-svelte";
  import IconButton from "../Button/IconButton.svelte";
  import FooterItem from "./FooterItem.svelte";

  const getCopyrightYear = (): string => {
    const establishedYear = new Date("2023-01-01").getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear === establishedYear
      ? "2023"
      : `${establishedYear} - ${currentYear}`;
  };
</script>

<footer>
  <div class="container">
    <p id="copyright-info">
      <strong>David Credo</strong> © {getCopyrightYear()}
    </p>
    <div class="footer-section">
      <p><strong>Socials</strong></p>
      <ul>
        <FooterItem label="Github" url="https://github.com/DavidCredo" />
      </ul>
    </div>
    <div class="footer-section">
      <p><strong>Legal</strong></p>
      <ul>
        <FooterItem label="Legal Notice" url="legal" />
        <FooterItem label="Privacy Policy" url="privacy" />
      </ul>
    </div>
    <IconButton description="RSS feed of this blog"
      ><a href="/rss.xml"
        ><div class="icon-wrapper"><Rss size="30" /></div>
      </a></IconButton
    >
  </div>
</footer>

<style>
  #copyright-info {
    margin-inline: 4rem;
  }

  .container {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: center;
    background-color: var(--color-neutral-100);
    padding-block: var(--font-size-medium);
    width: 100vw;
  }

  .footer-section {
    margin: var(--font-size-regular);
    align-self: flex-start;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  @media screen and (max-width: 500px) {
    .container {
      flex-direction: column;
      text-align: center;
    }

    .footer-section {
      margin: 0 0 var(--font-size-medium);
    }
    #copyright-info {
      margin: 0 0 var(--font-size-small);
    }
  }

  .container > p {
    margin: 0;
  }
</style>

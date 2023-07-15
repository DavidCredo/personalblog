<script lang="ts">
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
    <p><strong>David Credo</strong> © {getCopyrightYear()}</p>
  </div>
</footer>

<style>
    
</style>

<style>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0.6;
}

h1 {
  width: 100%;
}

.welcome {
  display: block;
  position: relative;
  width: 100%;
  height: 0;
  padding: 0 0 calc(100% * 495 / 2048) 0;
}

.welcome img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: block;
}
</style>

<script>
import welcome from '$lib/images/svelte-welcome.webp';
import welcome_fallback from '$lib/images/svelte-welcome.png';
import TemplateCard from './TemplateCard.svelte';
</script>

<svelte:head>
  <title>Home</title>
  <meta content="SchoolSql Report Cards" name="description" />
</svelte:head>

<section>
  <h1>
    <span class="welcome">
      <picture>
        <source srcset="{welcome}" type="image/webp" />
        <img alt="Welcome" src="{welcome_fallback}" />
      </picture>
    </span>

    SchoolSql Report Card templates
  </h1>
  <TemplateCard />
</section>

<template>
  <the-header />
  <router-view />
  <the-footer />
</template>
<script>
  import TheHeader from "@/components/layout/TheHeader.vue";
  import TheFooter from "@/components/layout/TheFooter.vue";
  import AOS from 'aos'
  import "aos/dist/aos.css"
  export default {
    name: "App",
    created(){
      AOS.init();
    },
    components: {
      TheHeader,
      TheFooter
    },
    mounted() {
      this.setTemplateDirection();
    },
    methods: {
      setTemplateDirection() {
        const htmlLang = localStorage.getItem("htmlLang");
        const dir = localStorage.getItem("dir");
        const removedClass = localStorage.getItem("removedClass");
        const addedClass = localStorage.getItem("addedClass");
        document.querySelector("html").setAttribute("lang", htmlLang);
        document.querySelector("html").setAttribute("dir", dir);
        document.querySelector("html").classList.remove(removedClass);
        document.querySelector("html").classList.add(addedClass);
      },
    },
  };
</script>
<style>
  @import url("https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;700&family=Lobster&family=Rubik&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
  :root {
    /*========== Colors ==========*/
    /* Change favorite color */
    --hue-color: 125; /*Purple 250 - Green 142 - Blue 230 - Pink 340*/
    --hue-color-second: 45;

    /* HSL color mode */
    --first-color: hsl(var(--hue-color), 69%, 61%);
    --first-color-second: hsl(var(--hue-color), 69%, 61%);
    --first-color-alt: hsl(var(--hue-color), 57%, 53%);
    --first-color-lighter: hsl(var(--hue-color), 92%, 85%);
    --switch-section: hsl(var(--hue-color), 100%, 99%);
    --title-color: hsl(var(--hue-color), 8%, 15%);
    --text-color: hsl(var(--hue-color-second), 8%, 45%);
    --text-color-light: hsl(var(--hue-color-second), 8%, 65%);
    --input-color: hsl(var(--hue-color), 70%, 96%);
    --body-color: hsl(var(--hue-color), 60%, 99%);
    --container-color: hsl(0, 0%, 100%);
    /* .5rem = 8px, 1rem = 16px, 1.5rem = 24px ... */
    --big-font-size: 2rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: 0.938rem;
    --small-font-size: 0.813rem;
    --smaller-font-size: 0.75rem;

    /*========== Font weight ==========*/
    --font-medium: 500;
    --font-semi-bold: 600;

    /*========== Margenes Bottom ==========*/
    /* .25rem = 4px, .5rem = 8px, .75rem = 12px ... */
    --mb-0-25: 0.25rem;
    --mb-0-5: 0.5rem;
    --mb-0-75: 0.75rem;
    --mb-1: 1rem;
    --mb-1-5: 1.5rem;
    --mb-2: 2rem;
    --mb-2-5: 2.5rem;
    --mb-3: 3rem;
  }

  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  html.ar *{
    font-family: 'El Messiri', sans-serif;
  }
  html.en *{
    font-family: 'Poppins', sans-serif;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .text-color {
    color: var(--text-color);
  }
  .title-color {
    color: var(--first-color);
  }
  .title-color-light {
    color: var(--text-color-light);
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>

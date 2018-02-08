<template>
  <div class="vertically-center vh100 wrapper margin--center">
    <div>
      <h1 class="font-size--7">{{ msg }}</h1>
      <p class="font-size--6 font-weight--400">I currently live in Cleveland, Ohio where I spend a lot of time writing code. I specialize in building scalable web solutions for businesses and startups. When I am not coding, I’m probably reading, listening to jazz, cooking, or walking my dog.</p>

      <h2 class="font-size--6">Background</h2>
      <p class="font-size--6 font-weight--400">I wrote my first lines of code in 2010. I co-founded Web Machine after writing a few more. We developed plenty of custom sites and never used a theme. A few years later I joined Fathom as a Web Developer, while continuing to code for Web Machine during the nights and weekends.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'About me'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

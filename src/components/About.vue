<template>
  <div class="vertically-center vh100 wrapper margin--center">
    <div>
      <h1 class="font-size--8">{{ msg }}</h1>
      <p class="font-size--5">I currently live in Cleveland, Ohio where I spend a lot of time writing code. I specialize in building scalable web solutions for businesses and startups. When I am not coding, I’m probably reading, listening to jazz, cooking, or walking my dog.</p>

      <h2 class="font-size--7">Background</h2>
      <p class="font-size--5">I wrote my first lines of code in 2010. I co-founded Web Machine after writing a few more. We developed plenty of custom sites and never used a theme. A few years later I joined Fathom as a Web Developer, while continuing to code for Web Machine during the nights and weekends.</p>

      <h3 class="font-size--6">Education</h3>
      <p class="font-size--5">Kent State University<br />B.A. Communication Studies<br />2008-2012</p>

      <h3 class="font-size--6">Elsewhere</h3>
      <ul class="font-size--5 no-bullets">
        <li>
          <a href="https://github.com/garybunofsky" target="_blank">Github</a>
        </li>
        <li>
          <a href="https://instagram.com/garybunofsky" target="_blank">Instagram</a>
        </li>
        <li>
          <a href="https://linkedIn.com/in/garybunofsky" target="_blank">LinkedIn</a>
        </li>
        <li>
          <a href="https://twitter.com/garybunofsky" target="_blank">Twitter</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'About'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div>
    <div class="background--gray--200 nav-space padding-y--4 margin--b-4">
      <div class="wrapper margin--center">
        <h1 class="text--center font-size--9">{{ msg }}</h1>
        <h2 class="text--center font-size--6 font-weight--400">I currently live in Cleveland, Ohio where I spend a lot of time writing code.</h2>
      </div>
    </div>
    <div class="wrapper margin--center">
      <p class="font-size--5">I specialize in building scalable web solutions for businesses and startups. When I am not coding, I’m probably reading, listening to jazz, cooking, or walking my dog</p>
      <div class="margin--b-2">
        <img src="https://s3.amazonaws.com/garybunofsky.com/gary-bunofsky-loading-dock.jpg" alt="Gary Bunofsky">
      </div>

      <h2 class="font-size--6">Background</h2>
      <p class="font-size--5">I wrote my first lines of code in 2010. I co-founded Web Machine, a web development shop, after writing a few more. We designed plenty of custom sites and never used a theme. A few years later I joined Fathom as a Web Developer, while continuing to code for Web Machine during the nights and weekends.</p>

      <div class="card margin--center text--center">
        <p class="font-size--6">Want to work together?</p>
        <router-link to="/resume.pdf" class="button">View my resume</router-link>
      </div>

      <h3 class="font-size--6">Skills &amp; Languages</h3>
      <ul class="font-size--5 no-bullets">
        <li>Javascript (Node, Vue &amp; Angular)</li>
        <li>Ruby (Rails &amp; Sinatra)</li>
        <li>PHP</li>
        <li>CSS (SCSS &amp; LESS)</li>
        <li>HTML</li>
        <li>SQL</li>
        <li>Postgres</li>
        <li>Mongo</li>
        <li>TDD (Jest, Jasmine &amp; Rspec)</li>
        <li>Git</li>
        <li>Flexbox</li>
        <li>Command Line</li>
        <li>Sketch</li>
        <li>Adobe Creative Cloud</li>
      </ul>

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
.card {
  margin-bottom: 2em;
}
img {
  width: 100%;
  overflow: hidden;
  margin-bottom: 6px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgb(241, 246, 255), 0 1px 3px rgb(219, 232, 255);
}
</style>

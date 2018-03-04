<template>
  <div id="app">
    <div class="toggle-nav" @click="showNav = !showNav">
      <img src="./assets/icons/menu.svg" alt="">
    </div>

    <!-- navigation -->
    <nav v-if="showNav">
      <router-link :to="{name: 'Home'}">Home</router-link>
      <router-link :to="{name: 'About'}">About</router-link>
      <a href="#">Portfolio</a>
      <router-link :to="{name: 'Blog'}">Blog</router-link>
      <router-link :to="{name: 'Pricing'}">Pricing</router-link>
      <router-link :to="{name: 'Contact'}">Contact</router-link>
    </nav>
    <!-- end navigation -->

    <router-view/>

    <!--  footer -->
    <footer>
      <div class="grid margin--center wrapper--lg">
        <div class="grid--item">
          <span class="font-size--5">
            Projects
          </span>
          <a class="footer--link" href="#">
            Insights
          </a>
          <a class="footer--link" href="#">
            Blouse
          </a>
          <a class="footer--link" href="#">
            Pass.js
          </a>
        </div>
        <div class="grid--item">
          <span class="font-size--5">
            Blog
          </span>
          <a class="footer--link" href="/blog/a-month-without-coffee">
            A Month Without Coffee
          </a>
          <a class="footer--link" href="/blog/facebooks-new-job">
            Facebook's New Job
          </a>
          <a class="footer--link" href="/blog/not-the-same">
            Not the Same
          </a>
          <a class="footer--link" href="/blog/basic-git-commands">
            Basic Git Commands
          </a>
          <a class="footer--link" href="/blog/finding-photos">
            Finding Photos
          </a>
        </div>
        <div class="grid--item">
          <span class="font-size--5">
            Social
          </span>
          <a class="footer--link" href="https://github.com/garybunofsky" rel="noopener" target="_blank">
            Github
          </a>
          <a class="footer--link" href="https://linkedin.com/in/garybunofsky" rel="noopener" target="_blank">
            LinkedIn
          </a>
          <a class="footer--link" href="https://instagram.com/garybunofsky" rel="noopener" target="_blank">
            Instagram
          </a>
          <a class="footer--link" href="https://twitter.com/garybunofsky" rel="noopener" target="_blank">
            Twitter
          </a>
        </div>
        <div class="grid--item">
          <span class="font-size--5">
            Need a Site?
          </span>
          <a class="footer--link" href="#">
            <router-link to="Pricing">Pricing</router-link>
          </a>
        </div>
      </div>
    </footer>
    <!-- end footer -->

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      showNav: false
    }
  },
  watch: {
    $route (to, from) {
      this.showNav = false
    }
  }
}
</script>

<style lang="sass?outputStyle=expanded">
// Colors
$blue--700: #0C71F3;
$blue--600: #318bff;
$blue--500: #5ba3ff;
$blue--400: #7fb7ff;
$blue--300: #a2cbff;
$blue--200: #c9e1ff;

$green--700: #37cfdb;
$green--600: #4ce0eb;
$green--500: #7dedf6;
$green--400: #9ef1f8;
$green--300: #b7f3f8;
$green--200: #cafbff;

$gray--700: #2a3338;
$gray--600: #434a53;
$gray--500: #63686e;
$gray--400: #d1d5d9;
$gray--300: #e5e7e9;
$gray--200: #f2f2f2;

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Html */
html {
  font: 400 1em/1.4 'Lato', sans-serif;
  font-weight: 400;
  text-rendering: optimizeLegibility;
}
body {
  margin:0;
}
h1,h2,h3,h4,h5,h6 {
  color: $gray--700;
  font-weight: 600;
  margin:0;
}
p {
  color: $gray--500;
  font-weight: 400;
  margin:0;
}
a {
  color: $blue--500;
  text-decoration: none;
}
a:hover {
  color: $blue--600;
}
ul {
  margin:0 0 0 -40px;
}

/* Padding */
.padding-y--1 {
  padding:1em 0;
}
.padding-y--2 {
  padding:2em 0;
}
.padding-y--3 {
  padding:3em 0;
}

/* margin */
.margin--b-4 {
  margin-bottom: 4rem;
}
.margin--t-12 {
  margin-top: 12rem;
}

/* Layout */
.wrapper {
  width:90%;
}
.wrapper--lg {
  width:90%;
}
.margin--center {
  margin:0 auto;
}
.vh100 {
  height:100vh;
}

/* Grid */
.grid {
  display: flex;
  flex-direction: column;
}
.grid--item {
  flex:1;
}
.grid--gutters {
  margin: -1.5em 0 0 -1.5em;
}
.grid--gutters > .grid--item {
  padding: 1.5em 0 0 1.5em;
}
.grid--center {
  align-items: center;
}
.vertically-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Background */
.background--blue--300 {
  background:#f6faff;
}
.background--blue--500 {
  background: #0C71F3;
}

/* Color */
.color--white {
  color:#fff;
}

/* Font */
.font-size--2 {
  font-size: .75em;
  line-height: 1.5625em;
  margin-bottom: .78125em;
}
.font-size--3 {
  font-size: .875em;
  line-height: 1.5625em;
  margin-bottom: 1.5625em;
}
.font-size--4 {
  font-size: 1em;
  line-height: 1.5625em;
  margin-bottom: 1.5625em;
}
.font-size--5 {
  font-size: 1.1875em;
  line-height: 1.5625em;
  margin-bottom: 1.5625em;
}
.font-size--6 {
  font-size: 1.25em;
  line-height: 1.5625em;
  margin-bottom: .78125em;
}
.font-size--7 {
  font-size: 1.5em;
  line-height: 1.1875em;
  margin-bottom: .59375em;
}
.font-size--8 {
  font-size: 1.8125em;
  line-height: 1.1875em;
  margin-bottom: .59375em;
}
.font-weight--400 {
  font-weight: 400;
}
.font--blue--500 {
  color: $blue--500;
}

.text--center {
  text-align: center;
}
.text--right {
  text-align: right;
}
.no-bullets {
  list-style: none;
}

/* Button */
.button {
  background: $blue--600;
  border: 0;
  border-radius: 3px;
  box-sizing: border-box;
  color: #fff !important;
  cursor: pointer;
  font-size: .875em;
  font-weight: 600;
  margin: 0;
  padding: 10px 24px;
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.button:hover {
  background:#318bff;
}
.button--white {
  background: #fff;
  color: $blue--500;
}
.button--white:hover {
  background:rgba(255,255,255,0.8);
}
.button--lg {
  font-size:1em;
  padding: 16px 32px;
}

/* Nav */
nav {
  align-items: center;
  background:rgba(255,255,255,0.95);
  display: flex;
  flex-direction: column;
  font-size: 1.5625em;
  height: 100%;
  justify-content: center;
  position:fixed;
  padding:0;
  top: 0;
  width: 100%;
}
nav a {
  color: $blue--500;
  font-weight: 600;
  font-size:1.1875em;
  padding:1em;
}
nav a:hover {
  color: $blue--600;
}

.toggle-nav {
  background: #fff;
  border-bottom: 1px solid $gray--300;
  color: $blue--500;
  cursor: pointer;
  display: flex;
  font-size:1.1875em;
  font-weight: 600;
  justify-content: center;
  padding:0.75em 0;
  position: fixed;
  width:100%;
  z-index: 1000;
}
.toggle-nav:hover {
  background: $gray--200;
}
/* Footer */
footer {
  align-items: center;
  background: $gray--200;
  color: $gray--600;
  display: flex;
  min-height:50vh;
  padding: 4em 0;
}
.footer--link {
  color: $gray--500;
  display: block;
  margin:1em 0;
}
.footer--link:active,
.footer--link:focus,
.footer--link:hover {
  color:$blue--500;
}

@media screen and (min-width:960px) {
  .grid {
    flex-direction: row;
  }
  .wrapper {
    width:33%;
  }
  .wrapper--lg {
    width: 66%;
  }
  footer {
    padding:0;
  }
}
</style>

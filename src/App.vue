<template>
  <div id="app">
    <div class="toggle-nav" @click="showNav = !showNav">
      Menu
    </div>
    <nav v-if="showNav">
      <router-link to="About">About</router-link>
      <a href="#">Portfolio</a>
      <a href="#">Blog</a>
      <router-link to="Pricing">Pricing</router-link>
      <a href="#">Contact</a>
    </nav>
    <router-view/>
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
          <a class="footer--link" href="#">
            Github
          </a>
          <a class="footer--link" href="#">
            LinkedIn
          </a>
          <a class="footer--link" href="#">
            Instagram
          </a>
          <a class="footer--link" href="#">
            Twitter
          </a>
        </div>
        <div class="grid--item">
          <span class="font-size--5">
            Need a Site?
          </span>
          <a class="footer--link" href="#">
            Pricing
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      showNav: false
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #6b7c93;
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
  color:#474b5a;
  font-weight: 600;
  margin:0;
}
p {
  font-weight: 400;
  margin:0;
}
a {
  color:#0C71F3;
  text-decoration: none;
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
  font-size: 1.5625em;
  line-height: 1.1875em;
  margin-bottom: .59375em;
}
.font-weight--400 {
  font-weight: 400;
}
.font--blue--500 {
  color:#0C71F3;
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
  background: #0C71F3;
  border: 0;
  border-radius: 3px;
  box-sizing: border-box;
  color: #fff;
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
  color: #0C71F3;
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
  width: 100%;
}
nav a {
  color:#6b7c93;
  font-weight: 600;
  font-size:1.1875em;
  padding:1em;
}
nav a:hover {
  color:#318bff;
}
.toggle-nav {
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
  box-shadow: 0 4px 6px rgba(71, 75, 90, 0.05), 0 1px 3px rgba(71, 75, 90, 0.025);
  color:#474b5a;
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
  background: #f6faff;
}
/* Footer */
footer {
  align-items: center;
  background: #f6faff;
  color:#474b5a;
  display: flex;
  min-height:50vh;
  padding: 4em 0;
}
.footer--link {
  color:#6b7c93;
  display: block;
  margin:1em 0;
}

.footer--link:active,
.footer--link:focus,
.footer--link:hover {
  color:#0C71F3;
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

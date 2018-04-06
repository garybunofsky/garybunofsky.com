<template>
  <div id="app">
    <div class="toggle-nav" @click="showNav = !showNav">
      <img v-if="!showNav" src="./assets/icons/menu.svg" alt="open menu">
      <img v-else src="./assets/icons/close.svg" alt="close menu">
    </div>

    <!-- navigation -->
    <nav v-if="showNav">
      <router-link :to="{name: 'Home'}">Home</router-link>
      <router-link :to="{name: 'About'}">About</router-link>
      <router-link :to="{name: 'Blog'}">Blog</router-link>
      <router-link :to="{name: 'Pricing'}">Pricing</router-link>
      <router-link :to="{name: 'Contact'}">Contact</router-link>
    </nav>
    <!-- end navigation -->

    <router-view/>

    <!--  footer -->
    <a href="mailto:gary@garybunofsky.com" class="cta--bar">
      <div class="margin--center wrapper--lg">
        <h4 class="font-size--7 color--white margin--b-0">Have a project, question, or just want to say hello? Send me a email.</h4>
      </div>
    </a>
    <footer>
      <div class="grid wrapper--lg">
        <router-link :to="{name: 'Home'}" class="grid--item font-size--3">Home</router-link>
        <router-link :to="{name: 'About'}" class="grid--item font-size--3">About</router-link>
        <a href="#" class="grid--item font-size--3">Portfolio</a>
        <router-link :to="{name: 'Blog'}" class="grid--item font-size--3">Blog</router-link>
        <router-link :to="{name: 'Pricing'}" class="grid--item font-size--3">Pricing</router-link>
        <router-link :to="{name: 'Contact'}" class="grid--item font-size--3">Contact</router-link>
        <p class="grid--item font-size--3">Copyright 2018</p>
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
$blue--300: #eef5fd;
$blue--200: #f3f8ff;

$green--700: #303f4d;
$green--600: #586471;
$green--500: #7f8a94;
$green--400: #a7afb8;
$green--300: #ced5db;
$green--200: #f6faff;

$gray--700: #2a3338;
$gray--600: #434a53;
$gray--500: #63686e;
$gray--400: #d1d5d9;
$gray--300: #e5e7e9;
$gray--200: #fafafa;

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
p,
ul,
ol,
span {
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
  margin-bottom: 1.5625em;
  margin-left: -20px;
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
.padding-y--4 {
  padding:4em 0;
}
.padding-y--8 {
  padding:8em 0;
}

/* margin */
.margin--b-0 {
  margin-bottom: 0 !important;
}
.margin--b-1 {
  margin-bottom: 1em;
}
.margin--b-2 {
  margin-bottom: 2em;
}
.margin--b-4 {
  margin-bottom: 4rem;
}
.margin--t-7 {
  margin-top: 7em;
}

/* card */
a .card {
  display: block;
  color:#6b7c93;
}
.card {
  background: #fff;
  border:1px solid #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgb(241, 246, 255), 0 1px 3px rgb(219, 232, 255);
  padding:2em;
  transition: all .25s ease-out;
}
.card:hover {
  transform: translateY(-4px);
}

/* cta-bar */
.cta--bar {
  background: $blue--600;
  display: block;
  text-align: center;
  padding: 2em 0;
  width:100%;
}
.cta--bar:hover {
  background: $blue--700;
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
  min-height:100vh;
}

.width--100 {
  width:100%;
}

/* Grid */
.grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
.grid--wrap-mobile {
  flex-direction: row;
  flex-wrap: wrap;
}
.grid--2-col-mobile > .grid--item {
  flex: 25% !important;
}
.vertically-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Background */
.background--blue--200 {
  background: $blue--200;
}
.background--blue--300 {
  background: $blue--300;
}
.background--blue--500 {
  background: $blue--500;
}
.background--blue--600 {
  background: $blue--600;
}
.background--gray--200 {
  background: $gray--200;
}
.background--gray--300 {
  background: $gray--300;
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
  line-height: 1.25em;
  margin-bottom: .59375em;
}
.font-size--8 {
  font-size: 1.8125em;
  line-height: 1.25em;
  margin-bottom: .59375em;
}
.font-size--9 {
  font-size: 2.1875em;
  line-height: 1.25em;
  margin-bottom: .59375em;
}
.font-weight--400 {
  font-weight: 400;
}
.font--blue--500 {
  color: $blue--500;
}
.font--gray--500 {
  color: $gray--500;
}
.nav-space {
  margin-top: 43px;
}
.text--center {
  text-align: center;
}
.text--right {
  text-align: right;
}
.no-bullets {
  list-style: none;
  margin-left: -40px;
}
pre {
  background: $gray--200;
  border: 1px solid $gray--300;
  border-radius: 4px;
  padding: 0.25em 1.25em;
  font-family: monospace;
  font-size: 17px;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}
code {
  background: $gray--200;
  border: 1px solid $gray--300;
  border-radius: 4px;
  font-family: monospace;
  font-size: 17px;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}
pre code {
  border: none;
  font-size: 17px;
}
/* Button */
.button {
  background: $blue--600;
  border: 0;
  border-radius: 3px;
  box-sizing: border-box;
  color: #fff !important;
  cursor: pointer;
  display: inline-block;
  font-size: .875em;
  font-weight: 600;
  margin: 0;
  padding: 10px 24px;
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.button:hover {
  background:$blue--700;
}
.button--white {
  background: #fff;
  color: $blue--500 !important;
}
.button--white:hover {
  background: #fff;
  color: $blue--700 !important;
}
.button--sm {
  font-size: .875em;
  padding: 5px 10px;
}
.button--lg {
  font-size:1em;
  padding: 13px 26px;
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
  top: 0;
  width:100%;
  z-index: 1000;
}
.toggle-nav:hover {
  background: $gray--200;
}
/* Footer */
footer {
  align-items: center;
  justify-content: center;
  background: $gray--200;
  color: $gray--600;
  display: flex;
  flex-direction: row;
}
footer a:hover {
  color: $blue--600;
}
footer .font-size--3 {
  color: $gray--500;
  text-align: center;
  margin-bottom:0;
  padding: 1em 0;
}
.circle img {
  border-radius:50%;
  height:7em;
  width:7em;
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
}
</style>

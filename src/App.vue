<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
}
a {
  color:#367aea;
  text-decoration: none;
}
ul {
  margin:0 0 0 -40px;
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
.vertically-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Font */
.font-size--2 {
  font-size: .75em;
}
.font-size--3 {
  font-size: .875em;
}
.font-size--4 {
  font-size: 1em;
}
.font-size--5 {
  font-size: 1.1875em;
}
.font-size--6 {
  font-size: 1.25em;
}
.font-size--7 {
  font-size: 1.5em;
}
.font-size--8 {
  font-size: 1.5625em;
}
.font-weight--400 {
  font-weight: 400;
}
.font--blue--500 {
  color:#367aea;
}
.text--center {
  text-align: center;
}
.no-bullets {
  list-style: none;
}

/* Button */
.button {
  background: #367aea;
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
  background:#71a3f5;
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

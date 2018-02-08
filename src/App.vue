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
  color: #5e6d77;
}

/* Html */
html {
  font-weight: 400;
  color: #353e44;
  font: 400 1em/1.4 'Lato', sans-serif;
  text-rendering: optimizeLegibility;
}
h1,h2,h3,h4,h5,h6 {
  font-weight: 600;
  color: #353e44;
}
a {
  text-decoration: none;
}
/* Layout */
.wrapper {
  width:50%;
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
}
.grid--item {
  flex:1;
}
.grid--gutters {
  margin: -1em 0 0 -1em;
}
.grid--gutters > .grid-item {
  padding: 1em 0 0 1em;
}
.vertically-center {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

/* Font */
.font-size--4 {
  font-size: .75em;
}
.font-size--4 {
  font-size: .875em;
}
.font-size--5 {
  font-size: 1em;
}
.font-size--6 {
  font-size: 1.25em;
}
.font-size--7 {
  font-size: 1.5em;
}
.font-size--8 {
  font-size: 1.75em;
}
.font-weight--400 {
  font-weight: 400;
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
</style>

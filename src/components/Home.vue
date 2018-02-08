<template>
  <div class="vertically-center vh100 wrapper margin--center">
    <div>
      <h1 class="font-size--7">{{ msg }}</h1>
      <h2 class="font-size--6 font-weight--400">Welcome to my site. Here you can learn <router-link :to="{ name: 'About' }">about me</router-link>, the projects I build, and read some of the things I write.</h2>
      <a href="/" class="button">What I've Built</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Hi, I’m Gary Bunofsky. I am developer / designer from Cleveland. I like coding apps and websites.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

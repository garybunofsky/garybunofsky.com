<template>
  <div class="wrapper margin--center">
    <div v-html="template">{{ template }}</div>
  </div>
</template>
<script>
export default {
  name: 'BlogPost',
  data () {
    return {
      template: require(`./../blog/${this.$route.params.title}.html.js`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.font-size--5 {
  margin-bottom: 0.5em;
}
</style>

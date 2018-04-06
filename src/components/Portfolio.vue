<template>
  <div class="wrapper margin--center">
    <h1 class="font-size--7 margin--t-7">{{ msg }}</h1>
    <p class="font-size--5 margin--b-4">Applications, sites, and chatbots are a few of the things I work on in my spare time.</p>
    <!-- portfolio -->
    <div class="margin--b-4">
      <div class="grid grid--gutters">
        <div v-for="project in projects" class="grid--item">
          <a href="#" target="_blank">
            <div class="card">
              <div class="circle grid grid--center">
                <span class="font-size--6">{{project.icon}}</span>
              </div>
              <h3 class="font-size--6 text--center">
                {{project.name}}
                <p class="font-size--2">{{project.language}}</p>
              </h3>
              <p class="font-size--5">{{project.description}}</p>
              <span class="button">View project</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from './../helpers'

export default {
  name: 'Portfolio',
  data () {
    return {
      msg: 'Portfolio',
      projects: ''
    }
  },
  methods: {
    getProjects: function () {
      return this.$http.get('https://api.github.com/users/garybunofsky/repos').then(response => {
        var projectsIds = [77171025, 107911630, 37658188, 53368074]
        this.projects = response.body.filter(function (project) {
          return projectsIds.includes(project.id)
        })
        this.projects.map(function (project) {
          project.name = helpers.capitalize(project.name)
          project.icon = project.description.slice(0, 2)
          project.description = project.description.substr(2)
        })
      }, response => {})
    }
  },
  beforeMount () {
    this.getProjects()
  },
  filters: {
    truncate (string) {
      return string.substring(0, 108) + '...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid {
  flex-direction: column;
}
</style>

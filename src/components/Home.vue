<template>
  <div>
    <div class="vertically-center vh100">
      <div class="wrapper margin--center">
        <div class="text--center">
          <img class="profile margin--b-1" src="https://avatars3.githubusercontent.com/u/8431853" alt="Gary Bunofsky Designer & Developer">
          <h1 class="font-size--8 font-weight--400">{{ msg }}</h1>
          <div class="margin--center">
            <a href="#portfolio" class="button button--lg">See What I've Built</a>
          </div>
        </div>
      </div>
    </div>
    <!-- portfolio -->
    <div class="portfolio background--blue--200 vertically-center vh100" id="portfolio">
      <div class="margin--center wrapper--lg">
        <h2 class="font-size--8 text--center">Portfolio projects</h2>
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
  </div>
</template>
<script>
import helpers from './../helpers'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Hey, I’m Gary. I am a developer and designer living in Cleveland, Ohio. I make sites and applications on the internet.',
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
<style lang="sass?outputStyle=expanded" scoped>
// Colors
$blue--700: #0C71F3;
$blue--600: #318bff;
$blue--500: #5ba3ff;
$blue--400: #7fb7ff;
$blue--300: #eef5fd;
$blue--200: #f3f8ff;

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

.portfolio .grid {
  flex-direction: row;
}

.profile {
  border-radius:50%;
  height:6em;
  width:6em;
}
.circle {
  align-items: center;
  margin: 0 auto;
  background:$blue--200;
  border-radius: 50%;
  display: flex;
  height: 65px;
  justify-content: center;
  width: 65px
}
.circle span {
  margin-bottom: 0;
}
.card {
  padding:4em 1em 2em 1em;
}
.portfolio {
  padding: 4em 0;
}
.portfolio .grid {
  flex-direction: column;
}
@media screen and (min-width:768px) {
  .portfolio .grid {
    flex-direction: row;
  }
}
@media screen and (min-width:960px) {
  .portfolio {
    padding: 0;
  }
}

</style>

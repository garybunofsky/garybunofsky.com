<template>
  <div>
    <div class="vertically-center vh100">
      <div class="wrapper margin--center">
        <h1 class="font-size--8">{{ msg }}</h1>
        <h2 class="font-size--6 font-weight--400">Welcome to my site. Here you can learn <router-link :to="{ name: 'About' }">about me</router-link>, the projects I build, and read some of the things I write.</h2>
        <a href="/" class="button">See What I've Built</a>
      </div>
    </div>

    <!-- portfolio -->
    <div class="background--blue--300 padding-y--3">
      <div class="margin--center wrapper--lg">
        <div class="text--center">
          <h2 class="font-size--8 padding-y--1">Projects I've Developed</h2>
        </div>
        <div class="grid grid--gutters">
          <div v-for="item in items" class="grid--item">
            <a href="#" target="_blank">
              <div class="key-value">
                <div class="icon">
                  <img src="./../assets/icons/website-medium-blue.svg">
                </div>
                <h3 class="font-size--6 text--center">
                  {{item.name}}
                </h3>
                <p class="font-size--5">{{item.description}}</p>
                <span class="button">View project</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- blog -->
    <div class="background--blue--500">
      <div class="margin--center wrapper--lg">
        <div class="grid grid--gutters grid--center">
          <div class="grid--item">
            <h4 class="font-size--7 font-weight--400 color--white">Have a project, question, or just want to say hello? Set up a no-obligations meeting.</h4>
          </div>
          <div class="grid--item">
              <a class="button button--white button--lg" href="https://calendly.com/garybunofsky" target="_blank" rel="noopener">Schedule a call</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Hi, I’m Gary Bunofsky. I am a developer / designer from Cleveland. I like coding apps and websites.',
      items: [
        {
          description: 'Insights is an application to export Amazon results built on Vue, Node and Posgresql.',
          name: 'Insights',
          icon: '',
          link: ''
        },
        {
          description: 'Blouse is a collection of simple, subtle icons. Install with npm i blouse',
          name: 'Blouse',
          icon: '',
          link: ''
        },
        {
          description: 'Tiny Notes is a note taking app that allows you to share your writing in .json format.',
          name: 'Tiny Notes',
          icon: '',
          link: ''
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
  align-items: center;
  margin: 0 auto;
  background:rgba(54, 122, 234, 0.2);
  border-radius: 50%;
  display: flex;
  height: 65px;
  justify-content: center;
  width: 65px;
}
.icon img {
  height:28px;
  width:28px;
}
a .key-value {
  display: block;
  color:#6b7c93;
}
.key-value {
  background: #fff;
  border:1px solid #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgb(241, 246, 255), 0 1px 3px rgb(219, 232, 255);
  padding:4em 1em 2em 1em;
  transition: all .25s ease-out;
}
.key-value:hover {
  transform: translateY(-4px);
}

</style>

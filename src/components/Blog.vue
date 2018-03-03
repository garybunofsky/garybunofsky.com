<template>
  <div class="vertically-center vh100 wrapper margin--center">
    <h1 class="font-size--7 margin--t-12">{{ msg }}</h1>

    <div v-for="post in posts">
      <router-link :to="'/blog/' + post.slug ">
        <h3 class="font-size--6">{{post.title}}</h3>
      </router-link>
      <p class="font-size--3">{{post.date}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      msg: 'Blog',
      posts: [
        {
          title: 'Free Fonts that Aren’t Google Fonts',
          slug: 'free-fonts-that-arent-google-fonts',
          date: 'February 27th, 2018'
        },
        {
          title: 'Seeding a Database with Knex',
          slug: 'seeding-a-database-with-knex',
          date: 'February 23rd, 2018'
        },
        {
          title: 'A Month Without Coffee',
          slug: 'a-month-without-coffee',
          date: 'March 6th, 2017'
        },
        {
          title: 'Facebook\'s New Job',
          slug: 'facebooks-new-job',
          date: 'November 22nd, 2016'
        },
        {
          title: 'Not the Same',
          slug: 'not-the-same',
          date: 'November 17th, 2016'
        },
        {
          title: 'Basic Git Commands',
          slug: 'basic-git-commands',
          date: 'July 29th, 2015'
        },
        {
          title: 'Finding Photos',
          slug: 'finding-photos',
          date: 'November 18, 2015'
        },
        {
          title: 'Website Deployment Checklist',
          slug: 'website-deployment-checklist',
          date: 'June 18th, 2015'
        },
        {
          title: 'The Hamburger Icon',
          slug: 'the-hamburger-icon',
          date: 'October 14th, 2014'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

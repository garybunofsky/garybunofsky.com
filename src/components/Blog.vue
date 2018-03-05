<template>
  <div class="vertically-center vh100 wrapper margin--center">
    <h1 class="font-size--7 margin--t-12">{{ msg }}</h1>

    <div v-for="post in posts">
      <div class="margin--b-4 card">
        <router-link :to="'/blog/' + post.slug ">
          <span class="font-size--3">{{post.date}}</span>
          <h3 class="font-size--6">{{post.title}}</h3>
          <h4 class="font-size--5 font-weight--400">{{post.intro | truncate}}</h4>
        </router-link>
      </div>
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
          date: 'February 27th, 2018',
          intro: 'Google Fonts truly changed the web font game. It’s fantastic to have access to a variety of superb typography. And everyone else seems to think so too. Visit any website and you’re likely to find a Google Font.',
          slug: 'free-fonts-that-arent-google-fonts',
          title: 'Free Fonts that Aren’t Google Fonts'
        },
        {
          date: 'February 23rd, 2018',
          intro: 'I was looking for a way to put data in my database. I wanted something that was organized and simple like Rake, but also agreed with Node. To my suprise, npm didn’t have many of packages to choose from. I considered Serialize, but wound up using Knex which made migrations a piece of cake.',
          slug: 'seeding-a-database-with-knex',
          title: 'Seeding a Database with Knex'
        },
        {
          date: 'March 6th, 2017',
          intro: 'My first cup of coffee was at my grandma\'s. I wasn\'t allowed to pour my own. But was heavy handed with the sugar. My coffee tasted of cream and was nearly the same color. Ever since that morning I\'ve been drinking coffee almost daily. Shout out to my Grandma.',
          slug: 'a-month-without-coffee',
          title: 'A Month Without Coffee'
        },
        {
          date: 'November 22nd, 2016',
          intro: 'People are mad. And rightfully so. Many believe the fake news on Facebook altered the results of the 2016 election. And it probably did, but Facebook shouldn\'t be held responsible.',
          slug: 'facebooks-new-job',
          title: 'Facebook\'s New Job'
        },
        {
          date: 'November 17th, 2016',
          intro: 'Library and frameworks both allow you to do more and write less. They share other similarities but shouldn\'t be used synonymously – although they often are. This creates confusion, so I\'ll try my best to clear things up.',
          slug: 'not-the-same',
          title: 'Not the Same'
        },
        {
          date: 'July 29th, 2015',
          intro: 'Features are added, files are refactored and bugs are removed. For this reason seasoned developers use version control. There are plenty of benefits to using version control. Below you can find the main reasons I, as well as many others, love it.',
          slug: 'basic-git-commands',
          title: 'Basic Git Commands'
        },
        {
          date: 'November 18, 2015',
          intro: 'Finding stock photos can be a hassle. Luckily there are websites that host free high-quality images. I curated a list of some of my favorites here. It will be updated frequently so only good links are present.',
          slug: 'finding-photos',
          title: 'Finding Photos'
        },
        {
          date: 'June 18th, 2015',
          intro: 'There are many things to focus on when the time comes to launch a website. Concentration is imperative during this time. Forgetting to complete a small procedure could be detrimental. I have composed this Website Deployment Checklist. When used it can mitigate the risk of unforeseen things happening. It has proven itself valuable time and time again.',
          slug: 'website-deployment-checklist',
          title: 'Website Deployment Checklist'
        },
        {
          date: 'October 14th, 2014',
          intro: 'Traditionally, global navigation is applied to every page of a website. Recently, sites have begun to house drop-down menu often to as a hamburger icon. This minimized menu is often displayed as a button with three lines stacked horizontally, referred to by some as a hamburger icon. The unique benefits to each navigational approach will be further explained.',
          slug: 'the-hamburger-icon',
          title: 'The Hamburger Icon'
        }
      ]
    }
  },
  filters: {
    truncate (string) {
      return string.substring(0, 156) + '...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

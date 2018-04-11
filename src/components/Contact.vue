<template>
  <div class="margin--b-4">
    <div class="background--gray--200 nav-space padding-y--4 margin--b-4">
      <div class="wrapper margin--center">
        <h1 class="text--center font-size--9">{{msg}}</h1>
        <h2 class="text--center font-size--6 font-weight--400">Need some code? I'm availabe by phone Monday-Friday from 9am - 5pm and by email every day from 9am to 9pm EST.</h2>
      </div>
    </div>
    <div class="wrapper margin--center">
      <div class="margin--b-1">
        <h3>Email Me</h3>
        <a class="font-size--6 envelope" href="mailto:gary@garybunofsky.com?subject=Yo%20what%20up">gary@garybunofsky.com</a>
      </div>
      <div class="margin--b-1">
        <h3>Call Me</h3>
        <a class="font-size--6 mobile" href="tel:3305061300" rel="noopener" target="_blank">(330) 506-1300</a>
      </div>
      <div class="margin--b-1">
        <h3>Meet Me</h3>
        <a class="font-size--6 meeting" href="https://calendly.com/garybunofsky" target="_blank" rel="noopener">Schedule a meeting</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'How Can I Help?'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mobile:before,
.envelope:before,
.meeting:before {
  background-size:18px 18px;
  content:'';
  display: inline-block;
  height:18px;
  margin-right: 0.5em;
  width:18px;
}
.mobile:before {
  background-image:url('./../assets/icons/mobile-blue.svg');
}
.envelope:before {
  background-image:url('./../assets/icons/envelope-blue.svg');
}
.meeting:before {
  background-image:url('./../assets/icons/chat-blue.svg');
}
</style>

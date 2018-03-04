<template>
  <div class="vertically-center vh100 wrapper--lg margin--center">
    <div class="margin--b-4">
      <h1 class="font-size--8">{{ msg }}</h1>
    </div>

    <div class="grid">
      <div class="grid--item margin--b-4">
        <h4 class="font-size--6 mobile">Give Me a Call</h4>
        <p class="font-size--5">
          <a href="tel:3305061300">(330) 506-1300</a>
        </p>
      </div>
      <div class="grid--item margin--b-4">
        <h4 class="font-size--6 envelope">Send Me an Email</h4>
        <p class="font-size--5">
          <a href="mailto:gary@garybunofsky.com?subject=Yo%20what%20up">gary@garybunofsky.com</a>
        </p>
      </div>
      <div class="grid--item margin--b-4">
        <h4 class="font-size--6 meeting">Set up a Meeting</h4>
        <p class="font-size--5">
          <a href="https://calendly.com/garybunofsky" target="_blank" rel="noopener">Schedule something</a>
        </p>
      </div>
      <div class="grid--item margin--b-4">
        <h4 class="font-size--6 meeting">Shoot me text</h4>
        <p class="font-size--5">
          <a href="sms://3305061300" rel="noopener" target="_blank">
            Write a message
          </a>
        </p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Contact'
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

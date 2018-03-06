<template>
  <div class="vh100 wrapper margin--center">
    <h1 class="font-size--7 margin--t-7">{{ msg }}</h1>
    <div class="margin--b-1">
      <h4 class="font-size--6">📱 Send me a text</h4>
      <p class="font-size--5">
        <a href="sms://3305061300" rel="noopener" target="_blank">
          Write a message
        </a>
      </p>
    </div>
    <div class="margin--b-1">
      <h4 class="font-size--6">📨 Send Me an Email</h4>
      <p class="font-size--5">
        <a href="mailto:gary@garybunofsky.com?subject=Yo%20what%20up">gary@garybunofsky.com</a>
      </p>
    </div>
    <div class="margin--b-1">
      <h4 class="font-size--6">📞 Give Me a Call</h4>
      <p class="font-size--5">
        <a href="tel:3305061300">(330) 506-1300</a>
      </p>
    </div>
    <div class="margin--b-1">
      <h4 class="font-size--6">💬 Set up a Meeting</h4>
      <p class="font-size--5">
        <a href="https://calendly.com/garybunofsky" target="_blank" rel="noopener">Schedule something</a>
      </p>
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

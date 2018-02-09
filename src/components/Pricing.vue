<template>
  <div class="vertically-center vh100">
    <div class="wrapper margin--center text--center">
      <h1 class="font-size--7">{{ msg }}</h1>
      <h2 class="font-size--5 font-weight--400">While all projects are unique, but most websites fit into one of the following packages.</h2>
    </div>

    <div class="wrapper--lg margin--center">
      <div class="grid grid--gutters">
        <div class="grid--item">
          <div class="key-value">
            <h3 class="font-size--6 font--blue--500">
              Small Website
            </h3>
            <div class="row">
              <span>1-3 Pages</span>
            </div>
            <div class="row">
              <span>1 Form</span>
            </div>
            <a class="button" href="#" target="_blank">Get Started</a>
          </div>
        </div>

        <div class="grid--item">
          <div class="key-value">
            <h3 class="font-size--6 font--blue--500">
              Regular Website
            </h3>
            <div class="row">
              <span>4-9 pages</span>
            </div>
            <div class="row">
              <span>2 forms</span>
            </div>
            <div class="row">
              <span>Analytics tracking</span>
            </div>
            <a class="button" href="#" target="_blank">Get Started</a>
          </div>
        </div>

        <div class="grid--item">

          <div class="key-value">
            <h3 class="font-size--6 font--blue--500">
              Large Website
            </h3>
            <div class="row">
              <span>10+ pages</span>
            </div>
            <div class="row">
              <span>3+ forms</span>
            </div>
            <div class="row">
              <span>Analytics tracking</span>
            </div>
            <div class="row">
              <span>SSL</span>
            </div>
            <div class="row">
              <span>Automatic backups</span>
            </div>
            <div class="row">
              <span>Increased performance</span>
            </div>
            <div class="row">
              <span>API integration</span>
            </div>
            <a class="button" href="#" target="_blank">Get Started</a>
          </div>

        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing',
  data () {
    return {
      msg: 'Pricing'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.key-value {
  border:1px solid #f2f2f2;
  padding:1em;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgb(241, 246, 255), 0 1px 3px rgb(219, 232, 255);
}
.key-value .row {
  display: flex;
  padding:.875em 0;
  justify-content: space-between;
  border-bottom:1px solid #f2f2f2;
}
.key-value .row:last-of-type {
  margin-bottom: 2em;
}
</style>

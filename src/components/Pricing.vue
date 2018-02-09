<template>
  <div>
  <div class="vertically-center vh100">
    <div class="wrapper margin--center text--center">
      <h1 class="font-size--8">{{ msg }}</h1>
      <h2 class="font-size--5 font-weight--400">Choose the right website package for you.</h2>
    </div>
  </div>

    <div class="wrapper--lg margin--center">
      <div class="grid grid--gutters">

        <div class="grid--item">
          <a href="#" target="_blank">
            <div class="key-value">
              <div class="icon">
                <img src="./../assets/icons/website-medium-blue.svg">
              </div>
              <h3 class="font-size--6 text--center">
                Small Website
              </h3>
              <div class="row">
                <span>Responsive website</span>
              </div>
              <div class="row">
                <span>1-4 Pages</span>
              </div>
              <div class="row">
                <span>1 Form</span>
              </div>
              <span class="button">Get Started</span>
            </div>
          </a>
        </div>

        <div class="grid--item">
          <a href="#" target="_blank">
            <div class="key-value">
              <div class="icon">
                <img src="./../assets/icons/website-medium-blue.svg">
              </div>
              <h3 class="font-size--6 text--center">
                Standard Website
              </h3>
              <div class="row">
                <span>Responsive website</span>
              </div>
              <div class="row">
                <span>5-9 Pages</span>
              </div>
              <div class="row">
                <span>2 Contact forms</span>
              </div>
              <div class="row">
                <span>Analytics tracking</span>
              </div>
              <span class="button">Get Started</span>
            </div>
          </a>
        </div>

        <div class="grid--item">
          <a href="#" target="_blank">
            <div class="key-value">
              <div class="icon">
                <img src="./../assets/icons/website-medium-blue.svg">
              </div>
              <h3 class="font-size--6  text--center">
                Large Website
              </h3>
              <div class="row">
                <span>Responsive website</span>
              </div>
              <div class="row">
                <span>10+ Pages</span>
              </div>
              <div class="row">
                <span>3+ Contact forms</span>
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
                <span>Security monitoring</span>
              </div>
              <div class="row">
                <span>API integration</span>
              </div>
              <span class="button">Get Started</span>
            </div>
          </a>
        </div>

      </div>
    </div>

    <div class="wrapper--lg margin--center">
      <h4 class="font-size--7 text--center">So what's this really mean?</h4>

      <div class="grid grid--gutters">
        <div class="grid--item">
          <h4 class="font-size--6 website">Responsive Website</h4>
          <p>Your website will look good any any device, including mobile and tablets.</p>
        </div>

        <div class="grid--item">
          <h4 class="font-size--6 speech">Contact Form</h4>
          <p>Vistors can send you a message, or request a quote from your site.</p>
        </div>

        <div class="grid--item">
          <h4 class="font-size--6 tracking">Analytics Tracking</h4>
          <p>See who is visiting your site, at what time, and from what location.</p>
        </div>

        <div class="grid--item">
          <h4 class="font-size--6 backups">Automatic Backups</h4>
          <p>If your site happens to crash, we can restore it quickly and easily</p>
        </div>
      </div>

      <div class="grid grid--gutters">
        <div class="grid--item">
          <h4 class="font-size--6 security">Security Monitoring</h4>
          <p>We watch for suspiscious activity and proactively stop hackers from accessing your site.</p>
        </div>

        <div class="grid--item">
          <h4 class="font-size--6 api">API Integration</h4>
          <p>We can connect your site to another part of your business, like Facebook, Yelp or Instagram.</p>
        </div>

        <div class="grid--item">
          <h4 class="font-size--6">Increased Performance</h4>
          <p>To keep your site super fast, we run regular performance audits to reduce the load time.</p>
        </div>

        <div class="grid--item">
          <h4 class="font-size--6 ssl">SSL</h4>
          <p>An SSL certificate encrypts your website's traffic providing a more secure experience and an SEO boost.</p>
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
a {
  color: #6b7c93;
}
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
.key-value {
  border:1px solid #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgb(241, 246, 255), 0 1px 3px rgb(219, 232, 255);
  padding:4em 1em 2em 1em;
  transition: all .25s ease-out;
}
.key-value:hover {
  transform: translateY(-4px);
}
.row {
  align-items: center;
  border-bottom:1px solid #f2f2f2;
  display: flex;
  padding:.875em 0;
}
.row:before {
  background-image:url('./../assets/icons/check-green.svg');
  background-size:12px 12px;
  content:'';
  display: inline-block;
  height:12px;
  margin-right: 0.5em;
  width:12px;
}
.row:last-of-type {
  margin-bottom: 2em;
}

.api:before,
.backups:before,
.tracking:before,
.security:before,
.speech:before,
.ssl:before,
.website:before {
  background-size:18px 18px;
  content:'';
  display: inline-block;
  height:18px;
  margin-right: 0.5em;
  width:18px;
}
.api:before {
  background-image:url('./../assets/icons/activity-blue.svg');
}
.backups:before {
  background-image:url('./../assets/icons/download-blue.svg');
}
.tracking:before {
  background-image:url('./../assets/icons/line-chart-blue.svg');
}
.security:before {
  background-image:url('./../assets/icons/show-blue.svg');
}
.speech:before {
  background-image:url('./../assets/icons/speech-blue.svg');
}
.ssl:before {
  background-image:url('./../assets/icons/lock-blue.svg');
}
.website:before {
  background-image:url('./../assets/icons/website-medium-blue.svg');
}
</style>

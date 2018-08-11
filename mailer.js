var dotenv = require('dotenv')
var mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN })
module.exports = {
  sendMail: function (data) {
    var data = {
      from: 'Website Visitor <noreply@garybunofsky.com>',
      to: 'hello@garybunofsky.com',
      subject: 'Request for Quote',
      text: `Name: ${data.name} \n Email: ${data.email} \n Description: ${data.description}`
    }
    mailgun.messages()
    .send(data, function (error, body) {
      console.log(body)
    })
  }
}

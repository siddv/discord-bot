const axios = require('axios');

module.exports = {
  randchar(msg) {
    axios.get('https://siddv.net/.netlify/functions/randchar-slack')
      .then(response => {
        msg.reply(response.data.text)
      })
  }
}
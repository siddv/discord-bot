const axios = require('axios');

module.exports = {
  randchar(msg) {
    axios.get('https://siddv.net/.netlify/functions/randchar-slack',
    {
      params: {
        text: '75'
      }
    })
      .then(response => {
        msg.reply(response.data.text)
      })
  }
}
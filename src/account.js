const { Spot } = require('@binance/connector')

const apiKey = process.env.APIKEY || ''
const apiSecret = process.env.APISECRET || ''

const client = new Spot(apiKey, apiSecret)

// fetch account info, including asset balance
client.account()
  .then(response => console.log(response.data))
  .catch(error => console.log(error))

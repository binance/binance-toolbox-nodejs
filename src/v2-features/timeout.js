// Timeout:
const { Spot } = require('@binance/connector')

const apiKey = process.env.APIKEY || ''
const apiSecret = process.env.APISECRET || ''

const client = new Spot(apiKey, apiSecret, { timeout: 1 })

client.account()
  .then(response => client.logger.log(response.data))
  .catch(error => client.logger.error(error.message))
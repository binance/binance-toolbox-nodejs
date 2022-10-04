// Proxy: 

const { Spot } = require('@binance/connector')
const tunnel = require('tunnel')

const apiKey = process.env.APIKEY || ''
const apiSecret = process.env.APISECRET || ''

const agent = tunnel.httpsOverHttp({
proxy: {
    host: "IP",
    port: 80
}
})

const client = new Spot(apiKey, apiSecret,
{
    baseURL: "https://api.binance.com",
    httpsAgent: agent
}
)

client.account()
  .then(response => client.logger.log(response.data))
  .catch(error => client.logger.error(error.message))
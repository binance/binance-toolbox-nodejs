// Ping Server:
const { Spot } = require('@binance/connector')
const { Console } = require('console')

const apiKey = process.env.APIKEY || ''
const apiSecret = process.env.APISECRET || ''

const logger = new Console({ stdout: process.stdout, stderr: process.stderr });
const client = new Spot(apiKey, apiSecret, { logger })

const callbacks = {
  open: () => logger.info('open'),
  close: () => logger.info('closed'),
  message: data => logger.info(data)
}
const wsRef = client.tickerWS('bnbusdt', callbacks)
setInterval(() => {
  client.pingServer(wsRef)
}, 1000 * 10)
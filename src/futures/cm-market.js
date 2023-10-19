
const { CMFutures } = require('@binance/futures-connector')

const cmFuturesClient = new CMFutures('', '', {
  baseURL: 'https://dapi.binance.com'
})

cmFuturesClient
  .getTime()
  .then(({ data }) => console.log(data))
  .catch(console.error)

cmFuturesClient
  .getPremiumIndex('BTCUSD_PERP')
  .then(({ data }) => console.log(data))
  .catch(console.error)

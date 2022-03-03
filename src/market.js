const { Spot } = require('@binance/connector')

const client = new Spot()

// get exchange info, this method returns everything you need regarding a trading symbol, e.g.
// - symbol status
// - assets involves in the symbol
// - filters that define the requirement of qty and price when placing orders
// - etc
client.exchangeInfo()
  .then(response => console.log(response.data))
  .catch(error => console.log(error))

// get 24hr ticket data, symbol is required
client.ticker24hr('BNBUSDT')
  .then(response => console.log(response.data))
  .catch(error => console.log(error))

// get orderbook, symbol is required, limit is optional
client.depth('BNBUSDT', { limit: 5 })
  .then(response => console.log(response.data))
  .catch(error => console.log(error))

// for more methods, you can check this folder
// https://github.com/binance/binance-connector-node/tree/master/examples/spot/market

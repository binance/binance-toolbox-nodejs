
/*
* This is example script that showing how to use some of the basic methods from @binance/connector
* the repo of the library: https://github.com/binance/binance-connector-node, which has a folder with example files for each method
* 
* It's possible to see error from any of these methods, reasons could be:
* - Not enough balance in the account
* - Wrong parameters
* - Order status is not NEW, then cancellation can returned error
*
*/


const { Spot } = require('@binance/connector')

const apiKey = process.env.APIKEY || ''
const apiSecret = process.env.APISECRET || ''

const client = new Spot(apiKey, apiSecret)

async function app() {

  // start to place a new order
  console.log("start placing an order")

  const orderId =  await client.newOrder('BNBUSDT', 'BUY', 'LIMIT', {
    price: 400,
    quantity: 0.1,
    timeInForce: 'GTC'
  }).then(response => response.data.orderId)
  .catch(err => console.error(err.response.data))
  
  console.log(`The new order id: ${orderId}`)
  console.log("finished placing order")
  
  // get order details
  console.log("start to query order details")
  const order_details = await client.getOrder('BNBUSDT', {
    orderId
  }).then(response => console.log(response.data))
  .catch(err => console.error(err.response.data))

  // cancel the order
  console.log("start to cancel the order if it's still in open status")
  await client.cancelOrder('BNBUSDT', { orderId })
  .then(response => console.log(response.data))
}

app()

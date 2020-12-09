const express = require('express')
var cors = require('cors')
const app = express()
const port = 4000

const stripe = require('stripe')('sk_test_51H2htrE2SPswZ34tF0lG4vCfe4tHhWWmzKsUhW6wZPGWc2SamhT58zcUGxEiSDJRLeutPI1Cy4r25xJySCuzcCpC00gP2h5suS');
app.use(cors())
app.get('/secret', async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1200,
        currency: 'usd',
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
      });
      console.log (paymentIntent);
    res.json({client_secret: paymentIntent.client_secret});
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
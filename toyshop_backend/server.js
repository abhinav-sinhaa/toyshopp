const express = require('express')
const Razorpay = require('razorpay');

const app = express();

var instance = new Razorpay({
    key_id: 'rzp_test_5KtrjNHJB4R5hb',
    key_secret: 'xCwLvBMAomHfNCzBHP0Y6vfg',
});

var options = {
    amount: 203900,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_12"
  };
  instance.orders.create(options, function(err, order) {
    console.log(order);
});

app.listen(5500, () => {
  console.log('working fine')
})


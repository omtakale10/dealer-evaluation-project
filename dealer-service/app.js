const express = require('express');
const app = express();

const dealers = {
  "Laptop": [
    {name: "Dealer A", price: 50000},
    {name: "Dealer B", price: 52000}
  ]
};

app.get('/dealers/:product', (req, res) => {
  res.json(dealers[req.params.product] || []);
});

app.listen(3000, () => console.log("Running"));
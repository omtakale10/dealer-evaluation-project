const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const dealers = {
  "Laptop": [
    {name: "Dealer A", price: 50000},
    {name: "Dealer B", price: 52000}
  ]
};

app.get('/dealers/:product', (req, res) => {
  res.json(dealers[req.params.product] || []);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running"));
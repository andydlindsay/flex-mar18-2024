const express = require('express');
const morgan = require('morgan');

const products = require('./data/products');

const app = express();
const port = 5000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

// GET /products
app.get('/products', (req, res) => {
  // respond with JSON info of the products
  res.json(Object.values(products));
});

// POST /products
app.post('/products', (req, res) => {
  const {name, price, description} = req.body;

  const id = Math.random().toString(36).substring(2, 5); // generate a three character string

  const newProduct = {
    id,
    name,
    price: Number(price),
    description,
  };

  products[id] = newProduct;
  console.log(products);

  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

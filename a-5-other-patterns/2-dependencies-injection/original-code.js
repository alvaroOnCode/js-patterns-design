/**
 * Dependencies Injection: Original code
 */

const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

  if (data) {
    res.status(200).json({
      resulut: true,
      data
    })
  }

  res.status(400).json({
    result: false,
    message: 'Some failed.'
  })
});

app.listen(port, () => console.log(`Server on port ${port}.`));

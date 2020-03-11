/**
 * Dependencies Injection
 */

const express = require('express');
const axios = require('axios');

const { get } = require('./handlers');

const app = express();
const port = 3000;

/**
 * ☹️ This code will work but instead of doing this...
 */
app.get('/', (req, res) => get(axios)(req, res));

/**
 * 😃 ... It is better to do this (Point free)
 */
app.get('/', get(axios));

app.listen(port, () => console.log(`Server on port ${port}.`));

/**
 * Facade: Original code
 */

const https = require('https');

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/users',
  method: 'GET'
};

const req = https.request(options, res => {
  let body = '';

  res.setEncoding('utf8');
  
  res.on('data', d => {
      body += d;
  });

  res.on('end', d => {
    const _body = JSON.parse(body);
    console.log(_body);
  });
});

req.on('error', error => console.error(error));

req.end();

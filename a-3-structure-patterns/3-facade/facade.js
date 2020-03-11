/**
 * Facade
 */

const https = require('https');

const get = url => new Promise((resolve, reject) => {
  const comp = url.split('/');
  const host = comp.shift();

  const options = {
    hostname: host,
    path: `/${comp.join('/')}`,
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
      resolve(_body);
    });
  });
  
  req.on('error', error => reject(error));
  
  req.end();
});

(async () => {
  const result = await get('jsonplaceholder.typicode.com/users');
  console.log('result:', result);
})();

/**
 * - Warning! -
 * This pattern is used to wrap a complex action making easier to call it.
 */

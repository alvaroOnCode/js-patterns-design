/**
 * Dependencies Injection: Handlers
 */

module.exports.get = axios => async (req, res) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

  if (data) {
    res.status(200).json({
      resulut: true,
      data
    });
  }

  res.status(400).json({
    result: false,
    message: 'Some failed.'
  });
};

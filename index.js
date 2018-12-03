const { server } = require('./server.js');

server.get('/', (req, res) => {
  console.log(routes);
  res.status(200).json({ api: 'running' });
});

const port = process.env.PORT || 3300;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});

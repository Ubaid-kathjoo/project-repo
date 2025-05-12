const express = require('express');
const redis = require('redis');

const app = express();
const port = 8081;

// Redis client setup
const client = redis.createClient({
  url: 'redis://redis:6379'
});
client.connect().catch(console.error);

app.get('/', async (req, res) => {
  let visits = await client.get('visits');
  visits = visits ? parseInt(visits) + 1 : 1;
  await client.set('visits', visits);
  res.send(`Number of visits is ${visits}`);
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

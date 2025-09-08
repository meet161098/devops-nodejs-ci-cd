const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hello everyone  from Meet Dhruv Node.js App!</h2>');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/version', (req, res) => {
  res.json({
    version: process.env.APP_VERSION || "1.0.0",
    env: process.env.NODE_ENV || "dev"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

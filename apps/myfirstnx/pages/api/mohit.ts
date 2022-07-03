import express from 'express';
const app = express()

app.get('/api/mohit', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.send({message: "Hello world"})
});

module.exports = app;
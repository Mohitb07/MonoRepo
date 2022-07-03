/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

 import express from 'express';
 import * as cors from 'cors';
 const app = express();
 
 app.use(cors())
 
 app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.send({message: 'Hello world'})
  });
 
 const port = 3333;
 const server = app.listen(port, () => {
   console.log(`Listening at https://mono-repo-ashy.vercel.app/`);
 });
 server.on('error', console.error);
 
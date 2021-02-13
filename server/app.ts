import express from 'express';
import path from 'path';
const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../public')));
}

export default app;
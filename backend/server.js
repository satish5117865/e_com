import express from 'express';
import data from './data.js';

import path from 'path';

const app = express();
// test
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*name', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

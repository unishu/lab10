const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

let PORT = 8003

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
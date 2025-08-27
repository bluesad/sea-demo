const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.listen(port, () => {
  console.log(`Cookie thief app listening at http://localhost:${port}`);
});
app.get('/', (req, res) => {
  res.json({ cookies: req.cookies });
});
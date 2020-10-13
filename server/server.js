const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});
app.get('/route', (req, res) => {
  res.send('DIZZZ API is running...');
});

app.listen(5000, console.log('Server running on port 5000'));

import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});
app.get('/route', (req, res) => {
  res.send('DIZZZ API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const authMiddleware = require('./middlewares/auth.middleware');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/movieApp');

app.use('/auth', authRoutes);

// Example of a protected route
app.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Access granted to protected route' });
});

app.listen(3000, () => console.log('Server running on port 3000'));

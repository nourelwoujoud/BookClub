const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./Routes/Userroutes');
const bookRoutes = require('./Routes/Bookroutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/books', bookRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://mongodb+srv://marnissighofrane22:<db_password>@bookclub.tbsfp.mongodb.net/?retryWrites=true&w=majority&appName=BookClub', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Start server
app.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});

const connectDB = require('./config/DB');

// Connect to MongoDB
connectDB();
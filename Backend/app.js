const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
app.use(express.json());

// cors origin 
app.use(cors({
  origin: process.env.FRONTEND_URI || 'http://localhost:3000',
  optionsSuccessStatus:200,
}));




// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Import routers from modules
const { userRouter, projectRouter, taskRouter } = require('./server/modules');

// Routes
app.use('/api/users', userRouter);
app.use('/api/projects', projectRouter);
app.use('/api/tasks', taskRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
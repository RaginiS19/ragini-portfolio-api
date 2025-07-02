require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Models
const Project = require('./models/project');
const Skill = require('./models/skill');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

const apiRoutes = require('./routes/api'); 
app.use('/api', apiRoutes);               

// Homepage route
app.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    const skills = await Skill.find();
    res.render('index', { projects, skills });
  } catch (error) {
    console.error('Error loading homepage data:', error);
    res.status(500).send('Error loading portfolio data');
  }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

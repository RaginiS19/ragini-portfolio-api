const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const Skill = require('../models/skill');

// Admin dashboard
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    const skills = await Skill.find().sort({ createdAt: -1 });
    res.render('admin', { projects, skills });
  } catch (err) {
    res.status(500).send('Error loading admin dashboard: ' + err.message);
  }
});

// Project Routes 

// Add a project
router.post('/projects/add', async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).send('Title and description are required');
    }

    await Project.create({ title, description });
    res.redirect('/admin');
  } catch (err) {
    res.status(500).send('Error creating project: ' + err.message);
  }
});

// Delete a project
router.post('/projects/delete/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.redirect('/admin');
  } catch (err) {
    res.status(500).send('Error deleting project: ' + err.message);
  }
});

// Update a project
router.post('/projects/update/:id', async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).send('Both title and description are required');
    }

    await Project.findByIdAndUpdate(req.params.id, { title, description });
    res.redirect('/admin');
  } catch (err) {
    res.status(500).send('Error updating project: ' + err.message);
  }
});

// ----------------------------
// Skill Routes 
// ----------------------------

// Add a skill
router.post('/skills/add', async (req, res) => {
  try {
    const { name, level, category } = req.body;
    if (!name || !level || !category) {
      return res.status(400).send('Skill name, level, and category are required');
    }

    await Skill.create({ name, level, category });
    res.redirect('/admin');
  } catch (err) {
    res.status(500).send('Error creating skill: ' + err.message);
  }
});

// Delete a skill
router.post('/skills/delete/:id', async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.redirect('/admin');
  } catch (err) {
    res.status(500).send('Error deleting skill: ' + err.message);
  }
});

// Update a skill
router.post('/skills/update/:id', async (req, res) => {
  try {
    const { name, level, category } = req.body;
    if (!name || !level || !category) {
      return res.status(400).send('Both name, level, and category are required');
    }

    await Skill.findByIdAndUpdate(req.params.id, { name, level, category });
    res.redirect('/admin');
  } catch (err) {
    res.status(500).send('Error updating skill: ' + err.message);
  }
});

module.exports = router;

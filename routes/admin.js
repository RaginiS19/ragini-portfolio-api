const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const Skill = require('../models/skill');

// Admin dashboard
router.get('/', async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  const skills = await Skill.find().sort({ createdAt: -1 });
  res.render('admin', { projects, skills });
});

// Project routes
router.post('/projects/add', async (req, res) => {
  try {
    await Project.create(req.body);
    res.redirect('/admin');
  } catch (err) {
    res.send('Error creating project: ' + err.message);
  }
});

router.post('/projects/delete/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.redirect('/admin');
  } catch (err) {
    res.send('Error deleting project: ' + err.message);
  }
});

// Skill routes
router.post('/skills/add', async (req, res) => {
  try {
    await Skill.create(req.body);
    res.redirect('/admin');
  } catch (err) {
    res.send('Error creating skill: ' + err.message);
  }
});

router.post('/skills/delete/:id', async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.redirect('/admin');
  } catch (err) {
    res.send('Error deleting skill: ' + err.message);
  }
});

module.exports = router;

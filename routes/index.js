const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Skill = require('../models/Skill');

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ _id: -1 });
    const skills = await Skill.find().sort({ name: 1 });
    res.render('index', { projects, skills });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;

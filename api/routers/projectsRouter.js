const express = require('express');
const Projects = require('../../data/helpers/projectModel');
const validateProjectId = require('../middleware/validateProjectId');

const router = express.Router();

// Get all projects
router.get('/', (req, res) =>{
    Projects.get().then(projects =>{
        res.status(200).json(projects);
    }).catch(error =>{
        res.status(500).json({error: "Something went wrong while the server was retrieving projects."});
    });
});

// Get project by id
router.get('/:id', validateProjectId, (req, res) =>{
    const {project} = req;
    res.status(200).json(project);
});

module.exports = router;
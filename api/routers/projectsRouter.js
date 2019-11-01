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
    const {id} = req.params;

    Projects.get(id).then(project =>{
        res.status(200).json(project);
    }).catch(error =>{
        res.status(500).json({error: "An error occurred fetching project."});
    });
});

// Add new project to the database
router.post('/', (req, res) =>{
    const {name, description} = req.body;

    if(name && description){
        Projects.insert(req.body).then(project =>{
            res.status(201).json(project);
        }).catch(error =>{
            res.status(500).json({error: "An error occurred while attempting to add project to the database."});
        });
    }else{
        res.status(400).json({error: "Name and Description are required to create a project"});
    }
});

module.exports = router;
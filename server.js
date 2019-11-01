const express = require('express');
const helmet = require('helmet');
const projectsRouter = require('./api/routers/projectsRouter');
const actionsRouter = require('./api/routers/actionsRouter');

const title = process.env.title || 'Sprint Challenge';

const server = express();
server.use(helmet('dev'));
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.get('/', (req,res) =>{
    res.status(200).send(`
    <div style=" width:100%; font-family:verdana; margin:0 auto;">

        <h1 align="center" style="color:#888; text-transform: uppercase;">${title}</h1>
        <p align="center" style="font-weight:bold; color:green; text-transform: uppercase;">Server is up and running!</p>
        
        <br>

        <h2 style="color:#555; text-transform: uppercase;">Use /api/projects</h2>

        <div style=" width:95%; font-family:verdana; margin:0 auto;">
            <p style="font-weight:bold; color:purple;">GET /api/projects/ - Get all projects</p>
            <p style="font-weight:bold; color:purple;">GET /api/projects/:id - Get project and it's actions</p>
            <p style="font-weight:bold; color:purple;">GET /api/projects/:id/actions - Get actions for project</p>
            <p style="font-weight:bold; color:green;">POST /api/projects/ - Add a new project to the db requires(name & description)</p>
            <p style="font-weight:bold; color:orange;">PUT /api/projects/:id - Update a project by id requires(name & description)</p>
            <p style="font-weight:bold; color:red;">DELETE /api/projects/:id - Delete a project by id</p>
        </div>

        <br>

        <h2 style="color:#555; text-transform: uppercase;">Use /api/actions</h2>
        <div style=" width:95%; font-family:verdana; margin:0 auto;">
            <p style="font-weight:bold; color:purple;">GET /api/actions/ - get all actions </p>
            <p style="font-weight:bold; color:purple;">GET /api/actions/:id - get action by id </p>
            <p style="font-weight:bold; color:green;">POST /api/actions/:id - Add action to project requires(description & notes)</p>
            <p style="font-weight:bold; color:orange;">PUT /api/actions/:id - Update action by id requires(description & notes)</p>
            <p style="font-weight:bold; color:red;">DELETE /api/actions/:id - Delete action by id</p>
        </div>
    </div>
    <h5 align="center">Coded by FearTheDev</h5>
    `);
});

module.exports = server;
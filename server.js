const express = require('express');
const projectsRouter = require('./api/routers/projectsRouter');

const server = express();
server.use(express.json());

server.use('/api/projects', projectsRouter);

server.get('/', (req,res) =>{
    res.status(200).send(`
    <div style="font-family:verdana;">
        <h1>WEB API SPRINT SERVER</h1>
        <p style="color:green;">Server is up and running!</p>
        <br>
        <p>Use /api/projects</p>
        <ul>
            <li>GET /api/projects/ - Get all projects</li>
            <li>GET /api/projects/:id - Get project and it's actions</li>
            <li>POST /api/projects/ - Add a new project to the db requires(name & description)</li>
        </ul>
    </div>`);
});

module.exports = server;
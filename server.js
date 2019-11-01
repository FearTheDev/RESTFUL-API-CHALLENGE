const express = require('express');
const projectsRouter = require('./routers/projectsRouter');

const server = express();
server.use(express.json());

server.use('/api/projects', projectsRouter);

server.get('/', (req,res) =>{
    res.status(200).json({message: "Server is up and running!"});
});

module.exports = server;
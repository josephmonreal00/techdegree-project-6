const express = require('express');
const router = express.Router();
const data = require('../data.json');
const arr = [data.projects[0], data.projects[1], data.projects[2], data.projects[3], data.projects[4], data.projects[5]];

router.get('/', (req, res, next) => {
    res.render("index", {theProjects: arr});
});

router.get('/layout', (req, res, next) => {
    res.render("index", {theProjects: arr});
});

router.get('/about', (req, res, next) => {
    res.render("about");
});

router.get('/index', (req, res, next) => {
    //res.locals.data = data.projects[0];
    res.render("index", {theProjects: arr});
});

router.get('/projects/:id', (req, res, next) => {
    const projectId = req.params.id;
    for(let i = 0; i < data.projects.length - 1; i++) {
        if(parseInt(data.projects[req.params.id].id) === parseInt(req.params.id)) {
            res.render("project", { proj: data.projects[req.params.id] });
        }
    }
});

module.exports = router; 



const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.get('/', (req, res, next) => {
    res.render("index", { theProjects: data.projects });
});

router.get('/layout', (req, res, next) => {
    res.render("index", { theProjects: data.projects });
});

router.get('/about', (req, res, next) => {
    res.render("about");
});

router.get('/index', (req, res, next) => {
    res.render("index", { theProjects: data.projects});
});

router.get('/projects/:id', (req, res, next) => {
    const projectId = req.params.id;
    
    if (data.projects[projectId]) {
        res.render('project', {proj: data.projects[projectId]});
    } else {
        const err = new Error("Not Found");
        err.status = 404;
        next(err);
    }
});

module.exports = router; 
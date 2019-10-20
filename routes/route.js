const express = require('express');
const router = express.Router();
const data = require('../data.json');

const arr = [data.projects[0], data.projects[1], data.projects[2], data.projects[3], data.projects[4], data.projects[5]];

router.get('/', (req, res, next) => {
    res.render("index", {theProjects: arr});
});

router.get('/about', (req, res, next) => {
    res.render("about");
});

router.get('/index', (req, res, next) => {
    //res.locals.data = data.projects[0];
    res.render("index", {theProjects: arr});
});

router.get('/project/:id', (req, res, next) => {
    //console.log(req);
    if(req.params.id > 5 || req.params.id < 0) {
        //const err = new Error("Project number entered as param does not exist please enter #'s 0 - 5.");
        return next();
    }
    res.render("project", { proj: data.projects[req.params.id], projTitle: data.projects[req.params.id].project_name, projDesc: data.projects[req.params.id].description, projTech: data.projects[req.params.id].technologies, projDemo: data.projects[req.params.id].live_link, projGit: data.projects[req.params.id].github_link,  projImgsOne: data.projects[req.params.id].image_urls[0], projImgsTwo: data.projects[req.params.id].image_urls[1], projImgsThree: data.projects[req.params.id].image_urls[2]});
});

router.get('/projects/:id', (req, res, next) => {
    console.log(req.params.id);
    if(req.params.id > 5 || req.params.id < 0) {
        return next();
    }
    res.render("project", { proj: data.projects[req.params.id], projTitle: data.projects[req.params.id].project_name, projDesc: data.projects[req.params.id].description, projTech: data.projects[req.params.id].technologies, projDemo: data.projects[req.params.id].live_link, projGit: data.projects[req.params.id].github_link,  projImgsOne: data.projects[req.params.id].image_urls[0], projImgsTwo: data.projects[req.params.id].image_urls[1], projImgsThree: data.projects[req.params.id].image_urls[2]});
});

module.exports = router; 

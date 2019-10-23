const express = require("express");
const app = express();
const dataJson = require('./data.json');

const theRoutes = require("./routes/route");
app.use("/public", express.static(__dirname + '/public'));
app.use("/images", express.static(__dirname + '/images'));

app.set('view engine', 'pug');
app.use('/', theRoutes);
app.use('/about', theRoutes);
app.use('/index', theRoutes);
app.use('/projects/', theRoutes);
app.use('/layout', theRoutes);


//create error object and hand off too error handler
/*
app.use('/project/:id', (req, res, next) => {
    const err = new Error("Project number entered as param does not exist please enter #'s 0 - 5.");
    err.status = 404;
    next(err);
});

app.use('/projects/:id', (req, res, next) => {
    const err = new Error("Project number entered as param does not exist please enter #'s 0 - 5.");
    err.status = 404;
    next(err);
});
*/

app.get('/projects/:id([6-9]{1})', (req, res, next) => {
    let err = new Error("Please enter page number between 0 - 5");
    err.status = 404;
    next(err);
});

app.use((req, res, next) => {
    if(err.message === "Please enter page number between 0 - 5") {
        next(err);
    }
});

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

/*
app.get('/projects/:id([6-9]){1}', (req, res, next)=> {
    let err = new Error("Please enter a page number between 0 - 5");
    //err.status = 404;
    next(err);
});
*/
/*
app.get('/forbidden/wrong', (req, res, next)=> {
    let err = new Error("Forbidden / Wrong");
    //err.status = 404;
    next(err);
});
*/

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});


app.listen(3000, () => {
    console.log("The application is running on port 3000 at localhost:3000.");
});


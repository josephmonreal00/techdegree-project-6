const express = require("express");
const app = express();
//const dataJson = require('./data.json');

const theRoutes = require("./routes/route");
app.use("/images", express.static(__dirname + '/images'));

app.set('view engine', 'pug');

app.use('/', theRoutes);
app.use('/about', theRoutes);
app.use('/index', theRoutes);
app.use('/project', theRoutes);
app.use('/layout', theRoutes);


//app.use('/project/:id', function (req, res, next) {
//    console.log('Inside app.js');
//    console.log('Request Type:', req.params);
//    next();
//});

//create error object and hand off too error handler

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

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});



// error handler
app.use((err, req, res, next) => {
    //let length = req.headers.referer.length;
    //console.log(req.headers.referer);
    //console.log(req.params);
    //console.log(length);
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});


app.listen(3000, () => {
    console.log("The application is running on port 3000 at localhost:3000.");
});


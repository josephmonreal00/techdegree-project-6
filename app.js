const express = require("express");
const app = express();
const dataJson = require('./data.json');

const theRoutes = require("./routes/route");
app.use("/public", express.static(__dirname + '/public'));
app.use("/images", express.static(__dirname + '/images'));

app.set('view engine', 'pug');
app.use('/', theRoutes);

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status || 500);
    res.render('error');
});


app.listen(3000, () => {
    console.log("The application is running on port 3000 at localhost:3000.");
});
var express = require('express'),
    app = express(),
    router = require('./routes'),
    bodyParser = require('body-parser'),
    path = require('path'),
    config = require('./_config');

app.use("/", router);

app.use('/', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(config.port, function() {
    console.log('App is running on port' + config.port);
});
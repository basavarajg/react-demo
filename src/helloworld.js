var express = require('express')
var app = express()

app.use(express.static('src/css'));
app.use(express.static('src/js'));

//Store all HTML files in view folder.
//app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/index.html');
    //res.render('index', {title: 'Home', message: 'Hellow World from Jade'});
});

app.listen(3000, function () {
  console.log('web-resume app listening on port 3000!')
});

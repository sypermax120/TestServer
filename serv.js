const express = require('express');
const app = express();

app.listen(3000)

app.use(express.static('public'));

app.get('/ajax', function(req, res){
    console.log("ok");
    res.end("ok")
})

app.get('/asd1', function(req, res){
    console.log("ok");
    var dat = new Date();
    res.end(dat.toString());
})
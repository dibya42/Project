const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();
const mongoose = require('mongoose')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://dibya:Zoomhtml1@cluster0.r6e0m.mongodb.net/bittu7876-DB?retryWrites=true&w=majority",{
useNewUrlParser : true
})
.then(  () => console.log("MongoDB is connected"))
.catch ( err => console.log(err) )


app.use('/', route);

app.listen(process.env.PORT || 4000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});

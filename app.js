var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect("mongodb+srv://admin:admin@cluster0-nbxxl.mongodb.net/mediumPostCounter?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology:true});

const Count = require('./models/College');

app.get('/redirect', async(req, res)=>{
    Count.findOne({name:'first'}, async(err, found)=>{
        found.count++;
        await found.save();
    });
    res.redirect('https://medium.com/@rajatis1999/buckle-up-winter-is-coming-461cdd9ad232');
});

app.get('/initialize', async(req, res)=>{
    const newCount = new Count({
        name:'first',
        count:0
    });
    await newCount.save();
    return res.send('Initialized.');
});

app.get('/getData', async(req, res) => {
    Count.findOne({name:'first'}, async(err, found)=>{
        return res.send(found);
    });
});

app.listen(process.env.PORT || 3000, function(){
    console.log(`Server is running on ${process.env.PORT}`);
});
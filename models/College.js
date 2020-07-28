const mongoose =  require('mongoose');

const CountSchema = new mongoose.Schema({
    name:{
        type:String
    },
    count:{
        type:Number,
    }
});

module.exports = mongoose.model("count",CountSchema);
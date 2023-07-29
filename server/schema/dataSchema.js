const mongoose = require('mongoose');
const { Schema } = mongoose;
const paintingSchema = new Schema({
    id: String,
    title: String,
    description: String,
    startingPrice: String,
    currentPrice: Number,
    image: String,
    status: String,


})
const FountainPenSchema = new Schema({
    id: String,
    brand: String,
    model: String,
    description: String,
    price: Number,
    nibSize: String,
    startingPrice: Number,
    currentPrice: Number,
    image: String,
    status: String
})
const Painting=mongoose.model('Painting',paintingSchema); 
const FountainPen=mongoose.model('FountainPen',FountainPenSchema); 
module.exports={Painting,FountainPen}; 

const mongoose = require('mongoose');
const { MONGODB_URI } = require('./utils/config')
const app = require('./app')

console.log(`connecting to MongoDB.....`)

mongoose.connect(MONGODB_URI)

try {

    console.log("Connected to MongoDB")

} 
catch {

    console.error("Error detected",error);
}
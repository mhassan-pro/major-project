const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require("../models/listing.js");

async function main(){
    mongoose.connect("mongodb://localhost:27017/wanderlust")
}
main().then((res)=>{
    console.log("Connected to database");
})
.catch((err)=>{
    console.log("Failed to connect to database")
});

const initDB = async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();
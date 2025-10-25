const express = require("express");
const app = express();
const mongoose = require("mongoose");

async function main(){
    mongoose.connect("mongodb://localhost:27017/wanderlust")
}
main().then((res)=>{
    console.log("Connected to database");
})
.catch((err)=>{
    console.log("Failed to connect to database")
});

app.get("/",(req,res) => {
    res.send("Hello, World!");
})

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});
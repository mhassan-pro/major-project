const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

async function main(){
    mongoose.connect("mongodb://localhost:27017/wanderlust")
}
main().then((res)=>{
    console.log("Connected to database");
})
.catch((err)=>{
    console.log("Failed to connect to database")
});


app.get("/listings",async (req,res) => {
    let allListings = await Listing.find({});
        res.render("listings/index.ejs",{allListings});
})

app.get("/",(req,res)=>{
    console.log("Home route accessed");
    res.send("Welcome to Wanderlust Home Page");
})
app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});




//app.get("/testlisting",(req,res) => {
//     let sampleListing = new Listing({
//         title:"Beautiful Beach House",
//         description:"A lovely beach house with stunning ocean views.",
//         price:250,
//         location:"Malibu, California",
//         country:"USA"
//     })
//     sampleListing.save()
//     .then((listing)=>{
//         console.log("Listing saved:",listing);
//     })
//     .catch((err)=>{
//         console.log("Error saving listing:",err);
//     });
//     res.send("Test listing created and saved to database.");
// })

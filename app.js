const express = require("express");
const https = require("https");

const app = express();


app.get("/", function (req, res){
  res.send("server is up and running. ")
});
const url = "https://api.openweathermap.org/data/2.5/weather?q=Tucson,usa&appid=86cf260120401131d552cf53ba65537d&units=imperial"
https.get(url, function(response){
  console.log(response);
});


app.listen(3000, function(){
  console.log("server is running on port 3000.");
})

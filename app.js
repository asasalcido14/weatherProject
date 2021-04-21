const express = require("express");
const https = require("https");

const app = express();


app.get("/", function (req, res){
res.sendFile(__dirname + "/index.html");

// get api address from Postman - needs https at the beginning

});

app.post("/", function(req,res){
  console.log("Post request recieved");
})
// needed for catching the get request

// const query = "London";
// const apiKey = "86cf260120401131d552cf53ba65537d";
// const unit = "imperial"
//   const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units=" + unit;
// https.get(url, function(response){
//   console.log(response.statusCode);
//
//   response.on("data", function(data){
//     const weatherData = JSON.parse(data)
//     const temp = weatherData.main.temp
//     const weatherDescription = weatherData.weather[0].description
//     const icon = weatherData.weather[0].icon
//     const imageURL = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
//     res.write (" <p> The weather is currently " + weatherDescription + "</p>");
//     res.write ("<h1>The temperature in Tucson is " + temp + " Far</h1>");
//     res.write("<img src=" + imageURL +  "> ");
//
//     res.send();
//     // can only have 1 res.send
//   });
// });
app.listen(3000, function(){
  // call back function
  console.log("server is running on port 3000.");
});

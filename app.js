

const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public")); 

//adding route. This is the root. 
app.get("/", function(req, res){ 
 
  res.render("index.html");
  
});
app.get("/achievements", function(req, res){
 // res.send("itworks-ac");
   res.render("achievements.ejs");
});

app.get("/education", function(req, res){
   // res.send("itworks-ed");
  res.render("education.ejs");
});
app.get("/impact",function(req,res){
 // res.send("itworks-im");
    res.render("impact.ejs");
})

 app.listen("8081","0.0.0.0",function(){
 console.log("Express Server is running...");
});
//app.listen(process.env.PORT,process.env.IP,function(){
// console.log("Running Express Server...")
//});
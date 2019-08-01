/*/----------------------------------------
Setup
----------------------------------------/*/
const express = require("express");

const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();

const controller = require ("./controllers/bookControllers");

const PORT = process.env.PORT || 3001;
// node express No 'Access-Control-Allow-Origin' - this search made contact 
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

/*/----------------------------------------
Middleware Defined
----------------------------------------/*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
/*/----------------------------------------
Add routes, both API and view
Connect to the Mongo DB
Start the API server
----------------------------------------/*/
// app.use(routes);
app.post("/searchBook", function(req, res){
  console.log("this is the controller", controller)
  console.log("Print out title", req.body)
})

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

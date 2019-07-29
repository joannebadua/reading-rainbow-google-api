/*/----------------------------------------
Setup
----------------------------------------/*/
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

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
app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

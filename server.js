const express = require("express");
const app = express();
const connectDb = require("./db/connection");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
const postsRoute = require("./routes/post");
const port = process.env.PORT || 3030;
connectDb();
app.use("/posts", postsRoute);
app.get("/", function (req, res) {
  res.status(200).json({
    message: "working",
  });
});

app.listen(port, function () {
  console.log("running...");
});
 // "start-build": "nodemon server.js",
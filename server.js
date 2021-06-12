const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Message = require("./Models/database");
const bodyparser = require("body-parser");
require("dotenv").config();
var ObjectId = require("mongodb").ObjectID;
const password = process.env.Database_Password;

//Middleware
app.use(express.json());

const Port = process.env.Port || 9000;
//Connecting to mongoose
const connection_url = `mongodb+srv://admin:${password}@cluster0.eewt9.mongodb.net/recruitment?retryWrites=true&w=majority`;
mongoose.connect(
  process.env.MONGODB_URI || connection_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to database");
  }
);

// api routing
// app.get('/',(req,res)=>res.status(200).send("Hello World!"))

app.get("/getusers", (req, res) => {
  Message.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/userinnfo/:id", (req, res) => {
  Message.findById(ObjectId(req.params.id))
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
});

app.post("/", (req, res) => {
  const message = req.body;
  Message.create(message, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).send(`New Message create: \n ${data}`);
    }
  });
});

//Listen to port 9000
if (process.env.NODE_ENV === "production") {
  app.use(express.static("mernfront/build"));
}
app.listen(Port, () => console.log(`Listening to port 9000`));

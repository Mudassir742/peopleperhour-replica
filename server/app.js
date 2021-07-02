const express = require("express");
const dataPath = require("./Routes/dataPath");
const userPath = require("./Routes/userPath");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

//in .env i store database url...
dotenv.config();

//connecting to my database....
mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(`DataBase Access Granted`)
);

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

// const temp = new mongoose.model("Data");
// temp.find((err, docs) => {
//   console.log(docs);
// });

// const item = new temp([{
//
//   }]);

// item.save();

app.use("/gigs", dataPath);
app.use("/user", userPath);

app.listen(5000, () => console.log("Server is active and running"));

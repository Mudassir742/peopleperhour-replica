const express = require("express");
const router = express.Router();
const data = require("../models/dataSchema");


//getting display data from databse and sending to UI....
router.get("/api/data", async (req, res) => {
  const docs = await data.find({});
  res.status(200).send(docs);
});

module.exports = router;

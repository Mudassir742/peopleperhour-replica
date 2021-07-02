const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  cate: { type: String },
  img: { type: String },
  title: { type: String },
  sort: { type: String },
  sugdata: {
    s1: { type: String },
    s2: { type: String },
    s3: { type: String },
    s4: { type: String },
    s5: { type: String }
  },
  sellerdata: {
    img: { type: String },
    name: { type: String },
    icon: { type: String },
    rating: { type: String },
    number: { type: String },
    price: { type: String }
  },
  time: { type: String }
});
 

module.exports =  mongoose.model("datas", dataSchema);

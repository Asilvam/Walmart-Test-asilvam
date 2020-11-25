const { Schema, model } = require("mongoose");

const productSchema = new Schema({
      id: { type: Number },
      brand: { type: String  },
      description: { type: String },
      image:{ type: String },
      price:{ type: Number },
    });


module.exports = model("product", productSchema);
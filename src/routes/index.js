const { Router } = require("express");
const router = Router();

// Models
const Product = require("../models/product");

router.get("/", async (req, res) => {
    const products = await Product.find();
    res.render("index", { products });
  });

  //Buscar publico
router.post("/search", async (req, res) => {
    var q = eval("/^.*" + req.body.buscar + ".*$/i");
    console.log(req.body," ",q);
    const products = await Product.find({
        brand: q,
      ///^.*hidr.*$/i
    });
    res.render("index", { products });
  });

  module.exports = router;
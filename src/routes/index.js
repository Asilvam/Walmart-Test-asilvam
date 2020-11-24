const { Router } = require("express");
const funciones = require("../controllers/funciones");
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
    var espal=funciones.espalindrome(req.body.buscar);
    console.log(espal);
    //console.log(req.body," ",q);
    const products =  await Product.find({ brand: q, });
    //console.log(products_1.length);
    if (!espal && products.length >0 && req.body.buscar != "" ){
      const products_2= funciones.procesar(products);
    }
    res.render("index", { products});
  });

  module.exports = router;
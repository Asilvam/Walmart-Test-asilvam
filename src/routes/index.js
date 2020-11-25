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
  var q="";
    if (isNaN (req.body.buscar)){
      q = eval("/^.*" + req.body.buscar + ".*$/i");
    } else {
      q = req.body.buscar;
    }
    
    //var q = eval(req.body.buscar);
    var espal=funciones.espalindrome(req.body.buscar);
    console.log(espal);
    console.log(q);
    if (isNaN (req.body.buscar)){
      const products = await Product.find( { $or: [ { brand: q }, { description: q } ] });
      console.log(products.length);
      if (espal && products.length >0 && req.body.buscar != "" ){
        const products_2= funciones.procesar(products);
      }
      res.render("index", { products});
    } else if (q.length>0){
      const products = await Product.find({ id: q,});
      console.log(products.length);
      if (espal && products.length >0 && req.body.buscar != "" ){
        const products_2= funciones.procesar(products);
      }
      res.render("index", { products});
    } else {
      const products = await Product.find();
      console.log(products.length);
      res.render("index", { products});
    }    
  });

  module.exports = router;
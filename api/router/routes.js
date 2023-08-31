const bodyParser = require("body-parser");
const product = require("../controller/products");
var router = require("express").Router();


// Get all products
router.get("/products", product.showProducts);
// Get single product
router.get("/products/:id", product.fetchProductId);
// create product
router.post("/products", bodyParser.json(), product.createProduct);
// Update product
router.put("/products/:id", bodyParser.json(), product.updateProduct);
// delete product 
router.delete("/products/:id", product.deleteProduct);

module.exports = router
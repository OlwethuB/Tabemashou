const bodyParser = require("body-parser");
const product = require("../controller/products");
const users = require("../controller/users");
var router = require("express").Router();

// Product's router
// Get all products
router.get("/products", product.showProducts);

// Get single product
router.get("/products/:id", product.fetchProductId);

// create product
router.post("/products", bodyParser.json(), product.createProduct);

// Update product
router.put("/products/:id", bodyParser.json(), product.updateProduct);

// Update product
router.patch("/products/:id", bodyParser.json(), product.updateProduct);

// delete product
router.delete("/products/:id", product.deleteProduct);

// user's router
router.get("/users", users.showUsers);
router.get("/user/:id", (req, res) => {
  users.fetchUser(req, res);
});

router.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});

router.post("/register", bodyParser.json(), (req, res) => {
  users.register(req, res);
});

router.put("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});

router.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});

router.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});

module.exports = router;

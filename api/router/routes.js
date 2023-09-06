const bodyParser = require("body-parser");
const product = require("../controller/products");
const booking = require("../controller/bookings");
const People = require("../model/user");
const people = new People
const user = require("../controller/users");
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


                  // Booking router
// Get all reservations
router.get("/bookings", booking.showBookings);

// Get single reservation 
router.get("/booking/:id", booking.fetchBookingId);

// create reservation
router.post("/booking", bodyParser.json(), booking.makeBooking);

// Update reservation
router.put("/booking/:id", bodyParser.json(), booking.updateBooking);

// Update reservation
router.patch("/booking/:id", bodyParser.json(), booking.updateBooking);

// delete reservation
router.delete("/booking/:id", booking.deleteBooking);


                  // user's router
// Get all users
router.get("/users", user.showUsers);

// Get single user
router.get("/user/:id", (req, res) => {
  user.fetchUser(req, res);
});

// register
router.post("/register", bodyParser.json(), (req, res) => {
  people.register(req, res);
});

// login
router.post("/login", bodyParser.json(), (req, res) => {
  people.login(req, res);
});

// logout
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully"})
})

// Update product
router.put("/user/:id", bodyParser.json(), user.updateUser);

// Update product
router.patch("/user/:id", bodyParser.json(), (req, res) => {
  user.updateUser(req, res);
});

// delete product
router.delete("/user/:id", user.deleteUser);

module.exports = router;





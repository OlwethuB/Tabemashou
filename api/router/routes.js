const bodyParser = require("body-parser");
const product = require("../controller/products");
const booking = require("../controller/bookings");
const users = require("../model/user");
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
router.post("/register", async (req, res) => {
  try {
    const { emailAdd, userPass } = req.body;
    const hashedPassword = await bcrypt.hash(userPass, 10);

    const user = new users({
      id,
      firstName,
      lastName,
      emailAdd,
      userPass: hashedPassword,
    });
    await user.save();

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "error occurred" });
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const { emailAdd, userPass } = req.body;
  
    const user = await user.fetchUser({ emailAdd });
    if (!user) {
        return res.status(401).json({ error: "Invalid credentials"});
    }
  
    const isPasswordValid = await bcrypt.compare(userPass, user.userPass);
  
    if (isPasswordValid) {
        return res.status(401).json({ error: "invalid credentials" });
    }
  
    const token = jwt.sign({ userID: user._id}, process.env.SESSION_KEY, {
        expiresIn: "1h",
    });
  
    res.cookie("token", token, {httpOnly: true});
    res.status(200).json({ message: "Logged in successfully"});
  } catch (error) {
    res.status(500).json({error: "error occurred"});
  } 
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





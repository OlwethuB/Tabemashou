const cors = require("cors");
const cookieParser = require("cookie-parser");

const router = require("./router/routes");
// const errorHandling = require("./middleware/errorhandling")

const express = require("express");
const app = express();

const port = +process.env.PORT || 5000;
const path = require("path");

app.use (
    // errorHandling,
    express.urlencoded({extended: false }),
    express.static("./Static"),
    express.json(),
    cors(),
    cookieParser(),
    router
); 

app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "./Static/html/index.html"));
});

// Use router
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
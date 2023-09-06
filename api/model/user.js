const db = require("../config/database");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/verifyUser");

class Users {
  fetchUsers = (result) => {
    db.query("SELECT * FROM Users", (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }); 
  };

  fetchUser(req, res) {
    const query = ` SELECT * FROM Users WHERE userID = ${req};`
    db.query(query, (err, result) => {
      if (err) throw err;
      res.json({
        status: 200,
        result,
      });
    });
  }

  // Login and register functions...

  // if this works...
  login(req, res) {
    const { firstName, userPass } = req.body;
    const query = `SELECT * FROM Users WHERE firstName = "${firstName}"`; 
    db.query(query, async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "Provided wrong email, try again",
        });
      } else {
        await compare(userPass, result[0].userPass, (cErr, cResult) => {
          if (cErr) throw cErr;
          // create a token
          const token = createToken({
            firstName,
            userPass,
          });
          if (cResult) {
            res.json({
              msg: "Logged in",
              token,
              result: result[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Invalid password or are not registered",
            });
          }
        });
      }
    });
  }
  //  Register
  async register(req, res) {
    const data = req.body;
    // encrypt password
    data.userPass = await hash(data.userPass, 15);
    //  Payload
    const user = {
      firstName: data.firstName,
      userPass: data.userPass,
    };
    // query
    const query = ` INSERT INTO Users SET ?`;
    db.query(query, [data], (err) => {
      if (err) throw err;
      // create token
      let token = createToken(user);
      res.cookie("legitUser", token, {
        maxAge: 3000,
        httpOnly: true,
      });
      res.json({
        status: res.statusCode,
        token,
        msg: "User registered successfully",
      });
    });
  }

  async updateUser(body, id) {
    const data = body;
    if (data.userPass) {
      data.userPass = hashSync(data.userPass, 15);
    }
    const query = ` UPDATE Users SET ? WHERE userID = ? ;`
    db.query(query, [data, id], (err) => {
      if (err) throw err;
      // res.json({
      //   status: res.statusCode,
      //   msg: "User record updated.",
      // });
    });
  }

  async deleteUser(req, res) {
    const query = ` DELETE FROM Users WHERE userID = ${req};`
    db.query(query, (err) => {
      if (err) throw err;
    });
  }
}

module.exports = Users;

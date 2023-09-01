  // import from user Model
const User = require("../model/user");
const user = new User();

const { hash, compare, hashSync } = require("bcrypt");
const bcrypt = require("bcrypt");
const express = require("express");

//             Link all functions from users Model
// Get all user
exports.showUsers = (req, res) => {
    user.fetchUsers((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                status: res.statusCode,
                results,
            });
        }
    });
};

//  Get single user
exports.fetchUser = (req, res) => {
    user.fetchUser(req.params.id, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json({
          status: res.statusCode,
          result,
        });
      }
    }); 
  };

  // update user
exports.updateUser = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    user.updateUser(data, id, (err) => {
        if (err) {
            res.send(err);
        } else{
            res.json({
                status: res.statusCode,
                msg: "This User record has been updated",
            });
        }
    });
};

delete user 
exports.deleteUser = (req, res) => {
    const id = req.params.id;
    user.deleteUser(id, (err, results) => {
        if (err) {
            res.send(err);
        } else{
            res.json({
                status: res.statusCode,
                msg: "User record deleted" 
            });
        }
    });
};

//  Register 
exports.register = (req, res) => {
    user.register( async (err, results) => {
        try{
            const { emailAdd, userPass } = req.body;
            const hashedPassword = await bcrypt.hash(userPass, 10);

            const user = new User({
                id,
                firstName,
                lastName,
                emailAdd,
                userPass: hashedPassword,
            });         
            await user.save();

            res.status(201).json({
                message: "User registered successfully"
            });
        } catch (error) {
            res.status(500).json({ error: "error occurred"});
        }
    });
}

exports.login = (req, res) => {
    user.login( async (req, res) => {
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
}


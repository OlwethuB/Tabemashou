  // import from user Model
const User = require("../model/user");
const user = new User();

//             Link all functions from users Model
// Get all user
exports.showUsers = async (req, res) => {
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
exports.fetchUser = async (req, res) => {
    user.fetchUser(req.params.id, res, (err, result) => {
      if (err) {
        res.send(err);
      }
      console.log(result)
    }); 
  };

  // update user
exports.updateUser =  (req, res) => {
    const body = req.body;
    const id = req.params.id;
    user.updateUser(body, id, (err) => {
        console.log('running here')
        if (err) {
            res.send(err);
        }
    });
    res.json({
        status: res.statusCode,
        msg: "This User record has been updated",
    });
};

  // delete user 
exports.deleteUser = (req, res) => {
    const id = req.params.id;
    user.deleteUser(id, (err, results) => {
        if (err) {
            res.send(err);
        }
    });
    res.json({
        status: res.statusCode,
        msg: "User record deleted" 
    });
};


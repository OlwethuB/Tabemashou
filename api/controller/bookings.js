//  import functions from Product model
const Booking = require("../model/booking");
const booking = new Booking();

        // All functions linking model and router
// Get all Bookings
exports.showBookings = (req, res) => {
    booking.getBookings((err, results) => {
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

exports.lastBooking = (req, res) => {
    booking.getBooking((err, result) => {
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


//  Get single product
exports.fetchBookingId = (req, res) => {
    booking.getBookingId(req.params.id, (err, result) => {
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


// create product
exports.makeBooking = (req, res) => {
    const data = req.body;
    booking.insertBooking(data, (err ) => {
        if (err) {
            res.send(err);
        } else{
            res.json({
                status: res.statusCode,
                msg: "Reservation has been made",
            });
        }
    });
};


// update product 
exports.updateBooking = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    booking.updateBookingById(data, id, (err) => {
        if (err) {
            res.send(err);
        } else{
            res.json({
                status: res.statusCode,
                msg: "This Reservation has been updated",
            });
        }
    });
};

// delete product 
exports.deleteBooking = (req, res) => {
    const id = req.params.id;
    booking.deleteBookingById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else{
            res.json({
                status: res.statusCode,
                msg: "Reservation cancelled" 
            });
        }
    });
};


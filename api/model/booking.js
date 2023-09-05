//  importing connection
const db = require("../config/database");
 
class Bookings {
    // Get all products
    getBookings = (result) => {
        db.query( "SELECT * FROM Bookings", (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else{
                result(null, results);
            }
        });
    };

    // Get single product 
    getBookingId = (id, result) => {
        db.query( "SELECT * FROM Bookings WHERE bookingID = ?", [id], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else{
                result(null, results[0]);
            }
        });
   };



    // Insert product
    insertBooking = (data, result) => {
        db.query( "INSERT INTO Bookings SET ?", [data], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    };
    
    // Update product
    updateBookingById = (data, id, result) => {
        db.query( "UPDATE Bookings SET name = ?, email = ?, phone = ?,  pepSize = ?,  date = ?, time = ? WHERE bookingID = ?", 
        [data.name, data.email, data.phone, data.pepSize, data.date, data.time, id], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else{
                result(null, results);
            }
        } );
    };

    // Delete product
    deleteBookingById = (id, result) => {
        db.query("DELETE FROM Bookings WHERE BookingID = ?", [id], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else{
                result(null, results);
            }
        }); 
    };
}

module.exports = Bookings; 
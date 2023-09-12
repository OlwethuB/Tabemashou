//  importing connection
const db = require("../config/database");
 
class Products {
    // Get all products
    getProducts = (result) => {
        db.query( "SELECT * FROM Products", (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else{
                result(null, results);
            }
        });
    };

    // Get all Breakfast products
    getBreakfast = (result) => {
        db.query( "SELECT * FROM Products WHERE category = 'Breakfast'", (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else{
                result(null, results);
            }
        });
    };

    // Get all appetiser products
    getTiser = (result) => {
        db.query( "SELECT * FROM Products WHERE category = 'Appetizer'", (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else{
                result(null, results);
            }
        });
    };

    // Get all main meal products
    getMain = (result) => {
        db.query( "SELECT * FROM Products WHERE category = 'Main meal'", (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else{
                result(null, results);
            }
        });
    };

    // Get all dessert products
    getDessert = (result) => {
        db.query( "SELECT * FROM Products WHERE category = 'Dessert'", (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else{
                result(null, results);
            }
        });
    };

    // Get single product 
    getProductId = (id, result) => {
        db.query( "SELECT * FROM Products WHERE prodID = ?", [id], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else{
                result(null, results[0]);
            }
        });
   };



    // Insert product
    insertProduct = (data, result) => {
        db.query( "INSERT INTO Products SET ?", [data], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    };
    
    // Update product
    updateProductById = (data, id, result) => {
        db.query( "UPDATE Products SET prodName = ?, amount = ?, category = ?, prodUrl = ? WHERE prodID = ?", 
        [data.prodName, data.amount, data.category, data.proUrl, id], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else{
                result(null, results);
            }
        } );
    };

    // Delete product
    deleteProductById = (id, result) => {
        db.query("DELETE FROM Products WHERE prodID = ?", [id], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else{
                result(null, results);
            }
        }); 
    };
}

module.exports = Products; 
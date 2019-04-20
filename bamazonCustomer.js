var mysql = require('mysql');

// Initialize connection
var connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-03.cleardb.net' ,
// Port
  port: 3306 ,
// Username
  user: "b5b149443c50e7" ,
// Password
  password: "64c3186b" ,
//Database
database: 'heroku_575e5ff7e5b39e9'
});

// Create connection 
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  showProducts();
});

// Products table 
function showProducts() {
// Table data
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Draw the table} in the terminal using the response
    console.table(res);
  });
}
